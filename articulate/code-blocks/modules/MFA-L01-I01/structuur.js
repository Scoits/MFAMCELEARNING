/* MFA-L01-I01 Plattegrond OEFENSCHIP A (tikopdracht I01-01).
   Bron: content/nl/MFA-L01-medische-uitrusting.md, scherm MFA-L01-S04 (tikopdracht I01-01,
   tikvlakken I01-01-H1 tot en met H6) en de feedback van casus S20 (I01-02-1A, 1B, 1C).
   Indeling volgt beeld MFA-L01-M03. Fictieve plattegrond; DRTC beoordeelt beeld en veiligheidstekens.
   Structuur zonder tekst; de tekst staat in tekst.<taal>.json. */
window.MODULE = {
  "id": "MFA-L01-I01",
  "version": "0.2",
  "map": {
    "signs": {
      "eerstehulp": {},
      "aed": {},
      "brancard": {}
    }
  },
  "intro": {
    "body": [
      null,
      null
    ]
  },
  "zones": [
    {
      "key": "werk",
      "id": "I01-01-H5"
    },
    {
      "key": "kombuis",
      "id": "I01-01-H4"
    },
    {
      "key": "zieken",
      "id": "I01-01-H1",
      "sign": "eerstehulp"
    },
    {
      "key": "brug",
      "id": null
    },
    {
      "key": "gacc",
      "id": "I01-01-H3",
      "sign": "brancard",
      "corridor": true
    },
    {
      "key": "gbrug",
      "id": "I01-01-H2",
      "sign": "aed",
      "corridor": true
    },
    {
      "key": "acc",
      "id": null
    },
    {
      "key": "verf",
      "id": "I01-01-H6"
    }
  ],
  "tasks": [
    {
      "target": "zieken",
      "wrong": {}
    },
    {
      "target": "gbrug",
      "wrong": {}
    },
    {
      "target": "gacc",
      "wrong": {}
    }
  ],
  "end": {
    "body": [
      null,
      {
        "list": [
          null,
          null,
          null,
          null
        ]
      },
      null
    ]
  }
};
