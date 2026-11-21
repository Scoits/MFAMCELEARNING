# Templates voor lesontwerp en review

Deze templates ondersteunen de Nederlandse master van de hybride STCW-opleidingen MFA en MC. Ze leggen geen nieuwe medische instructie, toetsnorm of goedkeuring vast.

| Bestand | Gebruik |
| --- | --- |
| [Lesstoryboard](les-storyboard.md) | Samenhangende lesuitwerking met doelen, schermen, media, interactie en praktijkoverdracht |
| [Schermreview CSV](schermreview.csv) | Eén rij per scherm of samenhangend Rise-blok voor inhoudelijke review |
| [Vraagrecord](vraagrecord.md) | Bron- en versiegebonden ontwerp van een oefenvraag of afgeschermde toetsvraag |
| [Praktijkassessment](praktijkassessment.md) | Individueel observeerbaar bewijs en vast te stellen beslisregels |

## Schermreviewschema

Het CSV-sjabloon bevat alleen de header. Er is geen fictieve goedkeuring of ingevulde medische inhoud opgenomen. Kopieer het schema naar het relevante lesdossier en vul één record per bestaand scherm-ID in.

`lesson_id` en `screen_id` identificeren het onderdeel; `learning_goal_ids` verwijst naar de matrix. `learner_text` en `voice_over` bevatten de volledige teksten. `interaction` beschrijft opdracht, keuzes en vervolg. `feedback_correct` en `feedback_incorrect` bevatten uitleg, of niet van toepassing wanneer er geen antwoord wordt gevraagd.

`source_ids` bevat de broncodes; `source_location` koppelt concrete uitspraken aan pagina, paragraaf of dia. Bij meerdere medische uitspraken moet die koppeling per uitspraak herkenbaar zijn. `media_ids` verwijst naar het mediaregister. `platform_block` benoemt de voorgestelde Rise- of Storyline-uitwerking. `minutes_estimate` blijft herkenbaar een raming.

`review_status`, `medical_reviewer`, `mathanje_comment`, `version` en `review_date` registreren het werkelijke beoordelingsproces. Vermeld Mathanje als medische reviewer; laat datum en akkoord open totdat de betreffende versie werkelijk is beoordeeld. Gebruik broncontrole en technische test niet als vervanging van medische goedkeuring.

## Beheer

Hanteer [de stijlgids](../articulate/stijlgids.md) en behoud bestaande ID's bij revisies. De schone importversie is een afzonderlijk productieproduct uit de reviewmaster. Plaats daarin alleen cursistinhoud en noodzakelijke importconfiguratie. Houd interne opmerkingen, onzekerheden en reviewvelden buiten de uiteindelijke leerstof.

Echte summatieve vragen, antwoordmodellen, cursistgegevens en ingevulde beoordelingen blijven in de daarvoor bestemde afgeschermde omgeving. Deze openbare repository kan lege formats en herkenbaar formatief oefenmateriaal bevatten.
