/* MFA-L01-I01 Plattegrond OEFENSCHIP A (tikopdracht I01-01).
   Bron: content/nl/MFA-L01-medische-uitrusting.md, scherm MFA-L01-S04 (tikopdracht I01-01,
   tikvlakken I01-01-H1 tot en met H6) en de feedback van casus S20 (I01-02-1A, 1B, 1C).
   Indeling volgt beeld MFA-L01-M03. Fictieve plattegrond; DRTC beoordeelt beeld en veiligheidstekens. */
window.MODULE = {
  id: "MFA-L01-I01",
  code: "MFA-L01 Medische uitrusting aan boord",
  title: "Vinden en beschikbaar maken",
  badge: "Tikopdracht",
  footer: "Fictieve plattegrond voor de oefening. Op je eigen schip kunnen de plaatsen anders zijn. Concept, nog niet medisch goedgekeurd.",
  intro: {
    title: "Waar staat het op OEFENSCHIP A?",
    body: [
      "In een noodsituatie wil je niet zoeken. Kies op de plattegrond de plaatsen waar je de medische uitrusting, de AED en de brancard vindt. Gebruik de veiligheidstekens op de plattegrond.",
      "Tik op een ruimte. Je krijgt direct uitleg. Klopt het niet, dan probeer je het opnieuw."
    ]
  },
  zones: [
    { key: "werk", id: "I01-01-H5", label: "Machinekamer\u00ADwerkplaats" },
    { key: "kombuis", id: "I01-01-H4", label: "Kombuis" },
    { key: "zieken", id: "I01-01-H1", label: "Ziekenruimte", sign: "eerstehulp" },
    { key: "brug", id: null, label: "Brug" },
    { key: "gacc", id: "I01-01-H3", label: "Gang bij de accommo\u00ADdatie", sign: "brancard", corridor: true },
    { key: "gbrug", id: "I01-01-H2", label: "Gang bij de brug", sign: "aed", corridor: true },
    { key: "acc", id: null, label: "Accommodatie (hutten)" },
    { key: "verf", id: "I01-01-H6", label: "Verfopslag" }
  ],
  tasks: [
    {
      prompt: "Waar vind je de medische uitrusting?",
      target: "zieken",
      good: "Goed. Daar ligt de uitrusting, met de controlelijst bij de kist.",
      wrong: {
        kombuis: "Daar ligt de medische uitrusting niet en je verliest tijd. Bekijk na aanmonstering zelf waar de uitrusting, de AED en de brancard staan.",
        werk: "Daar ligt de medische uitrusting niet. Let op het teken eerste hulp.",
        _: "Daar ligt de medische uitrusting niet. Let op het teken eerste hulp."
      }
    },
    {
      prompt: "Waar vind je de AED?",
      target: "gbrug",
      good: "Goed. Het teken AED in de gang bij de brug geeft de plaats aan.",
      wrong: { _: "Hier vind je de AED niet. Zoek het teken AED op de plattegrond." }
    },
    {
      prompt: "Waar vind je de brancard?",
      target: "gacc",
      good: "Goed. De aanduiding brancard in de gang bij de accommodatie geeft de plaats aan.",
      wrong: { _: "Hier staat de brancard niet. Zoek de aanduiding brancard op de plattegrond." }
    }
  ],
  end: {
    title: "Je hebt alle drie de plaatsen gevonden",
    body: [
      "Zorg dat je op jouw schip weet:",
      { list: [
        "waar de medische uitrusting, de AED en de brancard staan;",
        "hoe die plaatsen zijn aangeduid;",
        "wie de uitrusting controleert en aanvult;",
        "hoe je meldt wat je hebt gebruikt."
      ] },
      "Bekijk na aanmonstering zelf deze plaatsen. Meld gebruikt, beschadigd of verlopen materiaal direct, zodat het wordt aangevuld."
    ],
    after: "Ga verder met de les onder dit blok."
  }
};
