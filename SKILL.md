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
Compiled from this file's Variables section (preview fingerprint 9a04b45e).
86 tokens, 5 collection(s), 7 mode(s): Dark theme, Hotel 1, Hotel 2, Hotel 3, Hotel 4, Light theme, Mode 1.
<!-- GENERATED:END -->

## What this system contains

<!-- CONTENTS:START -- do not edit, overwritten by .github/scripts/recompile.mjs -->
Not yet compiled.
<!-- CONTENTS:END -->

## What this system does NOT publish

<!-- MISSING:START -- do not edit, overwritten by .github/scripts/recompile.mjs -->
Not yet compiled.
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
No issues detected.
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "e296b6f03a6e29de51180db5111b2305f6ecb707"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Typography Variables",
      "tokenSync.figmaKey": "cf65098768c8fba99902815d3d3a9e07f0a71a6a"
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
        "tokenSync.scopes": [
          "ALL_SCOPES"
        ],
        "tokenSync.collection": "Typography Variables",
        "tokenSync.figmaKey": "89cceecef21e1c5738b6af0471139c188874ea37"
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
        "tokenSync.scopes": [
          "ALL_SCOPES"
        ],
        "tokenSync.collection": "Typography Variables",
        "tokenSync.figmaKey": "f50d1fb8a35d9ef981541b627bca963f3e9097a7"
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
        "tokenSync.scopes": [
          "ALL_SCOPES"
        ],
        "tokenSync.collection": "Typography Variables",
        "tokenSync.figmaKey": "8f179e2db9180bd590559f43825c06ee217972fa"
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
        "tokenSync.scopes": [
          "ALL_SCOPES"
        ],
        "tokenSync.collection": "Typography Variables",
        "tokenSync.figmaKey": "0465c33912e6c101c70f385b2a42a58aea29eec9"
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
        "tokenSync.scopes": [
          "ALL_SCOPES"
        ],
        "tokenSync.collection": "Typography Variables",
        "tokenSync.figmaKey": "8ed720d33e292fed936f4af67ad03844aab7d14c"
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
        "tokenSync.scopes": [
          "ALL_SCOPES"
        ],
        "tokenSync.collection": "Typography Variables",
        "tokenSync.figmaKey": "f267c8eaa2fb6c92caa8a92edd05f93678e5d699"
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
        "tokenSync.scopes": [
          "ALL_SCOPES"
        ],
        "tokenSync.collection": "Typography Variables",
        "tokenSync.figmaKey": "7aa55717ffa62fff0130ffb19f4ca3272d8d5da3"
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
        "tokenSync.scopes": [
          "ALL_SCOPES"
        ],
        "tokenSync.collection": "Typography Variables",
        "tokenSync.figmaKey": "673a2013672e423e5db9cb580f2895d0ec331935"
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
        "tokenSync.scopes": [
          "ALL_SCOPES"
        ],
        "tokenSync.collection": "Typography Variables",
        "tokenSync.figmaKey": "9e154122c5c6ba5abe616e5008d2e397c6c9b3e5"
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
        "tokenSync.scopes": [
          "ALL_SCOPES"
        ],
        "tokenSync.collection": "Typography Variables",
        "tokenSync.figmaKey": "5b5f9db4efa86c67fef63a1714d9dbf6ee54f823"
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
        "tokenSync.scopes": [
          "ALL_SCOPES"
        ],
        "tokenSync.collection": "Typography Variables",
        "tokenSync.figmaKey": "cd92419bffc48026e4595a2da99d6216e3625e27"
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
        "tokenSync.scopes": [
          "ALL_SCOPES"
        ],
        "tokenSync.collection": "Typography Variables",
        "tokenSync.figmaKey": "c41d060f7781ebd598292e24867eec3a25ecf753"
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
        "tokenSync.scopes": [
          "ALL_SCOPES"
        ],
        "tokenSync.collection": "Typography Variables",
        "tokenSync.figmaKey": "8d08a4862fa85a23282098cec39d7f5ef7a9b3b8"
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
        "tokenSync.scopes": [
          "ALL_SCOPES"
        ],
        "tokenSync.collection": "Typography Variables",
        "tokenSync.figmaKey": "67e6d281edbcd115fecfb0c5ee1284d43baaa4c6"
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
        "tokenSync.scopes": [
          "ALL_SCOPES"
        ],
        "tokenSync.collection": "Typography Variables",
        "tokenSync.figmaKey": "803ba6333ad90e40743480e1e0899154dc119784"
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
        "tokenSync.scopes": [
          "ALL_SCOPES"
        ],
        "tokenSync.collection": "Typography Variables",
        "tokenSync.figmaKey": "146ec069fa46689d5135ad9765577c70b54e8154"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Dates",
      "tokenSync.figmaKey": "0b05a6deac3bbebfd31902dd64ce26bfb67a2ea6"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Dates",
      "tokenSync.figmaKey": "5f2234541a84b5d12b3c6274369387900f559a14"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Dates",
      "tokenSync.figmaKey": "db671b05d24c815e5196cee57490bfefbccec235"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Dates",
      "tokenSync.figmaKey": "607e6d393cceca591cafc5bbae8409e70e934152"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Dates",
      "tokenSync.figmaKey": "5019633e0f79846caa01b618b50f78f2fca3125b"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Dates",
      "tokenSync.figmaKey": "9a7f40526dd81f73cf7b5fcf67b432eccbb146d4"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Dates",
      "tokenSync.figmaKey": "7e017e1d23ba66d33139f80f331c3592d8ed4ad7"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Dates",
      "tokenSync.figmaKey": "64ab2d33242d40e9051d40adc538dc1c56338689"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Theme",
      "tokenSync.figmaKey": "224697b9191c3bf624a071f35159e7901ec1bd39"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Hotel card variables",
      "tokenSync.figmaKey": "709abd98e81b47176df66b53faedff4b90686f70"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Hotel card variables",
      "tokenSync.figmaKey": "217fdc55b51bc6fe97ae43157204d44dba46c489"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Hotel card variables",
      "tokenSync.figmaKey": "5af70472edd7c958d43a9d0756f278747154b2d8"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Hotel card variables",
      "tokenSync.figmaKey": "1546cdd4eeea37189bcb79d84900cd6604931ada"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Hotel card variables",
      "tokenSync.figmaKey": "fdf0fe3c3e5558a22de13e31590c55c37c467a2f"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Hotel card variables",
      "tokenSync.figmaKey": "47c733d333052fd55545f47cd99a5245c0218221"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Hotel card variables",
      "tokenSync.figmaKey": "a0ece3ae1f05ed319a7260e06d6edf2252eeec5d"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Hotel card variables",
      "tokenSync.figmaKey": "84677cfa244e47d0f4f45971c942693eafeb5a75"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "c7b16d465a619d552d21b5f3000b10813e112f93"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "0a50e8a2285ea7bc61b02a79b36a96ac0c6a227b"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "0f7bce10ff7138fab750c1a6958896cedf13d883"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "df8e8b984e4568544401b5cec5ff6086d9d858af"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "06225a2f7d8653aa78cf7cc0a09c9554358d727c"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "338f07c6aea722e6034ff471154d07ac6fe323aa"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "377358097614ec94f985f72214c9e01930286bc1"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "6765de2c83ee0ec478c49b7b501ff4105fa97508"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "e807d7403de23d23e379505b702b0b49beea3df9"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "244f4bc288dc6629bd5bbca6777f8c289fae5779"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "56de5097791f55bbbd60f7a539522d7d76083682"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "56d99dbf7fa7bb6a71ff06c78a279f60358da752"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "9a6d73493b5f4ee787ca95e6c80e0ddc9fd558f7"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "cc1c49f37765e4a05523a0aede6332b70dbb59b9"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "406bd1d4c4d729aef3b61e72beb153935dae6afe"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "89405de9c2b221ca78521f29d9f9f7811fd9c7d9"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "766bb4ab1564d0b694cf7fea94f2f42ff1f74afd"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "9b1c06745e808ec5d2fe33e42f8ec57559e976da"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "4345bfbcc34fd8d6a448fac550e8504601da6883"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "a49c2dcae96895f1c19449706dcb8d608d395a88"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "40c418aebdebd3f5febbae004f429590269154db"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "6a2e0db6dbedf325d20e733aad1f02931fa76d22"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "cd19ceaf99ff233b96b6cedc137eab1c80d85a35"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "380d47fb14f9fc08ecdfdc14b6c3246d5a158739"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "d54937347d5e3b753e73197e5fbef57accea6cc3"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "e1e84196f03df70ed660d1e4cada4995f53993f2"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "0186e8bc9181f6f2210c335fd822e8a4b9394893"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "282e8c390d3aa4dbfc546f00bdd8165604ff9d99"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "a8bc96e76c4c040a30a20746a385e1980a2c76f9"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "7eac9f6a586fa33f4589b02b918f2de67629d400"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "885cd7deeb1679f67f7544a858f72c52380ed17e"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "04e30fa5aeea14978ea319bede76ce4f7aed0663"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "d3795160ef5ade0e136143a7f7b4ead762d54321"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "c9471bc1c20faf1e22bbca32a499c77ce8534675"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "61ea4a5d7b3bcfac3568bb271e445e4c919a4d67"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "f83d83603b9fb56a9d1bf220961100bbf9969d25"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "170d9af35438b9193ade9271c83960a74ab13830"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "cda8497288ba29748a3bfadf14fd9707e2288e88"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "57b990f41ed0e7e2cf397234da296f17340ec4f2"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "a15d797b41933330ed0b925994b0ccf219993c2f"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "79f9a54ab5c0aa44a2cfa20a1b06708ed0cb5dab"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "e3e8c0dd2bc55b6e4273501ec5d3e40e689ac5cd"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "12f8186062e35eb7c3216f8ad4368341005cebbc"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "3b574ee1521e21d8f8d22e09337595c16d22e18c"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "c8da8e73b9ac2288de1f9fbb7215445abb36a4bb"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "6d65f1cce2f9095d5cde954ca27d542f15488cc6"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "5b04c3fb0ee106de92882a6f72254ed078878b22"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "4dd0b5c9e0d59d238b79dd7a508857231be7a082"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "8a51fa88b91c034358e4a4cf8bda07a807e74889"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "d51f290d825ec40fa70596a7ed9a9c2bb839de50"
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
      "tokenSync.scopes": [
        "ALL_SCOPES"
      ],
      "tokenSync.collection": "Collection",
      "tokenSync.figmaKey": "ef2e078b2a49d0c0155d1acd4379242829bdfd9e"
    }
  }
}
```
<!-- VARIABLES:END -->
