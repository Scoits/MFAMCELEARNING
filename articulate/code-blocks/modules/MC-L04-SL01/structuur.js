/* MC-L04-SL01 Verslechtering in de nacht.
   Bron: articulate/storyline/MC-L04-SL01-verslechtering-nacht.md, versie 0.1 (21 november 2026).
   Alle tekst, waarden, keuzes en feedback komen uit dat script. Fictieve casus.
   Medische review door Mathanje is nog niet uitgevoerd.
   Structuur zonder tekst; de tekst staat in tekst.<taal>.json. */
window.MODULE = {
  "id": "MC-L04-SL01",
  "version": "0.2",
  "maxPoints": 6,
  "steps": 9,
  "vars": {
    "Tijdpad": "",
    "Punten": 0,
    "GegevensJuist": 0
  },
  "start": "intro",
  "vitals": {
    "columns": [
      {
        "key": "tijd"
      },
      {
        "key": "temp"
      },
      {
        "key": "pols"
      },
      {
        "key": "adem"
      },
      {
        "key": "rr"
      },
      {
        "key": "bew"
      }
    ],
    "chart": [
      {
        "key": "pols",
        "color": "#203658"
      },
      {
        "key": "adem",
        "color": "#0072a3",
        "dash": "6 4"
      },
      {
        "key": "rr",
        "color": "#b45f06",
        "dash": "2 4"
      }
    ],
    "rows": {
      "t1800": {
        "pols": 94,
        "adem": 18
      },
      "t2200": {
        "pols": 98,
        "adem": 20
      },
      "t0105": {
        "pols": 124,
        "adem": 28
      },
      "t0200": {
        "pols": 132,
        "adem": 34
      },
      "t0230": {
        "temp": null,
        "pols": 120,
        "adem": 28
      },
      "t0245": {
        "temp": null,
        "pols": 118,
        "adem": 26
      },
      "t0300": {
        "temp": null,
        "pols": 122,
        "adem": 28
      }
    }
  },
  "nodes": {
    "intro": {
      "type": "intro",
      "body": [
        null,
        {},
        null,
        {}
      ],
      "next": "s1"
    },
    "s1": {
      "type": "choice",
      "step": 1,
      "body": [
        {
          "vitals": [
            "t1800",
            "t2200"
          ],
          "highlightLast": true
        },
        null
      ],
      "options": [
        {
          "points": 1,
          "next": "s2"
        },
        {
          "points": 0,
          "quality": "mid",
          "next": "s2"
        },
        {
          "points": 0,
          "next": "s2"
        }
      ]
    },
    "s2": {
      "type": "choice",
      "step": 2,
      "body": [
        null
      ],
      "options": [
        {
          "points": 1,
          "set": {
            "Tijdpad": "juist"
          },
          "next": "s3"
        },
        {
          "points": 0,
          "set": {
            "Tijdpad": "laat"
          },
          "next": "s2b"
        },
        {
          "points": 0,
          "set": {
            "Tijdpad": "laat"
          },
          "next": "s2b"
        }
      ]
    },
    "s2b": {
      "type": "info",
      "step": 2,
      "body": [
        null
      ],
      "next": "s3"
    },
    "s3": {
      "type": "choice",
      "step": 3,
      "time": {
        "if": {
          "var": "Tijdpad",
          "eq": "juist"
        }
      },
      "body": [
        {
          "if": {
            "var": "Tijdpad",
            "eq": "juist"
          },
          "blocks": [
            {
              "vitals": [
                "t1800",
                "t2200",
                "t0105"
              ],
              "highlightLast": true,
              "chart": true
            },
            null
          ]
        },
        {
          "if": {
            "var": "Tijdpad",
            "eq": "laat"
          },
          "blocks": [
            {
              "vitals": [
                "t1800",
                "t2200",
                "t0200"
              ],
              "highlightLast": true,
              "chart": true
            },
            null
          ]
        }
      ],
      "options": [
        {
          "points": 0,
          "next": "s3a"
        },
        {
          "points": 1,
          "next": "s4"
        },
        {
          "points": 0,
          "next": "s3a"
        }
      ]
    },
    "s3a": {
      "type": "pick",
      "step": 3,
      "body": [
        {
          "vitals": [
            "t1800",
            "t2200",
            {
              "key": "t0105",
              "if": {
                "var": "Tijdpad",
                "eq": "juist"
              }
            },
            {
              "key": "t0200",
              "if": {
                "var": "Tijdpad",
                "eq": "laat"
              }
            }
          ],
          "highlightLast": true,
          "chart": true
        }
      ],
      "count": 3,
      "options": [
        {
          "correct": false
        },
        {
          "correct": true
        },
        {
          "correct": true
        },
        {
          "correct": true
        },
        {
          "correct": false
        }
      ],
      "next": "s4"
    },
    "s4": {
      "type": "pick",
      "step": 4,
      "body": [
        null
      ],
      "count": 5,
      "var": "GegevensJuist",
      "bonus": 1,
      "options": [
        {
          "correct": true
        },
        {
          "correct": false
        },
        {
          "correct": true
        },
        {
          "correct": true
        },
        {
          "correct": false
        },
        {
          "correct": true
        },
        {
          "correct": false
        },
        {
          "correct": true
        }
      ],
      "next": "s5"
    },
    "s5": {
      "type": "choice",
      "step": 5,
      "body": [
        {}
      ],
      "options": [
        {
          "points": 1,
          "next": "s6"
        },
        {
          "points": 0,
          "next": "s5a"
        },
        {
          "points": 1,
          "next": "s6"
        }
      ]
    },
    "s5a": {
      "type": "info",
      "step": 5,
      "body": [
        null
      ],
      "next": "s6"
    },
    "s6": {
      "type": "choice",
      "step": 6,
      "body": [
        {
          "vitals": [
            "t0230",
            "t0245",
            "t0300"
          ],
          "highlightLast": true
        }
      ],
      "options": [
        {
          "points": 1,
          "next": "s7"
        },
        {
          "points": 0,
          "next": "s7"
        }
      ]
    },
    "s7": {
      "type": "checklist",
      "step": 7,
      "body": [
        null,
        {}
      ],
      "items": [
        null,
        null,
        null,
        null,
        null
      ],
      "next": {
        "if": {
          "var": "Tijdpad",
          "eq": "laat"
        },
        "then": "s8",
        "else": "s9"
      }
    },
    "s8": {
      "type": "info",
      "step": 8,
      "body": [
        null
      ],
      "next": "s9"
    },
    "s9": {
      "type": "debrief",
      "extra": [
        {
          "vitals": [
            "t1800",
            "t2200",
            {
              "key": "t0105",
              "if": {
                "var": "Tijdpad",
                "eq": "juist"
              }
            },
            {
              "key": "t0200",
              "if": {
                "var": "Tijdpad",
                "eq": "laat"
              }
            },
            "t0230",
            "t0245",
            "t0300"
          ],
          "chart": true
        }
      ],
      "learn": [
        null,
        null,
        null
      ]
    }
  }
};
