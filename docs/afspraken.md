# Afspraken MFA-MC e-learning (DRTC), versie 2.0

Bijgewerkt: 21 november 2026. Versie 2.0 verwerkt de reviews van ChatGPT, Gemini, Articulate AI en Copilot. Dit is de enige waarheid: het vaste overzicht van alle afspraken met Martijn. Iedere thread leest dit eerst en houdt zich eraan. Nieuwe afspraken komen hier bij.

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
- MFA en MC bevatten elk minimaal 480 minuten geplande leeractiviteit, exclusief de formele eindtoets. Acht uur is een minimum, geen plafond en geen doel om precies op te landen. De STCW-leerdoelen en veilige, begrijpelijke medische uitleg zijn leidend.
- Acht uur per opleiding is de minimale geplande studietijd. De vereiste leerdoelen en een begrijpelijke uitleg bepalen de uiteindelijke omvang. Inhoud wordt niet geschrapt om binnen acht uur te blijven.
- Geen opvulling. Iedere aanvullende activiteit is gekoppeld aan een leerdoel en heeft een inhoudelijke reden: informatie opzoeken, een situatie beoordelen, een keuze maken, feedback verwerken. Wachttijden, verplichte animaties en herhaling zonder leerfunctie tellen niet mee.
- Klassikaal duren MFA en MC samen 40 uur.
- Strenge rekenregel: leestempo 150 woorden per minuut (leestijd in minuten = aantal woorden gedeeld door 150), 1 minuut per kennischeck, een opdracht telt alleen mee als Rise controleert dat de cursist hem doet. Video telt met de echte duur.
- Stand 21 november, avond, met de strenge regel (kortste pad bij scenario's), zonder de eindtoets, rekenscript van 21 november: MFA 377 en MC 491 minuten. Tekort: 103 minuten MFA; MC haalt het minimum. Rijke interactie: MFA 101 van minimaal 96 minuten, MC 206 van minimaal 192 (scenarioplan in `docs/scenarioplan.md`). Grove planning per les in `docs/tijdplanning-per-les.md`. We vullen geen minuten op. De dekkingsmatrix bepaalt waar nog toepassing, besluitvorming, herkenning, demonstratie of feedback ontbreekt. Alleen activiteiten die aantoonbaar bijdragen aan een leerdoel komen erbij; de extra minuten zijn daar het gevolg van. Rekenen met `tools/studietijd.py`.
- We onderscheiden geplande, afgedwongen en gemeten studietijd. Een Continue-knop bewijst dat een blok is afgerond, niet hoe lang iemand actief heeft geleerd.
- De urenonderbouwing combineert de inhoudelijke tijdsbegroting met gebruikerstesten bij representatieve cursisten. Actieve leertijd, pauzes en technische vertraging worden onderscheiden. We rapporteren de mediaan, de spreiding en de verschillen in voorkennis.
- Bij ieder tijdscijfer staan de versie van de lesteksten en van het rekenscript.
- De online eindtoets telt niet mee voor de 16 uur (Martijn, 21 november). De 8 uur per cursus moet dus uit de lessen zelf komen.

## 3. Inhoud
- De e-learning vervangt de klassikale theorie volledig.
- Doelgroep: zeevarenden zonder medische voorkennis, die eens per vijf jaar een medische cursus doen. Uitleg vanaf de basis, eenvoudige taal, begrippen uitgelegd, voorbeelden van aan boord.
- De dia's zijn alleen steekwoorden. Het verhaal van de instructeur komt uit de leerboeken: GH1 (MFA), GH2 (MC), de Ships medical guide, de Regeling medische uitrusting, de praktijkhandelingen en de LOTUS-kaarten.
- Geen verzonnen medische protocollen, doseringen, slagingspercentages of goedkeuringen.
- Iedere medische bewering, handeling, waarschuwing en dosering heeft een herleidbare bron met editie en pagina of paragraaf. Eigen casussen en didactische formuleringen mogen, zolang ze geen nieuwe medische inhoud introduceren.
- Mathanje keurt een bepaalde lesversie goed. Een inhoudelijke wijziging daarna betekent een nieuwe beoordeling van het gewijzigde onderdeel.
- Eén dekkingsmatrix per opleiding bewijst dat alles is afgedekt: vereiste competentie, bron, leerdoel-ID, les of activiteit, online beoordeling, praktijkbeoordeling en medische vrijgave. De matrix laat ook zien dat MFA en MC elk zelfstandig volledig zijn en wat er gebeurt bij gecombineerd volgen.
- Mathanje geeft de medische eindgoedkeuring. Onzekerheden staan als reviewvraag voor haar klaar. Tot zij een les vrijgeeft, staat erop dat de inhoud nog niet medisch is goedgekeurd.
- Helder Nederlands, zonder icoontjes of decoratieve streepjes.

## 4. Rise, Storyline en codepakketten
- Vaste verhouding (afspraak van Martijn uit de beginfase, bevestigd 21 november): MFA 80 procent Rise en 20 procent Storyline-niveau; MC 60 procent Rise en 40 procent Storyline-niveau. Gerekend in studietijd is dat minimaal ongeveer 96 minuten bij MFA en 192 minuten bij MC aan rijke, vertakte interactie: beslisscenario's, simulaties en complexe casussen.
- Storyline-niveau betekent de rijkheid van de interactie. Wij bouwen die als codepakket voor Rise, of in Storyline waar dat beter werkt. MC krijgt dus veel meer scenario's dan de drie die eerst gepland waren.
- Rise is de basis voor de rest: uitleg, foto's en video, accordeon, proces, tabs, eenvoudige scenario's, kennischecks, Continue-blokken en navigatie.
- Codepakketten (Rise Code Block) zijn er voor het deel waar standaard Rise didactisch tekortschiet: beslisscenario's, triage, interactieve waarneming en complexe casussen. Rise ondersteunt officieel een afrondingseis voor Code Blocks, zodat een Continue-blok wacht tot de activiteit echt is afgerond. Dat testen we in de proef.
- Storyline 360 is secundair gereedschap, voor interacties die aantoonbaar niet goed lukken in Rise of in een codepakket. We hoeven het niet te gebruiken, maar verbieden het ook niet.
- Scenario's waarin een keuze echt een ander vervolg geeft: het RMD-gesprek (MFA les 7), een patiënt die 's nachts verslechtert (MC les 4), de helikopterevacuatie (MC les 8), en meer waar het iets oplevert.
- Martijn wil zelf zo weinig mogelijk bouwen. Daarom programmeren wij die scenario's als kant-en-klare pakketten (HTML) die hij alleen in Rise plaatst via een Code Block. De uitgewerkte scenarioscripts zijn de inhoudelijke basis.
- Tekst staat los van de logica: één taalbestand per pakket (nl-NL en en-GB), dus één codebasis voor beide talen.
- Scores uit ingesloten onderdelen gaan niet naar Moodle. Het zijn dus oefenscenario's. Ze tellen wel mee in de studietijd.
- Ook mogelijk als het zo uitkomt: een zelfstandig SCORM-pakket voor Moodle.
- De Code Block-route is pas vast na een technische proef met één representatief scenario: bediening op een telefoon, toetsenbordbediening, hervatten na afsluiten, afronding van het blok en gedrag na export naar Moodle. Hervatten van Rise en hervatten midden in een ingesloten scenario zijn aparte eisen. Pas daarna rollen we de techniek uit over alle scenario's.
- De proef toetst ook drie risico's: (a) blijft de Continue-knop echt geblokkeerd tot het scenario is afgerond, want anders telt het scenario niet mee voor de studietijd; (b) werkt het op een iPhone en een Android-telefoon in Moodle, zonder dubbele scrollbalken of afgesneden knoppen; (c) vertaling: tekst in een codepakket gaat niet mee in de XLIFF-export van Rise, dus alle tekst staat in een apart taalbestand per pakket (nl en en).
- Valt de proef tegen, dan worden de scenario's Rise Scenario-blokken of Storyline-blokken.

## 5. Bouwen in Rise
- Create with AI (AI Course Draft) is een experiment tot MFA les 1 is gebouwd. Bij Security Awareness gaf het het aantrekkelijkste resultaat, maar medische inhoud brengt een nieuw risico mee.
- In MFA les 1 vergelijken we route A (goedgekeurde brontekst, Create with AI, broncontrole, correcties) met route B (goedgekeurde brontekst direct in block templates, controle). We meten bouwtijd, correctietijd, aantal inhoudelijke en medische afwijkingen, kwaliteit van de interacties en handmatig herstel. De winnaar wordt de productiemethode.
- De AI van Rise vat graag samen en maakt tekst vlotter. Bij medische tekst kan één veranderd woord gevaarlijk zijn. Daarom meten we in de proefles hoeveel tijd het corrigeren van de AI-versie kost, tegenover direct opbouwen met de goedgekeurde tekst en block templates. Pas daarna kiezen we de definitieve hoofdroute.
- Bron: alleen onze eigen lesteksten, één bestand per les. Geen boeken of presentaties uploaden, anders haalt de AI daar zelf inhoud uit.
- Volgorde: outline laten maken, bijsturen met gerichte correctieprompts (titels en volgorde vast), dan pas de lessen genereren.
- Instellingen: Text and interactive content aan, AI images uit, final quiz uit.
- Harde grenzen voor de AI: geen medische feiten, getallen of handelingen buiten de bron; stappen en waarschuwingen niet inkorten; kennischecks letterlijk.
- Na het genereren: elke les controleren tegen de bron met de controleprompt, daarna beoordeling door Mathanje.
- Terugval: Magic Lesson Import per deel, of het bouwboek per blok met Magic text import.
- Opmaak: lange passieve tekstreeksen vermijden. Interactie komt waar de cursist zinvol iets kan herkennen, toepassen, beslissen, ordenen, beoordelen of ophalen. Zijn drie korte uitlegblokken beter dan een geforceerde klikactiviteit, dan gaat de inhoud voor. We willen leren, geen kliksimulator. Afwisselende bloktypes, weinig flashcards.
- Na iedere oefening en ieder belangrijk interactief blok een verplichte Continue-knop (Complete block above). Navigatie op Restricted. Niet na elke twee alinea's: bij acht uur op een telefoon geeft dat klikmoeheid. Richtlijn: één Continue-knop per afgeronde activiteit.
- Moodle: de exportstandaard en de pakketstructuur kiezen we na een acceptatietest in jullie Moodle. Hervatten, afronding en voortgangsgeheugen (suspend data) testen we met de volledige proefopzet. Rise comprimeert die gegevens, dus de SCORM 1.2-limiet is een risico en geen zekerheid. Splitsen in twee tot vier modules of SCORM 2004 zijn de uitwegen als het misgaat.
- Een nieuwe cursus maken mag; dupliceren van Security Awareness is niet nodig.
- Martijn plaatst zelf in Rise. Wij kunnen Articulate alleen bekijken, niet bouwen.

## 6. Media
- Echte foto's en video voor handelingen en apparatuur. AI-beelden alleen voor sfeer en introducties.
- Per les een mediamap met bestanden die zo heten als de beeldcodes in de bouwlijst (bijvoorbeeld MFA-L01-M01).
- Schema's, plattegronden en illustraties maken wij zelf.
- De PowerPoints zijn te groot om als bron in Rise te uploaden. Gebruik de compacte PDF's, of losse dia's als afbeelding.
- Wij kunnen alleen tekst uit SharePoint halen, geen bestanden. Beelden zet Martijn zelf in de projectmap uploads.
- Er komt een beeldbankregister: ID, versie, wat erop staat, wie het controleerde, gebruiksrecht en in welke lessen het staat.
- Video is geen urenfabriek. Liever vier minuten demonstratie, dan een kijkopdracht, een beslissing, feedback en toepassing, dan achttien minuten een instructeur die vertelt. Onderwerpen: medische kist, zuurstofset, AED, immobilisatie, wondzorg, patiëntonderzoek, radiomedisch advies, brancard en vervoer, vlotpakket.
- Video telt met de echte duur. In dezelfde sessie als de foto's neemt de instructeur korte video's op van de medische kist, het vlotpakket, de zuurstofkoffer en de praktijkhandelingen. Wij leveren een draaiboek met shotlijst.
- Het tekort in studietijd wordt vooraf grof gepland per les: hoeveel minuten video, casus, scenario en doe-opdracht, vóór we bouwen.
- Foto's van de medische kist, het vlotpakket en de zuurstofkoffer ontbreken nog. Een instructeur van DRTC maakt die foto's (Martijn akkoord, 21 november). Wij leveren een fotolijst per les.

## 7. Toetsing
- Kennischecks in de lessen zijn oefening, met feedback waarom een antwoord goed of fout is.
- De eindtoets komt in Moodle Quiz, met een vragenbank waaruit willekeurig wordt getrokken (IaT 4).
- De registratie in Moodle testen we vóór de volledige bouw.
- De toetsblauwdruk komt vóór de vragenbank. Per opleiding: STCW-eis, leerdoel, gewicht, aantal items, itemtype, moeilijkheid, bron, antwoord, afleiders, medische vrijgave.
- De AI mag vragen voorstellen. De AI bepaalt niet de formele eindtoets, de cesuur, de inhoudelijke juistheid of de examendekking.
- Slagingsgrens: nog open, voorstel via Angoff door een panel, mits dat past bij het beoordelingskader van DRTC en ILT.
- Identiteitscontrole (IaT 4 par. 6.3): Martijn wil volledig automatisch. Advies: proef met AutoProctor, SMOWL als reserve. Vereist toestemming, een DPIA en een verwerkersovereenkomst. Niet te lang parkeren: een DPIA, een verwerkersovereenkomst en de koppeling kosten maanden. Alternatief dat Martijn zelf al noemde: de formele eindtoets (Moodle Quiz) onder toezicht afnemen aan het begin van de eerste praktijkdag. Dan is de identiteit zeker, zonder proctoring en AVG-werk. Dit is een aparte toets- en ILT-beslissing en wordt niet stilzwijgend gewijzigd. Keuze ligt bij Martijn.

## 8. Praktijk
- MFA: halve dag handelingen oefenen, halve dag LOTUS en scenario's.
- MC: variant A (beide dagen ochtend handelingen, middag scenario's) of B (dag 1 handelingen, dag 2 scenario's). Nog open; voorstel is A met drie instructeurs.
- Wat de cursist meeneemt, regelt DRTC zelf via de uitnodiging.

## 9. Werkwijze en kwaliteit
- Volgorde: eerst de technische proef en de dekkingsmatrix, daarna pas het aanvullen van de ontbrekende minuten. Zo weten we eerst dat de bouwmethode werkt en welke leeractiviteiten inhoudelijk nog nodig zijn.
- Eerst één proefles (MFA les 1), inclusief één HTML-scenario. De proefles is klaar als hij: inhoudelijk is vrijgegeven door Mathanje, de broncontrole heeft doorstaan, op een telefoon bruikbaar is, technisch is getest in Moodle, begrijpelijk is voor de doelgroep en een gemeten studietijd heeft. Daarna wordt hij de standaard, met block templates voor intro, uitleg, oefening en feedback.
- Leerdoelen per les als herkennen, beslissen of doen, met per doel of het online of op de praktijkdag wordt beoordeeld.
- Audio en ondertiteling pas na goedkeuring van de tekst, met een uitspraaklijst.
- Wijzigingen per onderdeel, met een revisieregister.
- Martijn wil duidelijk zien of er gewerkt wordt, en eerlijke cijfers.

## 10. Open punten
1. Identiteitscontrole: eindtoets bij DRTC onder toezicht, of thuis met automatische proctoring.
2. MC-praktijkvariant A of B.
3. Slagingspercentage.
4. Medische vrijgave per les door Mathanje.
5. Foto's en video van DRTC-uitrusting en handelingen (instructeur, fotolijst en draaiboek staan klaar).
6. Test van Moodle: registratie, hervatten, afronding en mobiel.

## 10a. Productievolgorde
1. Afspraken v2.0 vastzetten.
2. Dekkingsmatrix MFA en MC voltooien. De matrix is het hart van het project: norm, bron, leerdoel, onderwijs, oefening, toetsing, vrijgave. Velden: norm, competentie, leerdoel-ID, bron met pagina, les, online activiteit, kennischeck-ID, praktijk, beoordeling, medische status, versie.
3. Toetsblauwdruk maken.
4. Studietijdmodel corrigeren.
5. MFA les 1 bouwen als volledige proef: Rise-uitleg, echte afbeelding, video, kennischeck, minimaal één codepakket met afrondingseis, Continue-blok en Restricted-navigatie.
6. Route A en B meten.
7. MFA les 1 medisch laten vrijgeven.
8. Testen in Moodle: Windows, iPhone, Android, tablet, Chrome, Edge en Safari, toetsenbord, afsluiten en hervatten, wisselen van apparaat, vertaling, toegankelijkheid en afronding in het LMS.
9. Twee of drie representatieve cursisten laten testen.
10. Productiemethode definitief kiezen.
11. MFA volledig produceren, daarna kwaliteitscontrole en medische vrijgave.
12. MC produceren volgens dezelfde standaard.
13. Nederlandse master bevriezen.
14. Engelse lokalisatie.
15. Integrale acceptatietest.
16. Formele release.

## 11. Uitvoering: definities, statussen en beheer

### Wat telt als studietijd
- Telt mee: leestekst (150 woorden per minuut), kennischecks (1 minuut), video en audio met de echte duur, en activiteiten die Rise of het pakket controleert: Scenario-blok, sorteeroefening, gelabelde afbeelding waarvan alle punten geopend moeten worden, proces, tabs en accordeon met verplichte afronding, en codepakketten die hun afronding doorgeven.
- Telt niet mee: samenvattingen en herhalingsschermen bovenop de leestijd, reflectievragen zonder controle, doe-opdrachten zonder controlevraag, wachttijd en animaties.
- Een scenario met meerdere paden telt met de tijd van het kortste volledige pad. Extra paden zijn winst, geen onderbouwing.
- De eindtoets telt niet mee.

### Status per les
Eén vaste reeks per les-ID: concept, bron gecontroleerd, didactisch gereed, medische review, medisch vrijgegeven, productie, technisch getest in Moodle, definitief. De status staat bovenaan iedere les en in het statusoverzicht in de repo. Wordt na de medische vrijgave iets medisch gewijzigd, dan gaat alleen dat onderdeel opnieuw naar Mathanje, niet de hele opleiding.

### Poorten in het AI-proces
- Nooit direct uit AI overnemen zonder broncontrole: medische beweringen, handelingen en hun volgorde, waarschuwingen, doseringen, getallen, en toetsvragen met hun antwoorden.
- Wij doen per les de inhoudelijke controle tegen de bron. Mathanje doet de medische review.
- Klaar voor medische review betekent: controleprompt doorlopen, alle afwijkingen van de bron hersteld, bronverwijzingen compleet, open vragen voor Mathanje genummerd.

### Klaar per les (Definition of Done)
Bron gecontroleerd; studietijd berekend met het script; mobiel gecontroleerd; taalredactie gedaan; medische review uitgevoerd of zichtbaar gemarkeerd als nog niet vrijgegeven; media compleet; Restricted-navigatie en Continue-knoppen getest; gekoppeld in de dekkingsmatrix.

### Engelse vertaling
- Eén master, geen tweede cursusontwikkeling. Volgorde: Nederlands definitief, medisch vrijgegeven, terminologielijst vastgelegd, vertaling, controle van de medische vaktermen, codepakketten apart lokaliseren, Engelse technische test.
- Geen eigen herinterpretatie: vertalen, niet herschrijven.
- Medische termen via een vaste terminologielijst. Begrippen die niet één op één te vertalen zijn, gaan terug naar Mathanje.

### Eindtoets
- Eigenaar van de vragenbank is DRTC. Mathanje keurt de vragen medisch goed. Wij leveren voorstellen.
- Iedere vraag heeft een vraag-ID, een leerdoel-ID en een bronverwijzing.
- De toetsmatrijs legt de verdeling over leerdoelen en moeilijkheidsniveaus vast.

### Codepakketten
- Wij bouwen en onderhouden de pakketten. De broncode staat in de repo, met een versienummer per pakket dat ook zichtbaar is in het pakket zelf.
- Terugval bij problemen op mobiel of in Moodle: een Rise Scenario-blok met dezelfde inhoud.
- Toegankelijkheid wordt per pakket getest: toetsenbord, contrast, schermlezer-labels en tekstgrootte.

### ID's en bronnen
- Het ID-register en het bronregister staan in de repo en worden door ons beheerd. Een nieuw ID wordt alleen daar uitgegeven. Bestaande ID's worden nooit hergebruikt of hernummerd.
