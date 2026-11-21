# Controle van het dossier tegen de afspraken

21 november 2026. Op verzoek van Martijn is het hele dossier nagelopen tegen [de afspraken](afspraken.md). Per afspraak staat hieronder of het dossier ermee klopt, wat op 21 november is aangepast en wat nog moet gebeuren.

## Aangepast op 21 november 2026

| Afspraak | Wat er niet klopte | Aanpassing |
| --- | --- | --- |
| Strenge rekenregel: 150 woorden per minuut, 1 minuut per kennischeck, opdracht telt alleen als Rise controleert | Het eerder genoemde getal van 13 uur telde de doe-opdrachten en 1,5 minuut per kennischeck nog mee | `tools/studietijd.py` rekent met de strenge regel: MFA 265 en MC 306 minuten. De rekenregel, de status en de afspraken zijn bijgewerkt |
| Minimaal 480 minuten per cursus | Het plan dekte alleen het totaal van 16 uur | Het [leeractiviteiten-plan](leeractiviteiten-plan.md) begroot nu per cursus |
| Hoofdroute is Create with AI (AI Course Draft) | De productiewerkwijze noemde Magic Lesson Import als hoofdroute | Hoofdroute en terugval zijn omgedraaid in [productiewerkwijze](../articulate/productiewerkwijze.md) en in de bouwwerkwijze in de projectmap |
| Vertakte scenario's als HTML-pakket in een Code Block; Storyline is terugval | Bouwboek, pakketten en README noemden Storyline-blokken | Het bouwboek noemt nu een Code Block met Storyline als terugval. De bronbestanden markeren SCENARIO-PAKKET. De [storyline-README](../articulate/storyline/README.md) en de productiewerkwijze zijn bijgewerkt |
| PowerPoints zijn te groot als bron in Rise | Proefles en werkwijze vroegen om de presentaties te uploaden | Nu zijn het de compacte PDF's of losse dia's in de mediamap |
| Nieuwe cursus mag; dupliceren van Security Awareness is niet nodig | Het proeflesplan begon met een kopie van Security Awareness | Het plan begint nu met een nieuwe cursus in de DRTC-stijl |
| Tot Mathanje een les vrijgeeft, staat erop dat de inhoud nog niet medisch is goedgekeurd | De importbestanden en bronbestanden hadden geen melding. Alleen het bouwboek had er een | Ieder importbestand begint met een Note met de conceptmelding. Ieder bronbestand begint met die melding, en de startprompt vraagt de AI haar in iedere les te zetten |
| Iedere thread leest de afspraken eerst | De afspraken stonden alleen in de projectmap | Ze staan nu in `docs/afspraken.md`, met een verwijzing bovenaan in CLAUDE.md en AGENTS.md, en in het projectgeheugen |

## Klopt met de afspraken

- De ID's van leerdoelen, lessen, schermen, vragen en antwoorden zijn behouden. De controle `tools/controleer_dossier.py` geeft 0 fouten.
- De eindtoets in Moodle Quiz, met een vragenbank waaruit willekeurig wordt getrokken: [toetsontwerp](toetsontwerp.md) en [toetsmatrijs](toetsmatrijs-v001.md). De slagingsgrens via Angoff blijft open.
- De kennischecks zijn formatief, met feedback per antwoord.
- Media: het [beeldbankregister](../articulate/beeldbank-register.csv), een mediamap per les met de beeldcodes als bestandsnaam, en de regel dat AI-beelden alleen voor sfeer zijn.
- Audio pas na goedkeuring, met de [uitspraaklijst](../articulate/uitspraaklijst.csv). Wijzigingen staan in het [revisieregister](../articulate/revisieregister.csv).
- [Leerdoelen als herkennen, beslissen of doen](../curriculum/leerdoel-gedrag.csv), als voorstel.
- De proefles MFA-L01, met het [testplan](../articulate/proefles-MFA-L01.md).
- Geen verzonnen protocollen of doseringen. Onzekerheden staan als reviewvraag, tot en met R121.

## Nog te doen

| Afspraak | Wat er nog ontbreekt | Wie |
| --- | --- | --- |
| 480 minuten per cursus | Een tekort van 215 minuten bij MFA en 174 bij MC. Uitwerking volgens het leeractiviteiten-plan | Claude |
| Vertakte scenario's als pakket | Het script voor het RMD-gesprek (MFA-L07-SL01) ontbreekt nog. De scripts voor de nieuwe scenario's (reanimatie, brand in de kombuis en twee bij MC) moeten nog worden geschreven. De werklijn die de pakketten bouwt, wacht hierop | Claude |
| Werkt op telefoon, tablet en computer | Nog niet getest | Martijn, in de proefles |
| De echte tijd meten met testcursisten | Nog niet gedaan | DRTC, in de proefles |
| De registratie in Moodle testen vóór de volledige bouw | Nog niet gedaan | Martijn, in de proefles |
| Foto's van de medische kist, het vlotpakket en de zuurstofkoffer | Ontbreken. Er is één fotosessie met een instructeur nodig | DRTC |
| Video met de echte duur | Films gekoppeld op bestandsnaam. Duur en gebruiksrecht zijn onbekend | DRTC |
| Block templates na de proefles | Volgen na de proef | Martijn |
| Medische vrijgave per les | Open | Mathanje |
| Engelse vertaling | Na vaststelling van de Nederlandse master | Later |

Open besluiten staan in de afspraken onder Open punten. Dit document stelt ze niet opnieuw ter discussie.
