---
name: white-label-b2c
description: >-
  The published design token set for White Label B2C, with the CSS custom property names
  to emit. Use this skill whenever you are writing or reviewing UI code for a
  White Label B2C surface and are about to choose a color, spacing value, radius, size,
  font weight, or border — even when the request never mentions tokens, Figma, or the
  design system. Also use it when reviewing a diff or PR for hardcoded values, when turning
  a mockup or screenshot into code, and when someone asks what the token for something is
  or whether a value is on-scale. Provides the current published values so you never invent
  a hex or an off-scale number.
---

<!-- SEEDED: the description above is a first draft, not reviewed prose — tune it by hand
     once you've seen what this library actually contains, then delete this comment.
     TODO(seed): confirm the description above still fits after reading the generated
     sections below; this line blocks the build on purpose until you do. -->

<!-- GENERATED:START -- do not edit, overwritten by .github/scripts/recompile.mjs -->
Compiled from this file's Variables section (content fingerprint 1e02c8fcb910).
86 tokens, 5 collection(s), 7 mode(s): Dark theme, Hotel 1, Hotel 2, Hotel 3, Hotel 4, Light theme, Mode 1.
<!-- GENERATED:END -->

## What this system contains

<!-- CONTENTS:START -- do not edit, overwritten by .github/scripts/recompile.mjs -->
86 tokens across 5 collection(s): Collection, Typography Variables, Dates, Theme, Hotel card variables.

**Modes.** Dark theme, Hotel 1, Hotel 2, Hotel 3, Hotel 4, Light theme, Mode 1. A token's value differs per mode; read the mode you're targeting from `tokenSync.resolved` (or `tokenSync.modes` for the unresolved alias reference, if present — it may have been trimmed, see the Variables section note).

**Primitive vs semantic.** This library publishes no primitive/semantic split that this pipeline could detect. Every token here is directly consumable — there's no reference-only layer to avoid.

| Collection | Shape | Examples |
|---|---|---|
| Collection | flat-named | `Tag`, `Unavailability banner` |
| Typography Variables | flat-named | `FontFamily`, `FontSize.H8_FontSize` |
| Dates | flat-named | `dateFrom`, `dateTo` |
| Theme | flat-named | `Neutral 900` |
| Hotel card variables | flat-named | `Hotel name`, `Hotel address` |

No multi-level alias chains detected (tokens either alias a target directly or don't alias at all).

`$value` may be an unresolved reference (`{other.token.path}`); `$extensions.tokenSync.resolved` holds the literal. Always read the resolved value, never the raw `$value`, when the two might differ.
<!-- CONTENTS:END -->

## What this system does NOT publish

<!-- MISSING:START -- do not edit, overwritten by .github/scripts/recompile.mjs -->
No tokens exist for: shadow/elevation, z-index, motion/duration, easing, breakpoints, opacity.
<!-- MISSING:END -->

If a task needs one of the categories listed above, say so and stop — don't improvise a
value and don't assume a token exists under a name you haven't seen. Improvised values are
the main way a token system erodes, because they look intentional in review.

## Writing code: emit CSS custom properties

Reference the CSS custom property by name (see the generated block below for the real
names); never inline the literal it resolves to. The indirection
exists so values can be re-pointed centrally — a value baked into a stylesheet can't be
updated by republishing the design system, a `var()` reference can.

```css
/* Good */
.button-primary {
  background: var(--action-primary);
  padding: var(--gap-md);
}

/* Bad — looks identical today, breaks the moment the source token changes */
.button-primary {
  background: #1B6AE8;
  padding: 8px;
}
```

**Deriving a variable name from a token path:** lowercase, drop the `Semantic.` /
`Primitive.` prefix (or your library's equivalent path segments — see "What this system
contains" above for whether that split exists here), join the remaining segments with
hyphens. Flat scale tokens keep their name as-is. When two different token paths would
derive the same variable name, the generator prefixes the shorter one with its collection
name to disambiguate — check the generated CSS block below for the actual name if a
derived one looks off; don't reconstruct it by hand from the path alone.

## Choosing the right token

<!-- TODO(seed): this section is library-specific and this pipeline cannot derive it —
     no amount of token data tells you *intent*. Fill in, at minimum:
     - Which layer to reach for first, and when a primitive is legitimately correct
       instead of a semantic token
     - Pairing rules — which foreground tokens are valid on which background tokens
     - Any token name that misleads — e.g. a ramp whose "strong" end is dark, not
       saturated, or a name that suggests a use case the token wasn't designed for
     - Scales that overlap numerically but differ in intent (space vs size, radius vs
       border-width) — say which is which
     Delete this comment once the sections above are real; see
     docs/repo-per-file-design.md for why the build fails while it's still here. -->

## Known issues

Auto-detected problems in the published data, each with a concrete workaround — not a
style opinion, a specific thing that will bite you if you don't know about it.

<!-- LINT:START -- do not edit, overwritten by .github/scripts/recompile.mjs -->
1. Group `` mixes types (string, color, number, boolean) across siblings: `Tag`, `FontFamily`, `dateFrom`, `dateTo`, `dateFrom 1`, `dateTo 1`, `dateFrom 2`, `dateTo 2`, `dateFrom 3`, `dateTo 3`, `Neutral 900`, `Hotel name`, `Hotel address`, `Hotel distance`, `Rating`, `Rating state`, `Based on`, `Rooms nd nights`, `Hotel price`, `Unavailability banner`, `Similar properties`, `Room rates`, `Date cell`, `Check in`, `Check out`, `Choose room`, `Fontsize`, `Spacing`, `2nd non availability`, `State`, `One `, `Two`, `close`, `Old price`, `New price`, `old-price`, `price toast`, `refresh block`, `Refresh banner`, `Text field`, `Breakfast included tag`, `Breakfast and lunch tag`, `Pet friendly tag`, `Meal plan tag`, `Filter tags`, `Clear All button`, `Left arrow`, `Right arrow `, `Before check-in`, `After check-out`, `Nationaility`, `Placeholder`, `AI interactive text`, `AI interactive button`, `AI suggested questions`, `AI welcome`, `AI conversation`, `Hotel history`, `BBBBBB`, `AI Loading`, `Text ai`, `AI modal title`, `Smart filters text`, `Smart filters`, `Filtered hotels`, `Search semantic`, `Search section`, `Semantic dropdown`, `AI semantic text`, `Filter` — check whether one was published with the wrong type.
2. `dateFrom 1` looks like an unrenamed Figma duplicate (ends in "1") — confirm this is an intentional variant, not a copy-paste leftover.
3. `dateTo 1` looks like an unrenamed Figma duplicate (ends in "1") — confirm this is an intentional variant, not a copy-paste leftover.
4. `dateFrom 2` looks like an unrenamed Figma duplicate (ends in "2") — confirm this is an intentional variant, not a copy-paste leftover.
5. `dateTo 2` looks like an unrenamed Figma duplicate (ends in "2") — confirm this is an intentional variant, not a copy-paste leftover.
6. `dateFrom 3` looks like an unrenamed Figma duplicate (ends in "3") — confirm this is an intentional variant, not a copy-paste leftover.
7. `dateTo 3` looks like an unrenamed Figma duplicate (ends in "3") — confirm this is an intentional variant, not a copy-paste leftover.
8. `Neutral 900` looks like an unrenamed Figma duplicate (ends in "900") — confirm this is an intentional variant, not a copy-paste leftover.
<!-- LINT:END -->

<!-- Anything you add below this line, outside the LINT markers, survives recompilation —
     use it for issues you've found that the automated checks can't catch. -->

## Anti-patterns

- **Raw hex, `rgb()`, or `rgba()` values in a stylesheet** instead of a token reference.
- **`#fff` and `#000`** — too obvious to question in review, which is exactly why they
  survive in otherwise-tokenized codebases.
- **Off-scale numbers** for spacing, radius, or sizing — snap to the nearest published
  value, don't split the difference between two tokens.
- **Reaching into a primitive** when a semantic token with the same intent exists.
- **Inventing a plausible-looking variable name** that wasn't actually published — a
  guessed name is a silent no-op at runtime that looks correct in review, which makes it
  strictly worse than a hardcoded value. Only use a name from the generated CSS block
  below.
- **Deriving a value from a token's *name*** instead of its resolved value — a token
  called `blue-500` is not necessarily blue; read `tokenSync.resolved`, never guess from
  the label.

## CSS variables

<!-- CSS:START -- do not edit, overwritten by .github/scripts/recompile.mjs -->
```css
:root {
  --2nd-non-availability: false;
  --after-check-out: false;
  --ai-conversation: false;
  --ai-interactive-button: Disabled;
  --ai-interactive-text: Ask anything...;
  --ai-loading: 3;
  --ai-modal-title: false;
  --ai-semantic-text: Default;
  --ai-suggested-questions: true;
  --ai-welcome: true;
  --based-on: Based on 173 reviews;
  --bbbbbb: true;
  --before-check-in: true;
  --breakfast-and-lunch-tag: false;
  --breakfast-included-tag: false;
  --check-in: 10 Mai;
  --check-out: 15 Mai;
  --choose-room: Change your dates;
  --clear-all-button: false;
  --close: true;
  --collection-old-price: #1F2A37; /* disambiguated: --old-price collided across 2 tokens */
  --collection-old-price: false; /* disambiguated: --old-price collided across 2 tokens */
  --date-cell: 0px;
  --datefrom-1: 28 Apr;
  --datefrom-2: 30 May;
  --datefrom-3: 07 Jul;
  --datefrom: 10 May;
  --dateto-1: 4 May;
  --dateto-2: 11 Jun;
  --dateto-3: 26 Jul;
  --dateto: 14 May;
  --filter-tags: false;
  --filter: false;
  --filtered-hotels: true;
  --fontfamily: Inter;
  --fontsize-h1-fontsize: 56px;
  --fontsize-h2-fontsize: 48px;
  --fontsize-h3-fontsize: 40px;
  --fontsize-h4-fontsize: 32px;
  --fontsize-h5-fontsize: 28px;
  --fontsize-h6-fontsize: 24px;
  --fontsize-h7-fontsize: 20px;
  --fontsize-h8-fontsize: 16px;
  --fontsize: 18px;
  --hotel-address: 41 White Church Lane, London;
  --hotel-distance: 1 mile from centre;
  --hotel-history: false;
  --hotel-name: Club Quarters Hotel, St. Paul's;
  --hotel-price: 5,725;
  --left-arrow: false;
  --lineheight-h1-lineheight: 68px;
  --lineheight-h2-lineheight: 56px;
  --lineheight-h3-lineheight: 48px;
  --lineheight-h4-lineheight: 40px;
  --lineheight-h5-lineheight: 32px;
  --lineheight-h6-lineheight: 28px;
  --lineheight-h7-lineheight: 24px;
  --lineheight-h8-lineheight: 20px;
  --meal-plan-tag: false;
  --nationaility: Select nationality;
  --neutral-900: #292829;
  --new-price: #2D9F75;
  --one: false;
  --pet-friendly-tag: false;
  --placeholder: #9DA4AE;
  --price-toast: false;
  --rating-state: Excellent;
  --rating: 10px;
  --refresh-banner: false;
  --refresh-block: false;
  --right-arrow: true;
  --room-rates: false;
  --rooms-nd-nights: 2 rooms x 3 nights;
  --search-section: Manual;
  --search-semantic: Enter a destination;
  --semantic-dropdown: false;
  --similar-properties: true;
  --smart-filters-text: Example: I want a place with great reviews and free cancellation;
  --smart-filters: #C6C4CC;
  --spacing: 12px;
  --state: 1;
  --tag: Default;
  --text-ai: Default;
  --text-field: e.g John;
  --two: false;
  --unavailability-banner: true;
}
```
<!-- CSS:END -->

## Variables

Full DTCG-formatted token tree, trimmed of fields that carry no information for this
library (see the emission rules in `docs/repo-per-file-design.md` if a field you expect
is missing — it's a deliberate drop, not lost data) and embedded here rather than as a
separate file. Search this section for the path you need rather than reading the whole
block whenever this skill triggers.

<!-- VARIABLES:START -- do not edit, overwritten by .github/scripts/recompile.mjs -->
```json
{
  "Tag": {
    "$type": "string",
    "$value": "Default",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "Default"
      },
      "tokenSync.resolved": {
        "Mode 1": "Default"
      },
      "tokenSync.collection": "Collection"
    }
  },
  "FontFamily": {
    "$type": "string",
    "$value": "Inter",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "Inter"
      },
      "tokenSync.resolved": {
        "Mode 1": "Inter"
      },
      "tokenSync.collection": "Typography Variables"
    }
  },
  "FontSize": {
    "H8_FontSize": {
      "$type": "number",
      "$value": 16,
      "$extensions": {
        "tokenSync.modes": {
          "Mode 1": 16
        },
        "tokenSync.resolved": {
          "Mode 1": 16
        },
        "tokenSync.collection": "Typography Variables"
      }
    },
    "H7_FontSize": {
      "$type": "number",
      "$value": 20,
      "$extensions": {
        "tokenSync.modes": {
          "Mode 1": 20
        },
        "tokenSync.resolved": {
          "Mode 1": 20
        },
        "tokenSync.collection": "Typography Variables"
      }
    },
    "H6_FontSize": {
      "$type": "number",
      "$value": 24,
      "$extensions": {
        "tokenSync.modes": {
          "Mode 1": 24
        },
        "tokenSync.resolved": {
          "Mode 1": 24
        },
        "tokenSync.collection": "Typography Variables"
      }
    },
    "H5_FontSize": {
      "$type": "number",
      "$value": 28,
      "$extensions": {
        "tokenSync.modes": {
          "Mode 1": 28
        },
        "tokenSync.resolved": {
          "Mode 1": 28
        },
        "tokenSync.collection": "Typography Variables"
      }
    },
    "H4_FontSize": {
      "$type": "number",
      "$value": 32,
      "$extensions": {
        "tokenSync.modes": {
          "Mode 1": 32
        },
        "tokenSync.resolved": {
          "Mode 1": 32
        },
        "tokenSync.collection": "Typography Variables"
      }
    },
    "H3_FontSize": {
      "$type": "number",
      "$value": 40,
      "$extensions": {
        "tokenSync.modes": {
          "Mode 1": 40
        },
        "tokenSync.resolved": {
          "Mode 1": 40
        },
        "tokenSync.collection": "Typography Variables"
      }
    },
    "H2_FontSize": {
      "$type": "number",
      "$value": 48,
      "$extensions": {
        "tokenSync.modes": {
          "Mode 1": 48
        },
        "tokenSync.resolved": {
          "Mode 1": 48
        },
        "tokenSync.collection": "Typography Variables"
      }
    },
    "H1_FontSize": {
      "$type": "number",
      "$value": 56,
      "$extensions": {
        "tokenSync.modes": {
          "Mode 1": 56
        },
        "tokenSync.resolved": {
          "Mode 1": 56
        },
        "tokenSync.collection": "Typography Variables"
      }
    }
  },
  "LineHeight": {
    "H8_LineHeight": {
      "$type": "number",
      "$value": 20,
      "$extensions": {
        "tokenSync.modes": {
          "Mode 1": 20
        },
        "tokenSync.resolved": {
          "Mode 1": 20
        },
        "tokenSync.collection": "Typography Variables"
      }
    },
    "H7_LineHeight": {
      "$type": "number",
      "$value": 24,
      "$extensions": {
        "tokenSync.modes": {
          "Mode 1": 24
        },
        "tokenSync.resolved": {
          "Mode 1": 24
        },
        "tokenSync.collection": "Typography Variables"
      }
    },
    "H6_LineHeight": {
      "$type": "number",
      "$value": 28,
      "$extensions": {
        "tokenSync.modes": {
          "Mode 1": 28
        },
        "tokenSync.resolved": {
          "Mode 1": 28
        },
        "tokenSync.collection": "Typography Variables"
      }
    },
    "H5_LineHeight": {
      "$type": "number",
      "$value": 32,
      "$extensions": {
        "tokenSync.modes": {
          "Mode 1": 32
        },
        "tokenSync.resolved": {
          "Mode 1": 32
        },
        "tokenSync.collection": "Typography Variables"
      }
    },
    "H4_LineHeight": {
      "$type": "number",
      "$value": 40,
      "$extensions": {
        "tokenSync.modes": {
          "Mode 1": 40
        },
        "tokenSync.resolved": {
          "Mode 1": 40
        },
        "tokenSync.collection": "Typography Variables"
      }
    },
    "H3_LineHeight": {
      "$type": "number",
      "$value": 48,
      "$extensions": {
        "tokenSync.modes": {
          "Mode 1": 48
        },
        "tokenSync.resolved": {
          "Mode 1": 48
        },
        "tokenSync.collection": "Typography Variables"
      }
    },
    "H2_LineHeight": {
      "$type": "number",
      "$value": 56,
      "$extensions": {
        "tokenSync.modes": {
          "Mode 1": 56
        },
        "tokenSync.resolved": {
          "Mode 1": 56
        },
        "tokenSync.collection": "Typography Variables"
      }
    },
    "H1_LineHeight": {
      "$type": "number",
      "$value": 68,
      "$extensions": {
        "tokenSync.modes": {
          "Mode 1": 68
        },
        "tokenSync.resolved": {
          "Mode 1": 68
        },
        "tokenSync.collection": "Typography Variables"
      }
    }
  },
  "dateFrom": {
    "$type": "string",
    "$value": "10 May",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "10 May"
      },
      "tokenSync.resolved": {
        "Mode 1": "10 May"
      },
      "tokenSync.collection": "Dates"
    }
  },
  "dateTo": {
    "$type": "string",
    "$value": "14 May",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "14 May"
      },
      "tokenSync.resolved": {
        "Mode 1": "14 May"
      },
      "tokenSync.collection": "Dates"
    }
  },
  "dateFrom 1": {
    "$type": "string",
    "$value": "28 Apr",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "28 Apr"
      },
      "tokenSync.resolved": {
        "Mode 1": "28 Apr"
      },
      "tokenSync.collection": "Dates"
    }
  },
  "dateTo 1": {
    "$type": "string",
    "$value": "4 May",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "4 May"
      },
      "tokenSync.resolved": {
        "Mode 1": "4 May"
      },
      "tokenSync.collection": "Dates"
    }
  },
  "dateFrom 2": {
    "$type": "string",
    "$value": "30 May",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "30 May"
      },
      "tokenSync.resolved": {
        "Mode 1": "30 May"
      },
      "tokenSync.collection": "Dates"
    }
  },
  "dateTo 2": {
    "$type": "string",
    "$value": "11 Jun",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "11 Jun"
      },
      "tokenSync.resolved": {
        "Mode 1": "11 Jun"
      },
      "tokenSync.collection": "Dates"
    }
  },
  "dateFrom 3": {
    "$type": "string",
    "$value": "07 Jul",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "07 Jul"
      },
      "tokenSync.resolved": {
        "Mode 1": "07 Jul"
      },
      "tokenSync.collection": "Dates"
    }
  },
  "dateTo 3": {
    "$type": "string",
    "$value": "26 Jul",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "26 Jul"
      },
      "tokenSync.resolved": {
        "Mode 1": "26 Jul"
      },
      "tokenSync.collection": "Dates"
    }
  },
  "Neutral 900": {
    "$type": "color",
    "$value": "#292829",
    "$extensions": {
      "tokenSync.modes": {
        "Light theme": "#292829",
        "Dark theme": "#292928"
      },
      "tokenSync.resolved": {
        "Light theme": "#292829",
        "Dark theme": "#292928"
      },
      "tokenSync.collection": "Theme"
    }
  },
  "Hotel name": {
    "$type": "string",
    "$value": "Club Quarters Hotel, St. Paul's",
    "$extensions": {
      "tokenSync.modes": {
        "Hotel 1": "Club Quarters Hotel, St. Paul's",
        "Hotel 2": "Barceló Emperatriz",
        "Hotel 3": "Barceló Imagine",
        "Hotel 4": "Barceló Torre de Madrid"
      },
      "tokenSync.resolved": {
        "Hotel 1": "Club Quarters Hotel, St. Paul's",
        "Hotel 2": "Barceló Emperatriz",
        "Hotel 3": "Barceló Imagine",
        "Hotel 4": "Barceló Torre de Madrid"
      },
      "tokenSync.collection": "Hotel card variables"
    }
  },
  "Hotel address": {
    "$type": "string",
    "$value": "41 White Church Lane, London",
    "$extensions": {
      "tokenSync.modes": {
        "Hotel 1": "41 White Church Lane, London",
        "Hotel 2": "Lopez de Hoyos 4, Madrid, ES",
        "Hotel 3": "Agustin de Foxa, 32, Madrid, ES",
        "Hotel 4": "Plaza de España, 18, Madrid, ES"
      },
      "tokenSync.resolved": {
        "Hotel 1": "41 White Church Lane, London",
        "Hotel 2": "Lopez de Hoyos 4, Madrid, ES",
        "Hotel 3": "Agustin de Foxa, 32, Madrid, ES",
        "Hotel 4": "Plaza de España, 18, Madrid, ES"
      },
      "tokenSync.collection": "Hotel card variables"
    }
  },
  "Hotel distance": {
    "$type": "string",
    "$value": "1 mile from centre",
    "$extensions": {
      "tokenSync.modes": {
        "Hotel 1": "1 mile from centre",
        "Hotel 2": "3 km from centre",
        "Hotel 3": "6 km from centre",
        "Hotel 4": "1 km from centre"
      },
      "tokenSync.resolved": {
        "Hotel 1": "1 mile from centre",
        "Hotel 2": "3 km from centre",
        "Hotel 3": "6 km from centre",
        "Hotel 4": "1 km from centre"
      },
      "tokenSync.collection": "Hotel card variables"
    }
  },
  "Rating": {
    "$type": "number",
    "$value": 10,
    "$extensions": {
      "tokenSync.modes": {
        "Hotel 1": 10,
        "Hotel 2": 8.899999618530273,
        "Hotel 3": 9.100000381469727,
        "Hotel 4": 8.600000381469727
      },
      "tokenSync.resolved": {
        "Hotel 1": 10,
        "Hotel 2": 8.899999618530273,
        "Hotel 3": 9.100000381469727,
        "Hotel 4": 8.600000381469727
      },
      "tokenSync.collection": "Hotel card variables"
    }
  },
  "Rating state": {
    "$type": "string",
    "$value": "Excellent",
    "$extensions": {
      "tokenSync.modes": {
        "Hotel 1": "Excellent",
        "Hotel 2": "Fabulous",
        "Hotel 3": "Wonderful",
        "Hotel 4": "Fabulous"
      },
      "tokenSync.resolved": {
        "Hotel 1": "Excellent",
        "Hotel 2": "Fabulous",
        "Hotel 3": "Wonderful",
        "Hotel 4": "Fabulous"
      },
      "tokenSync.collection": "Hotel card variables"
    }
  },
  "Based on": {
    "$type": "string",
    "$value": "Based on 173 reviews",
    "$extensions": {
      "tokenSync.modes": {
        "Hotel 1": "Based on 173 reviews",
        "Hotel 2": "Based on 2252 reviews",
        "Hotel 3": "Based on 3456 reviews",
        "Hotel 4": "Based on 3238 reviews"
      },
      "tokenSync.resolved": {
        "Hotel 1": "Based on 173 reviews",
        "Hotel 2": "Based on 2252 reviews",
        "Hotel 3": "Based on 3456 reviews",
        "Hotel 4": "Based on 3238 reviews"
      },
      "tokenSync.collection": "Hotel card variables"
    }
  },
  "Rooms nd nights": {
    "$type": "string",
    "$value": "2 rooms x 3 nights",
    "$extensions": {
      "tokenSync.modes": {
        "Hotel 1": "2 rooms x 3 nights",
        "Hotel 2": "For 1 room",
        "Hotel 3": "For 1 room",
        "Hotel 4": "For 1 room"
      },
      "tokenSync.resolved": {
        "Hotel 1": "2 rooms x 3 nights",
        "Hotel 2": "For 1 room",
        "Hotel 3": "For 1 room",
        "Hotel 4": "For 1 room"
      },
      "tokenSync.collection": "Hotel card variables"
    }
  },
  "Hotel price": {
    "$type": "string",
    "$value": "5,725",
    "$extensions": {
      "tokenSync.modes": {
        "Hotel 1": "5,725",
        "Hotel 2": "3,037",
        "Hotel 3": "1,782",
        "Hotel 4": "3,567"
      },
      "tokenSync.resolved": {
        "Hotel 1": "5,725",
        "Hotel 2": "3,037",
        "Hotel 3": "1,782",
        "Hotel 4": "3,567"
      },
      "tokenSync.collection": "Hotel card variables"
    }
  },
  "Unavailability banner": {
    "$type": "boolean",
    "$value": true,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": true
      },
      "tokenSync.resolved": {
        "Mode 1": true
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Similar properties": {
    "$type": "boolean",
    "$value": true,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": true
      },
      "tokenSync.resolved": {
        "Mode 1": true
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Room rates": {
    "$type": "boolean",
    "$value": false,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": false
      },
      "tokenSync.resolved": {
        "Mode 1": false
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Date cell": {
    "$type": "number",
    "$value": 0,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": 0
      },
      "tokenSync.resolved": {
        "Mode 1": 0
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Check in": {
    "$type": "string",
    "$value": "10 Mai",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "10 Mai"
      },
      "tokenSync.resolved": {
        "Mode 1": "10 Mai"
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Check out": {
    "$type": "string",
    "$value": "15 Mai",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "15 Mai"
      },
      "tokenSync.resolved": {
        "Mode 1": "15 Mai"
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Choose room": {
    "$type": "string",
    "$value": "Change your dates",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "Change your dates"
      },
      "tokenSync.resolved": {
        "Mode 1": "Change your dates"
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Fontsize": {
    "$type": "number",
    "$value": 18,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": 18
      },
      "tokenSync.resolved": {
        "Mode 1": 18
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Spacing": {
    "$type": "number",
    "$value": 12,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": 12
      },
      "tokenSync.resolved": {
        "Mode 1": 12
      },
      "tokenSync.collection": "Collection"
    }
  },
  "2nd non availability": {
    "$type": "boolean",
    "$value": false,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": false
      },
      "tokenSync.resolved": {
        "Mode 1": false
      },
      "tokenSync.collection": "Collection"
    }
  },
  "State": {
    "$type": "string",
    "$value": "1",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "1"
      },
      "tokenSync.resolved": {
        "Mode 1": "1"
      },
      "tokenSync.collection": "Collection"
    }
  },
  "One ": {
    "$type": "boolean",
    "$value": false,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": false
      },
      "tokenSync.resolved": {
        "Mode 1": false
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Two": {
    "$type": "boolean",
    "$value": false,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": false
      },
      "tokenSync.resolved": {
        "Mode 1": false
      },
      "tokenSync.collection": "Collection"
    }
  },
  "close": {
    "$type": "boolean",
    "$value": true,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": true
      },
      "tokenSync.resolved": {
        "Mode 1": true
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Old price": {
    "$type": "boolean",
    "$value": false,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": false
      },
      "tokenSync.resolved": {
        "Mode 1": false
      },
      "tokenSync.collection": "Collection"
    }
  },
  "New price": {
    "$type": "color",
    "$value": "#2D9F75",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "#2D9F75"
      },
      "tokenSync.resolved": {
        "Mode 1": "#2D9F75"
      },
      "tokenSync.collection": "Collection"
    }
  },
  "old-price": {
    "$type": "color",
    "$value": "#1F2A37",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "#1F2A37"
      },
      "tokenSync.resolved": {
        "Mode 1": "#1F2A37"
      },
      "tokenSync.collection": "Collection"
    }
  },
  "price toast": {
    "$type": "boolean",
    "$value": false,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": false
      },
      "tokenSync.resolved": {
        "Mode 1": false
      },
      "tokenSync.collection": "Collection"
    }
  },
  "refresh block": {
    "$type": "boolean",
    "$value": false,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": false
      },
      "tokenSync.resolved": {
        "Mode 1": false
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Refresh banner": {
    "$type": "boolean",
    "$value": false,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": false
      },
      "tokenSync.resolved": {
        "Mode 1": false
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Text field": {
    "$type": "string",
    "$value": "e.g John",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "e.g John"
      },
      "tokenSync.resolved": {
        "Mode 1": "e.g John"
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Breakfast included tag": {
    "$type": "boolean",
    "$value": false,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": false
      },
      "tokenSync.resolved": {
        "Mode 1": false
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Breakfast and lunch tag": {
    "$type": "boolean",
    "$value": false,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": false
      },
      "tokenSync.resolved": {
        "Mode 1": false
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Pet friendly tag": {
    "$type": "boolean",
    "$value": false,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": false
      },
      "tokenSync.resolved": {
        "Mode 1": false
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Meal plan tag": {
    "$type": "boolean",
    "$value": false,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": false
      },
      "tokenSync.resolved": {
        "Mode 1": false
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Filter tags": {
    "$type": "boolean",
    "$value": false,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": false
      },
      "tokenSync.resolved": {
        "Mode 1": false
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Clear All button": {
    "$type": "boolean",
    "$value": false,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": false
      },
      "tokenSync.resolved": {
        "Mode 1": false
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Left arrow": {
    "$type": "boolean",
    "$value": false,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": false
      },
      "tokenSync.resolved": {
        "Mode 1": false
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Right arrow ": {
    "$type": "boolean",
    "$value": true,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": true
      },
      "tokenSync.resolved": {
        "Mode 1": true
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Before check-in": {
    "$type": "boolean",
    "$value": true,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": true
      },
      "tokenSync.resolved": {
        "Mode 1": true
      },
      "tokenSync.collection": "Collection"
    }
  },
  "After check-out": {
    "$type": "boolean",
    "$value": false,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": false
      },
      "tokenSync.resolved": {
        "Mode 1": false
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Nationaility": {
    "$type": "string",
    "$value": "Select nationality",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "Select nationality"
      },
      "tokenSync.resolved": {
        "Mode 1": "Select nationality"
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Placeholder": {
    "$type": "color",
    "$value": "#9DA4AE",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "#9DA4AE"
      },
      "tokenSync.resolved": {
        "Mode 1": "#9DA4AE"
      },
      "tokenSync.collection": "Collection"
    }
  },
  "AI interactive text": {
    "$type": "string",
    "$value": "Ask anything...",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "Ask anything..."
      },
      "tokenSync.resolved": {
        "Mode 1": "Ask anything..."
      },
      "tokenSync.collection": "Collection"
    }
  },
  "AI interactive button": {
    "$type": "string",
    "$value": "Disabled",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "Disabled"
      },
      "tokenSync.resolved": {
        "Mode 1": "Disabled"
      },
      "tokenSync.collection": "Collection"
    }
  },
  "AI suggested questions": {
    "$type": "boolean",
    "$value": true,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": true
      },
      "tokenSync.resolved": {
        "Mode 1": true
      },
      "tokenSync.collection": "Collection"
    }
  },
  "AI welcome": {
    "$type": "boolean",
    "$value": true,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": true
      },
      "tokenSync.resolved": {
        "Mode 1": true
      },
      "tokenSync.collection": "Collection"
    }
  },
  "AI conversation": {
    "$type": "boolean",
    "$value": false,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": false
      },
      "tokenSync.resolved": {
        "Mode 1": false
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Hotel history": {
    "$type": "boolean",
    "$value": false,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": false
      },
      "tokenSync.resolved": {
        "Mode 1": false
      },
      "tokenSync.collection": "Collection"
    }
  },
  "BBBBBB": {
    "$type": "boolean",
    "$value": true,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": true
      },
      "tokenSync.resolved": {
        "Mode 1": true
      },
      "tokenSync.collection": "Collection"
    }
  },
  "AI Loading": {
    "$type": "string",
    "$value": "3",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "3"
      },
      "tokenSync.resolved": {
        "Mode 1": "3"
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Text ai": {
    "$type": "string",
    "$value": "Default",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "Default"
      },
      "tokenSync.resolved": {
        "Mode 1": "Default"
      },
      "tokenSync.collection": "Collection"
    }
  },
  "AI modal title": {
    "$type": "boolean",
    "$value": false,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": false
      },
      "tokenSync.resolved": {
        "Mode 1": false
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Smart filters text": {
    "$type": "string",
    "$value": "Example: I want a place with great reviews and free cancellation",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "Example: I want a place with great reviews and free cancellation"
      },
      "tokenSync.resolved": {
        "Mode 1": "Example: I want a place with great reviews and free cancellation"
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Smart filters": {
    "$type": "color",
    "$value": "#C6C4CC",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "#C6C4CC"
      },
      "tokenSync.resolved": {
        "Mode 1": "#C6C4CC"
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Filtered hotels": {
    "$type": "boolean",
    "$value": true,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": true
      },
      "tokenSync.resolved": {
        "Mode 1": true
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Search semantic": {
    "$type": "string",
    "$value": "Enter a destination",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "Enter a destination"
      },
      "tokenSync.resolved": {
        "Mode 1": "Enter a destination"
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Search section": {
    "$type": "string",
    "$value": "Manual",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "Manual"
      },
      "tokenSync.resolved": {
        "Mode 1": "Manual"
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Semantic dropdown": {
    "$type": "boolean",
    "$value": false,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": false
      },
      "tokenSync.resolved": {
        "Mode 1": false
      },
      "tokenSync.collection": "Collection"
    }
  },
  "AI semantic text": {
    "$type": "string",
    "$value": "Default",
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": "Default"
      },
      "tokenSync.resolved": {
        "Mode 1": "Default"
      },
      "tokenSync.collection": "Collection"
    }
  },
  "Filter": {
    "$type": "boolean",
    "$value": false,
    "$extensions": {
      "tokenSync.modes": {
        "Mode 1": false
      },
      "tokenSync.resolved": {
        "Mode 1": false
      },
      "tokenSync.collection": "Collection"
    }
  }
}
```
<!-- VARIABLES:END -->
