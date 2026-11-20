# Projectstatus

Bijgewerkt op 20 november 2026, ontwerpversie 0.5. Claude heeft het dossier van ChatGPT overgenomen, een gerichte bron- en dekkingscontrole uitgevoerd, MFA-L00 tot en met MFA-L03 uitgewerkt, de RMD-les aangevuld en de praktijkplanning en toetsmatrijs als voorstel gemaakt. Via Microsoft 365 zijn S009, S034 (dag 2 ochtend) en S043 (dag 1 middag) als tekst gelezen; S034 en S043 zijn de directe bron voor MFA-L02 en MFA-L03. Medische vrijgave en technische uitvoering staan open.

| Onderdeel | Status | Vindplaats |
| --- | --- | --- |
| Broncontrole v004 | Consistentie gecontroleerd met script; acht bevindingen BC-01 tot en met BC-08 | [Broncontrole](broncontrole-v004.md) |
| Controlescript | `python3 tools/controleer_dossier.py`; 0 fouten op deze versie | [Script](../tools/controleer_dossier.py) |
| Brede projectcontrole v003 | Uitgevoerd | [Projectcontrole](projectcontrole-v003.md) |
| Besluiten en kaders | Ongewijzigd | [Besluiten](besluiten.md) |
| MFA | 52 doelen; MFA-00.03 bloeding en MFA-00.04 shock toegevoegd | [MFA-matrix](../curriculum/mfa-dekkingsmatrix.csv) |
| MC | 68 doelen; MC-32.01 verplaatst naar MC-L00 | [MC-matrix](../curriculum/mc-dekkingsmatrix.csv) |
| MC-technieken | Vier afzonderlijke vaardigheid- en assessment-ID's; scopebesluiten open | [Vaardigheidsregister](../curriculum/mc-vaardigheidsregister.csv) |
| IaT en CBT | 23 voorwaarden; duurvergelijking CBT-02 open omdat klassieke klokuren ontbreken | [IaT-matrix](../curriculum/iat-cbt-matrix.csv) |
| Bronnen | 43 registerregels; S034 en S043 tekst gelezen via PDF-export; S039 tot en met S042 voorgesteld en niet gelezen | [Bronregister](../sources/register.csv) |
| MFA-L00 | Uitgewerkt: 8 schermen, 2 kennischecks, 1 zelfinschatting, 15 minuten | [Master](../content/nl/MFA-L00-start-veiligheid-voorkennis.md), [schermreview](../reviews/MFA-L00-schermreview.csv) |
| MFA-L01 | Uitgewerkt: 9 schermen, 3 kennischecks, 1 tikopdracht, 30 minuten | [Master](../content/nl/MFA-L01-medische-uitrusting.md), [schermreview](../reviews/MFA-L01-schermreview.csv) |
| MFA-L07 | Versie 0.3: 11 schermen, 6 kennischecks, 36 minuten; GMDSS en advies verwerken toegevoegd | [Master](../content/nl/MFA-L07-radiomedisch-advies.md), [schermreview](../reviews/MFA-L07-schermreview.csv) |
| MFA-L02 | Uitgewerkt: 18 schermen, 7 kennischecks, 1 zelfcontrole, 100 minuten; anatomieschermen TE VERIFIËREN tegen PPT1 | [Master](../content/nl/MFA-L02-lichaamsbouw-slachtofferonderzoek.md), [schermreview](../reviews/MFA-L02-schermreview.csv) |
| MFA-L03 | Uitgewerkt: 16 schermen, 6 kennischecks, 1 zelfcontrole, 75 minuten; volgt de DRTC-dia's, alle medische handelingen TE VERIFIËREN tot keuze S041 | [Master](../content/nl/MFA-L03-levensbedreigende-situaties.md), [schermreview](../reviews/MFA-L03-schermreview.csv) |
| MFA-L04 tot en met L06, L08 | Nog niet uitgewerkt | |
| MC-lessen | Nog niet uitgewerkt | |
| Praktijkplanning | MFA-dag met vier stations en zes LOTUS-scenario's; MC A en B doorgerekend; voorstel A met drie instructeurs bij invasieve handelingen | [Praktijkplanning](praktijkplanning-v001.md) |
| Toetsmatrijs | MFA 40 items in 14 categorieën, MC 50 items in 9 categorieën; slagingsgrens via Angoff-panel; alles voorstel | [Toetsmatrijs](toetsmatrijs-v001.md) |
| Reviewvragen Mathanje | 26 gebundelde vragen R01 tot en met R26; R18 tot en met R26 bij MFA-L02 en L03 | [Reviewvragen](../reviews/2026-11-20-reviewvragen-mathanje.md) |
| Mediaregister | 28 regels; geen productieassets | [Mediaregister](../articulate/mediaregister.csv) |
| Articulate-importinhoud | Nog niet gemaakt; volgt na Mathanjes review van de uitgewerkte lessen | [Bouwroute](../articulate/import-en-bouwroute.md) |
| Website, ChainWise en Moodle | Ongewijzigd; acht ketenproeven ontworpen, niet uitgevoerd | [Keten](../moodle/chainwise-keten.md) |
| Medische detailgoedkeuring | Niet uitgevoerd voor enig scherm, doel of criterium | [Reviewregistratie](../reviews/README.md) |
| Engelse versie | Nog niet gestart | [Vertaling](../content/en/README.md) |

## Open beslissingen

| Nr | Beslissing | Wie | Gevolg als open |
| --- | --- | --- | --- |
| OB-01 | MC-praktijkvariant A of B | DRTC en Mathanje | Planning blijft in twee varianten |
| OB-02 | Slagingsgrens per opleiding via Angoff-panel | DRTC met Mathanje | Toets kan worden gebouwd, niet in gebruik genomen |
| OB-03 | Leidende reanimatie- en eerstehulprichtlijn (S041) | Mathanje | MFA-L03 is uitgewerkt volgens de DRTC-dia's; getallen voor compressies en beademing ontbreken en alle medische handelingen blijven TE VERIFIËREN |
| OB-04 | Infuus in MC (MC-V03) | Mathanje en DRTC | Bezetting MC-handelingen niet definitief |
| OB-05 | Waar 11 extra minuten van MFA-L07 vandaan komen | DRTC | MFA-urenbegroting staat op 491 minuten |
| OB-06 | Klassieke klokuren voor de vergelijking uit IaT 4 paragraaf 6.3 punt 2. Martijn meldde op 20 november 2026: klassikaal 40 uur. Nog te bevestigen of dat MFA en MC samen is (dan gelijk aan hybride 16 plus 24 uur) of per opleiding | Martijn | Onderbouwing hybride duur onvolledig |
| OB-07 | Aantal instructeur-assessoren per dagdeel | DRTC | Zie praktijkplanning; met twee is MC te krap |
| OB-08 | Eerder open: bevalling (MC-20.02), psychosociaal (MFA-13), medicatiegrens (MFA-10.02), actuele STCW-editie, S034 | Mathanje en DRTC | Raakt MC-L06, MFA-L06 en de normcontrole |

## Volgende stap

Mathanje beoordeelt MFA-L00 tot en met L03 en MFA-L07 versie 0.3 aan de hand van de reviewvragen R01 tot en met R26. Intussen werkt Claude MFA-L04 (trauma, brandwonden, hitte en koude) uit; daarvoor zijn S043 dia7-29 al gelezen en zijn PPT1 (dag 1 ochtend) en PPT4 (dag 2 middag) als PDF-export nodig. PPT1 is ook nodig voor de broncontrole van de anatomieschermen in MFA-L02 en de bloedingsdia's in MFA-L03. Na review volgt de schone importversie van de eerste vastgestelde les.

## Grenzen van deze status

Van de presentaties zijn alleen S034 en S043 als tekst gelezen; dia's met alleen beeld of film en de overige presentaties, handboeken en films zijn niet gecontroleerd. De model courses zijn gericht gelezen, niet de volledige compendia. Uren, observatieduur en toetsduur zijn ramingen zonder pilotmeting. Moodle, ChainWise en Articulate zijn niet getest. Er is geen medische, technische of ILT-goedkeuring geregistreerd.
