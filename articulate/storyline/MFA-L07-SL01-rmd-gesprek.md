# MFA-L07-SL01 Het RMD-gesprek

Vertakt scenario bij MFA-L07 Radiomedisch advies voorbereiden en overdragen. Versie 0.1, 21 november 2026. Concept: Mathanje heeft de medische inhoud nog niet beoordeeld. De casus is fictief.

Volgens de afspraken wordt dit scenario een HTML-pakket voor een Code Block in Rise. Storyline is de terugval. De slides hieronder zijn schermen in het pakket.

## Gegevens

| Veld | Uitwerking |
| --- | --- |
| Leerdoelen | MFA-09.01: de weg naar radiomedisch advies en de rol van GMDSS. MFA-09.02: een consult voorbereiden met de juiste gegevens. MFA-09.03: advies teruglezen, vastleggen en verwerken, en een verandering melden |
| Duur | Ongeveer 10 minuten bij de juiste route, 12 minuten met omwegen |
| Bronnen | MFA-L07-S02 (bij levensgevaar direct de Kustwacht; een formulier is geen reden om te wachten); S04 (onbekende waarden als onbekend noteren); S05 (feiten zonder eigen diagnose); S06 (terugmelden); S07 (verloop met tijdstip vastleggen); S09 (de radio-operator voert de radiocommunicatie, jij zet de gegevens klaar); S10 (advies teruglezen, vastleggen, alleen uitvoeren wat je hebt geleerd); S11 (bij verandering direct opnieuw contact); S016 GH1 boek p106-107 / PDF p109-110 (de RMD via het Kustwachtcentrum, de RMA-vragenlijst) |
| Afronding | Bereiken van scherm 9 (debriefing). Het pakket meldt dan aan Rise dat het is voltooid |
| Variabelen | `Punten` (getal 0 tot 7, alleen feedback voor de cursist), `Omweg` (getal: het aantal keren dat de cursist via een omweg ging) |
| Personages | Jij, de eerstehulpverlener; Joost, matroos, fictief; Sanne, de tweede stuurman met het GMDSS-certificaat; de arts van de Radio Medische Dienst (alleen als tekst) |
| Media | Eigen illustraties van het ruim, de brug met de radio, een notitieblok met tijden. Geen foto's van patiënten. Bij iedere keuze staat de tekst ook als knop, zodat alles op een telefoon werkt |

## Situatie vooraf

OEFENSCHIP A vaart op de Noordzee. Om 15.40 UTC valt Joost van een ladder in het ruim, ongeveer twee meter. Hij stoot zijn hoofd en zijn rechterpols. Een collega heeft de eerste hulp gegeven en de kapitein gewaarschuwd. Joost is aanspreekbaar. Hij zegt dat hij hoofdpijn heeft en dat zijn pols pijn doet. De kapitein wil medisch advies. Jij zet de gegevens klaar.

## Schermen

### Scherm 1 Wie doet wat?

Tekst: "De kapitein zegt: Sanne legt contact met de Kustwacht voor medisch advies. Jij zorgt voor de gegevens." Wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je pakt de RMA-vragenlijst en zet de gegevens klaar, terwijl Sanne contact legt. | Scherm 2 | Goed. Sanne voert de radiocommunicatie. Jij zorgt dat de gegevens klaarliggen als de arts aan de lijn komt. | 1 |
| B. Je zegt tegen Sanne dat ze moet wachten tot de vragenlijst helemaal is ingevuld. | Scherm 1B | Niet goed. De voorbereiding is een hulpmiddel, geen wachtrij. Contact leggen en gegevens klaarzetten gebeuren tegelijk. | 0 |
| C. Je neemt de radio van Sanne over, want jij weet het meest over Joost. | Scherm 1B | Niet goed. De radiocommunicatie loopt via de opvarende met het GMDSS-certificaat. Jij werkt met haar samen en geeft de medische gegevens door. | 0 |

### Scherm 1B Terug naar de taakverdeling (alleen bij B of C)

Tekst: "Sanne legt het contact. Jij zet de gegevens klaar." Doorgaan naar scherm 2. `Omweg` plus 1.

### Scherm 2 Wat weet je zeker?

Tekst: de oefenkaart toont het schip, de positie, 15.40 UTC, de val van ongeveer twee meter, hoofd en rechterpols gestoten, en de letterlijke klachten "hoofdpijn" en "pols doet pijn". De ademfrequentie is nog niet gemeten. Of Joost medicijnen gebruikt, is nog niet bevestigd.

Vraag: wat zet je bij de ademfrequentie?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Een gebruikelijke waarde, zodat de lijst compleet lijkt. | Scherm 2 opnieuw | Niet goed. De arts gaat dan uit van een waarde die niemand heeft gemeten. | 0 |
| B. "Nog niet gemeten", en je vraagt de collega bij Joost om de ademhaling te tellen. | Scherm 3 | Goed. Je maakt zichtbaar wat onbekend is en laat het gericht aanvullen. | 1 |
| C. Je laat het vak leeg. | Scherm 2 opnieuw | Niet goed. Een leeg vak zegt niet of je het vergeten bent of nog niet weet. Schrijf op dat het nog niet is gemeten. | 0 |

### Scherm 3 De opening van het gesprek

Tekst: "Sanne zegt: de arts van de Radio Medische Dienst is aan de lijn." Welke opening geef je Sanne door?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. "OEFENSCHIP A. Om 15.40 UTC is een matroos ongeveer twee meter gevallen. Hij heeft zijn hoofd en rechterpols gestoten. Hij zegt dat hij hoofdpijn heeft en dat zijn pols pijn doet. De ademfrequentie en zijn medicijnen worden nog nagegaan." | Scherm 4 | Goed. Je geeft wat er is gebeurd, wanneer, de letterlijke klachten en wat nog onbekend is. | 1 |
| B. "Een matroos heeft een hersenschudding en een gebroken pols." | Scherm 3B | Niet goed. Dat is een diagnose die niemand heeft gesteld. Geef de feiten en laat de arts beoordelen. | 0 |
| C. "Er is iemand gevallen, kunt u helpen?" | Scherm 3B | Te weinig. De arts moet eerst alles vragen wat jij al weet. Dat kost tijd. | 0 |

### Scherm 3B Opnieuw formuleren (alleen bij B of C)

Tekst: "De arts vraagt: wat is er precies gebeurd, en wanneer?" Je geeft alsnog de opening van keuze A. Doorgaan naar scherm 4. `Omweg` plus 1.

### Scherm 4 Het advies teruglezen

Tekst: fictief oefenadvies, om 16.05 UTC: "Laat hem rustig liggen. Meet om 16.20 UTC opnieuw pols, ademfrequentie en hoe hij reageert op aanspreken. Neem om 16.30 UTC opnieuw contact op. Geef geen medicijnen zonder overleg."

Vraag: wat zeg je terug?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. "Begrepen." | Scherm 4 opnieuw | Niet genoeg. Met alleen "begrepen" weet de arts niet of je alles goed hebt gehoord. | 0 |
| B. "Ik lees terug: rustig laten liggen, om 16.20 UTC pols, ademfrequentie en reactie op aanspreken meten, om 16.30 UTC terugmelden, geen medicijnen zonder overleg. Klopt dat?" | Scherm 5 | Goed. Door terug te lezen merk je een misverstand op voordat je gaat handelen. Ook de tijden en UTC lees je terug. | 1 |
| C. "Om half vijf bellen we terug." | Scherm 4 opnieuw | Niet goed. Half vijf in welke tijd? En de andere afspraken ontbreken. | 0 |

### Scherm 5 Vastleggen

Vraag: welke notitie schrijf je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. "16.05 UTC advies arts RMD: rustig laten liggen; 16.20 UTC pols, ademfrequentie en reactie meten; 16.30 UTC terugmelden; geen medicijnen zonder overleg. Teruggelezen en bevestigd. Uitvoering: jouw naam." | Scherm 6 | Goed. De notitie heeft de tijd, de adviseur, alle afspraken, de bevestiging en wie het uitvoert. | 1 |
| B. "Arts zegt dat het meevalt." | Scherm 5 opnieuw | Niet goed. Dat heeft de arts niet gezegd, en de afspraken ontbreken. | 0 |
| C. "Pols meten en terugbellen." | Scherm 5 opnieuw | Te weinig. De tijden, de andere metingen en de afspraak over medicijnen ontbreken. | 0 |

### Scherm 6 De vraag om een middel

Tekst: "16.10 UTC. Joost vraagt om iets tegen de hoofdpijn. Een collega zegt: er liggen pijnstillers in de medicijnkist."

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je geeft hem een pijnstiller; dat is toch onschuldig. | Scherm 6 opnieuw | Niet goed. De afspraak was: geen medicijnen zonder overleg. Pas een advies niet zelf aan. | 0 |
| B. Je legt Joost uit dat je eerst overlegt. Je noteert zijn vraag en geeft die door bij het volgende contact. | Scherm 7 | Goed. Je houdt je aan de afspraak en de arts krijgt de vraag. | 1 |
| C. Je zegt dat hij niets krijgt en noteert het niet. | Scherm 6 opnieuw | Bijna. Je geeft terecht niets, maar de arts moet weten dat hij erom vraagt. Noteer het en geef het door. | 0 |

### Scherm 7 Een verandering

Tekst: "16.15 UTC. Joost reageert trager als je hem aanspreekt dan eerst. Zijn ogen vallen dicht. Het afgesproken moment om terug te melden is 16.30 UTC."

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je wacht tot 16.30 UTC, zoals afgesproken. | Scherm 7B | Niet goed. Het advies paste bij wat de arts om 16.05 UTC wist. Bij een verandering meld je direct. | 0 |
| B. Je vraagt Sanne direct opnieuw contact te leggen. Je meldt wat is veranderd en hoe laat, en je volgt de nieuwe aanwijzingen. | Scherm 8 | Goed. De arts heeft de nieuwe informatie nodig om het advies te herzien. | 1 |
| C. Je schudt Joost wakker en zet hem rechtop, zodat hij wakker blijft. | Scherm 7B | Niet goed. Je past de zorg zelf aan zonder overleg. Meld de verandering direct. | 0 |

### Scherm 7B Direct melden (alleen bij A of C)

Tekst: "Je laat Sanne alsnog direct contact leggen en meldt de verandering met het tijdstip." Doorgaan naar scherm 8. `Omweg` plus 1.

### Scherm 8 Een opdracht die je niet hebt geleerd

Tekst: in het nieuwe gesprek vraagt de arts of iemand aan boord een infuus kan aanleggen.

Vraag: wat antwoord je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. "Ik probeer het; hoe moeilijk kan het zijn?" | Scherm 8 opnieuw | Niet goed. Voer alleen uit wat je hebt geleerd. De arts moet weten wat aan boord wel mogelijk is. | 0 |
| B. "Ik heb dat niet geleerd. Ik vraag de kapitein of iemand aan boord een Medical Care-certificaat heeft." | Scherm 9 | Goed. Je bent duidelijk over je grenzen. De arts kan het advies daarop aanpassen. | 1 |
| C. Je zegt niets en laat de vraag over aan Sanne. | Scherm 8 opnieuw | Niet goed. Jij kent de toestand van Joost en weet wat je hebt geleerd. Geef zelf antwoord. | 0 |

### Scherm 9 Debriefing

Tekst: "De arts en de Kustwacht overleggen over een evacuatie. Jij blijft bij Joost, meet zoals afgesproken en legt alles vast met de tijd erbij."

Toon `Punten` van de 7 en het aantal omwegen. Toon daarna de vijf lessen:

1. Contact leggen en gegevens klaarzetten gebeuren tegelijk. Bij levensgevaar gaat hulp vóór het formulier.
2. Schrijf onbekende waarden op als onbekend.
3. Geef feiten en letterlijke klachten, geen eigen diagnose.
4. Lees het advies terug, met de tijden in UTC, en leg het vast.
5. Pas een advies niet zelf aan. Bij een verandering meld je direct, en je bent duidelijk over wat je niet hebt geleerd.

Knop: "Opnieuw" (zet de variabelen terug) en "Klaar" (meldt aan Rise dat het pakket is voltooid).

## Te verifiëren door Mathanje

- Is "trager reageren op aanspreken, ogen vallen dicht" na een val op het hoofd een passend en eenduidig teken van verslechtering voor dit scenario? (sluit aan bij R-vraag bij MFA-L07-S11)
- Klopt het fictieve oefenadvies als voorbeeld, zonder dat het een echt protocol lijkt?
- Is de vraag om een infuus geschikt om de grens tussen MFA en MC te laten zien?

Reviewvraag: R122.
