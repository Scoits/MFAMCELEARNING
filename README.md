# DRTC Medical First Aid en Medical Care e-learning

Gezamenlijke werkplek voor het ontwikkelen van twee zelfstandige hybride STCW-opleidingen en het gecombineerde traject. Dit project wordt uitgewerkt met ChatGPT en Claude, gebouwd in Articulate 360 en aangeboden via zelf gehost Moodle.

## Vastgelegde opzet

| Opleiding | Online | Op locatie | Kader |
| --- | --- | --- | --- |
| Medical First Aid | Eén studiedag | Eén dag | STCW A-VI/4-1 en IMO Model Course 1.14 |
| Medical Care | Eén studiedag | Twee dagen | STCW A-VI/4-2 en IMO Model Course 1.15 |
| Combinatie | Twee studiedagen | Drie dagen | Beide opleidingen, met afzonderlijke toetsing en geborgde instroom |

De Nederlandse masterversie is leidend. De Engelse vertaling volgt na inhoudelijke vaststelling. Mathanje geeft de medische inhoudelijke eindgoedkeuring. DRTC is volgens de projectopdracht erkend en heeft de hybride stap met ILT besproken. De precieze uitvoering wordt in de uitwerking onderbouwd.

## Begin hier

Lees [de actuele projectstatus](docs/status.md), [het ontwerpkader](docs/ontwerpkader.md) en [het bronregister](sources/README.md). Voor Claude staan de werkinstructies in [CLAUDE.md](CLAUDE.md) en de startopdracht in [prompts/claude-start.md](prompts/claude-start.md). [AGENTS.md](AGENTS.md) bevat de algemene projectinstructies voor AI-assistenten.

## Projectinhoud

| Map of bestand | Inhoud |
| --- | --- |
| `docs/` | Ontwerpkader, besluiten, planning en status |
| `sources/` | Bronregister en vindplaatsen in SharePoint |
| `curriculum/` | Module-indeling en voorlopige dekkingsmatrices |
| `content/nl/` | Nederlandse lesuitwerking |
| `content/en/` | Vertalingen met koppeling naar Nederlandse versie |
| `templates/` | Lesstoryboard, vraagrecord en praktijkassessment |
| `prompts/` | Overdraagbare opdrachten voor Claude |
| `reviews/` | Inhoudelijke controle en goedkeuringsregistratie |
| `articulate/` | Bouwafspraken voor Rise en Storyline |
| `moodle/` | Technische opzet en acceptatie van levering en toetsing |

## Huidige fase

De eerste inhoudelijke uitwerking is beschikbaar: 50 MFA-leerdoelen, 68 MC-leerdoelen, 23 CBT- en uitvoeringsvoorwaarden, een toetsontwerp, een voorlopige urenbegroting en één Nederlands lesprototype over radiomedisch advies. Zie [de bevindingen van versie 0.2](docs/ontwerpbevindingen-v002.md). De matrices zijn brongekoppelde ontwerpen; de onderliggende lesbronnen en medische actualiteit vragen nog gerichte controle. Er zijn nog geen medisch vrijgegeven lessen, definitieve examens of gebouwde SCORM-pakketten.

De volgende stap is gerichte controle van de bestaande dia's en praktijkinstructies, beoordeling van de inhoudelijke hiaten en het lesprototype door Mathanje, en een stationsplan voor individueel praktijkbewijs. Het prototype kan vervolgens als klein proefpakket in Moodle worden gebouwd en getest. Open taken staan bij [Issues](https://github.com/Scoits/MFAMCELEARNING/issues) en in [de ontwikkelvolgorde](docs/roadmap.md).

## Gebruik met Claude

Open of koppel deze repository in je Claude-omgeving en gebruik de opdracht uit `prompts/claude-start.md`. Claude Code kan `CLAUDE.md` als projectinstructie lezen. In andere Claude-omgevingen moet je de bestanden expliciet beschikbaar maken. Een GitHub-link geeft een AI-assistent niet vanzelf toegang tot de repository of SharePoint.

Bronbestanden staan in de [centrale SharePoint-map](https://drtconline.sharepoint.com/sites/DRTC-F-Cursus/Shared%20Documents/General/MFA%20MC%20E-Learner). Het register bevat vindplaatsen, geen openbare kopieën van boeken of films. Als een assistent een bron niet kan openen, blijft die bron zichtbaar als nog te beoordelen en wordt de inhoud niet ingevuld op basis van een titel of samenvatting.

## Publicatie en toetsmateriaal

Deze repository was bij de inrichting openbaar. De opzet, templates en bronverwijzingen zijn hier beschikbaar. Originele gelicentieerde boeken, video's, persoonsgegevens, wachtwoorden, API-sleutels en echte summatieve examenvragen horen in daarvoor toegankelijke beheeromgevingen. De vraagtemplate bevat uitsluitend een leeg schema. Examens en antwoorden worden later in een afgeschermde vragenbank beheerd.

## Werkwijze

Werk per afgebakend onderwerp op een branch en beschrijf inhoudelijke wijzigingen in een pull request. Leg de gewijzigde bronversie en benodigde review vast. Alleen expliciet beoordeelde inhoud krijgt de status `medisch_goedgekeurd`. De bestaande goedkeuring van DRTC of de bereidheid van ILT geldt niet als bewijs dat nieuwe AI-gegenereerde inhoud is goedgekeurd.
