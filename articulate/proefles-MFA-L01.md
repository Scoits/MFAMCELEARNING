# Proefles MFA-L01

Werkversie 0.3, 21 november 2026, volgens afspraken versie 2.0. MFA-L01 versie 0.4 (Medische uitrusting aan boord, 20 schermen, met de casus S20 als Rise Scenario-blok) is de proefles. Volgens de [afspraken](../docs/afspraken.md) gaan de technische proef en de dekkingsmatrix vóór het aanvullen van de ontbrekende minuten. De proef beslist over drie dingen: de bouwroute, de Code Block-route voor vertakte scenario's en de levering in Moodle. Wat werkt, wordt de standaard voor alle lessen. Zie ook de [productiewerkwijze](productiewerkwijze.md).

## Wanneer de proefles klaar is

De proefles is klaar als aan alle zes criteria is voldaan. Daarna wordt zij de standaard, met block templates voor intro, uitleg, oefening en feedback.

| Criterium | Hoe we het vaststellen | Wie |
| --- | --- | --- |
| Inhoudelijk vrijgegeven | Mathanje keurt lesversie 0.4 (of de versie na haar correcties) goed in de gepubliceerde les; de status in [lesstatus](../docs/lesstatus.md) gaat naar medisch vrijgegeven | Mathanje |
| Broncontrole afgerond | Iedere medische bewering, handeling, waarschuwing en dosering heeft een bron met editie en pagina; de controleprompt is doorlopen en alle afwijkingen zijn hersteld | Claude, daarna Martijn |
| Werkt op ieder apparaat | Alle onderdelen werken op Windows, iPhone, Android en een tablet, in Chrome, Edge en Safari en in de Moodle-app: lezen, kennischecks, Scenario-blok, Code Block, video, Continue-knoppen. Ook met het toetsenbord, na afsluiten en hervatten, en bij wisselen van apparaat | Martijn |
| Technisch getest in Moodle | Voltooiing, hervatten en de testquiz worden juist geregistreerd (zie stap 8) | Martijn |
| Begrijpelijk voor de doelgroep | Twee of meer zeevarenden zonder medische voorkennis doen de les zonder hulp; waar ze vastlopen, is aangepast | DRTC |
| Gemeten studietijd | De tijd van iedere testcursist is gemeten, met actieve leertijd, pauzes en technische vertraging apart, en vergeleken met de geplande minuten uit `tools/studietijd.py` | DRTC en Claude |

## Wat er klaarstaat

- De lesbron voor de hoofdroute: `articulate-proef/ai-course-draft/MFA/bronnen/MFA-L01-bron.docx`, met het startpakket `articulate/ai-course-draft-MFA.md`.
- Voor de vergelijking en de terugval: `articulate-proef/rise/MFA-L01/` met het bouwboek, de importbestanden en de checklist na de import.
- Het representatieve HTML-scenario: het RMD-gesprek MFA-L07-SL01. Dat pakket wordt in een andere werklijn gebouwd naar het [script](storyline/MFA-L07-SL01-rmd-gesprek.md). Het hoort inhoudelijk bij MFA-L07, maar wordt voor de techniek in de proefcursus gezet.
- De mediamap `articulate-proef/media/MFA-L01/`. De definitieve foto's volgen uit de [fotosessie](fotolijst-fotosessie.md).
- Een korte video bij MFA-L01-S18, "Een steriel gaasje aanbrengen": uit de fotosessie (MFA-L01-V02 in het [videodraaiboek](videodraaiboek.md)) of een passende film uit map 025.

## Stappen

1. Maak een nieuwe proefcursus in de DRTC-stijl. Zet Settings > Navigation op Restricted.
2. **Hoofdroute: AI Course Draft.** Gebruik alleen `MFA-L01-bron.docx` als bron, met de instellingen uit het startpakket: Text and interactive content aan, AI images uit, final quiz uit. Laat eerst de outline maken en zet de titels en de volgorde vast. Genereer daarna de les.
3. **Route A, meet de correctietijd.** Houd bij hoeveel minuten het kost om de gegenereerde les gelijk te maken aan de bron, met de controleprompt. Noteer ieder verschil: weggelaten stappen of waarschuwingen, "kan" in plaats van "moet", gewijzigde getallen, kennischecks die niet letterlijk zijn overgenomen.
4. **Route B, direct opbouwen.** Bouw één deel van de les (bijvoorbeeld S01 tot en met S05) direct met het bouwboek, in block templates. Noteer ook hier de tijd. Vergelijk per route: bouwtijd, correctietijd, aantal inhoudelijke afwijkingen, medische afwijkingen, kwaliteit van de interacties en handmatig herstel. De winnaar wordt de productiemethode. AI Course Draft is tot dan een experiment.
5. Zet het Code Block met het HTML-scenario in de proefcursus, met direct daaronder een Continue-knop met Complete block above. Voeg de video toe met ondertiteling (VTT).
6. Werk de controle per les af: Continue-knop na iedere afgeronde activiteit, ontbrekende beelden, labels verwijderen.
7. **Levering: eerst een Moodle-acceptatietest.** Publiceer de proefcursus als SCORM met de instellingen uit het [integratieplan](integratieplan.md). De exportstandaard en de indeling in pakketten kiezen we pas na deze test. Rise comprimeert de hervatgegevens; volgens Articulate is overschrijding van de grens van SCORM 1.2 (4.096 tekens) daardoor niet waarschijnlijk. Gebeurt het toch, dan zijn de opties SCORM 2004 (64.000 tekens) of de opleiding verdelen over enkele Moodle-modules. Test daarom ook met een proefcursus die zo groot is als een volledige opleiding.
8. Test in Moodle, op een computer en op beide telefoons:
   - start, stop en hervat de les, en kijk of hij op de juiste plek verdergaat;
   - beantwoord een kennischeck fout en daarna goed;
   - het Scenario-blok S20: de Continue-knop blijft dicht tot het einde is bereikt;
   - het Code Block met een afrondingseis (completion requirement): blijft de Continue-knop dicht tot het pakket is afgerond? Werkt de bediening met het toetsenbord? Zijn er geen dubbele scrollbalken of afgesneden knoppen? Wat gebeurt er als de cursist halverwege het scenario afsluit en terugkomt? Hervatten van de Rise-les en hervatten midden in het scenario zijn aparte eisen;
   - maak de testquiz in Moodle (drie oefenvragen, geen echte toetsvragen);
   - controleer de vertaalexport (XLIFF) van de les en de toegankelijkheid: contrast, tekstgrootte, labels voor een schermlezer;
   - rond de hele les af en kijk wat Moodle registreert.
9. Laat twee of meer zeevarenden uit de doelgroep de les op hun eigen telefoon doen. Meet de tijd per deel. Noteer apart: actieve tijd, pauzes en tijd die verloren gaat aan techniek. Noteer de voorkennis van iedere testcursist. Noteer waar ze aarzelen of verkeerd kiezen.
10. Laat Mathanje lesversie 0.4 beoordelen in de gepubliceerde les.
11. Bewaar de block templates en vul het [revisieregister](revisieregister.csv) en het [bouwlog](../templates/bouwlog.md) in.

## Bekende risico's die de proef moet uitwijzen

- Rise ondersteunt een afrondingseis voor Code Blocks, zodat de Continue-knop wacht tot het pakket is afgerond. De proef moet laten zien dat dit ook in Moodle en op telefoons werkt. Lukt dat niet, dan is de terugval een Rise Scenario-blok met dezelfde inhoud. Storyline blijft secundair gereedschap voor wat in Rise en in Code Blocks aantoonbaar niet goed werkt.
- Tekst in een HTML-pakket gaat niet mee in de vertaalexport van Rise (XLIFF). De Engelse versie van ieder pakket wordt daarom apart vertaald en getest, vanuit een tekstbestand per pakket.
- Veel Continue-knoppen kunnen op een telefoon vermoeiend worden. In de proef letten we op klikmoeheid. De regel van hoogstens twee tekstblokken is een voorkeur. Er komt één Continue-knop per afgeronde activiteit.

## Uitkomst

| Vraag | Antwoord na de proef |
| --- | --- |
| Route A (AI Course Draft): bouwtijd, correctietijd, afwijkingen, medische afwijkingen | |
| Route B (block templates): bouwtijd, correctietijd, afwijkingen, medische afwijkingen | |
| Welke route wordt de standaard? | |
| Houdt de Continue-knop het Code Block tegen tot het is afgerond? | |
| Werkt het Code Block op iPhone en Android, in browser en Moodle-app? | |
| Werkt het Code Block met het toetsenbord? | |
| Hervat de les op de juiste plek? En het scenario? | |
| Registreert Moodle de voltooiing van de les en de quiz? | |
| Welke SCORM-versie en welke indeling in pakketten kiezen we? | |
| Gemeten tijd per testcursist: actief, pauze, techniek | |
| Wat moet Mathanje aanpassen? | |

Pas na deze proef rollen we de Code Block-techniek uit over alle scenario's en worden de andere lessen gebouwd.
