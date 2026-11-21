# MC-L07-SL01 Vijf zieken na het avondeten

Vertakt scenario bij MC-L07 Preventie, beheer en regelgeving, met MC-L05. Versie 0.1, 21 november 2026. Concept: deze les is nog niet medisch goedgekeurd. De medisch deskundige van DRTC beoordeelt de inhoud voordat cursisten de les volgen. De casus is fictief.

Volgens de afspraken wordt dit scenario een HTML-pakket voor een Code Block in Rise. Storyline is secundair gereedschap.

## Gegevens

| Veld | Uitwerking |
| --- | --- |
| Leerdoelen | MC-23.01 en MC-23.02: hygiënerisico's herkennen en een plan maken om ze aan te pakken. MC-24.01 en MC-24.02: verspreiding voorkomen, een uitbraak beperken en het effect volgen |
| Duur | Kortste volledige pad volgens `tools/studietijd.py`; met omwegen langer |
| Bronnen | MC-L05-S14 (een maag-darminfectie aan boord: melden, lijst, afzonderen, hygiëne, voedsel en water, verdacht voedsel niet weggooien); S38 (isoleren en jezelf beschermen); S39 (alarmsignalen); S40 (de zieke kok); MC-L07-S18 (voedsel veilig bewaren en bereiden, de kok werkt niet met voedsel bij diarree); S23 (drinkwater ontsmetten); S03 (een hygiënerisico aanpakken in vier stappen); S06 (een uitbraak volgen en afsluiten); S09 (medische verslaglegging); S017 GH2 en S025, zie de bronverwijzingen bij die schermen |
| Afronding | Bereiken van het scherm Debriefing. Het pakket meldt dan aan Rise dat het is voltooid |
| Variabelen | `Punten` (0 tot 10, één punt per hoofdscherm met een keuze, alleen bij de eerste poging), `Omweg` |
| Personages | Jij, de opvarende met Medical Care; Rosa, de kok; vijf zieke opvarenden; de kapitein; de arts van de Radio Medische Dienst (alleen als tekst) |
| Media | Eigen illustraties: de messroom, de kombuis, de koelkast, een lijst met zieken. Iedere keuze is een knop met de volledige tekst |

## Situatie vooraf

Het is 23.00 uur. Een paar uur na het avondeten moeten vijf opvarenden braken en hebben ze diarree. Er waren twee gerechten: een kipschotel en een vegetarische pasta.

## Schermen

### Scherm 1 Wat denk je?

Vraag: waar denk je als eerste aan?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Aan vijf losse gevallen van buikgriep. | Scherm 1 opnieuw | Niet goed. Krijgen meerdere opvarenden in korte tijd diarree en braken, dan denk je aan een uitbraak. | 0 |
| B. Aan een uitbraak, bijvoorbeeld door besmet voedsel of drinkwater, of een virus dat via handen en oppervlakken gaat. | Scherm 2 | Goed. Dat bepaalt wat je nu doet: melden, gegevens verzamelen en verspreiding voorkomen. | 1 |
| C. Aan zeeziekte; het waait hard. | Scherm 1 opnieuw | Niet goed. Vijf zieken tegelijk na dezelfde maaltijd wijzen op een uitbraak. | 0 |

### Scherm 2 Melden en de lijst

Vraag: wat doe je eerst?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je informeert de kapitein, laat contact leggen met de arts en begint een lijst: wie is ziek, sinds wanneer, welke klachten, en wat ze hebben gegeten en gedronken. | Scherm 3 | Goed. Met die lijst zie je snel wat de zieken gemeen hebben, en de arts kan beter adviseren. | 1 |
| B. Je geeft iedereen een middel tegen diarree uit de kist. | Scherm 2B | Niet goed. Je geeft geen middelen zonder advies van de arts. Meld eerst en verzamel de gegevens. | 0 |
| C. Je wacht tot de ochtend; misschien is het dan over. | Scherm 2B | Niet goed. Bij een mogelijke uitbraak meld je het direct. Hoe later, hoe meer mensen ziek kunnen worden. | 0 |

### Scherm 2B Toch melden (alleen bij B of C)

Tekst: Je informeert alsnog de kapitein en begint de lijst. Doorgaan naar scherm 3. `Omweg` plus 1.

### Scherm 3 De bak in de koelkast

Tekst: op de lijst zie je dat alle vijf van de kipschotel hebben gegeten. Er staat nog een bak met restjes in de koelkast. Rosa wil hem weggooien.

Vraag: wat zeg je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. "Gooi hem weg, dan kan niemand er meer van eten." | Scherm 3 opnieuw | Niet goed. Gooi verdacht voedsel niet meteen weg. De arts kan willen dat het wordt onderzocht. | 0 |
| B. "Laat hem staan, afgedekt en gemerkt, en zorg dat niemand ervan eet. Ik vraag de arts wat ermee moet." | Scherm 4 | Goed. Zo kan het voedsel nog worden onderzocht en eet er niemand meer van. | 1 |
| C. "Warm hem goed op, dan is hij weer veilig." | Scherm 3 opnieuw | Niet goed. Verdacht voedsel eet niemand meer. Bewaar het voor de arts. | 0 |

### Scherm 4 De zieken

Vraag: hoe verzorg je de vijf zieken?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je laat ze in hun hut blijven, met een eigen toilet als dat kan, laat ze voldoende drinken en houdt bij hoeveel ze drinken en uitplassen. Je draagt handschoenen en een schort en wast na iedere verzorging je handen. | Scherm 5 | Goed. Afzonderen en hygiëne voorkomen verspreiding. Uitdroging is bij diarree een groot gevaar. | 1 |
| B. Je legt ze samen in de messroom, dan kun je ze allemaal tegelijk zien. | Scherm 4 opnieuw | Niet goed. Zieken blijven zo veel mogelijk in hun hut of een aparte ruimte, niet in een gemeenschappelijke ruimte. | 0 |
| C. Je laat ze niets drinken, zodat ze minder braken. | Scherm 4 opnieuw | Niet goed. Laat ze juist voldoende drinken. Uitdroging is bij braken en diarree een groot gevaar. | 0 |

### Scherm 5 Alarmsignalen

Tekst: de volgende ochtend zijn vier zieken beter. Bij één, Jan, zit er bloed in de ontlasting en hij heeft hoge koorts.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je meet temperatuur, pols, bloeddruk en ademhaling, schrijft alles op en meldt het direct aan de arts. | Scherm 6 | Goed. Bloed in de ontlasting en hoge koorts zijn alarmsignalen. Het kan een ernstiger infectie zijn. | 1 |
| B. Je wacht nog een dag; de anderen zijn ook beter geworden. | Scherm 5B | Niet goed. Bloed in de ontlasting en hoge koorts zijn alarmsignalen. Neem direct contact op met de arts. | 0 |
| C. Je geeft hem een koortsremmer. | Scherm 5B | Niet goed. Je geeft niets zonder advies van de arts. Meld de alarmsignalen direct. | 0 |

### Scherm 5B Direct melden (alleen bij B of C)

Tekst: Je meet alsnog en meldt het direct aan de arts. Doorgaan naar scherm 6. `Omweg` plus 1.

### Scherm 6 De kok

Tekst: Rosa zegt dat zij zich sinds gisteren ook niet lekker voelt en twee keer diarree had. Ze wil het ontbijt klaarmaken, want er is niemand anders.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Ze mag werken als ze extra vaak haar handen wast. | Scherm 6 opnieuw | Niet goed. Iemand met diarree werkt niet met voedsel tot een arts dat goedkeurt. | 0 |
| B. Je zegt dat ze niet met voedsel werkt tot de arts dat goedkeurt, zet haar op de lijst, en bespreekt met de kapitein wie het ontbijt verzorgt. | Scherm 7 | Goed. Een kok met diarree kan de hele bemanning besmetten. | 1 |
| C. Ze mag werken, maar alleen koude gerechten maken. | Scherm 6 opnieuw | Niet goed. Juist koude gerechten worden niet meer verhit. Iemand met diarree werkt niet met voedsel. | 0 |

### Scherm 7 Hygiëne voor iedereen

Vraag: welke maatregel geldt nu voor het hele schip?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Iedereen wast vaak en goed de handen. Toiletten, deurklinken en andere oppervlakken die veel worden aangeraakt, worden extra vaak schoongemaakt, en er wordt geventileerd. | Scherm 8 | Goed. Zo stop je verspreiding via handen en oppervlakken. | 1 |
| B. Alleen de zieken moeten hun handen wassen. | Scherm 8B | Niet goed. Iedereen wast vaak de handen. Ook wie niet ziek is, kan ziektekiemen overbrengen. | 0 |
| C. Niemand hoeft iets extra te doen; de zieken zitten in hun hut. | Scherm 8B | Niet goed. Ook via handen, deurklinken en toiletten kan het zich verspreiden. Iedereen moet meedoen. | 0 |

### Scherm 8B Alsnog voor iedereen (alleen bij B of C)

Tekst: Je laat de kapitein alsnog afkondigen dat iedereen vaak de handen wast en dat er extra wordt schoongemaakt. Doorgaan naar scherm 8. `Omweg` plus 1.

### Scherm 8 Het plan

Tekst: de arts denkt aan de kipschotel. De kapitein vraagt je de oorzaak in de kombuis aan te pakken.

Vraag: hoe maak je het plan?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. In vier stappen: de bevinding feitelijk beschrijven (wat, waar, wanneer), de maatregel (bijvoorbeeld rauwe kip apart verwerken en door en door verhitten), wie het uitvoert, en wanneer je controleert of het werkt. | Scherm 9 | Goed. Bevinding, maatregel, verantwoordelijke en controle. Zo weet iedereen wat er moet gebeuren en of het werkt. | 1 |
| B. Je zegt tegen Rosa dat ze beter moet opletten. | Scherm 8 opnieuw | Te weinig. Maak een plan in vier stappen: bevinding, maatregel, verantwoordelijke en controle. | 0 |
| C. Je schrijft in het logboek dat het de schuld van de kok is. | Scherm 8 opnieuw | Niet goed. Schrijf feitelijk, zonder oordeel. Maak een plan om het risico weg te nemen. | 0 |

### Scherm 9 Volgen

Tekst: drie dagen later.

Vraag: hoe weet je of de maatregelen werken?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je houdt dagelijks bij hoeveel nieuwe zieken er zijn en wie contact had met de zieken. Komen er geen nieuwe bij, dan werken de maatregelen. | Scherm 10 | Goed. Komen er wel nieuwe zieken bij, dan overleg je met de arts welke maatregelen erbij moeten. | 1 |
| B. Als niemand meer klaagt, is het voorbij. | Scherm 9 opnieuw | Te weinig. Houd dagelijks bij hoeveel nieuwe zieken er zijn. Dan zie je of het werkt. | 0 |
| C. Je stopt met de maatregelen zodra de eerste zieken beter zijn. | Scherm 9 opnieuw | Niet goed. Volg het aantal nieuwe zieken. Stop pas als er geen nieuwe meer bij komen, in overleg met de arts. | 0 |

### Scherm 10 Afsluiten

Tekst: er zijn al vijf dagen geen nieuwe zieken. Jan is aan de beterende hand.

Vraag: wat doe je nu?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je laat de hutten waar zieken lagen reinigen en desinfecteren, en legt vast wat er is gebeurd en wat er is gedaan, met data en tijden. | Debriefing | Goed. Na een besmettelijke ziekte reinig en desinfecteer je de ruimten, en het verslag helpt bij een volgende keer en bij een inspectie. | 1 |
| B. Niets meer; het is voorbij. | Scherm 10 opnieuw | Te weinig. Reinig en desinfecteer de ruimten waar zieken lagen, en leg vast wat er is gebeurd. | 0 |
| C. Je gooit alle voorraad kip weg en schrijft verder niets op. | Scherm 10 opnieuw | Niet goed. Leg vast wat er is gebeurd en wat je hebt gedaan. Reinig en desinfecteer de ruimten. | 0 |

### Debriefing

Tekst: "Na vijf dagen zonder nieuwe zieken is de uitbraak voorbij. In de volgende haven bespreekt de kapitein het verslag met de havenarts."

Toon `Punten` van de 10 en het aantal omwegen. Toon daarna de lessen:

1. Meerdere zieken met diarree en braken in korte tijd: denk aan een uitbraak en meld het direct.
2. Houd een lijst bij van wie ziek is, sinds wanneer, met welke klachten, en wat ze aten en dronken.
3. Gooi verdacht voedsel niet weg. De arts kan het willen laten onderzoeken.
4. Zonder de zieken af, laat ze drinken en let op uitdroging en alarmsignalen.
5. Wie diarree heeft, werkt niet met voedsel tot een arts dat goedkeurt.
6. Pak de oorzaak aan in vier stappen: bevinding, maatregel, verantwoordelijke en controle.
7. Volg dagelijks het aantal nieuwe zieken, en sluit af met reinigen, desinfecteren en vastleggen.

Knop: "Opnieuw" (zet de variabelen terug en begint bij de situatie). Het pakket meldt de voltooiing aan Rise zodra de cursist dit scherm bereikt.

## Te verifiëren door Mathanje

- Is vijf dagen zonder nieuwe zieken een passend voorbeeld van het einde van een uitbraak, of moet het scenario dat aan de arts laten?
- Is het juist dat de cursist het drinkwater hier niet laat ontsmetten, omdat de lijst op het voedsel wijst? Of hoort controle van het drinkwater er altijd bij?
- Klopt de maatregel in de kombuis (rauwe kip apart verwerken en door en door verhitten) als voorbeeld?

Reviewvraag: R128.
