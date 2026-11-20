# Gerichte bron- en dekkingscontrole

Versie 0.4, 20 november 2026. Uitgevoerd door Claude bij de overname van het dossier. Dit verslag noemt alleen werkelijk geconstateerde punten. Het verhoogt geen bronstatus en geeft geen medische vrijgave.

## Welke bronnen in deze omgeving beschikbaar waren

| Bron | Beschikbaar | Gevolg |
| --- | --- | --- |
| Deze repository op branch ontwerp/dekking-v002 | Ja, volledig gelezen | Basis voor alle controles hieronder |
| DRTC SharePoint (S002 tot en met S029, S033, S034) | Nee | Geen dia, praktijkhandeling, boek of film rechtstreeks gecontroleerd; de leesstatus in het register blijft ongewijzigd |
| Publieke webbronnen (S001, S030 tot en met S032, IaT 4 via overheid.nl) | Nee, geen uitgaande verbinding vanuit deze werkomgeving | Geen nieuwe controle van normtekst of KNRM-procedure; de eerdere lezing blijft de basis |
| ChatGPT-projectbestanden (S011, S012, S035 tot en met S038) | Nee | Alleen de samenvattingen in dit dossier zijn gebruikt |

Er is dus geen nieuwe broninhoud gelezen. De nieuwe lesteksten verwijzen naar de eerder vastgelegde vindplaatsen en markeren iedere uitspraak die nog op een niet gelezen bron steunt als TE VERIFIËREN. Vier aanvullende bronnen zijn als voorstel geregistreerd (S039 tot en met S042), met leesstatus niet gelezen.

## Uitgevoerde consistentiecontrole

Het nieuwe script `tools/controleer_dossier.py` controleert de samenhang van matrices, bronregister, schermreviews en Markdown-masters. Uitkomst na de wijzigingen van deze versie: 0 fouten.

| Controle | Uitkomst |
| --- | --- |
| Alle vier STCW-kolommen gevuld | Ja, voor alle 52 MFA- en 68 MC-doelen |
| Bron-ID's in matrices en schermreviews bestaan in het register | Ja |
| Unieke leerdoel- en scherm-ID's | Ja |
| Iedere module heeft leerdoelen | MFA-L08 en MC-L09 niet; dat klopt, dit zijn theorieafronding en praktijkvoorbereiding. MC-L00 had geen doel; hersteld, zie hieronder |
| Schermreviews volgen het CSV-schema en hebben een kop in de master | Ja, voor MFA-L00, MFA-L01 en MFA-L07 |
| Status medisch_goedgekeurd | Nergens toegekend |

## Geconstateerde hiaten en wijzigingen

| ID | Bevinding | Geraakt | Afhandeling in deze versie | Nog nodig |
| --- | --- | --- | --- | --- |
| BC-01 | Bloeding en shock hadden geen eigen leerdoel; de herhaling zat impliciet in MFA-00.02 | MFA-L03, praktijkstation wond, toetsmatrijs | Nieuwe subdoelen MFA-00.03 (ernstige uitwendige bloeding) en MFA-00.04 (shock) onder parent MFA-00, module MFA-L03. Bestaande ID's ongewijzigd | Bevestigen in S001 tabel A-VI/1-3 dat dit voorkennis uit elementaire eerste hulp is en in S003 Part C 1.1 dat de modelherhaling deze onderwerpen noemt. Mathanje kiest de actuele werkwijze |
| BC-02 | MC-L00 (aansluiting op MFA) had geen leerdoel, terwijl MC-32.01 over MFA-voorkennis in MC-L01 stond | MC-L00, instroomroute | module_id van MC-32.01 gewijzigd naar MC-L00, met toelichting in de opmerkingkolom. ID ongewijzigd | Geen |
| BC-03 | De vergelijking met de klassieke duur (IaT 4 paragraaf 6.3 punt 2: CBT hoogstens twintig procent korter, CBT-02) kan niet worden gemaakt: de klassieke DRTC-klokuren voor MFA en MC staan niet in het dossier | Onderbouwing van de hybride duur; alle urenramingen | Vastgelegd als open punt | Klassieke duur per opleiding in klokuren uit S005 en S006 overnemen en naast 8 plus 8 uur (MFA) en 8 plus 16 uur (MC) zetten. De cursusvorm zelf staat vast; dit is onderbouwingswerk |
| BC-04 | MFA-L07 groeit door de aanvulling van 25 naar 36 minuten | MFA-urenbegroting van 480 minuten | Overschrijding van 11 minuten zichtbaar gemaakt | Kiezen tussen 11 minuten uit de reservering van MFA-L08 of inkorten elders. Voorstel: uit MFA-L08, mits de toetsduur uit de toetsmatrijs past (zie toetsmatrijs-v001.md) |
| BC-05 | De RMD-les dekte GMDSS en het verwerken van ontvangen advies niet | MFA-09.01, MFA-09.03 | Schermen S09 tot en met S11 en zes criteria in S08 toegevoegd | GMDSS-beschrijving controleren in S039; Mathanje beoordeelt het fictieve oefenadvies |
| BC-06 | Voor de inhoud van de medische uitrusting (MFA-L01) zijn S014 en S023 de aangewezen bronnen; beide zijn alleen geïnventariseerd | MFA-01.01 tot en met MFA-01.04 | Les beschrijft functiegroepen met voorbeelden en noemt de inventarislijst van het schip leidend | S023 en S014 lezen om de voorbeelden te bevestigen |
| BC-07 | Er is geen leidende actuele reanimatie- en eerstehulprichtlijn in het register | MFA-L00-S07, MFA-L03, MFA-00.03, MFA-00.04, MC-03 | S041 voorgesteld | Mathanje kiest bron en editie |
| BC-08 | 44 van de 68 MC-doelen vragen in de toetsbewijskolom directe individuele observatie | Beide MC-varianten, assessorcapaciteit | Doorgerekend in praktijkplanning-v001.md | Mathanje en DRTC bepalen welke observaties in scenario's mogen worden gecombineerd |

Bestaande en nog ongewijzigde hiaten blijven open: psychosociale modelinhoud zonder DRTC-vindplaats (MFA-13), de grens tussen MFA en MC bij medicatie en injecties (MFA-10.02), bevalling (MC-20.02), scope van infuus (MC-V03), de ongelezen presentatie S034 en de toepasselijke actuele STCW-editie. Deze worden opgepakt bij de betreffende les.

## Welke bron is nodig voor de volgende stap

| Volgende les | Benodigde bron | Waarom |
| --- | --- | --- |
| MFA-L02 slachtofferonderzoek | Tekstexport van S034 en de patiëntevaluatieformulieren | Het onderzoeksschema dat DRTC op de praktijkdag gebruikt moet in de online les hetzelfde zijn |
| MFA-L03 levensbedreigende situaties | Keuze voor S041 door Mathanje; PH4 en PH5 | Reanimatie, AED, verstikking, bloeding en shock niet zonder actuele bron uitschrijven |
| MFA-L06 medicatie | Scopebesluit Mathanje over MFA-10.02 | Bepaalt wat de MFA-cursist moet weten over toedieningsvormen |

Zonder deze bronnen kan de lesstructuur, de interactie en de praktijkkoppeling worden uitgewerkt, met de medische zinnen als TE VERIFIËREN. Dat is de werkwijze voor de volgende lessen totdat de bronnen beschikbaar zijn.

## Aanvulling 20 november 2026: S034 en S043 gelezen

Na de eerste controle zijn via Microsoft 365 twee DRTC-presentaties als tekstexport gelezen: S034 (3. MFA dag 2 ochtend, 68 dia's) en S043 (2. MFA dag 1 middag, 67 dia's, nieuw geregistreerd). Ze zijn de directe bron voor MFA-L02 en MFA-L03. Bevindingen:

| Nr | Bevinding | Raakt | Gevolg |
| --- | --- | --- | --- |
| BC-09 | Bestandsnamen zeggen rev 003, voetteksten Rev.002. In S043 dragen dia2-4 de voettekst van dag 1 ochtend; in S034 dragen dia52-53 (hangtrauma) een GWO-voettekst | Bronversie in register en lessen | DRTC bevestigt de geldende revisie; hangtrauma is in MFA-L03 alleen als oorzaak van shock genoemd |
| BC-10 | De reanimatiedia's met verhouding, diepte en tempo (S043 dia41-42, 49, 51) bevatten alleen beeld of film | MFA-L03-S04, S05, S07; MFA-12.02 | Getallen niet ingevuld; aanvullen na keuze S041 (R22) |
| BC-11 | Bij verdrinking start DRTC met vijf beademingen (S043 dia13 en 28); bij verstikking mondinspectie na iedere 30 compressies (S034 dia58) | MFA-L03-S08, S10; MFA-12.03, 12.04 | Overgenomen als DRTC-werkwijze en gemarkeerd voor Mathanje (R23, R24) |
| BC-12 | S034 gebruikt DRS-ABCDE zonder de letters uit te schrijven; het patiëntevaluatieformulier is geen afzonderlijk bestand | MFA-L02-S10; MFA-04.01, 04.03; station MFA-P03 | Uitwerking per letter is DRTC-ontwerp en moet gelijk zijn aan het schema in MFA-P03 (R18) |
| BC-13 | De bloedingsdia's (PPT1 dia41-45) en de anatomiedia's (PPT1) zijn nog niet gelezen | MFA-L02-S02 tot en met S08; MFA-L03-S12; MFA-00.03 | Eigen formulering op basisniveau, gemarkeerd als TE VERIFIËREN; PPT1 als PDF-export nodig |
| BC-14 | S043 dia31 noemt zuurstof een middel zonder contra-indicaties in de acute fase | MFA-L05 (zuurstof) | Bij uitwerking van MFA-L05 voorleggen aan Mathanje; niet overgenomen in L02 of L03 |

## Aanvulling 20 november 2026: S044 gelezen

S044 (4. MFA dag 2 middag, 42 dia's) is als tekst gelezen en nieuw geregistreerd.

| Nr | Bevinding | Raakt | Gevolg |
| --- | --- | --- | --- |
| BC-15 | S044 dia3-5 zijn een directe bron voor ernstige bloeding, die eerder alleen indirect via PPT1 bekend was | MFA-L03-S12, K03-05; MFA-00.03 | MFA-L03 versie 0.2 gebruikt S044; tourniquet blijft open (R10) |
| BC-16 | S044 dia4 noemt een infuus bij veel bloedverlies in een MFA-presentatie | MFA-L03-S12; scopegrens MFA en MC (MC-V03) | Niet opgenomen in MFA; voorgelegd aan Mathanje |
| BC-17 | S044 noemt medicatie en invasieve handelingen (cinnarizine, cyclizine, lidocaïne, nagel doorboren) die in geen MFA-leerdoel staan | MFA-10.02 medicatiegrens, MFA-L06, OB-08 | Niet in lessen opgenomen; R31 |
| BC-18 | Brandwonden, hitte en bevriezing in S044 dia21-37 dekken MFA-06.01 tot en met 06.04 direct; onderkoeling komt uit S043 dia7-14 en 29 | MFA-L04 deel A | Uitgewerkt; de praktijkhandeling PH10 is nog niet gelezen |
| BC-19 | Voor MFA-06.04 hitte is geen LOTUS-scenario gepland, terwijl S044 dia13-20 en 38-39 een eigen diagnosetest met drie rondes beschrijven | Praktijkplanning MFA-P07 | Bij de volgende versie van de praktijkplanning de bestaande DRTC-rondes vergelijken met SC-MFA-01 tot en met 06 |

## Aanvulling 20 november 2026: S045 gelezen

S045 (1. MFA dag 1 ochtend, 105 pagina's) is als tekst gelezen en nieuw geregistreerd.

| Nr | Bevinding | Raakt | Gevolg |
| --- | --- | --- | --- |
| BC-20 | DRTC gebruikt DRS-ABCDE met S als send en een catastrofale bloeding vóór A (dia42). MFA-L02 versie 0.1 had S als shout en de bloeding onder C | MFA-L02-S10; MFA-L03-S12 | MFA-L02 versie 0.2 en MFA-L03 versie 0.3 volgen dia42 |
| BC-21 | S009 koppelt item 1.1 aan PPT1 dia41-45; die dia's gaan over DRS-ABCDE en de trauma score kaart, niet over de bloedingsbehandeling | MFA-00.03 bronvindplaats | Bloedingsbehandeling steunt op S044 dia3-5 |
| BC-22 | De anatomiedia's (7-19, 34-40, 62-64) bevatten alleen een titel en beeld. Dia17-19 behandelen het zenuwstelsel, waarvoor geen eigen MFA-leerdoel bestaat | MFA-L02-S02 tot en met S08; MFA-02 | Anatomieschermen blijven TE VERIFIËREN tegen het beeld; zenuwstelsel is in MFA-L02-S02 en MFA-L04-S13 alleen via het ruggenmerg behandeld |
| BC-23 | Het patiëntevaluatieformulier is vermoedelijk de trauma score kaart (dia44-45 en 61), die alleen als beeld in de PDF staat | MFA-L02-S10, station MFA-P03 | DRTC bevestigt en levert de kaart als afzonderlijk bestand |
| BC-24 | Dia51-58 bevatten medicatie met doseringen (paracetamol, NSAID, morfine, tramadol); dia78, 83, 89 en 103 noemen reponeren, morfine, infuus en paracetamol | MFA-L06, MFA-10.02, OB-08; MFA-L04 deel B | Niet opgenomen in MFA-L04; beoordelen bij MFA-L06 (R34) |
| BC-25 | De nekspalk wordt op dag 1 aangeleerd (dia3, 21-25) | MFA-05.03, R05 | Opgenomen als DRTC-werkwijze en voorgelegd |

## Aanvulling 20 november 2026: formulier, rooster en praktijkhandelingen

Martijn leverde het patiëntevaluatieformulier (S046), het rooster van januari 2024 (S047), de MLC-medische kaart (S048) en de praktijkhandelingen PH 1 tot en met 14 (S049 tot en met S061, PH 13 is S033) aan.

| Nr | Bevinding | Raakt | Gevolg |
| --- | --- | --- | --- |
| BC-26 | Het patiëntevaluatieformulier gebruikt de Glasgow Coma Schaal, een traumascore en AMPLE | MFA-L02-S10, S12, S14, S16; MFA-L04-S16 | MFA-L02 versie 0.3 volgt het formulier; de open vraag naar ziekten, medicatie en allergieën is opgelost met AMPLE |
| BC-27 | PH4 geeft de getallen voor reanimatie die in de dia's alleen als beeld stonden; de bestanden zijn vermoedelijk van 2015 | MFA-L03-S04, S05, S07; BC-10 | Getallen ingevuld als DRTC-werkwijze; toetsing aan S041 blijft (R22) |
| BC-28 | Het rooster S047 laat zien dat 40 klassikale uren MFA en MC samen zijn: MFA twee dagen, MC drie dagen | BC-03, CBT-02, OB-06 | Uitgewerkt in docs/urenvergelijking-v001.md; de hybride uitvoering is per opleiding niet korter |
| BC-29 | PH9 noemt een vacuümspalk; PH8 een verstelbare nekkraag | MFA-07.05, MFA-05.03, R05 | Opgenomen in MFA-L04 versie 0.3 |
| BC-30 | PH12 drukpunten bestaat, terwijl de matrix drukpunten niet zonder actualiteitscontrole overneemt | MFA-02.02, MFA-L03-S12 | Niet opgenomen; R35 |
| BC-31 | PH 14 urinekatheter en de MLC-kaart zijn scans zonder tekstlaag | MC-lessen, MC-administratie | Niet gelezen; leesbare versie of OCR nodig bij de MC-uitwerking |
| BC-32 | S009 verwijst voor hygiëne naar PPT4 dia17, maar die dia gaat over een blauwe nagel | MFA-11.01, MFA-11.02, MFA-L06-S06 | Scherm grotendeels eigen formulering; R42 en een juiste DRTC-vindplaats nodig |
| BC-33 | Neusbloeding en letsel aan de keel komen in de gelezen DRTC-dia's niet voor, terwijl MC-02 letsel aan oor, neus, keel en ogen noemt | MC-02.01, MC-L02-S07 | Niet aangevuld; R52 |
| BC-34 | S062 dia90 noemt bij chemisch oogletsel minimaal 15 minuten spoelen; de MFA-dia's noemen geen duur | MC-L02-S05; MFA-L05-S05 en R37 | Opgenomen in MC-L02; voor MFA blijft R37 open, wel ligt nu een DRTC-bron voor |
| BC-35 | PH2 (S050, 2015) en S064 (2024) verschillen: Betadine jodium tegenover desinfectans, en tweemaal tegenover driemaal omslaan bij de eerste knoop | MC-08.02, MC-L03-S11 | Les noemt geen middel en geen aantal; R55 |
