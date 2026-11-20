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

Gebruik voor de overdracht [OVERDRACHT_CLAUDE.md](OVERDRACHT_CLAUDE.md). Dit dossier bundelt de vaste keuzes, Mathanjes reactie, bronstatus en concrete vervolgopdracht.

Lees [de brede projectcontrole](docs/projectcontrole-v003.md), [de actuele projectstatus](docs/status.md), [het ontwerpkader](docs/ontwerpkader.md) en [het bronregister](sources/README.md). Voor Claude staan de werkinstructies in [CLAUDE.md](CLAUDE.md) en de startopdracht in [prompts/claude-start.md](prompts/claude-start.md). [AGENTS.md](AGENTS.md) bevat de algemene projectinstructies voor AI-assistenten.

## Projectinhoud

| Map of bestand | Inhoud |
| --- | --- |
| `docs/` | Ontwerpkader, besluiten, planning en status |
| `sources/` | Bronregister en vindplaatsen in SharePoint |
| `curriculum/` | Module-indeling en voorlopige dekkingsmatrices |
| `content/nl/` | Nederlandse lesuitwerking |
| `content/en/` | Vertalingen met koppeling naar Nederlandse versie |
| `templates/` | Lesstoryboard, vast schermschema, vraagrecord en praktijkassessment |
| `prompts/` | Overdraagbare opdrachten voor Claude |
| `reviews/` | Inhoudelijke controle en goedkeuringsregistratie |
| `articulate/` | Bouwafspraken voor Rise en Storyline |
| `moodle/` | Technische opzet en acceptatie van levering en toetsing |

## Huidige fase

De inhoudelijke ontwerpversie 0.4 bevat 52 MFA-leerdoelen, 68 MC-leerdoelen, 23 IaT/CBT-voorwaarden, twaalf aanvullende controlepunten uit eerdere ILT-documenten, een toetsontwerp en urenramingen. Uitgewerkt in concept zijn MFA-L00 tot en met MFA-L08, met de RMD-les MFA-L07 in versie 0.3, en MC-L00 tot en met MC-L02, alle met een schermreview en de status medische_review_nodig. De [ingevulde schermreview](reviews/MFA-L07-schermreview.csv), [stijlgids](articulate/stijlgids.md) en [import- en bouwroute](articulate/import-en-bouwroute.md) maken de overdracht naar Mathanje en Articulate concreet.

De [brede projectcontrole](docs/projectcontrole-v003.md) beschrijft de aangebrachte correcties en open punten. De eerdere [keten website, ChainWise en Moodle](moodle/chainwise-keten.md) is teruggezet, inclusief Moodle-hosting bij Hetzner en acht beschreven acceptatieproeven. De volledige lesproductie, medische vrijgave en technische proef zijn nog niet uitgevoerd. Het RMD-prototype dekt zijn gekoppelde doelen gedeeltelijk.

Mathanje heeft [positief gereageerd op de hoofdlijnen](reviews/2026-11-20-mathanje-hoofdlijnen.md) en ondersteunt toetsing met een slagingsgrens. Haar [praktijkvoorstellen](docs/praktijkindeling.md) zijn opgenomen: MFA twee halve dagen en voor MC twee nog te kiezen varianten. Het exacte percentage en de medische detailvrijgave blijven open.

De volgende stap is gerichte controle van de bestaande dia's en praktijkinstructies, medische beoordeling van hiaten en vaardigheidsscope, en een stationsplan voor individueel praktijkbewijs. Daarna volgt het gecontroleerde proefpakket. Zie [Issues](https://github.com/Scoits/MFAMCELEARNING/issues) en [de ontwikkelvolgorde](docs/roadmap.md).

## Gebruik met Claude

Open of koppel deze repository in je Claude-omgeving en gebruik de opdracht uit `prompts/claude-start.md`. Claude Code kan `CLAUDE.md` als projectinstructie lezen. In andere Claude-omgevingen moet je de bestanden expliciet beschikbaar maken. Een GitHub-link geeft een AI-assistent niet vanzelf toegang tot de repository of SharePoint. Gebruik voor deze uitwerking de branch `ontwerp/dekking-v002` zolang [pull request 6](https://github.com/Scoits/MFAMCELEARNING/pull/6) niet is samengevoegd; de actuele inhoud kan afwijken van `main`.

Bronbestanden staan in de [centrale SharePoint-map](https://drtconline.sharepoint.com/sites/DRTC-F-Cursus/Shared%20Documents/General/MFA%20MC%20E-Learner). Het register bevat vindplaatsen, geen openbare kopieën van boeken of films. Als een assistent een bron niet kan openen, blijft die bron zichtbaar als nog te beoordelen en wordt de inhoud niet ingevuld op basis van een titel of samenvatting.

## Publicatie en toetsmateriaal

Deze repository was bij de inrichting openbaar. De opzet, templates en bronverwijzingen zijn hier beschikbaar. Originele gelicentieerde boeken, video's, persoonsgegevens, wachtwoorden, API-sleutels en echte summatieve examenvragen horen in daarvoor toegankelijke beheeromgevingen. De vraagtemplate bevat uitsluitend een leeg schema. Examens en antwoorden worden later in een afgeschermde vragenbank beheerd.

## Werkwijze

Werk per afgebakend onderwerp op een branch en beschrijf inhoudelijke wijzigingen in een pull request. Leg de gewijzigde bronversie en benodigde review vast. Alleen expliciet beoordeelde inhoud krijgt de status `medisch_goedgekeurd`. De bestaande goedkeuring van DRTC of de bereidheid van ILT geldt niet als bewijs dat nieuwe AI-gegenereerde inhoud is goedgekeurd.
