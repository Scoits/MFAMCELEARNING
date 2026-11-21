# Scenarioplan: rijke, vertakte interactie per les

Werkversie 0.1, 21 november 2026. Uitwerking van de vaste verhouding in de [afspraken](afspraken.md), hoofdstuk 4. MFA is 80 procent Rise en 20 procent Storyline-niveau, MC 60 procent Rise en 40 procent Storyline-niveau. Gerekend in studietijd betekent dat minimaal 96 minuten bij MFA en 192 minuten bij MC aan beslisscenario's, simulaties en complexe casussen. Wij bouwen die als codepakket voor een Rise Code Block, of in Storyline waar dat beter werkt.

Een scenario telt met het kortste volledige pad (afspraken, hoofdstuk 11), berekend door `tools/studietijd.py` uit het script in `articulate/storyline/`. Een scenario van tien tot twaalf beslismomenten komt dan op ongeveer 13 tot 15 minuten. Stand op 21 november 2026: MFA 13 van 96 minuten, MC 22 van 192 minuten.

Ieder scenario hoort bij leerdoelen uit de [dekkingsmatrix](dekkingsmatrix-mc.md) waar beslissen, herkennen of de volgorde van handelen centraal staat. De keuzes en de feedback komen uit de lesinhoud. De casus is fictief. Mathanje beoordeelt ieder script. MC gaat voor.

## MC

| Scenario | Les | Leerdoelen | Situatie | Status | Kortste pad |
| --- | --- | --- | --- | --- | --- |
| MC-L04-SL01 Verslechtering in de nacht | MC-L04 | MC-12, MC-13 | Matroos met koorts verslechtert 's nachts | Script klaar | 10 |
| MC-L08-SL01 Helikopterevacuatie | MC-L08 | MC-28, MC-29 | Bootsman met buikletsel wordt opgehaald | Script klaar | 11 |
| MC-L05-SL01 Pijn op de borst | MC-L05 | MC-14 | Machinist met pijn op de borst tijdens de wacht | Te schrijven | ongeveer 14 |
| MC-L05-SL02 Acute buikpijn | MC-L05 | MC-09 | Kok met toenemende buikpijn | Te schrijven | ongeveer 14 |
| MC-L05-SL03 Koorts na de haven | MC-L05 | MC-16, MC-17 | Matroos met koorts na een havenbezoek in de tropen | Te schrijven | ongeveer 14 |
| MC-L01-SL01 Onderzoek van top tot teen | MC-L01 | MC-32 | Zieke collega: onderzoek, voorgeschiedenis, gegevens voor de arts | Te schrijven | ongeveer 14 |
| MC-L02-SL01 Val in het ruim | MC-L02 | MC-01, MC-05 | Hoofd- en wervelletsel, vervoer in de vacuümmatras | Te schrijven | ongeveer 14 |
| MC-L02-SL02 Brand in de machinekamer | MC-L02 | MC-03, MC-04 | Brandwonden en bloeding, bewaken tot advies | Te schrijven | ongeveer 14 |
| MC-L03-SL01 De wond aan de hand | MC-L03 | MC-06, MC-08, MC-11 | Wond beoordelen, sluiten of niet, verband en controle | Te schrijven | ongeveer 14 |
| MC-L04-SL02 Een week in de ziekenboeg | MC-L04 | MC-12, MC-13 | Bedlegerige patiënt verzorgen, injectie op advies | Te schrijven | ongeveer 14 |
| MC-L06-SL01 Alcoholontwenning | MC-L06 | MC-18 | Collega die na een paar dagen op zee onrustig en verward raakt | Te schrijven | ongeveer 14 |
| MC-L06-SL02 Overlijden aan boord | MC-L06 | MC-22 | Wat je doet na een overlijden, met de kapitein en de arts | Te schrijven | ongeveer 13 |
| MC-L07-SL01 Diarree aan boord | MC-L07 | MC-23, MC-24 | Meerdere zieken: uitbraak beperken | Te schrijven | ongeveer 14 |
| MC-L07-SL02 De medicijnkist en het logboek | MC-L07 | MC-26, MC-33 | Inspectie met fouten, vastleggen | Te schrijven | ongeveer 13 |
| MC-L08-SL02 Overdracht in de haven | MC-L08 | MC-30 | Zieke zeevarende overdragen aan de havenarts | Te schrijven | ongeveer 13 |
| | | | | **Samen** | **ongeveer 200** |

## MFA

| Scenario | Les | Leerdoelen | Situatie | Status | Kortste pad |
| --- | --- | --- | --- | --- | --- |
| MFA-L07-SL01 Het RMD-gesprek | MFA-L07 | MFA-09 | Val in het ruim, advies vragen en verwerken | Script klaar | 13 |
| MFA-L02-SL01 De gevallen collega | MFA-L02 | MFA-04 | Slachtofferonderzoek stap voor stap | Te schrijven | ongeveer 13 |
| MFA-L03-SL01 Reanimatie in de machinekamer | MFA-L03 | MFA-12 | Collega zakt in elkaar, reanimatie met AED | Te schrijven | ongeveer 13 |
| MFA-L03-SL02 Verslikking in de mess | MFA-L03 | MFA-05, MFA-12 | Verstikking, daarna bewusteloos | Te schrijven | ongeveer 12 |
| MFA-L04-SL01 Brand in de kombuis | MFA-L04 | MFA-06 | Brandwond: koelen, afdekken, bewaken | Te schrijven | ongeveer 13 |
| MFA-L04-SL02 Val van de ladder | MFA-L04 | MFA-05, MFA-07 | Vermoed wervelletsel en een breuk | Te schrijven | ongeveer 13 |
| MFA-L05-SL01 Gas in de tank | MFA-L05 | MFA-03 | Besloten ruimte, MFAG, zuurstof | Te schrijven | ongeveer 13 |
| MFA-L05-SL02 Man over boord | MFA-L05 | MFA-08 | Geredde persoon in koude | Te schrijven | ongeveer 13 |
| | | | | **Samen** | **ongeveer 103** |

## Werkwijze

1. Script en bouwlijst in `articulate/storyline/`, in het format van [MFA-L07-SL01](../articulate/storyline/MFA-L07-SL01-rmd-gesprek.md): schermen met keuzes, gevolg, feedback en punten, omwegen, een debriefing en een sectie Te verifiëren.
2. Een scherm in de schermreview van de les, met bloktype Storyline-blok (codepakket), zodat de dekkingsmatrix en `tools/studietijd.py` het meetellen.
3. Een reviewvraag voor Mathanje.
4. Melding aan de werklijn die de pakketten bouwt. Uitrol pas na de technische proef met het RMD-pakket in de proefles.
