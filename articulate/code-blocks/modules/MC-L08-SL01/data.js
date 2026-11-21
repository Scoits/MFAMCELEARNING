/* MC-L08-SL01 Helikopterevacuatie.
   Bron: articulate/storyline/MC-L08-SL01-helikopterevacuatie.md, versie 0.1 (21 november 2026).
   Alle tekst, keuzes en feedback komen uit dat script. Fictieve casus.
   Medische review door Mathanje en operationele review door DRTC zijn nog niet uitgevoerd. */
window.MODULE = {
  id: "MC-L08-SL01",
  version: "0.1",
  code: "MC-L08 Gecoördineerde medische hulp en evacuatie",
  title: "Helikopterevacuatie",
  badge: "Oefenscenario",
  footer: "Fictieve casus. Concept, nog niet medisch goedgekeurd. Oefening, telt niet mee voor de toets.",
  maxPoints: 8,
  steps: 9,
  vars: { Punten: 0, TasJuist: 0 },
  start: "intro",
  nodes: {
    intro: {
      type: "intro",
      label: "Situatie vooraf",
      title: "Henk moet van boord",
      body: [
        "Henk, bootsman van 52 jaar, is om 13.30 uur van een ladder in het ruim gevallen. Je vermoedt een bekkenbreuk en hebt de bekkenspalk aangelegd en hem in de vacuümmatras gelegd.",
        "Om 14.10 uur heb je op advies van de arts een pijnstiller gegeven. Zijn pols is 108, de bloeddruk 104/68, hij is helder.",
        "Om 14.30 uur besluit de arts van de Radio Medische Dienst samen met de Kustwacht tot een evacuatie per helikopter. De helikopter verwacht om 15.30 uur boven het schip te zijn.",
        { note: "Je maakt steeds een keuze en krijgt direct uitleg. Duur ongeveer 10 minuten." }
      ],
      button: "Begin",
      next: "s1"
    },
    s1: {
      type: "choice", step: 1, time: "14.30 uur", label: "Het besluit",
      title: "De helikopter komt over ongeveer een uur",
      body: [{ msg: "De helikopter komt over ongeveer een uur. De brug en de dekploeg bereiden het dek voor.", from: "Kapitein" }],
      question: "Wat doe jij eerst?",
      options: [
        { label: "Je vertelt Henk wat er gaat gebeuren, controleert zijn vitale functies en begint met het klaarmaken van hem en zijn spullen.", points: 1, next: "s2",
          feedback: "Goed. Jij bent verantwoordelijk voor de patiënt. Vertel wat er gaat gebeuren, ook als je niet weet of hij alles hoort." },
        { label: "Je gaat naar het achterdek om de dekploeg te helpen met het weghalen van losse voorwerpen.", points: 0, next: "s1a",
          feedback: "Niet goed. Het dek is de taak van de brug en de dekploeg. Henk kan in die tijd verslechteren en niemand maakt hem klaar." },
        { label: "Je wacht in de ziekenboeg tot de helikopter er is; de bemanning maakt hem zelf klaar.", points: 0, next: "s1a",
          feedback: "Niet goed. De helikopterbemanning heeft weinig tijd boven het schip. De patiënt moet op tijd klaar zijn op de afgesproken plek." }
      ]
    },
    s1a: {
      type: "info", step: 1, label: "Terug naar de patiënt",
      title: "Is de patiënt al klaar?",
      body: [{ msg: "Is de patiënt al klaar?", from: "Kapitein" }, "Je gaat terug naar de ziekenboeg en begint alsnog."],
      next: "s2"
    },
    s2: {
      type: "pick", step: 2, label: "De tas bij de patiënt",
      title: "Zet klaar wat met Henk mee moet",
      question: "Kies vijf van de acht dingen.",
      count: 5, var: "TasJuist", bonus: 1,
      options: [
        { label: "Het ingevulde patiëntevaluatieformulier en de observatielijst", correct: true },
        { label: "Zijn hele koffer uit de hut", correct: false },
        { label: "Paspoort en monsterboekje", correct: true },
        { label: "Zijn eigen medicijnen", correct: true },
        { label: "Een kopie van het scheepslogboek van de hele reis", correct: false },
        { label: "Een kleine tas met kleding, telefoon en lader", correct: true },
        { label: "De medicijnkist van de ziekenboeg", correct: false },
        { label: "Een lijst van de medicijnen die hij aan boord kreeg, met tijd en hoeveelheid", correct: true }
      ],
      feedbackFull: "Compleet. De arts aan de wal weet wat er is gebeurd en wat hij heeft gekregen.",
      feedbackPartial: "Bekijk de juiste kaartjes. Neem alleen mee wat klein en nodig is; een koffer past niet in de helikopter.",
      next: "s3"
    },
    s3: {
      type: "choice", step: 3, label: "Wat hij heeft gekregen",
      title: "De pijnstiller van 14.10 uur",
      body: ["Henk kreeg om 14.10 uur een pijnstiller."],
      question: "Hoe zorg je dat de helikopterarts dat zeker weet?",
      options: [
        { label: "Je schrijft het in het dossier en geeft het dossier mee.", points: 0, quality: "mid", next: "s4",
          feedback: "Bijna. Het dossier kan zoekraken of niet direct gelezen worden. Bevestig ook een label op de patiënt zelf." },
        { label: "Je bevestigt een duidelijk label op de patiënt met naam van het middel, hoeveelheid, manier van geven en tijdstip, en schrijft het ook in het dossier.", points: 1, next: "s4",
          feedback: "Goed. Het label blijft bij de patiënt, ook als papieren ergens anders terechtkomen." },
        { label: "Je vertelt het mondeling aan de redder als hij aan dek komt.", points: 0, next: "s4",
          feedback: "Niet goed. Bij het lawaai van de rotor gaat mondelinge informatie snel verloren. Zet het op schrift, op de patiënt en in het dossier." }
      ]
    },
    s4: {
      type: "choice", step: 4, time: "15.10 uur", label: "Twee artsen aan de lijn",
      title: "De helikopterarts wil overleggen",
      body: ["De brug meldt dat de helikopterarts via de radio wil overleggen. De Radio Medische Dienst is nog aan de telefoon."],
      question: "Wat doe je?",
      options: [
        { label: "Je beëindigt het gesprek met de Radio Medische Dienst; de helikopter neemt het over.", points: 0, next: "s5",
          feedback: "Niet goed. Houd contact met de arts van de RMD tot er contact is met de helikopterarts. Zo gaat er geen informatie verloren." },
        { label: "Je houdt de RMD aan de lijn tot de helikopterarts de gegevens heeft, en geeft dan de laatste waarden door met tijdstip.", points: 1, next: "s5",
          feedback: "Goed. De overdracht tussen artsen is compleet en jij meldt de laatste toestand." }
      ]
    },
    s5: {
      type: "choice", step: 5, time: "15.15 uur", label: "Naar de hijslocatie",
      title: "Henk ligt klaar op de brancard",
      body: ["Henk ligt in de vacuümmatras op de brancard van het schip. De hijslocatie is op het achterdek, twee trappen hoger."],
      question: "Wat doe je?",
      options: [
        { label: "Je wacht tot de helikopter boven het schip hangt en brengt hem dan naar boven.", points: 0, next: "s5a",
          feedback: "Niet goed. Dan kost het transport kostbare hijstijd. Breng de patiënt zo dicht bij de hijslocatie als zijn toestand toelaat, op de afgesproken tijd." },
        { label: "In overleg met de brug breng je hem met genoeg dragers naar een beschutte plek dicht bij de hijslocatie, geeft hem gehoorbescherming, houdt hem warm en blijft hem bewaken.", points: 1, next: "s6",
          feedback: "Goed. Hij ligt klaar, beschut en bewaakt, en de helikopterarts kan hem daar zo nodig onderzoeken." },
        { label: "Je brengt hem nu direct naar het open dek onder de hijsplek, zodat hij als eerste klaar is.", points: 0, next: "s5a",
          feedback: "Niet goed. Op het open dek onder de rotor is het koud, nat en gevaarlijk. Wacht op een beschutte plek tot de bemanning aangeeft dat hij kan komen." }
      ]
    },
    s5a: {
      type: "info", step: 5, label: "Bijstellen",
      title: "De brug stuurt bij",
      body: [{ msg: "Breng hem naar de beschutte plek bij de deur van het achterdek, de helikopter is over tien minuten boven het schip.", from: "Brug" }],
      next: "s6"
    },
    s6: {
      type: "choice", step: 6, time: "15.35 uur", label: "De geleidelijn",
      title: "De helikopter laat een geleidelijn zakken",
      body: ["Het schip slingert. De lijn nadert het dek. Een collega van de dekploeg staat klaar."],
      question: "Wat moet je collega doen?",
      options: [
        { label: "Hij pakt de lijn direct met blote handen beet en maakt hem vast aan de reling.", points: 0, next: "s6a",
          feedback: "Niet goed. Een geleidelijn kan statisch geladen zijn. Laat hem eerst het water of het dek raken en pak hem alleen met rubberen handschoenen. Maak de lijn nooit vast aan het schip." },
        { label: "Hij laat de lijn eerst het water of het dek raken, pakt hem met rubberen handschoenen en houdt hem vrij in de hand, zonder hem vast te maken.", points: 1, next: "s7",
          feedback: "Goed. Zo voorkom je een schok door statische elektriciteit en blijft de helikopter vrij als het schip beweegt." }
      ]
    },
    s6a: {
      type: "info", step: 6, label: "Gevaar",
      title: "Lijn los!",
      body: [{ msg: "Lijn los! Niet vastmaken!", from: "Helikopterbemanning via de radio" }, "De collega maakt de lijn los."],
      next: "s7"
    },
    s7: {
      type: "choice", step: 7, label: "Overleggen naar de brancard van de helikopter",
      title: "De redder komt aan dek",
      body: ["De redder komt aan dek met de brancard van de helikopter."],
      question: "Wat doe je?",
      options: [
        { label: "Je legt Henk alvast over op de brancard van de helikopter zodra die het dek raakt.", points: 0, next: "s8",
          feedback: "Niet goed. Leg de patiënt pas over als de bemanning dat aangeeft. Zij kennen hun eigen brancard en methode." },
        { label: "Je wacht op de aanwijzing van de redder, helpt met genoeg dragers, en geeft de tas, het dossier en een korte mondelinge overdracht: wat er is gebeurd, wat je hebt gedaan, de laatste waarden en het label.", points: 1, next: "s8",
          feedback: "Goed. Je volgt de bemanning en draagt kort en volledig over." }
      ]
    },
    s8: {
      type: "pick", step: 8, time: "15.50 uur", label: "Na de hijs",
      title: "De helikopter is met Henk vertrokken",
      question: "Wat doe je nu? Kies twee.",
      count: 2, bonus: 1,
      options: [
        { label: "Je schrijft in het dossier en het logboek wat er is gebeurd, met tijden, en wat je hebt overgedragen aan wie", correct: true,
          feedback: "Goed. Leg iedere overdracht vast met tijdstip, aan wie en wat." },
        { label: "Je ruimt direct de medicijnkist op en vult hem aan, het dossier komt later", correct: false,
          feedback: "Eerst vastleggen terwijl je het nog weet. Aanvullen komt daarna." },
        { label: "Je meldt de kapitein dat de patiënt is overgedragen en welke gegevens zijn meegegeven", correct: true,
          feedback: "Goed. De kapitein maakt het rapport." },
        { label: "Je vraagt de brug meteen van koers te veranderen naar de oorspronkelijke bestemming", correct: false,
          feedback: "Het schip blijft op koers tot de helikopter vrij is en toestemming geeft. Dat is een taak van de brug." }
      ],
      feedbackFull: "Je legt eerst vast en informeert de kapitein.",
      feedbackPartial: "Lees de uitleg bij je keuzes. Eerst vastleggen en de kapitein informeren.",
      button: "Naar de debriefing",
      next: "s9"
    },
    s9: {
      type: "debrief", label: "Debriefing",
      title: "De evacuatie in één overzicht",
      extra: [
        { timeline: [
          ["14.30", "Besluit tot evacuatie. Jij maakt Henk en zijn spullen klaar."],
          ["Daarna", "Tas, dossier en medicijnlijst klaar; label met de pijnstiller op de patiënt."],
          ["15.10", "De RMD blijft aan de lijn tot de helikopterarts de gegevens heeft."],
          ["15.15", "Henk ligt beschut en bewaakt dicht bij de hijslocatie."],
          ["15.35", "Geleidelijn eerst laten raken, met rubberen handschoenen, nooit vastmaken."],
          ["Daarna", "Overleggen op teken van de redder; korte overdracht."],
          ["15.50", "Vastleggen en de kapitein informeren."]
        ] }
      ],
      learn: [
        "Jij zorgt voor de patiënt; de brug en de dekploeg zorgen voor het dek en de communicatie met de helikopter.",
        "Zet op schrift wat de patiënt kreeg, op de patiënt en in het dossier, en houd contact met de RMD tot de helikopterarts het overneemt.",
        "Volg bij het hijsen de aanwijzingen van de bemanning: geleidelijn nooit vastmaken, overleggen pas op hun teken."
      ],
      after: "Op de praktijkdag bereid je met de groep een helikopterevacuatie voor. Je wordt beoordeeld op je eigen taak bij de patiënt. Ga verder met de les onder dit blok."
    }
  }
};
