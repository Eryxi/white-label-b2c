#!/usr/bin/env node
// Self-contained recompiler: SKILL.md's embedded Variables section -> every
// other GENERATED section in the file (status line, contents summary, gap
// analysis, lint findings, CSS custom properties, and the trimmed Variables
// block itself). Single-file design — no separate variables.json.
//
// Deliberately duplicates (does not import) the validation logic from the
// pipeline repo's scripts/dtcg-lib.mjs, because this has to run standalone
// in this repo, which doesn't check that one out. See
// docs/repo-per-file-design.md in the pipeline repo for why.
//
// Exit codes, checked by .github/workflows/recompile.yml:
//   0 — clean: generated, no blocking TODOs, no dangling var() references.
//   1 — hard failure: input is invalid, refuses to write anything.
//   2 — soft failure: wrote the regenerated file (data is current), but a
//       SEEDED section still has a blocking TODO, or authored prose
//       references a CSS variable that doesn't exist. File is correct;
//       something still needs a human. The workflow commits/pushes either
//       way, then fails the job on exit 2 so it shows up as attention-needed.

import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";

const ALLOWED_TYPES = new Set(["color", "number", "string", "boolean"]);

const MARKERS = {
  generated: ["<!-- GENERATED:START -- do not edit, overwritten by .github/scripts/recompile.mjs -->", "<!-- GENERATED:END -->"],
  contents: ["<!-- CONTENTS:START -- do not edit, overwritten by .github/scripts/recompile.mjs -->", "<!-- CONTENTS:END -->"],
  missing: ["<!-- MISSING:START -- do not edit, overwritten by .github/scripts/recompile.mjs -->", "<!-- MISSING:END -->"],
  lint: ["<!-- LINT:START -- do not edit, overwritten by .github/scripts/recompile.mjs -->", "<!-- LINT:END -->"],
  css: ["<!-- CSS:START -- do not edit, overwritten by .github/scripts/recompile.mjs -->", "<!-- CSS:END -->"],
  variables: ["<!-- VARIABLES:START -- do not edit, overwritten by .github/scripts/recompile.mjs -->", "<!-- VARIABLES:END -->"],
};

// ---------------------------------------------------------------------------
// DTCG tree helpers (same shape as scripts/dtcg-lib.mjs — trimmed copy, see
// the file header for why it's a copy and not an import).
// ---------------------------------------------------------------------------

function isPlainObject(v) {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function isAlias(v) {
  return typeof v === "string" && /^\{.+\}$/.test(v);
}

function flatten(tree) {
  const out = [];
  (function walk(segments, node) {
    if (!isPlainObject(node)) return;
    const keys = Object.keys(node);
    const isToken = keys.some((k) => k.indexOf("$") === 0);
    if (isToken) {
      out.push({ path: segments.join("."), segments, token: node });
      return;
    }
    for (const key of keys) walk(segments.concat([key]), node[key]);
  })([], tree);
  return out;
}

function validate(tree) {
  const errors = [];
  const entries = flatten(tree);
  for (const e of entries) {
    const t = e.token;
    if (!("$type" in t)) errors.push(e.path + ": missing $type");
    if (!("$value" in t)) errors.push(e.path + ": missing $value");
    if ("$type" in t && !ALLOWED_TYPES.has(t.$type)) errors.push(e.path + ": bad $type " + t.$type);
  }
  return { errors, entries };
}

function canonicalize(value) {
  if (Array.isArray(value)) return "[" + value.map(canonicalize).join(",") + "]";
  if (value && typeof value === "object") {
    return "{" + Object.keys(value).sort().map((k) => JSON.stringify(k) + ":" + canonicalize(value[k])).join(",") + "}";
  }
  return JSON.stringify(value);
}

function extractBetween(content, startMarker, endMarker) {
  const startIdx = content.indexOf(startMarker);
  const endIdx = content.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) return null;
  return content.slice(startIdx + startMarker.length, endIdx);
}

function patchBetween(content, startMarker, endMarker, newInner) {
  const startIdx = content.indexOf(startMarker);
  const endIdx = content.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error("Missing markers: " + startMarker);
  }
  return content.slice(0, startIdx + startMarker.length) + newInner + content.slice(endIdx);
}

function defaultModeName(ext) {
  const modes = ext["tokenSync.resolved"] || ext["tokenSync.modes"] || {};
  const names = Object.keys(modes);
  return names[0];
}

function resolvedValueOf(entry) {
  const ext = entry.token.$extensions || {};
  const resolved = ext["tokenSync.resolved"] || {};
  const mode = defaultModeName(ext);
  return mode !== undefined ? resolved[mode] : entry.token.$value;
}

// ---------------------------------------------------------------------------
// Analysis: everything the GENERATED sections are derived from, computed
// once up front so every section (and the CSS/JSON emitters) works off the
// same facts instead of recomputing them slightly differently in five places.
// ---------------------------------------------------------------------------

function analyze(entries) {
  const collections = new Map(); // name -> entries[]
  const allModes = new Set();
  const allScopeSignatures = new Set();
  let privateCount = 0;

  for (const e of entries) {
    const ext = e.token.$extensions || {};
    const col = ext["tokenSync.collection"] || "(uncategorized)";
    if (!collections.has(col)) collections.set(col, []);
    collections.get(col).push(e);
    for (const m of Object.keys(ext["tokenSync.modes"] || {})) allModes.add(m);
    allScopeSignatures.add(JSON.stringify([...(ext["tokenSync.scopes"] || [])].sort()));
    if (ext["tokenSync.private"]) privateCount++;
  }

  // Primitive/semantic detection mode — a judgment call, not a spec; see
  // docs/repo-per-file-design.md "Primitive/semantic detection is inferred,
  // not asserted" for the reasoning and how to override it if it guesses
  // wrong for a given library.
  const pathHasSplitWords = entries.some((e) =>
    e.segments.some((s) => ["semantic", "primitive", "primitives"].includes(s.toLowerCase()))
  );
  let splitMode;
  if (pathHasSplitWords) splitMode = "path-based";
  else if (privateCount > 0) splitMode = "flag-based";
  else splitMode = "absent";

  // Collections that are 100% private get dropped wholesale from the
  // shipped tree (trimTreeForEmission) — computed once here, not
  // separately in the trimmer and in the orphan-primitive lint check,
  // so a primitive that's about to be excluded from the Variables section
  // doesn't also get a lint finding pointing at a path that won't exist
  // there. Caught by checking real output, not assumed safe.
  const fullyPrivateCollections = new Set(
    [...collections.entries()].filter(([, es]) => es.every((e) => (e.token.$extensions || {})["tokenSync.private"])).map(([name]) => name)
  );

  return {
    collections,
    modeNames: [...allModes].sort(),
    singleMode: allModes.size <= 1,
    scopesConstant: allScopeSignatures.size <= 1,
    splitMode,
    privateCount,
    fullyPrivateCollections,
  };
}

// ---------------------------------------------------------------------------
// "What this system contains"
// ---------------------------------------------------------------------------

function collectionShape(colEntries) {
  const depths = colEntries.map((e) => e.segments.length);
  const avgDepth = depths.reduce((a, b) => a + b, 0) / depths.length;
  const lastSegments = colEntries.map((e) => e.segments[e.segments.length - 1]);
  const numericFraction = lastSegments.filter((s) => /^-?\d+(\.\d+)?$/.test(s)).length / lastSegments.length;
  if (avgDepth >= 3.5) return "nested-groups";
  if (numericFraction >= 0.6) return "flat-numeric";
  return "flat-named";
}

function findAliasChain(entries) {
  // Walk from every alias-carrying token toward its terminal target,
  // through other aliases if any, and report the longest chain found (>= 2
  // hops) as one representative example. Most libraries have 0 or 1 hops
  // (semantic -> primitive directly); multi-hop chains are worth calling
  // out explicitly since they're easy to miss when reading the tree by eye.
  const byPath = new Map(entries.map((e) => [e.path, e]));
  let best = null;
  for (const e of entries) {
    const modes = (e.token.$extensions || {})["tokenSync.modes"] || {};
    for (const raw of Object.values(modes)) {
      if (!isAlias(raw)) continue;
      const chain = [e.path];
      let cursor = raw.slice(1, -1);
      const seen = new Set([e.path]);
      while (isAlias("{" + cursor + "}") || byPath.has(cursor)) {
        if (seen.has(cursor)) break; // circular — bail, don't loop forever
        chain.push(cursor);
        seen.add(cursor);
        const next = byPath.get(cursor);
        if (!next) break;
        const nextModes = (next.token.$extensions || {})["tokenSync.modes"] || {};
        const nextRaw = Object.values(nextModes).find(isAlias);
        if (!nextRaw) break;
        cursor = nextRaw.slice(1, -1);
      }
      // >= 3 nodes = at least 2 hops (A -> B -> C) — a *chain*, not just a
      // single direct alias. chain.length >= 2 would fire on every ordinary
      // semantic-aliases-a-primitive token, which isn't a "chain" worth
      // calling out; caught by testing against real fixture output, not
      // assumed correct from reading the code.
      if (chain.length >= 3 && (!best || chain.length > best.length)) best = chain;
    }
  }
  return best;
}

function renderContents(entries, analysis) {
  const lines = [];
  lines.push(`${entries.length} tokens across ${analysis.collections.size} collection(s): ${[...analysis.collections.keys()].join(", ")}.`);
  lines.push("");

  if (analysis.singleMode) {
    lines.push("**Modes.** Every token resolves under a single mode. There is no light/dark pair and no brand or density axis in this data — don't write theme-switching code against it.");
  } else {
    lines.push(`**Modes.** ${analysis.modeNames.join(", ")}. A token's value differs per mode; read the mode you're targeting from \`tokenSync.resolved\` (or \`tokenSync.modes\` for the unresolved alias reference, if present — it may have been trimmed, see the Variables section note).`);
  }
  lines.push("");

  if (analysis.splitMode === "path-based") {
    lines.push("**Primitive vs semantic.** Tokens under a `Semantic.*`-style path carry intent; `Primitive.*`-style paths are raw palette/scale entries — inferred from path segments, not a flag. Prefer the semantic one.");
  } else if (analysis.splitMode === "flag-based") {
    lines.push(`**Primitive vs semantic.** ${analysis.privateCount} of ${entries.length} tokens are marked \`tokenSync.private: true\` — those are primitives, reference-only. Everything else is directly consumable.`);
  } else {
    lines.push("**Primitive vs semantic.** This library publishes no primitive/semantic split that this pipeline could detect. Every token here is directly consumable — there's no reference-only layer to avoid.");
  }
  lines.push("");

  lines.push("| Collection | Shape | Examples |");
  lines.push("|---|---|---|");
  for (const [name, colEntries] of analysis.collections) {
    const shape = collectionShape(colEntries);
    const examples = colEntries.slice(0, 2).map((e) => "`" + e.path + "`").join(", ");
    lines.push(`| ${name} | ${shape} | ${examples} |`);
  }
  lines.push("");

  const chain = findAliasChain(entries);
  if (chain) {
    lines.push(`Alias chains present: \`${chain.join(" → ")}\`.`);
  } else {
    lines.push("No multi-level alias chains detected (tokens either alias a target directly or don't alias at all).");
  }
  lines.push("");
  lines.push("`$value` may be an unresolved reference (`{other.token.path}`); `$extensions.tokenSync.resolved` holds the literal. Always read the resolved value, never the raw `$value`, when the two might differ.");

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// "What this system does NOT publish" — keyword diff against categories a
// design system commonly has, so an agent knows to stop and ask instead of
// improvising when one of these comes up. Keyword lists are a judgment
// call, not exhaustive — see docs/repo-per-file-design.md.
// ---------------------------------------------------------------------------

const EXPECTED_CATEGORIES = [
  { label: "shadow/elevation", keywords: ["shadow", "elevation"] },
  { label: "z-index", keywords: ["z-index", "zindex", "z index", "layer"] },
  { label: "motion/duration", keywords: ["motion", "duration", "transition"] },
  { label: "easing", keywords: ["easing", "ease"] },
  { label: "breakpoints", keywords: ["breakpoint"] },
  { label: "opacity", keywords: ["opacity", "alpha"] },
  { label: "font-size", keywords: ["font-size", "fontsize", "font size", "type-scale", "typescale"] },
];

function renderMissing(entries, analysis) {
  const haystack = [
    [...analysis.collections.keys()].join(" "),
    entries.map((e) => e.path).join(" "),
  ].join(" ").toLowerCase();

  const missing = EXPECTED_CATEGORIES.filter(
    (cat) => !cat.keywords.some((kw) => haystack.includes(kw))
  );

  if (missing.length === 0) {
    return "None of the commonly-expected categories this check looks for (shadow/elevation, z-index, motion/duration, easing, breakpoints, opacity, font-size) appear to be missing.";
  }
  return "No tokens exist for: " + missing.map((c) => c.label).join(", ") + ".";
}

// ---------------------------------------------------------------------------
// Lint checks -> "Known issues". Implemented: name/value mismatch,
// malformed names, type mismatch within a group, fully duplicated group,
// Figma duplicate-rename artifacts. NOT implemented, deliberately, not
// silently skipped: "empty semantic group" (undetectable from this data
// shape — a group with zero leaf tokens never appears in a flattened tree
// in the first place, so there's nothing to walk) and "off-ramp member"
// (needs a per-library ramp vocabulary — e.g. which numbers are "on-scale"
// for a spacing family — that has to come from a human, not be guessed).
// "Orphan primitive family" only runs when a primitive/semantic split was
// actually detected; says so explicitly when it doesn't apply instead of
// silently reporting zero findings either way.
// ---------------------------------------------------------------------------

function lintNameValueMismatch(entries) {
  // A numeric-named token whose resolved value differs from its name isn't
  // automatically a bug — "scale.4 -> 8px" (a 2x multiplier index) is a
  // completely ordinary, deliberate naming convention, not a mistake.
  // First version of this check flagged every such token unconditionally
  // and was wrong about a real one on the very first test run — caught by
  // running it, not by re-reading the code. Fixed by requiring evidence: at
  // least two numerically-named siblings in the same group, and only
  // flagging when *their* name-to-value ratios disagree with each other —
  // that's the actual signal of a mistake (some scale members follow the
  // convention, one doesn't), not "the name isn't literally the value."
  const groups = new Map();
  for (const e of entries) {
    if (e.token.$type !== "number") continue;
    const last = e.segments[e.segments.length - 1];
    if (!/^\d+$/.test(last)) continue;
    const resolved = resolvedValueOf(e);
    if (typeof resolved !== "number") continue;
    const parent = e.segments.slice(0, -1).join(".");
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent).push({ path: e.path, name: Number(last), resolved });
  }
  const findings = [];
  for (const [parent, members] of groups) {
    if (members.length < 2) continue; // one data point can't distinguish "convention" from "mistake"
    const ratios = members.filter((m) => m.name !== 0).map((m) => Math.round((m.resolved / m.name) * 1000) / 1000);
    if (new Set(ratios).size > 1) {
      findings.push(`Group \`${parent}\` names its members by number, but the name-to-resolved-value ratio isn't consistent across them (${members.map((m) => `${m.name}→${m.resolved}`).join(", ")}) — a deliberate scale convention would scale consistently, so one of these is likely misnamed or mis-published.`);
    }
  }
  return findings;
}

function lintMalformedNames(entries) {
  const findings = [];
  const badChars = /[:;{\n]/;
  for (const e of entries) {
    if (badChars.test(e.path)) {
      findings.push(`\`${JSON.stringify(e.path)}\` contains a character (\`:\`, \`;\`, \`{\`, or a newline) that looks like pasted CSS rather than a token name — check the source variable in Figma.`);
    }
  }
  return findings;
}

function lintTypeMismatch(entries) {
  const groups = new Map();
  for (const e of entries) {
    const parent = e.segments.slice(0, -1).join(".");
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent).push(e);
  }
  const findings = [];
  for (const [parent, members] of groups) {
    if (members.length < 2) continue;
    const types = new Set(members.map((m) => m.token.$type));
    if (types.size > 1) {
      findings.push(`Group \`${parent}\` mixes types (${[...types].join(", ")}) across siblings: ${members.map((m) => "`" + m.path + "`").join(", ")} — check whether one was published with the wrong type.`);
    }
  }
  return findings;
}

function lintDuplicateGroups(entries) {
  const groups = new Map();
  for (const e of entries) {
    const parent = e.segments.slice(0, -1).join(".");
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent).push(e);
  }
  const signatures = new Map(); // signature -> first parent path seen
  const findings = [];
  for (const [parent, members] of groups) {
    const sig = canonicalize(
      members
        .map((m) => [m.segments[m.segments.length - 1], resolvedValueOf(m)])
        .sort((a, b) => String(a[0]).localeCompare(String(b[0])))
    );
    if (signatures.has(sig)) {
      findings.push(`Group \`${parent}\` has the exact same members and values as \`${signatures.get(sig)}\` — likely a duplicate publish, not two intentionally-identical scales. Not auto-removed (a false positive here would silently drop real tokens); confirm by hand before deleting either.`);
    } else {
      signatures.set(sig, parent);
    }
  }
  return findings;
}

function lintFigmaDuplicateArtifacts(entries) {
  const findings = [];
  const pattern = /\s(copy(\s\d+)?|\d+)$/i;
  for (const e of entries) {
    const last = e.segments[e.segments.length - 1];
    if (pattern.test(last) && !/^\d+$/.test(last)) {
      findings.push(`\`${e.path}\` looks like an unrenamed Figma duplicate (ends in "${last.match(pattern)[0].trim()}") — confirm this is an intentional variant, not a copy-paste leftover.`);
    }
  }
  return findings;
}

function lintOrphanPrimitives(entries, analysis) {
  if (analysis.splitMode === "absent") {
    return ["No primitive/semantic split was detected in this library, so \"orphan primitive\" doesn't apply — every token is directly consumable."];
  }
  const referenced = new Set();
  for (const e of entries) {
    const modes = (e.token.$extensions || {})["tokenSync.modes"] || {};
    for (const raw of Object.values(modes)) {
      if (isAlias(raw)) referenced.add(raw.slice(1, -1));
    }
  }
  const isPrimitive = (e) =>
    analysis.splitMode === "flag-based"
      ? !!(e.token.$extensions || {})["tokenSync.private"]
      : e.segments.some((s) => s.toLowerCase() === "primitive" || s.toLowerCase() === "primitives");
  const findings = [];
  for (const e of entries) {
    const col = (e.token.$extensions || {})["tokenSync.collection"];
    // A primitive whose whole collection is 100% private gets dropped from
    // the shipped Variables section entirely (trimTreeForEmission) whether
    // or not it's referenced — flagging it as "orphaned" here would point
    // an agent at a path that isn't in the file to look at. Only worth
    // calling out individually when it's sitting alongside consumable
    // siblings that *do* survive, so there's something to actually compare
    // it against. Caught by checking real output: the first version of
    // this pointed straight at a path the trimmer had just deleted.
    if (isPrimitive(e) && !referenced.has(e.path) && !analysis.fullyPrivateCollections.has(col)) {
      findings.push(`\`${e.path}\` is a primitive that no semantic token aliases — either it's unused, or something references it in a way this check can't see. The "prefer semantic" rule has no semantic equivalent to point to here.`);
    }
  }
  return findings;
}

function renderLint(entries, analysis) {
  const checks = [
    lintNameValueMismatch(entries),
    lintMalformedNames(entries),
    lintTypeMismatch(entries),
    lintDuplicateGroups(entries),
    lintFigmaDuplicateArtifacts(entries),
    lintOrphanPrimitives(entries, analysis),
  ];
  const all = checks.flat().filter((f) => typeof f === "string" && !f.startsWith("No primitive/semantic split"));
  // The "doesn't apply" message from lintOrphanPrimitives is informational,
  // not a finding — keep it out of the numbered list, it'd read as a false
  // "issue found" otherwise.
  if (all.length === 0) return "No issues detected by the automated checks below (name/value mismatches, malformed names, type mismatches within a group, duplicated groups, Figma duplicate-rename artifacts, orphaned primitives). This doesn't mean the data is perfect — see the paragraph above the markers for checks this pipeline can't run.";
  return all.map((f, i) => `${i + 1}. ${f}`).join("\n");
}

// ---------------------------------------------------------------------------
// CSS variable name derivation + :root block
// ---------------------------------------------------------------------------

function deriveCssName(entry, analysis) {
  const skip = new Set(["semantic", "primitive", "primitives"]);
  const kept = analysis.splitMode === "path-based" ? entry.segments.filter((s) => !skip.has(s.toLowerCase())) : entry.segments;
  return kept.join("-").toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}

function renderCss(entries, analysis) {
  const consumable = entries.filter((e) => !(e.token.$extensions || {})["tokenSync.private"]);
  const named = consumable.map((e) => ({ entry: e, name: deriveCssName(e, analysis) }));

  // Collision handling: if two different token paths derive the same CSS
  // name, prefix the collision set with their collection name instead of
  // silently letting one clobber the other in the emitted :root block.
  const byName = new Map();
  for (const item of named) {
    if (!byName.has(item.name)) byName.set(item.name, []);
    byName.get(item.name).push(item);
  }
  const lines = [];
  for (const [name, items] of byName) {
    if (items.length === 1) {
      const item = items[0];
      const value = resolvedValueOf(item.entry);
      lines.push(`  --${name}: ${cssLiteral(value, item.entry.token.$type)};`);
    } else {
      for (const item of items) {
        const col = ((item.entry.token.$extensions || {})["tokenSync.collection"] || "x").toLowerCase().replace(/[^a-z0-9]+/g, "-");
        const value = resolvedValueOf(item.entry);
        lines.push(`  --${col}-${name}: ${cssLiteral(value, item.entry.token.$type)}; /* disambiguated: --${name} collided across ${items.length} tokens */`);
      }
    }
  }
  lines.sort();
  return "```css\n:root {\n" + lines.join("\n") + (lines.length ? "\n" : "") + "}\n```\n";
}

function cssLiteral(value, type) {
  if (type === "number") return typeof value === "number" ? `${value}px` : String(value);
  if (type === "boolean") return String(value);
  return String(value);
}

// ---------------------------------------------------------------------------
// JSON emission trimming — drop fields/collections that carry no
// information for this specific library, per the rules in
// docs/repo-per-file-design.md. Never mutates the source tree in place.
// ---------------------------------------------------------------------------

function trimTreeForEmission(tree, analysis) {
  const allPrivateCollections = analysis.fullyPrivateCollections;

  function walk(node) {
    if (!isPlainObject(node)) return node;
    const keys = Object.keys(node);
    const isToken = keys.some((k) => k.indexOf("$") === 0);
    if (isToken) {
      const ext = node.$extensions || {};
      if (allPrivateCollections.has(ext["tokenSync.collection"])) return undefined; // drop: pure alias-base collection
      const newExt = { ...ext };
      if (analysis.scopesConstant) delete newExt["tokenSync.scopes"];
      if (analysis.singleMode) delete newExt["tokenSync.modes"];
      delete newExt["tokenSync.figmaKey"];
      return { ...node, $extensions: newExt };
    }
    const out = {};
    for (const key of keys) {
      const child = walk(node[key]);
      if (child !== undefined && !(isPlainObject(child) && Object.keys(child).length === 0)) out[key] = child;
    }
    return Object.keys(out).length ? out : undefined;
  }

  return walk(tree) || {};
}

// ---------------------------------------------------------------------------
// TODO-blocking + referential-integrity checks — run against the fully
// patched file content, after every GENERATED section is up to date.
// ---------------------------------------------------------------------------

function findBlockingTodos(content) {
  const withDeliberateRemoved = content.replace(/<!--\s*TODO\(deliberate\):[\s\S]*?-->/g, "");
  const matches = withDeliberateRemoved.match(/TODO/g);
  return matches ? matches.length : 0;
}

function checkReferentialIntegrity(content) {
  // Illustrative var() mentions inside fenced code blocks (the "Writing
  // code" example, Anti-patterns snippets) are examples, not promises —
  // strip fences before scanning so this only checks live prose claims,
  // then compare against what's actually declared in the generated CSS
  // block specifically.
  const withoutFences = content.replace(/```[\s\S]*?```/g, "");
  const referenced = new Set([...withoutFences.matchAll(/var\(--([a-zA-Z0-9-]+)\)/g)].map((m) => m[1]));
  if (referenced.size === 0) return [];

  const cssBlock = extractBetween(content, ...MARKERS.css) || "";
  const declared = new Set([...cssBlock.matchAll(/--([a-zA-Z0-9-]+):/g)].map((m) => m[1]));

  return [...referenced].filter((name) => !declared.has(name));
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const skillMd = readFileSync("SKILL.md", "utf8");

// A SKILL.md pushed by an older version of this pipeline (before "What this
// system contains" / "does NOT publish" / "Known issues" / "CSS variables"
// existed) has GENERATED and VARIABLES markers but not these four. Auto-
// migrating a partially-old file by guessing where to splice in new
// sections risks scrambling hand-edited content in ways that are hard to
// detect and easy to get wrong — unlike healing a single missing
// VARIABLES block (ui.html's patchOrAppendVariables, a safe append with a
// well-defined insertion point), this would mean reconstructing document
// structure around content someone may have customized. Refuse to guess:
// fail clearly and say exactly what to do, rather than attempt something
// this risky unattended. See docs/repo-per-file-design.md.
const missingSections = Object.entries(MARKERS)
  .filter(([key]) => key !== "variables")
  .filter(([, [start]]) => !skillMd.includes(start));
if (missingSections.length > 0) {
  console.error("SKILL.md predates the current template — missing section(s): " + missingSections.map(([k]) => k).join(", "));
  console.error("Not auto-migrating (risk of scrambling hand-edited content). Two ways to fix this:");
  console.error("  1. Delete SKILL.md from this repo and push again from the plugin — you'll get a fresh file with your token data re-embedded.");
  console.error("  2. Manually add the missing section(s) from figma-plugin/templates/SKILL.md in the pipeline repo, in order, then push again.");
  process.exit(1);
}

const variablesBlock = extractBetween(skillMd, ...MARKERS.variables);
if (variablesBlock === null) {
  console.error("SKILL.md is missing the VARIABLES:START/END markers - refusing to guess where to read from.");
  process.exit(1);
}
const fenceMatch = variablesBlock.match(/```json\n([\s\S]*?)\n```/);
if (!fenceMatch) {
  console.error("SKILL.md's Variables section doesn't contain a ```json fenced block - refusing to guess.");
  process.exit(1);
}

let tree;
try {
  tree = JSON.parse(fenceMatch[1]);
} catch (err) {
  console.error("SKILL.md's Variables section isn't valid JSON: " + err.message);
  process.exit(1);
}

const { errors, entries } = validate(tree);
if (errors.length > 0) {
  console.error(errors.length + " problem(s) in SKILL.md's Variables section - not recompiling:");
  for (const e of errors) console.error("  - " + e);
  process.exit(1);
}

const analysis = analyze(entries);
const fingerprint = createHash("sha256").update(canonicalize(tree)).digest("hex").slice(0, 12);
const summary =
  `Compiled from this file's Variables section (content fingerprint ${fingerprint}).\n` +
  `${entries.length} tokens, ${analysis.collections.size} collection(s), ` +
  `${analysis.modeNames.length} mode(s): ${analysis.modeNames.join(", ") || "(none)"}.`;

let patched = skillMd;
patched = patchBetween(patched, ...MARKERS.generated, "\n" + summary + "\n");
patched = patchBetween(patched, ...MARKERS.contents, "\n" + renderContents(entries, analysis) + "\n");
patched = patchBetween(patched, ...MARKERS.missing, "\n" + renderMissing(entries, analysis) + "\n");
patched = patchBetween(patched, ...MARKERS.lint, "\n" + renderLint(entries, analysis) + "\n");
patched = patchBetween(patched, ...MARKERS.css, "\n" + renderCss(entries, analysis));
const trimmedTree = trimTreeForEmission(tree, analysis);
patched = patchBetween(patched, ...MARKERS.variables, "\n```json\n" + JSON.stringify(trimmedTree, null, 2) + "\n```\n");

writeFileSync("SKILL.md", patched, "utf8");

const todoCount = findBlockingTodos(patched);
const danglingVars = checkReferentialIntegrity(patched);

if (todoCount > 0 || danglingVars.length > 0) {
  console.log(`Recompiled: ${entries.length} tokens, fingerprint ${fingerprint} — file written, but needs a human:`);
  if (todoCount > 0) console.log(`  - ${todoCount} blocking TODO(s) remain (SEEDED content not yet resolved).`);
  if (danglingVars.length > 0) console.log(`  - authored prose references var(--x) not in the generated CSS: ${danglingVars.join(", ")}`);
  process.exit(2);
}

console.log(`Recompiled: ${entries.length} tokens, fingerprint ${fingerprint}`);
