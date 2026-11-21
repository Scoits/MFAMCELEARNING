/* MFA-L07-SL01 Het RMD-gesprek.
   Bron: articulate/storyline/MFA-L07-SL01-rmd-gesprek.md, versie 0.1 (21 november 2026),
   met de bouwlijst MFA-L07-SL01-bouwlijst.csv. Alle tekst, keuzes en feedback komen uit dat script.
   Fictieve casus. Mathanje heeft de medische inhoud nog niet beoordeeld (reviewvraag R122).
   Punten 0 tot 8, alleen bij de eerste poging op een scherm. Afronding bij het bereiken van scherm 9. */
window.MODULE = {
  id: "MFA-L07-SL01",
  version: "0.1",
  code: "MFA-L07 Radiomedisch advies",
  title: "Het RMD-gesprek",
  badge: "Oefenscenario",
  footer: "Fictieve casus. Concept, nog niet medisch goedgekeurd. Oefening, telt niet mee voor de toets.",
  maxPoints: 8,
  steps: 9,
  vars: { Punten: 0, Omweg: 0 },
  start: "intro",
  nodes: {
    intro: {
      type: "intro",
      label: "Situatie vooraf",
      title: "Joost is gevallen",
      body: [
        { note: "Concept: de medische inhoud van dit scenario is nog niet beoordeeld door de medisch adviseur. De casus is fictief." },
        "OEFENSCHIP A vaart op de Noordzee. Om 15.40 UTC valt Joost van een ladder in het ruim, ongeveer twee meter. Hij stoot zijn hoofd en zijn rechterpols.",
        "Een collega heeft de eerste hulp gegeven en de kapitein gewaarschuwd. Joost is aanspreekbaar. Hij zegt dat hij hoofdpijn heeft en dat zijn pols pijn doet.",
        "De kapitein wil medisch advies. Jij zet de gegevens klaar.",
        { note: "Je maakt steeds een keuze en krijgt direct uitleg. Soms probeer je het opnieuw of maak je een omweg." }
      ],
      button: "Start",
      next: "s1"
    },
    s1: {
      type: "choice", step: 1, label: "Wie doet wat?",
      title: "De taakverdeling",
      body: [{ msg: "Sanne legt contact met de Kustwacht voor medisch advies. Jij zorgt voor de gegevens.", from: "Kapitein" }],
      question: "Wat doe je?",
      options: [
        { label: "Je pakt de RMA-vragenlijst en zet de gegevens klaar, terwijl Sanne contact legt.", points: 1, next: "s2",
          feedback: "Goed. Sanne voert de radiocommunicatie. Jij zorgt dat de gegevens klaarliggen als de arts aan de lijn komt." },
        { label: "Je zegt tegen Sanne dat ze moet wachten tot de vragenlijst helemaal is ingevuld.", points: 0, next: "s1b",
          feedback: "Niet goed. De voorbereiding is een hulpmiddel, geen wachtrij. Contact leggen en gegevens klaarzetten gebeuren tegelijk." },
        { label: "Je neemt de radio van Sanne over, want jij weet het meest over Joost.", points: 0, next: "s1b",
          feedback: "Niet goed. De radiocommunicatie loopt via de opvarende met het GMDSS-certificaat. Jij werkt met haar samen en geeft de medische gegevens door." }
      ]
    },
    s1b: {
      type: "info", step: 1, label: "Terug naar de taakverdeling",
      title: "Sanne legt het contact",
      body: ["Sanne legt het contact. Jij zet de gegevens klaar."],
      inc: { Omweg: 1 },
      next: "s2"
    },
    s2: {
      type: "choice", step: 2, label: "Wat weet je zeker?",
      title: "De oefenkaart",
      body: [
        { kv: [
          ["Schip", "OEFENSCHIP A, Noordzee"],
          ["Tijdstip", "15.40 UTC"],
          ["Wat is er gebeurd", "Val van een ladder in het ruim, ongeveer twee meter"],
          ["Letsel", "Hoofd en rechterpols gestoten"],
          ["Letterlijke klachten", "“Hoofdpijn” en “pols doet pijn”"],
          ["Ademfrequentie", "Nog niet gemeten"],
          ["Medicijngebruik", "Nog niet bevestigd"]
        ] }
      ],
      question: "Wat zet je bij de ademfrequentie?",
      options: [
        { label: "Een gebruikelijke waarde, zodat de lijst compleet lijkt.", points: 0, retry: true,
          feedback: "Niet goed. De arts gaat dan uit van een waarde die niemand heeft gemeten." },
        { label: "“Nog niet gemeten”, en je vraagt de collega bij Joost om de ademhaling te tellen.", points: 1, next: "s3",
          feedback: "Goed. Je maakt zichtbaar wat onbekend is en laat het gericht aanvullen." },
        { label: "Je laat het vak leeg.", points: 0, retry: true,
          feedback: "Niet goed. Een leeg vak zegt niet of je het vergeten bent of nog niet weet. Schrijf op dat het nog niet is gemeten." }
      ]
    },
    s3: {
      type: "choice", step: 3, label: "De opening van het gesprek",
      title: "De arts is aan de lijn",
      body: [{ msg: "De arts van de Radio Medische Dienst is aan de lijn.", from: "Sanne, tweede stuurman" }],
      question: "Welke opening geef je Sanne door?",
      options: [
        { label: "“OEFENSCHIP A. Om 15.40 UTC is een matroos ongeveer twee meter gevallen. Hij heeft zijn hoofd en rechterpols gestoten. Hij zegt dat hij hoofdpijn heeft en dat zijn pols pijn doet. De ademfrequentie en zijn medicijnen worden nog nagegaan.”", points: 1, next: "s4",
          feedback: "Goed. Je geeft wat er is gebeurd, wanneer, de letterlijke klachten en wat nog onbekend is." },
        { label: "“Een matroos heeft een hersenschudding en een gebroken pols.”", points: 0, next: "s3b",
          feedback: "Niet goed. Dat is een diagnose die niemand heeft gesteld. Geef de feiten en laat de arts beoordelen." },
        { label: "“Er is iemand gevallen, kunt u helpen?”", points: 0, quality: "mid", verdict: "Te weinig", next: "s3b",
          feedback: "Te weinig. De arts moet eerst alles vragen wat jij al weet. Dat kost tijd." }
      ]
    },
    s3b: {
      type: "info", step: 3, label: "Opnieuw formuleren",
      title: "De arts vraagt door",
      body: [
        { msg: "Wat is er precies gebeurd, en wanneer?", from: "Arts Radio Medische Dienst" },
        "Je geeft alsnog de volledige opening: “OEFENSCHIP A. Om 15.40 UTC is een matroos ongeveer twee meter gevallen. Hij heeft zijn hoofd en rechterpols gestoten. Hij zegt dat hij hoofdpijn heeft en dat zijn pols pijn doet. De ademfrequentie en zijn medicijnen worden nog nagegaan.”"
      ],
      inc: { Omweg: 1 },
      next: "s4"
    },
    s4: {
      type: "choice", step: 4, time: "16.05 UTC", label: "Het advies teruglezen",
      title: "Je krijgt een advies",
      body: [{ msg: "Laat hem rustig liggen. Meet om 16.20 UTC opnieuw pols, ademfrequentie en hoe hij reageert op aanspreken. Neem om 16.30 UTC opnieuw contact op. Geef geen medicijnen zonder overleg.", from: "Fictief oefenadvies van de arts" }],
      question: "Wat zeg je terug?",
      options: [
        { label: "“Begrepen.”", points: 0, quality: "mid", verdict: "Niet genoeg", retry: true,
          feedback: "Niet genoeg. Met alleen “begrepen” weet de arts niet of je alles goed hebt gehoord." },
        { label: "“Ik lees terug: rustig laten liggen, om 16.20 UTC pols, ademfrequentie en reactie op aanspreken meten, om 16.30 UTC terugmelden, geen medicijnen zonder overleg. Klopt dat?”", points: 1, next: "s5",
          feedback: "Goed. Door terug te lezen merk je een misverstand op voordat je gaat handelen. Ook de tijden en UTC lees je terug." },
        { label: "“Om half vijf bellen we terug.”", points: 0, retry: true,
          feedback: "Niet goed. Half vijf in welke tijd? En de andere afspraken ontbreken." }
      ]
    },
    s5: {
      type: "choice", step: 5, label: "Vastleggen",
      title: "De notitie",
      question: "Welke notitie schrijf je?",
      options: [
        { label: "“16.05 UTC advies arts RMD: rustig laten liggen; 16.20 UTC pols, ademfrequentie en reactie meten; 16.30 UTC terugmelden; geen medicijnen zonder overleg. Teruggelezen en bevestigd. Uitvoering: jouw naam.”", points: 1, next: "s6",
          feedback: "Goed. De notitie heeft de tijd, de adviseur, alle afspraken, de bevestiging en wie het uitvoert." },
        { label: "“Arts zegt dat het meevalt.”", points: 0, retry: true,
          feedback: "Niet goed. Dat heeft de arts niet gezegd, en de afspraken ontbreken." },
        { label: "“Pols meten en terugbellen.”", points: 0, quality: "mid", verdict: "Te weinig", retry: true,
          feedback: "Te weinig. De tijden, de andere metingen en de afspraak over medicijnen ontbreken." }
      ]
    },
    s6: {
      type: "choice", step: 6, time: "16.10 UTC", label: "De vraag om een middel",
      title: "Joost vraagt om iets tegen de hoofdpijn",
      body: [{ msg: "Er liggen pijnstillers in de medicijnkist.", from: "Een collega" }],
      question: "Wat doe je?",
      options: [
        { label: "Je geeft hem een pijnstiller; dat is toch onschuldig.", points: 0, retry: true,
          feedback: "Niet goed. De afspraak was: geen medicijnen zonder overleg. Pas een advies niet zelf aan." },
        { label: "Je legt Joost uit dat je eerst overlegt. Je noteert zijn vraag en geeft die door bij het volgende contact.", points: 1, next: "s7",
          feedback: "Goed. Je houdt je aan de afspraak en de arts krijgt de vraag." },
        { label: "Je zegt dat hij niets krijgt en noteert het niet.", points: 0, quality: "mid", verdict: "Bijna", retry: true,
          feedback: "Bijna. Je geeft terecht niets, maar de arts moet weten dat hij erom vraagt. Noteer het en geef het door." }
      ]
    },
    s7: {
      type: "choice", step: 7, time: "16.15 UTC", label: "Een verandering",
      title: "Joost reageert trager",
      body: ["Joost reageert trager als je hem aanspreekt dan eerst. Zijn ogen vallen dicht. Het afgesproken moment om terug te melden is 16.30 UTC."],
      question: "Wat doe je?",
      options: [
        { label: "Je wacht tot 16.30 UTC, zoals afgesproken.", points: 0, next: "s7b",
          feedback: "Niet goed. Het advies paste bij wat de arts om 16.05 UTC wist. Bij een verandering meld je direct." },
        { label: "Je vraagt Sanne direct opnieuw contact te leggen. Je meldt wat is veranderd en hoe laat, en je volgt de nieuwe aanwijzingen.", points: 1, next: "s8",
          feedback: "Goed. De arts heeft de nieuwe informatie nodig om het advies te herzien." },
        { label: "Je schudt Joost wakker en zet hem rechtop, zodat hij wakker blijft.", points: 0, next: "s7b",
          feedback: "Niet goed. Je past de zorg zelf aan zonder overleg. Meld de verandering direct." }
      ]
    },
    s7b: {
      type: "info", step: 7, label: "Direct melden",
      title: "Je meldt het alsnog direct",
      body: ["Je laat Sanne alsnog direct contact leggen en meldt de verandering met het tijdstip."],
      inc: { Omweg: 1 },
      next: "s8"
    },
    s8: {
      type: "choice", step: 8, label: "Een opdracht die je niet hebt geleerd",
      title: "De arts vraagt om een infuus",
      body: ["In het nieuwe gesprek vraagt de arts of iemand aan boord een infuus kan aanleggen."],
      question: "Wat antwoord je?",
      options: [
        { label: "“Ik probeer het; hoe moeilijk kan het zijn?”", points: 0, retry: true,
          feedback: "Niet goed. Voer alleen uit wat je hebt geleerd. De arts moet weten wat aan boord wel mogelijk is." },
        { label: "“Ik heb dat niet geleerd. Ik vraag de kapitein of iemand aan boord een Medical Care-certificaat heeft.”", points: 1, next: "s9",
          feedback: "Goed. Je bent duidelijk over je grenzen. De arts kan het advies daarop aanpassen." },
        { label: "Je zegt niets en laat de vraag over aan Sanne.", points: 0, retry: true,
          feedback: "Niet goed. Jij kent de toestand van Joost en weet wat je hebt geleerd. Geef zelf antwoord." }
      ]
    },
    s9: {
      type: "debrief", label: "Debriefing",
      title: "De arts en de Kustwacht overleggen over een evacuatie",
      extra: ["Jij blijft bij Joost, meet zoals afgesproken en legt alles vast met de tijd erbij."],
      scoreText: "Je maakte {Punten} van de {max} sterkste keuzes in één keer. Aantal omwegen: {Omweg}.",
      learnTitle: "De vijf lessen",
      learn: [
        "Contact leggen en gegevens klaarzetten gebeuren tegelijk. Bij levensgevaar gaat hulp vóór het formulier.",
        "Schrijf onbekende waarden op als onbekend.",
        "Geef feiten en letterlijke klachten, geen eigen diagnose.",
        "Lees het advies terug, met de tijden in UTC, en leg het vast.",
        "Pas een advies niet zelf aan. Bij een verandering meld je direct, en je bent duidelijk over wat je niet hebt geleerd."
      ],
      after: "Op de praktijkdag voer je een RMD-gesprek met de instructeur. Ga verder met de les onder dit blok."
    }
  }
};
