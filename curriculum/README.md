# Cursusstructuur en dekkingsmatrices

De twee inhoudelijke CSV-bestanden zijn uitgewerkt naar concrete leerdoelen: 50 voor MFA en 68 voor MC. Normpassages en gerichte model-courseonderdelen zijn gelezen; verwijzingen naar onderliggende DRTC-dia's zijn veelal nog indirect via de bestaande verwijsoverzichten. De matrices zijn inhoudelijke ontwerpen met medische review open, geen afgerond bewijs van volledige en actuele lesdekking.

| Bestand | Inhoud |
| --- | --- |
| [mfa-dekkingsmatrix.csv](mfa-dekkingsmatrix.csv) | 50 doelen, A-VI/4-1 en Model Course 1.14 |
| [mc-dekkingsmatrix.csv](mc-dekkingsmatrix.csv) | 68 doelen, A-VI/4-2 en Model Course 1.15 |
| [iat-cbt-matrix.csv](iat-cbt-matrix.csv) | 23 voorwaarden voor CBT en uitvoering met ontwerpmaatregelen |
| [aanvullende-voorwaarden.csv](aanvullende-voorwaarden.csv) | 12 controlepunten uit eerdere e-learning- en kwalificatiebronnen |
| [mc-vaardigheidsregister.csv](mc-vaardigheidsregister.csv) | Vier afzonderlijk herleidbare vaardigheden met scopebesluit en assessment-ID |
| [mfa-analyse.md](mfa-analyse.md) | Bronstatus, criteriacodes en MFA-hiaten |
| [mc-analyse.md](mc-analyse.md) | Bronstatus, criteriacodes en MC-hiaten |

De oorspronkelijke onderwerp-ID is behouden als `parent_id`, met afzonderlijke doelen zoals `MFA-01.01`. Nieuwe modelonderdelen zijn expliciet onderscheiden. De matrices gebruiken compacte eigen parafrases en bronplaatsen; de originele normtekst en actuele medische bronnen blijven bepalend. Inhoudelijke analyse en precieze passagecontrole moeten de complete dekking verder bevestigen.

De kolommen voor wijze van aantonen en beoordelingscriteria corresponderen met STCW-kolommen 3 en 4. Vul ze met de toepasselijke norm en vervolgens de concrete DRTC-uitwerking. Een oefenvraag of online examen dekt niet vanzelf een praktische vaardigheid.

De 28 kolommen zijn bij MFA en MC gelijk. `module_id` koppelt naar de begroting in [leerroute en uren](../docs/leerroute-en-uren.md). `drtc_criterium_voorstel` bevat concreet voorgesteld gedrag voor de assessor. `normstatus`, `bronstatus` en `medische_review` houden verschillende controles gescheiden. De legenda voor de eigen criteriacodes staat in de bijbehorende analyse.

De tijdsvelden per doel blijven leeg. Meerdere doelen kunnen in één activiteit worden behandeld en mogen niet door eenvoudige optelling dubbel worden begroot. De moduleminuten zijn voorlopige ramingen; activiteitstijd en pilotmeting volgen. Controleer alle verwijzingen opnieuw na herschikking.

De bestanden worden als UTF-8 CSV met komma als scheidingsteken beheerd. Bron-ID's sluiten aan op `sources/register.csv`. Alleen expliciete reviewregistratie voor een bepaalde versie kan een medische goedkeuringsstatus onderbouwen. Alle huidige doelrijen vragen nog medische review.
