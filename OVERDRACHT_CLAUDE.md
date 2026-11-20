# Overdracht aan Claude: DRTC Medical First Aid en Medical Care

Samengesteld op 20 november 2026. Dit document draagt het bestaande ontwikkelproject over voor verdere broncontrole, inhoudelijke uitwerking en voorbereiding op Articulate 360. Het is een werkopdracht, geen verklaring dat alle medische inhoud al is vrijgegeven.

## Opdracht en werkplek

Je werkt met Martijn, Deputy Managing Director van DRTC, aan twee zelfstandige hybride STCW-opleidingen: Medical First Aid en Medical Care. Beide moeten ook samen als traject kunnen worden gevolgd. Ontwikkel voort op het bestaande dossier.

Repository: [Scoits/MFAMCELEARNING](https://github.com/Scoits/MFAMCELEARNING).
Actuele ontwikkelbranch: ontwerp/dekking-v002.
Open wijzigingsvoorstel bij deze overdracht: [PR6](https://github.com/Scoits/MFAMCELEARNING/pull/6).

De inhoudelijke uitwerking staat op deze branch zolang de PR niet is samengevoegd. Controleer de actuele branch en bestanden voordat je schrijft. Een GitHub-link geeft niet vanzelf toegang tot de repository, SharePoint of Articulate. Benoem uitsluitend concrete ontbrekende toegang en werk door aan onderdelen die wel beschikbaar zijn.

Dit dossier betreft STCW MFA/MC. De eerder aangeleverde Claude-tekst begon ten onrechte vanuit een NOGEPA/EHBO-tender. Neem dat kader niet over. Security Awareness en GWO horen evenmin bij de inhoud van deze opdracht.

## Vaststaande uitgangspunten

| Onderdeel | Uitgangspunt |
| --- | --- |
| MFA | Eén studiedag e-learning en één dag op locatie |
| MC | Eén studiedag e-learning en twee dagen op locatie |
| Combinatie | Twee online studiedagen en drie locatiedagen; zelfstandige afronding per opleiding |
| Taal | Eerst Nederlandse master, daarna inhoudelijk gelijkwaardige Engelse vertaling |
| Bouw | Articulate 360; Rise als voorgestelde basis, Storyline waar de interactie dit rechtvaardigt |
| Vormgeving | Bestaande DRTC-stijl en Articulate-templates hergebruiken |
| Apparaten | Volledige online route bruikbaar op mobiel, tablet en computer |
| Levering | Zelf gehost Moodle; Moodle wordt bij Hetzner gehost |
| Administratieve keten | DRTC-website en ChainWise zijn volgens Martijn gekoppeld aan Moodle |
| Medische eindgoedkeuring | Mathanje |
| Werkroute | ChatGPT voor opzet, Claude voor uitwerking en review, Articulate voor productie, Moodle voor gebruik |

DRTC is volgens Martijn erkend en heeft de hybride stap met ILT besproken. Werk vanuit die context verder. Presenteer het gesprek niet als formele erkenning van een nieuwe hybride uitvoering. Vraag niet opnieuw om algemene toestemming om het ontwerp uit te werken.

## Bestaand resultaat en leesvolgorde

Het dossier bevat50 MFA-doelen, 68 MC-doelen, 23 IaT/CBT-voorwaarden, twaalf aanvullende controlepunten,38 bronregisterregels, analyses, toetsontwerp en urenramingen. Er is één Nederlands RMD-prototype met acht schermen en drie formatieve kennischecks. Volledige lessen, definitieve examens en SCORM-pakketten zijn nog niet geproduceerd.

Lees eerst [AGENTS.md](AGENTS.md), [CLAUDE.md](CLAUDE.md), [status](docs/status.md), [besluiten](docs/besluiten.md) en [projectcontrole](docs/projectcontrole-v003.md).

Gebruik vervolgens:

| Werkonderdeel | Bestanden |
| --- | --- |
| Cursusindeling en raming | [Cursusopbouw](docs/cursusopbouw-voor-medische-review.md), [leerroute en uren](docs/leerroute-en-uren.md) |
| Inhoudelijke dekking | [MFA-matrix](curriculum/mfa-dekkingsmatrix.csv), [MC-matrix](curriculum/mc-dekkingsmatrix.csv) en bijbehorende analyses |
| Uitvoeringsvoorwaarden | [IaT/CBT](curriculum/iat-cbt-matrix.csv), [aanvullende voorwaarden](curriculum/aanvullende-voorwaarden.csv) |
| Bronnen | [Toelichting](sources/README.md), [register](sources/register.csv) |
| Medische reactie | [MH-001](reviews/2026-11-20-mathanje-hoofdlijnen.md) |
| Praktijk en toetsing | [Praktijkindeling](docs/praktijkindeling.md), [toetsontwerp](docs/toetsontwerp.md), [vaardigheidsregister](curriculum/mc-vaardigheidsregister.csv) |
| Voorbeeldles | [RMD-master](content/nl/MFA-L07-radiomedisch-advies.md), [schermreview](reviews/MFA-L07-schermreview.csv) |
| Vast schrijf- en schermformat | [Stijlgids](articulate/stijlgids.md), [CSV-schema](templates/schermreview.csv) en overige templates |
| Bouw en techniek | [Import- en bouwroute](articulate/import-en-bouwroute.md), [integratieplan](articulate/integratieplan.md), [ChainWise-keten](moodle/chainwise-keten.md) |

## Normkader en werkelijke bronstatus

MFA hoort bij STCW A-VI/4-1 en IMO Model Course 1.14. MC hoort bij A-VI/4-2 en Model Course 1.15. Koppel iedere competentie aan kennis/vaardigheden, wijze van aantonen en beoordelingscriteria: alle vier STCW-kolommen. Onderscheid norm, didactische modelrichtlijn, bestaande DRTC-uitvoering en nieuw ontwerpvoorstel.

De aangeleverde DRTC-lesplannen, assessments, verwijsoverzichten en Mathanje-bijlagen zijn gelezen. De relevante STCW-tabellen, IaT 4 en aanvullende e-learning- en kwalificatiebronnen zijn gebruikt. Van beide model courses, editie 2000, zijn Part A/B en gerichte Part C-passages beoordeeld. De gehele compendia en alle medische boeken zijn niet integraal gelezen.

Veel dia-verwijzingen zijn nog indirect via verwijsoverzichten. De grote MFA-presentatie S034 kon via de gebruikte extractieroute niet inhoudelijk worden geopend. Gebruik daarvoor een geschikte lees- of exportroute als die beschikbaar is. Een genoemde dia is geen bewijs dat zij daadwerkelijk gelezen is.

De STCW-bron in het dossier is de Manila-tekst uit 2010, geen actuele geconsolideerde editie. De toepasselijke actuele normcontrole staat open. De model courses uit 2000 geven geen zelfstandige actuele behandelprotocollen. Controleer bronactualiteit gericht en registreer de gebruikte versie en vindplaats.

IaT-bankonderhoud vraagt volgens de gelezen passage minimaal tweemaal per jaar actualiseren en aanvullen; regelmatige volledige examenvernieuwing is een afzonderlijk onderwerp zonder daar vast genoemde halfjaarlijkse termijn. De Covid-termijn in S035 is geen vastgesteld huidig interval tussen theorie en praktijk. Rolkwalificaties uit S036 volgen de feitelijke onderwijs- of assessorrol.

De primaire bronmap is [DRTC SharePoint MFA MC E-Learner](https://drtconline.sharepoint.com/sites/DRTC-F-Cursus/Shared%20Documents/General/MFA%20MC%20E-Learner). Benoem per ontbrekende bron welk onderdeel geraakt wordt. Vul ontbrekende broninhoud niet uit de bestandsnaam of met een algemene medische aanname in.

## Mathanjes ontvangen reactie

Mathanje heeft positief gereageerd op de hoofdlijnen. Zij vindt het tijdspad aannemelijk, maar de praktijk moet de haalbaarheid aantonen. Zij ondersteunt een afsluitende toets met een vereist slagingspercentage.

Haar voorstel voor MFA is een halve dag handelingen oefenen en een halve dag LOTUS/scenariotraining.

Voor MC stelt zij twee alternatieven voor:
1. Beide dagen ochtend handelingen oefenen en middag LOTUS/scenario's.
2. Dag 1 handelingen oefenen en dag 2 LOTUS/scenario's.

Er is geen definitieve MC-keuze gemaakt. De projectuitwerking heeft een didactische voorkeur voor de eerste variant; dit is geen besluit van Mathanje of DRTC. Er is ook geen exact slagingspercentage vastgesteld.

Deze reactie geeft richting aan de verdere uitwerking. Zij is geen medische detailvrijgave van alle cursistenteksten, handelingen, antwoorden of criteria. Houd de bestaande open doel- en schermreviewstatussen in stand tot de betreffende inhoud werkelijk is beoordeeld.

## Cursusopbouw en uren

Behoud de bestaande les-ID's en werkindeling.

MFA: L00 start/veiligheid/voorkennis; L01 uitrusting; L02 lichaamsbouw en slachtofferonderzoek; L03 levensbedreigende situaties; L04 trauma en temperatuurletsel; L05 gevaarlijke stoffen en geredde personen; L06 medicatiebasis, hygiëne en psychosociale aandacht; L07 radiomedisch advies; L08 theorieafronding en praktijkvoorbereiding.

MC: L00 start en voorkennis; L01 aanvullend onderzoek; L02 traumazorg; L03 wonden en behandeltechnieken; L04 verpleegkundige zorg; L05 ziekten en noodsituaties; L06 bijzondere zorg; L07 preventie, beheer en regels; L08 gecoördineerde medische hulp; L09 theorieafronding en praktijkvoorbereiding.

De online begrotingen zijn ieder 480 minuten. Het zijn ramingen, geen bewezen minimumduur. De reservering van 60 minuten voor afronding omvat ook verwerking van leerpunten en stelt geen examenduur vast. Neem groepsgrootte of assessorverhoudingen uit oude lesplannen niet automatisch over als vastgesteld hybride rooster.

Maak bij MC de noodzakelijke MFA-herhaling toegankelijk voor zelfstandig instromende cursisten. Volgens de gelezen IaT-passage gaat het om aantoonbare MFA-kennis; maak een MFA-certificaat niet zonder onderbouwing tot de enige bewijsroute.

## Concrete inhoudelijke vervolgtaken

Controleer en verbeter de bestaande matrices en werk vervolgens MFA en MC module voor module uit. Begin met de bestaande bestanden en behoud hun ID's. Maak geen nieuwe generieke curriculumstarter.

Werk bekende hiaten gericht af: bloedingen/shock expliciet plaatsen en koppelen binnen de MFA-herhaling; bevallingszorg bij MC; psychosociale modelinhoud; medicatiescope en grens tussen MFA en MC; actualiteit van oudere technieken; en de volledige RMD-dekking. Het huidige RMD-prototype behandelt nog niet volledig GMDSS en het verwerken van ontvangen medisch advies in scenariozorg.

IM-injecteren, SC-injecteren, infuus en katheter hebben afzonderlijke vaardigheid- en assessment-ID's. Verlies die herkenbaarheid niet. Infuus is geregistreerde bestaande DRTC-inhoud met een open scopebesluit, geen toegevoegde zelfstandige STCW-verplichting.

Koppel medische uitspraken aan een precieze bronplaats. Verzin geen protocollen, doseringen, indicatiegrenzen, normpercentages of vrijgaven. Zet een inhoudelijke onzekerheid in de reviewmaster als TE VERIFIËREN, met de concrete vraag en benodigde beoordeling. Stel actuele bronkeuzes waar nodig voor aan Mathanje.

## Gevraagde producten

1. Gerichte bron- en dekkingscontrole met uitsluitend werkelijk geconstateerde hiaten en bronconflicten.
2. Nederlandse lessen als complete reviewmaster per scherm: vaste ID, leerdoelen, volledige cursistentekst, voice-over of niet van toepassing, exacte interactie, antwoordopties, feedback, bronplaats, media, tijdsraming en Mathanjes reviewveld. Gebruik het bestaande CSV-schema.
3. Praktijkstations en fictieve LOTUS-scenario's met leerdoelen, instructie, benodigde middelen, individueel observeerbaar gedrag, feedback en assessmentregistratie.
4. MFA-dagplanning en beide MC-varianten met tijd, middelen, bezetting en individueel bewijs. Vergelijk de uitvoerbaarheid en doe een onderbouwd keuzevoorstel.
5. Toetsmatrijs per opleiding en een onderbouwd voorstel voor slagingsgrens en overige toetsregels. Houd formatieve kennischecks, afsluitende theoriebeoordeling, verificatie bij praktijkstart en fysieke beoordeling afzonderlijk herkenbaar.
6. Na inhoudelijke vaststelling: schone importinhoud, media-instructies en een doorlopende Articulate-promptset met dezelfde ID's en versies. De schone inhoud bevat geen interne twijfels, akkoordvelden of reviewopmerkingen.
7. Een proefplan voor pakket, mobiel gebruik en Moodle/ChainWise-registratie, plus een actuele projectstatus.

Een groepsscenario levert alleen individueel bewijs op voor gedrag dat per cursist daadwerkelijk is waargenomen. Plan uitleg, oefenen, observatie, debrief, wisseltijd en eventuele herbeoordeling binnen de beschikbare dagdelen.

## Vormgeving, mobiel en media

Gebruik de bestaande DRTC-stijl in Articulate. De exacte template- of referentiecursuslink is nog te lokaliseren. Neem concrete thema-instellingen over uit die bestaande bron. De inhoudelijke stijlgids vult teksten, structuur en review aan.

Alle online inhoud moet werken in de browser op telefoon, tablet en computer, inclusief toetsen en hervatten. Ontwerp voor een staand telefoonscherm, aanraakbediening, leesbaar beeld, ondertiteling en bediening zonder hover. Bied voor slepen een gelijkwaardige tik- of keuzevariant. Deel grote modules op in korte samenhangende lessen.

Maak een concreet beeld- en videoplan per scherm met beschikbare DRTC-media, bronasset, rechten, alt-tekst en ondertiteling. Een SharePoint-map wordt niet vanzelf volledig en gecontroleerd in Articulate verwerkt. Laat generatief beeld geen gevalideerde medische demonstratie vervangen. Controleer elk Storyline-onderdeel op leesbaarheid en bediening op een telefoon.

De eigen Articulate-account, mobiele werking en volledige technische keten zijn nog niet getest. Claim geen werkende cursus op basis van alleen een document of screenshot.

## Technische en publicatiegrenzen

Afsluitende kennistoetsen in Moodle Quiz en SCORM 1.2 als exportbasis zijn ontwerpvoorstellen. Volledige native SCORM 2004-ondersteuning of complete antwoordregistratie uit alle ingebedde Storyline-scenario's worden niet aangenomen. Volg het bestaande integratieplan en test de concrete inrichting.

Een online resultaat is geen volledig cursuscertificaat. Theorie, individueel praktijkbewijs en uiteindelijke cursusafronding blijven apart herkenbaar. Verzin geen API-endpoints, veldnamen of actuele synchronisatiewerking van de ChainWise-koppeling.

De repository is openbaar. Houd originele gelicentieerde boeken, video's, persoonsgegevens, inloggegevens en echte summatieve vragenbanken en antwoordmodellen buiten deze werkplek. Openbare voorbeelden zijn herkenbaar formatief. Formele toetsinhoud krijgt een afgeschermde beheerroute.

Een bouwprompt is nog geen gebouwd Rise-project of bewerkbaar Storyline-bestand. Gebruik de werkelijk beschikbare importmogelijkheden en controleer de uitkomst tegen de master.

## Start nu

Lees de genoemde bestanden, bevestig kort welke bronnen je werkelijk kunt openen en ga daarna concreet verder met de bestaande Nederlandse uitwerking. Lever de eerste uitgewerkte module en gerichte reviewvragen; werk vervolgens door volgens de modulevolgorde.

Stel reeds beantwoorde vragen over scope, taal, platform, cursusvorm, stijl of reviewer niet opnieuw. Bundel alleen ontbrekende inhoudelijke beslissingen die de betreffende uitwerking raken. Werk zelfstandig door aan andere onderbouwde onderdelen. Houd bronstatus, ontwerpvoorstellen en medische vrijgave gescheiden en werk de status en overdracht bij.

Schrijf helder Nederlands zonder icoontjes, decoratieve streepjes of onnodige managementtaal.
