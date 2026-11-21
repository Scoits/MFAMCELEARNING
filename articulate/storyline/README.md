# Storyline-scenario's

Volgens besluit V01 komt alles in Rise, behalve scenario's waarin een keuze een echt ander vervolg geeft. Sinds 21 november 2026 worden die scenario's kant-en-klaar geprogrammeerd als HTML-pakket, dat Martijn met een Code Block in Rise plaatst. De scripts en bouwlijsten hieronder zijn de inhoudelijke basis voor die pakketten. Storyline 360 met Review 360 en een Storyline-blok blijft de terugval. Zie [integratieplan](../integratieplan.md).

Per scenario staan hier twee bestanden:

| Bestand | Inhoud |
| --- | --- |
| `<ID>-<naam>.md` | Script: doel, leerdoelen, bronnen, personages, variabelen, slides met tekst, keuzes, feedback, vertakkingen en afronding |
| `<ID>-bouwlijst.csv` | Bouwlijst per slide: type, korte inhoud, keuzes, volgende slide, variabelen en media |

| Scenario | Les en scherm | Status |
| --- | --- | --- |
| MC-L04-SL01 Verslechtering in de nacht | MC-L04-S26 | Script en bouwlijst in concept, 21 november 2026 |
| MC-L08-SL01 Helikopterevacuatie | MC-L08-S24 | Script en bouwlijst in concept, 21 november 2026 |
| MFA-L07-SL01 RMD-gesprek | MFA-L07 | Script en bouwlijst in concept, 21 november 2026 |

Bouwregels voor ieder scenario:

1. Gebruik de DRTC-stijl uit de bestaande Articulate-template; tekst en ID's volgen de [stijlgids](../stijlgids.md).
2. Iedere keuze krijgt directe feedback in gewone taal. Een verkeerde keuze leidt waar dat zinvol is naar een eigen vervolg, zodat de cursist het gevolg ziet.
3. Afronding: het scenario is klaar als de cursist de debriefing heeft bereikt. Stel in Storyline de afronding in op het bereiken van de laatste slide en zet in Rise bij het Storyline-blok Require completion aan, met daarna een Continue-knop met Complete block above.
   De losse antwoorden en punten in een Storyline-blok gaan niet via Rise naar Moodle. Alleen de voltooiing, en bij de juiste instelling een score, wordt doorgegeven. De punten zijn daarom alleen feedback voor de cursist.
   Na een nieuwe versie in Review 360 selecteer je de interactie in het Rise-blok opnieuw. Rise neemt een nieuwe versie niet vanzelf over.
   Zet alle media in één keer in de Media Library (View > Media Library), met de ID's uit de bouwlijst als bestandsnaam. Geef objecten de namen uit de bouwlijst, zodat Storyline AI Chat ze kan vinden. Zie [ai-blokprompts](../ai-blokprompts.md).
4. De scores in het scenario zijn formatief. Ze tellen niet mee voor de afsluitende toets.
5. Fictieve personen en gegevens; geen echte patiënten, schepen of foto's van patiënten.
6. Medische inhoud, juiste keuzes en feedback zijn concept en worden door Mathanje beoordeeld. Geef geen status medisch goedgekeurd.
