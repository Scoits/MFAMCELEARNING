/* MC-L04-SL01 Verslechtering in de nacht.
   Bron: articulate/storyline/MC-L04-SL01-verslechtering-nacht.md, versie 0.1 (21 november 2026).
   Alle tekst, waarden, keuzes en feedback komen uit dat script. Fictieve casus.
   Medische review door Mathanje is nog niet uitgevoerd. */
window.MODULE = {
  id: "MC-L04-SL01",
  code: "MC-L04 Verpleegkundige zorg en bewaking",
  title: "Verslechtering in de nacht",
  badge: "Oefenscenario",
  footer: "Fictieve casus. Concept, nog niet medisch goedgekeurd. Oefening, telt niet mee voor de toets.",
  maxPoints: 6,
  steps: 9,
  vars: { Tijdpad: "", Punten: 0, GegevensJuist: 0 },
  start: "intro",
  vitals: {
    columns: [
      { key: "tijd", label: "Tijd" },
      { key: "temp", label: "Temp. (°C)" },
      { key: "pols", label: "Pols" },
      { key: "adem", label: "Ademhaling" },
      { key: "rr", label: "Bloeddruk" },
      { key: "bew", label: "Bewustzijn" }
    ],
    chart: [
      { key: "pols", label: "Pols", color: "#203658" },
      { key: "adem", label: "Ademhaling", color: "#00a1db", dash: "6 4" },
      { key: "rr", label: "Bovendruk", color: "#b45f06", dash: "2 4" }
    ],
    rows: {
      t1800: { tijd: "18.00", temp: "38,4", pols: 94, adem: 18, rr: "128/82", bew: "helder" },
      t2200: { tijd: "22.00", temp: "38,6", pols: 98, adem: 20, rr: "124/80", bew: "helder" },
      t0105: { tijd: "01.05", temp: "39,8", pols: 124, adem: 28, rr: "96/60", bew: "GCS 15, onrustig" },
      t0200: { tijd: "02.00", temp: "39,6", pols: 132, adem: 34, rr: "88/54", bew: "GCS 13" },
      t0230: { tijd: "02.30", temp: null, pols: 120, adem: 28, rr: "98/62", bew: "GCS 15" },
      t0245: { tijd: "02.45", temp: null, pols: 118, adem: 26, rr: "100/64", bew: "GCS 15" },
      t0300: { tijd: "03.00", temp: null, pols: 122, adem: 28, rr: "96/60", bew: "GCS 15" }
    }
  },
  nodes: {
    intro: {
      type: "intro",
      label: "Situatie vooraf",
      title: "Jij hebt de nacht",
      body: [
        "Ruben, matroos van 34 jaar, ligt sinds vanmiddag in de ziekenboeg met koorts en hoesten. Om 18.00 uur heb je overlegd met de Radio Medische Dienst.",
        { msg: "Rust, veel drinken, iedere vier uur pols, ademhaling, bloeddruk, temperatuur en bewustzijn meten, en direct contact opnemen als hij verslechtert. Medicijnen alleen zoals afgesproken.", from: "Advies van 18.00 uur" },
        "Jij hebt de nacht. Het schip is twaalf uur varen van de dichtstbijzijnde haven.",
        { note: "Je maakt steeds een keuze en krijgt direct uitleg. Sommige keuzes hebben gevolgen voor het verloop van de nacht. Duur ongeveer 10 minuten." }
      ],
      button: "Begin de nacht",
      next: "s1"
    },
    s1: {
      type: "choice", step: 1, time: "22.00 uur", label: "Start",
      title: "Je meet zoals afgesproken",
      body: [
        { vitals: ["t1800", "t2200"], highlightLast: true, caption: "Observatielijst van Ruben" },
        "Ruben drinkt goed en heeft om 21.00 uur geplast."
      ],
      question: "Wat doe je nu?",
      options: [
        { label: "Je noteert de waarden, zet water klaar, legt de bel binnen handbereik, zet het slingerschot omhoog en spreekt af dat hij belt als hij zich slechter voelt. Volgende meting om 02.00 uur.", points: 1, next: "s2",
          feedback: "Goed. De waarden zijn bijna gelijk aan 18.00 uur. Dat past bij wat de arts verwachtte. Je zorgt dat hij je kan bereiken." },
        { label: "Je belt nu de Radio Medische Dienst, want hij heeft nog steeds koorts.", points: 0, quality: "mid", next: "s2",
          feedback: "Niet fout, maar niet nodig. De koorts was bekend en de waarden zijn bijna gelijk. Je geeft dit door bij het volgende afgesproken contact. Bij twijfel mag je altijd bellen." },
        { label: "Hij slaapt bijna; je doet de deur dicht en gaat zelf slapen tot 06.00 uur.", points: 0, next: "s2",
          feedback: "Niet goed. Je had met de arts afgesproken om iedere vier uur te meten. Zonder bel en zonder controle merk je een verslechtering niet op." }
      ]
    },
    s2: {
      type: "choice", step: 2, time: "01.00 uur", label: "De bel",
      title: "De bel gaat",
      body: ["Ruben ligt te rillen onder twee dekens. Hij zegt dat hij het koud heeft en moeilijk ademt."],
      question: "Wat doe je?",
      options: [
        { label: "Je meet direct alle vitale functies en het bewustzijn, en kijkt naar huid, ademhaling en hoeveel hij heeft geplast.", points: 1, set: { Tijdpad: "juist" }, next: "s3",
          feedback: "Goed. Je meet eerder dan afgesproken omdat hij verandert. Rillen kan betekenen dat de koorts stijgt." },
        { label: "Je geeft hem een extra deken en zegt dat je om 02.00 uur terugkomt om te meten.", points: 0, set: { Tijdpad: "laat" }, next: "s2b",
          feedback: "Niet goed. Hij klaagt over benauwdheid. Wacht niet op het volgende afgesproken tijdstip als de patiënt verandert." },
        { label: "Je geeft hem een koortsremmer uit de medicijnkist.", points: 0, set: { Tijdpad: "laat" }, next: "s2b",
          feedback: "Niet goed. Je geeft alleen medicijnen die de arts heeft geadviseerd. Je weet ook nog niet wat er aan de hand is: eerst meten." }
      ]
    },
    s2b: {
      type: "info", step: 2, time: "02.00 uur", label: "Een uur later",
      title: "Je komt terug",
      body: ["Ruben reageert traag en noemt je bij de verkeerde naam. Zijn huid voelt koel en klam aan."],
      feedback: "Een uur eerder had je dit al kunnen zien. Bij een patiënt die snel verslechtert, kan dat uur verschil maken.",
      feedbackType: "bad",
      button: "Meet nu",
      next: "s3"
    },
    s3: {
      type: "choice", step: 3, time: { if: { var: "Tijdpad", eq: "juist" }, then: "01.05 uur", else: "02.00 uur" }, label: "De metingen",
      title: "Je meet alle waarden",
      body: [
        { if: { var: "Tijdpad", eq: "juist" }, blocks: [
          { vitals: ["t1800", "t2200", "t0105"], highlightLast: true, chart: true, caption: "Observatielijst van 18.00 uur tot nu" },
          "Zijn lippen zijn grauw. Hij heeft sinds 21.00 uur niet geplast."
        ] },
        { if: { var: "Tijdpad", eq: "laat" }, blocks: [
          { vitals: ["t1800", "t2200", "t0200"], highlightLast: true, chart: true, caption: "Observatielijst van 18.00 uur tot nu" },
          "Hij heeft sinds 21.00 uur niet geplast."
        ] }
      ],
      question: "Wat betekenen deze waarden?",
      options: [
        { label: "De koorts verklaart de snelle pols. Je noteert alles en belt om 08.00 uur zoals afgesproken.", points: 0, next: "s3a",
          feedback: "Niet goed. Koorts maakt de pols ongeveer 10 slagen sneller per halve graad boven 38. Deze pols stijgt veel meer. Samen met de snelle ademhaling, de dalende bloeddruk en het niet plassen wijst dit op een ernstige verslechtering, mogelijk shock door een infectie." },
        { label: "Hij verslechtert duidelijk: pols en ademhaling stijgen, de bloeddruk daalt en hij plast niet. Je neemt direct contact op met de Radio Medische Dienst.", points: 1, next: "s4",
          feedback: "Goed. Je kijkt naar de richting van de metingen en herkent de alarmsignalen. Dit meld je direct, niet bij het volgende afgesproken contact." },
        { label: "Je laat hem rechtop zitten en een glas water drinken en meet over een uur opnieuw.", points: 0, next: "s3a",
          feedback: "Niet goed. Drinken en rechtop zitten kunnen helpen, maar deze waarden vragen nu om medisch advies." }
      ]
    },
    s3a: {
      type: "pick", step: 3, label: "Terug naar de lijn",
      title: "Kijk nog eens naar de observatielijst",
      body: [
        { vitals: ["t1800", "t2200", { key: "t0105", if: { var: "Tijdpad", eq: "juist" } }, { key: "t0200", if: { var: "Tijdpad", eq: "laat" } }], highlightLast: true, chart: true }
      ],
      question: "Welke drie waarden zijn sinds 22.00 uur het sterkst veranderd? Kies er drie.",
      count: 3,
      options: [
        { label: "Temperatuur", correct: false },
        { label: "Pols", correct: true },
        { label: "Ademhaling", correct: true },
        { label: "Bloeddruk", correct: true },
        { label: "Bewustzijn", correct: false }
      ],
      feedbackFull: "Deze combinatie meld je direct.",
      feedbackPartial: "Pols, ademhaling en bloeddruk zijn het sterkst veranderd. Deze combinatie meld je direct.",
      button: "Naar het gesprek",
      next: "s4"
    },
    s4: {
      type: "pick", step: 4, label: "Het gesprek voorbereiden",
      title: "Zet de gegevens klaar",
      body: ["Voordat je belt, zet je de gegevens klaar."],
      question: "Kies de vijf gegevens die de arts nu het eerst nodig heeft.",
      count: 5, var: "GegevensJuist", bonus: 1,
      options: [
        { label: "De waarden van nu met tijdstip, naast die van 18.00 en 22.00 uur", correct: true },
        { label: "Wat hij gisteren heeft gegeten", correct: false },
        { label: "Wat er sinds 22.00 uur is veranderd: rillen, benauwd, onrustig of verward, grauwe lippen", correct: true },
        { label: "Hoeveel hij heeft gedronken en dat hij sinds 21.00 uur niet heeft geplast", correct: true },
        { label: "Hoe lang hij al bij de rederij werkt", correct: false },
        { label: "Welke medicijnen hij heeft gekregen en wanneer", correct: true },
        { label: "Welke film hij gisteravond keek", correct: false },
        { label: "Het advies van 18.00 uur en wat je daarvan hebt gedaan", correct: true }
      ],
      feedbackFull: "Volledig. De arts ziet in één keer het verloop.",
      feedbackPartial: "De arts mist nu een deel van het beeld. Bekijk de juiste kaartjes.",
      button: "Bel de arts",
      next: "s5"
    },
    s5: {
      type: "choice", step: 5, label: "Het advies",
      title: "De arts schat de situatie als ernstig in",
      body: [
        { msg: "Leg Ruben halfzittend, geef zuurstof en meet iedere 15 minuten pols, ademhaling, bloeddruk en bewustzijn. Schrijf alles op. Medicatie volgens mijn instructie. Ik bespreek met de kapitein een medische evacuatie.", from: "Arts Radio Medische Dienst (fictief)" }
      ],
      question: "Je moet de kapitein inlichten. Wat doe je met Ruben?",
      options: [
        { label: "Je vraagt een collega bij Ruben te blijven, legt uit wat hij moet meten en wanneer hij je roept, en gaat dan naar de brug.", points: 1, next: "s6",
          feedback: "Goed. Een patiënt die verslechtert, laat je niet alleen. Je draagt duidelijk over." },
        { label: "Je loopt snel naar de brug; Ruben heeft de bel.", points: 0, next: "s5a",
          feedback: "Niet goed. Ruben is onrustig en kan suf worden. Dan kan hij niet bellen. Laat hem niet alleen." },
        { label: "Je belt de brug vanuit de ziekenboeg en blijft zelf bij Ruben.", points: 1, verdict: "Ook een goede keuze", next: "s6",
          feedback: "Ook goed, als dat aan boord kan. Je blijft bij de patiënt en de kapitein is op de hoogte." }
      ]
    },
    s5a: {
      type: "info", step: 5, label: "Terug in de ziekenboeg",
      title: "Na tien minuten kom je terug",
      body: ["Ruben ligt half uit zijn kooi en reageert traag. Je meet direct opnieuw, vraagt een collega te blijven en belt de arts met de nieuwe waarden."],
      next: "s6"
    },
    s6: {
      type: "choice", step: 6, time: "03.00 uur", label: "Bewaken tot de evacuatie",
      title: "De metingen staan iedere 15 minuten in de lijst",
      body: [
        { vitals: ["t0230", "t0245", "t0300"], highlightLast: true, caption: "Laatste drie metingen, iedere 15 minuten" }
      ],
      question: "Wat geef je door bij het volgende contact met de arts?",
      options: [
        { label: "“Hij is stabiel slecht: pols rond de 120, ademhaling rond de 27, bovendruk rond de 98, helder. Hij heeft om 02.30 uur 100 ml geplast.”", points: 1, next: "s7",
          feedback: "Goed. Je geeft de richting en de getallen. De arts kan daarmee beslissen." },
        { label: "“Het gaat wel iets beter, geloof ik.”", points: 0, next: "s7",
          feedback: "Niet goed. Zonder getallen en tijdstip kan de arts het verloop niet beoordelen." }
      ]
    },
    s7: {
      type: "checklist", step: 7, time: "06.30 uur", label: "Overdracht",
      title: "Ruben wordt overgedragen voor de evacuatie",
      body: ["Je geeft het dossier mee. Vink aan wat je meegeeft.", { note: "De evacuatie zelf oefen je in les MC-L08." }],
      items: [
        "Patiëntevaluatieformulier",
        "Observatielijst",
        "Gegeven medicijnen met tijd",
        "Adviezen van de arts met tijd en naam",
        "Persoonlijke medicijnen en documenten"
      ],
      next: { if: { var: "Tijdpad", eq: "laat" }, then: "s8", else: "s9" }
    },
    s8: {
      type: "info", step: 8, label: "Wat als",
      title: "Je hebt om 01.00 uur gewacht",
      body: ["Daardoor zag je de verslechtering een uur later. Bij shock door een infectie kan iedere stap later de kans op herstel verkleinen. Meet eerder dan afgesproken als de patiënt klaagt of verandert."],
      button: "Naar de debriefing",
      next: "s9"
    },
    s9: {
      type: "debrief", label: "Debriefing",
      title: "De nacht in één overzicht",
      extra: [
        { vitals: ["t1800", "t2200", { key: "t0105", if: { var: "Tijdpad", eq: "juist" } }, { key: "t0200", if: { var: "Tijdpad", eq: "laat" } }, "t0230", "t0245", "t0300"], chart: true, caption: "Observatielijst van de hele nacht" }
      ],
      learn: [
        "Eén meting zegt weinig; de richting van de metingen zegt veel.",
        "Meet direct als de patiënt klaagt of verandert, en meld een verslechtering direct.",
        "Een patiënt die verslechtert, laat je niet alleen; draag duidelijk over."
      ],
      after: "Op de praktijkdag oefen je een vergelijkbare situatie. Ga verder met de les onder dit blok."
    }
  }
};
