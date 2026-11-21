# Productiewerkwijze Rise en Storyline

Werkversie 0.1, 21 november 2026. Dit document verwerkt de productiehandleiding "Hoogwaardige e-learning: Articulate, AI en eigen content" die Martijn op 21 november 2026 aanleverde. De handleiding steunt op de officiële Articulate-documentatie van september tot november 2026 en op praktijkverslagen. Productmogelijkheden zijn hier overgenomen zoals de handleiding ze beschrijft. Ze worden in de proefles in de eigen DRTC-account getest.

## 1. Importroute

| Doel | Route |
| --- | --- |
| Vastgestelde les met beelden naar Rise | Magic Lesson Import met het importbestand per deel |
| Eén blok achteraf vervangen of toevoegen | Magic text import of handmatig, met de prompt uit [ai-blokprompts](ai-blokprompts.md) |
| Nieuwe inhoud bedenken | Niet in Rise. Nieuwe inhoud gaat via de reviewmaster en Mathanje |

`tools/maak_rise_word.py <LES>` maakt per les vier soorten bestanden in `articulate-proef/rise/<LES>/`:

- `<LES>-D<n>-import.docx`, één per deel van ongeveer 15 minuten. Dit is het bestand voor Magic Lesson Import. Het bevat alleen wat de cursist ziet: koppen per scherm, tekst, opsommingen, tabellen, de definitieve beelden direct bij de uitleg en de kennischecks met juist antwoord en feedback. Ieder blok heeft een kort label, zoals `[Rise-blok: Accordion]`. Er staan geen bronnen, bouwnotities of tijdelijke beelden in.
- `<LES>-na-import.md` is de checklist na de import. Daarin staat per deel waar de doorgaan-knoppen komen, welke Storyline-blokken je toevoegt en welke beelden nog ontbreken.
- `<LES>-rise-bouwboek.docx` en `<LES>-bouwlijst-blokken.csv` geven per blok het bloktype en de Rise-route. Die gebruik je om het resultaat van de import te controleren, en om met de hand te bouwen als de import een blok verkeerd zet.

De eerste proef met Magic Lesson Import op 20 november 2026 zette een hele les in één tabs-blok. Dat bestand was de hele les in één keer, zonder bloklabels en zonder beelden. Het nieuwe importbestand is een deel van ongeveer 15 minuten, met bloklabels en beelden. Volgens een reactie van Articulate op het forum neemt Magic Lesson Import de opmaak van de blokken niet altijd over. Andere teams importeren daarom per blok. De proefles laat zien welke van de twee routes voor DRTC werkt. Daarna wordt één route de standaard.

## 2. Beelden

- Gebruik echte, gecontroleerde foto's en video's voor handelingen, uitrusting en apparatuur. Gebruik eigen schema's voor stappen, tabellen en plattegronden. AI-beelden gebruik je alleen voor sfeer of een fictieve situatie, nooit voor een handeling of een detail van apparatuur.
- Upload de presentaties en PDF's uit map 025 die bij een les horen als bron in de Rise-cursus. Rise zet de afbeeldingen daaruit in een doorzoekbare galerij. In een beeldblok kies je dan Content, Replace from your sources, From your sources. De galerij hoort bij één cursus.
- Importeer uit OneDrive alleen de bestanden die je kiest. Een import is een momentopname: wijzigingen in OneDrive komen niet vanzelf in de cursus.
- Het [beeldbankregister](beeldbank-register.csv) legt per beeld vast: ID en versie, soort beeld, leerdoelen, wat er te zien moet zijn, wie het heeft gecontroleerd, bron en gebruiksrecht, waar het staat en het bewerkbare origineel. `tools/maak_beeldbank.py` maakt het opnieuw uit het [mediaregister](mediaregister.csv).
- Plan één opnamesessie met een instructeur voor alle foto's van handelingen. Gebruik daarvoor de beelden met soort "echte foto of video" in het register. Fotografeer ook de details en de veelgemaakte fouten die de cursist moet herkennen.
- Video: één leerdoel per clip, 16:9, hoogstens 1920 x 1080. Laat Rise ondertiteling maken en controleer vaktermen, getallen en timing in het VTT-bestand.
- Storyline: zet alle media in één keer in de Media Library, met dezelfde ID's als bestandsnaam.

## 3. Proefles en templates

MFA-L01 versie 0.3 wordt de volledige proefles. Het testplan staat in [proefles-MFA-L01](proefles-MFA-L01.md). Pas na de proef worden de overige lessen gebouwd. Uit de proefles komen vijf block templates, die je in Rise bewaart en met het team deelt:

| Template | Blokken |
| --- | --- |
| Intro | Image & text met de werksituatie, Paragraph met wat je leert, Note |
| Uitleg | Heading, korte Paragraphs, één interactief blok (Tabs, Accordion of Process), Continue met Complete block above |
| Oefening | Multiple choice met feedback per antwoord, Continue met Complete block above |
| Doe-opdracht | Heading, Paragraph met opdracht en tijd, Bulleted list, Continue |
| Naar de praktijkdag | Note met wat de cursist op de praktijkdag doet |

Een kopie van een template is niet gekoppeld aan het origineel. Een wijziging in een procedure of beeld moet daarom in iedere les worden nagelopen. Het beeldbankregister en de bouwlijsten laten zien waar iets staat.

## 4. AI in Rise

Gebruik AI alleen voor een afgebakende taak, met een korte prompt die tekst en volgorde vasthoudt. De prompts per bloktype staan in [ai-blokprompts](ai-blokprompts.md). Een klik moet de cursist helpen met vergelijken, herkennen, kiezen of toepassen. Zet daarom niet ieder stuk tekst in een accordeon of flashcard. Het bouwscript maakt flashcards alleen als de schermreview daarom vraagt. Update Content with AI slaat voice-overscripts, ondertiteling, alt-tekst en een deel van de feedback over. Loop die na iedere globale wijziging zelf na.

## 5. Audio en revisie

- Maak voice-overs pas als Mathanje de tekst van die les heeft goedgekeurd. Iedere tekstwijziging daarna vraagt om nieuwe audio en ondertiteling.
- Gebruik bij voice-overs de [uitspraaklijst](uitspraaklijst.csv) voor afkortingen en vaktermen. Luister de hele audio na.
- Leg iedere vrijgegeven versie vast in het [revisieregister](revisieregister.csv): les, versie, datum, wat is gewijzigd, inhoudelijk akkoord, technische test en eigenaar. Een wijziging in één les is een bewerking van die les, niet een nieuwe generatie van de cursus.
- Maak voor een grote import of AI-bewerking eerst een kopie van de cursus. Bij AI Course Drafts kan annuleren al gegenereerde lessen verwijderen.

## 6. Storyline en toetsing

- Storyline gebruik je alleen voor oefenscenario's met keuzes en gevolgen: MFA-L07-SL01, MC-L04-SL01 en MC-L08-SL01. Zie [storyline](storyline/README.md).
- Een Storyline-blok in Rise geeft de voltooiing door, en bij de juiste instelling een score. De losse antwoorden in het blok gaan niet via Rise naar Moodle. De scenario's zijn daarom formatief en tellen alleen als voltooid.
- Na een nieuwe versie in Review 360 moet je de interactie in het Rise-blok opnieuw selecteren. Dat gebeurt niet vanzelf.
- De afsluitende kennistoets komt in Moodle Quiz, zoals het ontwerpkader voorstelt. De kennischecks in Rise zijn oefenvragen.
- Test de registratie in Moodle vóór de volledige productie: voltooiing van Rise, voltooiing van een Storyline-blok, de Moodle-quiz, en hervatten na afbreken. Zie [proefles-MFA-L01](proefles-MFA-L01.md).

## 7. Leerdoelen als gedrag

[leerdoel-gedrag.csv](../curriculum/leerdoel-gedrag.csv) geeft per leerdoel het gedrag (herkennen, beslissen, doen, of alleen uitleggen) en waar het wordt beoordeeld: in de online kennistoets, op de praktijkdag of op beide. `tools/maak_leerdoelgedrag.py` leidt dit af uit het concrete leerdoel en het DRTC-toetsbewijs in de dekkingsmatrices. Het is een voorstel. Controleer de kolom gedrag_hoofd en zet de status daarna op vastgesteld. Oefeningen en scenario's richten zich op de doelen met herkennen en beslissen. Doelen met doen worden online voorbereid en op de praktijkdag individueel beoordeeld.

## Meten

Houd tijdens de proefles de tijd bij voor bronvoorbereiding, media, import, herstel na de import, controle door Mathanje en publicatie. De werkwijze werkt pas als de totale tijd tot een vrijgegeven les afneemt, niet alleen de tijd tot een eerste versie.
