# Toetsblauwdruk

Werkversie 0.1, 21 november 2026. Gemaakt met `tools/maak_toetsblauwdruk.py` uit de [toetsmatrijs](toetsmatrijs-v001.md), de dekkingsmatrix en de [leerdoelen als gedrag](../curriculum/leerdoel-gedrag.csv). Alle getallen zijn voorstellen. Volgens de afspraken komt de blauwdruk vóór de vragenbank. DRTC is eigenaar van de vragenbank, Mathanje keurt de vragen medisch goed, wij leveren voorstellen. Echte vragen en antwoorden staan niet in deze openbare repository. De eindtoets telt niet mee voor de studietijd.

## Regels voor iedere vraag

- Een vraag-ID volgens het patroon `<cursus>-Q-<categorie>-<volgnummer>`, bijvoorbeeld MFA-Q-T09-003. Een ID wordt nooit hergebruikt; een herziene vraag krijgt een versienummer.
- Precies één leerdoel-ID, uit de dekkingsmatrix.
- Een bronverwijzing met editie en pagina of paragraaf voor iedere medische bewering, handeling, waarschuwing en dosering in vraag en antwoord.
- Een niveau: kennis (herkennen, uitleggen) of toepassing (beslissen in een situatie aan boord).
- De status: concept, medische review, medisch vrijgegeven, in gebruik, uit gebruik. Alleen medisch vrijgegeven vragen komen in een afname.
- Een vraag mag niet gelijk zijn aan een kennischeck uit de lessen.
- Een leerdoel dat alleen op de praktijkdag wordt beoordeeld (doen), krijgt online alleen kennis- of beslisvragen over de voorbereiding. De vraag vervangt de praktijkbeoordeling niet.

## MFA

| Categorie | Leerdoelen | Items per afname | Kennis / toepassing | Minimaal in de bank | Kandidaat kritiek |
| --- | --- | --- | --- | --- | --- |
| MFA-T00 Veiligheid, prioritering, bloeding en shock | 4 | 4 | 0 / 4 | 12 | Ja |
| MFA-T01 Medische uitrusting | 4 | 2 | 1 / 1 | 6 | Nee |
| MFA-T02 Lichaamsbouw en functie | 4 | 3 | 3 / 0 | 9 | Nee |
| MFA-T03 Gevaarlijke stoffen en zuurstofapparatuur | 4 | 3 | 1 / 2 | 9 | Nee |
| MFA-T04 Slachtofferonderzoek | 4 | 4 | 3 / 1 | 12 | Nee |
| MFA-T05 Wervel, hoofd en bewustzijn | 4 | 3 | 2 / 1 | 9 | Nee |
| MFA-T06 Brandwonden, hitte en koude | 6 | 4 | 1 / 3 | 12 | Nee |
| MFA-T07 Breuken, ontwrichtingen en spierletsel | 5 | 3 | 2 / 1 | 9 | Nee |
| MFA-T08 Geredde personen | 3 | 3 | 2 / 1 | 9 | Nee |
| MFA-T09 Radiomedisch advies | 3 | 3 | 2 / 1 | 9 | Ja, voor contact bij levensbedreiging |
| MFA-T10 Medicatiebasis | 3 | 2 | 1 / 1 | 6 | Nee |
| MFA-T11 Reinigen, desinfecteren, steriliseren | 2 | 2 | 1 / 1 | 6 | Nee |
| MFA-T12 Hartstilstand, verdrinking, verstikking | 4 | 3 | 1 / 2 | 9 | Ja |
| MFA-T13 Psychosociale aandacht | 2 | 1 | 1 / 0 | 3 | Nee |
| Totaal | 52 | 40 | | 120 | |

## MC

| Categorie | Leerdoelen | Items per afname | Kennis / toepassing | Minimaal in de bank | Kandidaat kritiek |
| --- | --- | --- | --- | --- | --- |
| MC-T1 Aansluiting op MFA en aanvullend onderzoek | 2 | 3 | 3 / 0 | 9 | Nee |
| MC-T2 Traumazorg | 10 | 7 | 3 / 4 | 21 | Ja, voor ernstige bloeding |
| MC-T3 Wonden en behandeltechnieken | 12 | 7 | 2 / 5 | 21 | Nee |
| MC-T4 Verpleegkundige zorg en bewaking | 4 | 5 | 3 / 2 | 15 | Ja, voor herkennen van verslechtering |
| MC-T5 Ziekten en medische noodsituaties | 10 | 9 | 5 / 4 | 27 | Nee |
| MC-T6 Bijzondere zorg | 10 | 6 | 3 / 3 | 18 | Nee |
| MC-T7 Hygiëne, preventie en vaccinatie | 6 | 4 | 3 / 1 | 12 | Nee |
| MC-T8 Registratie, regels en uitrusting | 6 | 4 | 2 / 2 | 12 | Nee |
| MC-T9 Gecoördineerde medische hulp | 8 | 5 | 2 / 3 | 15 | Ja, voor medisch advies en evacuatie |
| Totaal | 68 | 50 | | 150 | |

## Verdeling en trekking

- Moodle trekt per categorie het afgesproken aantal items, en binnen een categorie verdeeld over kennis en toepassing zoals hierboven. Daarvoor krijgt iedere categorie twee subcategorieën in Moodle.
- Iedere categorie heeft ten minste drie goedgekeurde items per getrokken item, zodat een herkansing andere vragen krijgt. Ieder leerdoel heeft ten minste één item in de bank.
- Kritieke items wijst Mathanje aan binnen de kandidaat-kritieke categorieën. De regel bij een fout op een kritiek item stelt DRTC vast.
- De slagingsgrens volgt uit de Angoff-procedure in de [toetsmatrijs](toetsmatrijs-v001.md), pas als de bank medisch is vrijgegeven.

## Lestoetsen na iedere les

- Naast de eindtoets komt er na iedere les een korte toets in Moodle (besluit Martijn 21 november, ILT IaT nr. 4, par. 6.3). Die toets volgt de prestaties per les en is niet de formele eindtoets.
- De lestoetsen hebben een eigen vragenbank met eigen ID's (`MFA-LT<les>-<nr>` en `MC-LT<les>-<nr>`). Een lestoetsvraag komt niet in de eindtoetsbank en een eindtoetsitem niet in een lestoets. Beide zijn anders dan de kennischecks in de lessen.
- Stand 21 november: MFA 66 vragen over 8 lessen (MFA-L04 als pool van 16, acht per poging), MC 67 vragen over 9 lessen, alles concept. Aantallen en dekking per les in [lestoetsen](lestoetsen-v001.md); de vragen zelf staan in de afgeschermde projectmap.
- Of de lestoetsen meetellen voor de studietijd, is nog open. De eindtoets telt niet mee.

## Open punten

- De lengte (40 items MFA, 50 items MC) en de duur worden vastgesteld na een proefafname.
- Waar de toets wordt afgenomen, staat open. Een optie is de toets onder toezicht aan het begin van de eerste praktijkdag; dat raakt de identiteitscontrole (open punt in de afspraken).
- Infuus: zolang het scopebesluit open is, komen er geen items over in de afname.
