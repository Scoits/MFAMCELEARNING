# Afspraken MFA-MC e-learning (DRTC)

Bijgewerkt: 21 november 2026. Dit is het vaste overzicht van alle afspraken met Martijn. Iedere thread leest dit eerst en houdt zich eraan. Nieuwe afspraken komen hier bij.

## 1. Doel en opzet
- MFA: één studiedag e-learning en één dag op locatie. MC: één studiedag e-learning en twee dagen op locatie.
- Beide opleidingen zijn los te volgen en te combineren.
- MFA volgt STCW A-VI/4-1 en IMO Model Course 1.14. MC volgt STCW A-VI/4-2 en IMO Model Course 1.15.
- Eerst een Nederlandse master, daarna een inhoudelijk gelijkwaardige Engelse vertaling.
- Productie in Articulate 360, levering via zelf gehost Moodle bij Hetzner, in de DRTC-stijl.
- Alles moet werken op telefoon, tablet en computer, inclusief oefeningen, scenario's, toetsen en hervatten.
- Alle leerdoel-, les-, scherm-, vraag- en assessment-ID's blijven behouden.
- Bekende keuzes worden niet opnieuw ter discussie gesteld. Vragen worden gebundeld.

## 2. Studietijd
- Minimaal 16 uur echte studietijd: 8 uur MFA en 8 uur MC (elk minimaal 480 minuten).
- Klassikaal duren MFA en MC samen 40 uur.
- Strenge rekenregel: 150 woorden per minuut, 1 minuut per kennischeck, een opdracht telt alleen mee als Rise controleert dat de cursist hem doet. Video telt met de echte duur.
- Stand 21 november, avond, met de strenge regel: MFA 290 en MC 306 minuten, samen ongeveer 10 uur. Tekort: 190 minuten MFA en 174 minuten MC. Het tekort wordt aangevuld met activiteiten, niet met meer tekst. Rekenen met `tools/studietijd.py`.
- De echte tijd wordt gemeten met testcursisten. Alleen die meting telt voor de urenonderbouwing.
- Open: telt de online eindtoets mee voor de 16 uur?

## 3. Inhoud
- De e-learning vervangt de klassikale theorie volledig.
- Doelgroep: zeevarenden zonder medische voorkennis, die eens per vijf jaar een medische cursus doen. Uitleg vanaf de basis, eenvoudige taal, begrippen uitgelegd, voorbeelden van aan boord.
- De dia's zijn alleen steekwoorden. Het verhaal van de instructeur komt uit de leerboeken: GH1 (MFA), GH2 (MC), de Ships medical guide, de Regeling medische uitrusting, de praktijkhandelingen en de LOTUS-kaarten.
- Geen verzonnen medische protocollen, doseringen, slagingspercentages of goedkeuringen. Iedere zin is te herleiden naar een bron.
- Mathanje geeft de medische eindgoedkeuring. Onzekerheden staan als reviewvraag voor haar klaar. Tot zij een les vrijgeeft, staat erop dat de inhoud nog niet medisch is goedgekeurd.
- Helder Nederlands, zonder icoontjes of decoratieve streepjes.

## 4. Rise, Storyline en codepakketten
- Rise is de basis: alle uitleg, beelden, kennischecks en casussen.
- Scenario's waarin een keuze echt een ander vervolg geeft: het RMD-gesprek (MFA les 7), een patiënt die 's nachts verslechtert (MC les 4), de helikopterevacuatie (MC les 8), en meer waar het iets oplevert.
- Martijn wil zelf zo weinig mogelijk bouwen. Daarom programmeren wij die scenario's als kant-en-klare pakketten (HTML) die hij alleen in Rise plaatst via een Code Block. Storyline is daarvoor niet nodig. De uitgewerkte Storyline-scripts zijn de inhoudelijke basis en blijven beschikbaar als terugval.
- Scores uit ingesloten onderdelen gaan niet naar Moodle. Het zijn dus oefenscenario's. Ze tellen wel mee in de studietijd.
- Ook mogelijk als het zo uitkomt: een zelfstandig SCORM-pakket voor Moodle.

## 5. Bouwen in Rise
- Hoofdroute: Create with AI (AI Course Draft), zoals bij Security Awareness. Dat gaf het beste resultaat.
- Bron: alleen onze eigen lesteksten, één bestand per les. Geen boeken of presentaties uploaden, anders haalt de AI daar zelf inhoud uit.
- Volgorde: outline laten maken, bijsturen met gerichte correctieprompts (titels en volgorde vast), dan pas de lessen genereren.
- Instellingen: Text and interactive content aan, AI images uit, final quiz uit.
- Harde grenzen voor de AI: geen medische feiten, getallen of handelingen buiten de bron; stappen en waarschuwingen niet inkorten; kennischecks letterlijk.
- Na het genereren: elke les controleren tegen de bron met de controleprompt, daarna beoordeling door Mathanje.
- Terugval: Magic Lesson Import per deel, of het bouwboek per blok met Magic text import.
- Opmaak: geen lappen tekst. Hoogstens twee tekstblokken, dan een activiteit. Afwisselende bloktypes, weinig flashcards.
- Na iedere oefening en ieder belangrijk interactief blok een verplichte Continue-knop (Complete block above). Navigatie op Restricted.
- Een nieuwe cursus maken mag; dupliceren van Security Awareness is niet nodig.
- Martijn plaatst zelf in Rise. Wij kunnen Articulate alleen bekijken, niet bouwen.

## 6. Media
- Echte foto's en video voor handelingen en apparatuur. AI-beelden alleen voor sfeer en introducties.
- Per les een mediamap met bestanden die zo heten als de beeldcodes in de bouwlijst (bijvoorbeeld MFA-L01-M01).
- Schema's, plattegronden en illustraties maken wij zelf.
- De PowerPoints zijn te groot om als bron in Rise te uploaden. Gebruik de compacte PDF's, of losse dia's als afbeelding.
- Wij kunnen alleen tekst uit SharePoint halen, geen bestanden. Beelden zet Martijn zelf in de projectmap uploads.
- Er komt een beeldbankregister: ID, versie, wat erop staat, wie het controleerde, gebruiksrecht en in welke lessen het staat.
- Foto's van de medische kist, het vlotpakket en de zuurstofkoffer ontbreken nog. Eén fotosessie met een instructeur kan dat oplossen.

## 7. Toetsing
- Kennischecks in de lessen zijn oefening, met feedback waarom een antwoord goed of fout is.
- De eindtoets komt in Moodle Quiz, met een vragenbank waaruit willekeurig wordt getrokken (IaT 4).
- De registratie in Moodle testen we vóór de volledige bouw.
- Slagingsgrens: nog open, voorstel via Angoff door een panel. De AI stelt geen formeel examen vast.
- Identiteitscontrole (IaT 4 par. 6.3): Martijn wil volledig automatisch. Advies: proef met AutoProctor, SMOWL als reserve. Vereist toestemming, een DPIA en een verwerkersovereenkomst. Voorlopig geparkeerd.

## 8. Praktijk
- MFA: halve dag handelingen oefenen, halve dag LOTUS en scenario's.
- MC: variant A (beide dagen ochtend handelingen, middag scenario's) of B (dag 1 handelingen, dag 2 scenario's). Nog open; voorstel is A met drie instructeurs.
- Wat de cursist meeneemt, regelt DRTC zelf via de uitnodiging.

## 9. Werkwijze en kwaliteit
- Eerst één perfecte proefles (MFA les 1), getest in Moodle en op een telefoon, door Martijn, Mathanje en een paar cursisten. Die wordt de standaard, met block templates voor intro, uitleg, oefening en feedback.
- Leerdoelen per les als herkennen, beslissen of doen, met per doel of het online of op de praktijkdag wordt beoordeeld.
- Audio en ondertiteling pas na goedkeuring van de tekst, met een uitspraaklijst.
- Wijzigingen per onderdeel, met een revisieregister.
- Martijn wil duidelijk zien of er gewerkt wordt, en eerlijke cijfers.

## 10. Open punten
1. Telt de eindtoets mee voor de 16 uur?
2. MC-praktijkvariant A of B.
3. Slagingspercentage.
4. Identiteitscontrole: definitieve keuze.
5. Medische vrijgave per les door Mathanje.
6. Foto's en video van DRTC-uitrusting.
7. Engelse vertaling na vaststelling van de Nederlandse master.
8. Test van de Moodle-registratie en van de werking op mobiel.
