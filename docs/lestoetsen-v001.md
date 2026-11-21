# Lestoetsen per les, versie 0.1

## Besluit en basis

Martijn heeft op 21 november gekozen voor een korte toets in Moodle na elke les. De basis is ILT IaT nr. 4, paragraaf 6.3 (bron S002): toetsing na elk onderwerp, een overzicht waarmee de prestaties van de cursist te volgen zijn, en vastlegging van hoe de cursist heeft gepresteerd. Het besluit staat in `docs/afspraken.md`, hoofdstuk 7.

De oefenvragen en scenario's in Rise blijven oefening. De lestoets is een afzonderlijke Moodle-activiteit en is niet de formele eindtoets. De eindtoets heeft een eigen vragenbank (zie `docs/toetsblauwdruk-v001.md`).

## Waar de vragen staan

Deze repository is openbaar. Daarom staan hier alleen de aantallen en de dekking. De vragen, antwoorden en feedback staan in de afgeschermde projectmap `toetsing/lestoetsen/`:

| Bestand | Inhoud |
| --- | --- |
| `MFA-lestoetsen-bron.txt`, `MC-lestoetsen-bron.txt` | Bronbestand om te bewerken: vraag, goed antwoord, afleiders, feedback, leerdoel en lesscherm |
| `MFA-lestoetsen.csv`, `MC-lestoetsen.csv` | Reviewtabel voor Mathanje, met bron per vraag uit het lesscherm |
| `MFA-lestoetsen-moodle.xml`, `MC-lestoetsen-moodle.xml` | Import voor de Moodle-vragenbank (Moodle XML) |

De CSV en de XML worden gemaakt met `tools/maak_lestoetsen.py`. Het script controleert of ieder leerdoel bij de les hoort, of het lesscherm bestaat, of een les vijf tot acht vragen heeft, of een vraag niet letterlijk een kennischeck uit de les is, en of het goede antwoord niet opvallend langer is dan de afleiders (hoogstens 1,3 keer de langste afleider in woorden). Het script verdeelt de plaats van het goede antwoord over A tot en met D.

## Regels voor iedere vraag

- Een vraag toetst één leerdoel van die les en verwijst naar het lesscherm waar de stof staat. De bron met pagina komt van dat scherm.
- De vraag is anders dan de oefenvragen in de les en anders dan de items van de eindtoetsbank.
- Vier opties, waarvan één goed. De opties zijn ongeveer even lang en de plaats van het goede antwoord is verdeeld.
- Feedback bij goed en bij fout, met de kern van de stof, zodat de cursist leert van de toets.
- Niets medisch nieuws: iedere bewering staat al in de goedgekeurde of te beoordelen lestekst.

## Voorstel voor de inrichting in Moodle

Dit is een voorstel. De Moodle-versie en de instellingen zijn nog niet gecontroleerd.

- Per les een Quiz-activiteit direct na het Rise-pakket van die les, met een vraagcategorie per les (`Lestoetsen/<les>`). Heeft een les meer dan acht vragen (nu alleen MFA-L04), dan trekt de quiz per poging acht willekeurige vragen uit die categorie.
- Feedback direct na het antwoord, opnieuw te maken, het hoogste of laatste resultaat telt.
- Resultaten in het cijferoverzicht, zodat DRTC per cursist en per les ziet hoe hij presteert.
- Het goede antwoord staat vast op de plaats die het script heeft gekozen; de opties worden niet geschud, zodat de verdeling behouden blijft.

## Open punten

- Studietijd: of de lestoetsen meetellen voor de minimale 480 minuten, ligt bij Martijn. Voorstel: ja, met 1 minuut per vraag, omdat het een geplande leeractiviteit met feedback is en geen formele eindtoets. Per poging zijn dat 58 vragen voor MFA en 67 voor MC, dus 58 en 67 minuten.
- MFA-L04 is een grote les. Keuze 21 november: niet splitsen, maar een pool van 16 vragen waaruit Moodle per poging acht willekeurig trekt (vraag uit de categorie `Lestoetsen/MFA-L04`). Zo heeft ieder leerdoel van de les een vraag in de pool, en krijgt een herkansing deels andere vragen. Een poging kan wel een leerdoel overslaan; over meerdere pogingen en in de eindtoets wordt dat opgevangen. Dit is een keuze die later kan worden teruggedraaid.
- Leerdoelen die alleen op de praktijkdag worden beoordeeld (zoals MC-19.02, MC-22.02, MC-31.02), krijgen bewust geen of weinig lestoetsvragen.
- Een cesuur voor de lestoets is niet vastgesteld. Voorstel: geen slagingsgrens, wel afronding verplicht voor de volgende les; dat moet in Moodle worden getest.
- Medische review: alle vragen zijn concept. Mathanje beoordeelt vraag, goed antwoord en feedback (reviewvraag R149).

## Aantallen en dekking per les

<!-- MFA begin -->
### MFA

| Les | Vragen in de bank | Per poging | Kennis / toepassing | Leerdoelen in de toets | Leerdoelen van de les zonder toetsvraag |
| --- | --- | --- | --- | --- | --- |
| MFA-L00 | 5 | 5 | 3 / 2 | MFA-00.01, MFA-00.02 | geen |
| MFA-L01 | 8 | 8 | 4 / 4 | MFA-01.01, MFA-01.02, MFA-01.03, MFA-01.04 | geen |
| MFA-L02 | 8 | 8 | 4 / 4 | MFA-02.01, MFA-02.02, MFA-02.03, MFA-02.04, MFA-04.01, MFA-04.02, MFA-04.03, MFA-04.04 | geen |
| MFA-L03 | 8 | 8 | 4 / 4 | MFA-00.03, MFA-00.04, MFA-05.02, MFA-12.01, MFA-12.02, MFA-12.03, MFA-12.04 | geen |
| MFA-L04 | 16 | 8 | 9 / 7 | MFA-05.01, MFA-05.02, MFA-05.03, MFA-05.04, MFA-06.01, MFA-06.02, MFA-06.03, MFA-06.04, MFA-06.05, MFA-06.06, MFA-07.01, MFA-07.02, MFA-07.03, MFA-07.04, MFA-07.05 | geen |
| MFA-L05 | 8 | 8 | 3 / 5 | MFA-03.01, MFA-03.02, MFA-03.03, MFA-03.04, MFA-08.01, MFA-08.02, MFA-08.03 | geen |
| MFA-L06 | 8 | 8 | 5 / 3 | MFA-10.01, MFA-10.02, MFA-10.03, MFA-11.01, MFA-11.02, MFA-13.01, MFA-13.02 | geen |
| MFA-L07 | 5 | 5 | 1 / 4 | MFA-09.01, MFA-09.02, MFA-09.03 | geen |
| Totaal | 66 | 58 | | | |
<!-- MFA einde -->

<!-- MC begin -->
### MC

| Les | Vragen in de bank | Per poging | Kennis / toepassing | Leerdoelen in de toets | Leerdoelen van de les zonder toetsvraag |
| --- | --- | --- | --- | --- | --- |
| MC-L00 | 5 | 5 | 4 / 1 | MC-32.01 | geen |
| MC-L01 | 7 | 7 | 3 / 4 | MC-32.02 | geen |
| MC-L02 | 8 | 8 | 3 / 5 | MC-01.01, MC-01.02, MC-02.01, MC-02.02, MC-03.01, MC-03.02, MC-04.02, MC-05.01 | MC-04.01, MC-05.02 |
| MC-L03 | 8 | 8 | 4 / 4 | MC-06.01, MC-06.02, MC-07.01, MC-07.02, MC-08.01, MC-08.02, MC-10.01, MC-10.02 | MC-11.01, MC-11.02, MC-34.01, MC-34.02 |
| MC-L04 | 7 | 7 | 3 / 4 | MC-12.01, MC-12.02, MC-13.01, MC-13.02 | geen |
| MC-L05 | 8 | 8 | 4 / 4 | MC-09.01, MC-09.02, MC-14.01, MC-14.02, MC-15.01, MC-16.01, MC-16.02, MC-17.02 | MC-15.02, MC-17.01 |
| MC-L06 | 8 | 8 | 4 / 4 | MC-18.01, MC-18.02, MC-19.01, MC-20.01, MC-20.02, MC-21.01, MC-21.02, MC-22.01 | MC-19.02, MC-22.02 |
| MC-L07 | 8 | 8 | 3 / 5 | MC-23.01, MC-23.02, MC-24.01, MC-24.02, MC-25.02, MC-26.01, MC-26.02, MC-33.01 | MC-25.01, MC-27.01, MC-27.02, MC-33.02 |
| MC-L08 | 8 | 8 | 4 / 4 | MC-28.01, MC-28.02, MC-29.01, MC-29.02, MC-30.01, MC-30.02, MC-31.01 | MC-31.02 |
| Totaal | 67 | 67 | | | |
<!-- MC einde -->
