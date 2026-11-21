# Interactieve modules voor het Rise Code Block

Versie 0.2, 21 november 2026. Eerst technische proef met MFA-L01-I01 en MC-L04-SL01, zie [testrapport](TESTRAPPORT-proef.md); de andere pakketten worden daarna bijgewerkt. Kant-en-klare oefenscenario's als HTML-pakket. Martijn plaatst ze in Rise 360 met een Code Block; Storyline is niet nodig. De Storyline-scripts in `articulate/storyline/` zijn de inhoudelijke bron en blijven de terugval.

Alle modules zijn concept. De medische inhoud is nog niet door Mathanje beoordeeld; dat staat ook onderaan iedere module. Scores blijven in het pakket en gaan niet naar Moodle. De eindtoets blijft in Moodle Quiz.

## Overzicht

| Module | Les en plek | Bron | Doorlooptijd juiste route | Afronding |
| --- | --- | --- | --- | --- |
| MFA-L01-I01 Plattegrond OEFENSCHIP A | MFA-L01-S04, tikopdracht I01-01 | Lesmaster MFA-L01-S04 en feedback S20; beeld MFA-L01-M03 | 5 minuten | Na de derde gevonden plaats |
| MFA-L07-SL01 Het RMD-gesprek | MFA-L07-S12, vlak voor de praktijkdag | Script MFA-L07-SL01 versie 0.1 | 12 minuten, met omwegen 14 tot 15 | Bij het bereiken van de debriefing |
| MC-L04-SL01 Verslechtering in de nacht | MC-L04-S26 | Script MC-L04-SL01 versie 0.1 | 12 minuten, met omweg ongeveer 14 | Bij het bereiken van de debriefing |
| MC-L08-SL01 Helikopterevacuatie | MC-L08-S25 | Script MC-L08-SL01 versie 0.1 | 12 minuten, met omwegen ongeveer 14 | Bij het bereiken van de debriefing |

De doorlooptijd volgt de strenge rekenregel uit de afspraken: 150 woorden per minuut voor de zichtbare tekst op de juiste route en 1 minuut per beslismoment. Berekend met `node test/studietijd.js`. De scripts schatten zelf 10 minuten. Alleen een meting met testcursisten telt voor de urenonderbouwing.

## Plaatsen in Rise

1. Voeg in de les een Code Block toe op de plek uit de tabel.
2. Kies Upload project en selecteer de ZIP, bijvoorbeeld `MC-L04-SL01.zip`. De ZIP bevat alleen `index.html` in de hoofdmap, met stijl, script en logo erin. Er zijn geen externe bestanden of netwerkverzoeken.
3. Zet Set completion requirements aan. De melding die Rise dan toont, zit al in het pakket: bij afronding stuurt het `window.parent.postMessage({ type: 'complete' }, '*')`.
4. Zet onder het blok een Continue-knop met Complete block above.
5. Stel bij Format geen te kleine maximale hoogte in; de modules zijn op een telefoon tot ongeveer 2000 pixels hoog. Bij een lager ingestelde hoogte scrolt de cursist binnen het blok.
6. Bekijk het blok in Preview op computer en telefoon. Volgens Articulate werkt een Code Block niet in een lokale LMS- of webexport-preview, wel na upload naar de omgeving.

Bron voor de eisen: Articulate, Rise 360: How to Use Code Block (bijgewerkt 15 mei 2026) en de aankondiging Set completion requirements op het Code Block-forum van E-Learning Heroes.

## Opbouw

| Map of bestand | Inhoud |
| --- | --- |
| `shared/style.css` | DRTC-stijl: donkerblauw `#203658`, lichtblauw `#00a1db`, accent oranje; kleuren uit het logo |
| `shared/scenario.js` | Scenariomotor: keuzes met feedback, vertakking, opnieuw proberen, kaartjes kiezen, checklist, observatielijst met grafiek, debriefing |
| `shared/plattegrond.js` | Tikopdracht op een plattegrond |
| `shared/logo.png` | Tijdelijk logo, uitgesneden uit een schermafbeelding van Rise. Vervang door het originele logobestand van DRTC en bouw opnieuw |
| `modules/<ID>/structuur.js` en `tekst.nl-NL.json` | Proefpakketten (MFA-L01-I01, MC-L04-SL01): logica in structuur.js, alle tekst in het taalbestand. Een vertaling komt in `tekst.en-GB.json` met dezelfde sleutels; `node taal.js csv <ID> en-GB` maakt een lijst voor de vertaler en `node taal.js controleer <ID>` controleert of alles vertaald is |
| `modules/<ID>/data.js` | Pakketten die nog niet zijn omgezet: structuur en tekst samen |
| `shared/ui.nl-NL.json`, `ui.en-GB.json` | Vaste knop- en meldingsteksten van de motor |
| `build.py` | Bouwt per module `index.html` en de ZIP in `build/code-blocks/` |
| `test/` | Headless tests met Playwright: `run.js` (routes en schermafbeeldingen), `proef.js` (telefoon, toetsenbord, hervatten, opslag geblokkeerd, blokhoogte), `toegankelijkheid.js` (axe-core, tekst op 200 procent, taalwissel; eenmalig `npm install` in `test/`), `studietijd.js` (kortste en langste pad) |
| `TESTRAPPORT-proef.md` | Uitkomst van de technische proef en de checklist voor Rise en Moodle |

Bouwen en testen:

```
python3 articulate/code-blocks/build.py
cd articulate/code-blocks && node test/run.js ../../build/code-blocks ../../build/screenshots
```

## Werkwijze bij een nieuw scenario

1. Het script komt eerst, in `articulate/storyline/`, met schermen, keuzes, feedback, punten en vervolg.
2. Zet het script om naar `modules/<ID>/data.js`. Typen: `choice` (keuze met feedback, met `retry` voor opnieuw proberen), `pick` (vast aantal kaartjes kiezen), `checklist`, `info` (met `inc` voor een teller zoals Omweg), `debrief`.
3. Voeg testroutes toe in `test/routes.js`: de juiste route en een omweg.
4. Bouw, test, bekijk de schermafbeeldingen en zet de ZIP in de projectmap `articulate-proef/code-blocks/`.

## Keuzes en afwijkingen ten opzichte van de scripts

| Module | Punt | Uitwerking |
| --- | --- | --- |
| Alle | Knop Afsluiten of Klaar | Niet opgenomen. Het pakket meldt afronding bij het bereiken van de debriefing; de cursist gaat verder met de Continue-knop van Rise. Wel een knop Opnieuw |
| Alle | Punten | Formatief, alleen zichtbaar voor de cursist. Een punt telt bij de eerste poging op een scherm |
| Alle | Oordeel per keuze | Naast de kleur staat altijd tekst: Goede keuze, Kan beter of Geen goede keuze. Kan beter is gebruikt waar het script zelf "niet fout", "bijna" of "te weinig" zegt |
| MC-L04 | Tijden bij scherm 6 | Het script noemt drie metingen iedere 15 minuten tot 03.00 uur. In de observatielijst staan ze als 02.30, 02.45 en 03.00. Temperatuur is daar niet gegeven en staat als niet gemeten |
| MC-L04 | Scherm 3A | De waarden kiest de cursist als kaartjes onder de grafiek in plaats van in de grafiek te klikken |
| MC-L08 | Tijdlijn in de debriefing | Alleen de tijden uit het script; stappen zonder tijd staan als Daarna |
| MFA-L01 | Brug en accommodatie | Ook aantikbaar, met dezelfde feedback als de andere onjuiste plaatsen. Ze hebben geen tikvlak-ID in de master |
| MFA-L01 | Feedback bij AED en brancard | De master geeft voor I01-01 geen feedbacktekst. Gebruikt zijn korte, niet-medische zinnen die naar het teken op de plattegrond verwijzen; DRTC beoordeelt ze |

## Te controleren door DRTC en Mathanje

- Medische inhoud, juiste keuzes en feedback van alle vier de modules (zie de TE VERIFIËREN-punten in de scripts en reviewvraag R122).
- Werking in de echte Rise-omgeving en in Moodle op telefoon, tablet en computer. Dat kan alleen Martijn doen; de headless test bewijst de werking binnen een iframe, niet in Rise zelf.
- Het originele DRTC-logo als bestand.
