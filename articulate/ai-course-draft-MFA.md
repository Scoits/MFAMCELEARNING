# MFA: pakket voor AI Course Drafts in Rise

Werkversie 0.1, 21 november 2026. Dit pakket volgt de werkwijze waarmee Martijn de cursus Security Awareness bouwde. Je start in 360 Home met Create with AI en uploadt de eigen bronnen. Daarna stuur je de outline bij met gerichte correctieprompts en kies je de instellingen. Pas dan laat je Rise de lessen maken. Bij Medical First Aid gaat het om medische inhoud. Daarom komt alle inhoud uit de lesteksten in de bronbestanden, en controleer je iedere gegenereerde les tegen de bron voordat Mathanje haar beoordeelt.

Doel voor de studietijd: 480 minuten voor MFA, samen met MC 16 uur. Een AI-concept haalt die tijd niet vanzelf. Na het genereren tel je de tijd per les met de rekenregel in `docs/studietijd-rekenregel.md`. Vul een tekort aan met de activiteiten uit `docs/leeractiviteiten-plan.md`.

## 1. Bronbestanden uploaden

Upload deze bestanden uit `articulate-proef/ai-course-draft/MFA/bronnen/`. Ieder bestand is één les met de goedgekeurde cursistentekst, de leerdoelen per scherm, de beelden, de kennischecks met feedback en de casussen.

- `MFA-L00-bron.docx`: Start, veiligheid en voorkennis
- `MFA-L01-bron.docx`: Medische uitrusting aan boord
- `MFA-L02-bron.docx`: Lichaamsbouw en systematisch slachtofferonderzoek
- `MFA-L03-bron.docx`: Levensbedreigende situaties
- `MFA-L04-bron.docx`: Trauma, brandwonden, hitte en koude
- `MFA-L05-bron.docx`: Toxicologische risico's, zuurstof en geredde personen
- `MFA-L06-bron.docx`: Medicatiebasis, materiaalhygiëne en psychosociale aandacht
- `MFA-L07-bron.docx`: Radiomedisch advies voorbereiden en overdragen
- `MFA-L08-bron.docx`: Theorieafronding en voorbereiding op de praktijkdag

Upload geen boeken, presentaties of model courses als bron voor de tekst. Anders neemt de AI daar zelf inhoud uit die niet is beoordeeld. Wil je dia's als beeld gebruiken, upload ze dan pas na het genereren als bron in de cursus. Kies ze daarna via Replace from your sources.

## 2. Startprompt voor de outline

Plak deze prompt in het veld voor de cursusbeschrijving of de instructie. Is het veld te kort, upload de prompt dan als Word-bestand en schrijf in het veld: "Volg de instructie in het bestand outline-instructie."

> Maak een outline voor de e-learning Medical First Aid (MFA) van DRTC, een STCW-opleiding volgens tabel A-VI/4-1 en IMO Model Course 1.14. De competentie is: direct eerste hulp verlenen bij een ongeval of ziekte aan boord. De e-learning vervangt de klassikale theorie volledig. De cursist oefent en wordt beoordeeld op één dag op locatie bij DRTC: een halve dag handelingen en een halve dag LOTUS-scenario's.
>
> Doelgroep: zeevarenden zonder medische voorkennis, die eens in de vijf jaar deze cursus doen. Veel van hen lezen Nederlands als tweede taal. Taal: eenvoudig Nederlands, korte zinnen, de cursist wordt met je aangesproken, voorbeelden aan boord van een koopvaardijschip.
>
> Gebruik precies 9 lessen, in deze volgorde en met deze titels. Ieder bronbestand is één les. Neem per les de leerdoelen hieronder over:
>
> MFA-L00 Start, veiligheid en voorkennis (ongeveer 20 minuten studietijd). Leerdoelen: MFA-00.01: Een onveilige incidentlocatie herkennen, eigen risico benoemen en hulp organiseren. MFA-00.02: Eerdere eerstehulpkennis activeren en de eerste prioriteiten in een boordincident uitleggen.
>
> MFA-L01 Medische uitrusting aan boord (ongeveer 50 minuten studietijd). Leerdoelen: MFA-01.01: De functie en relevante inhoud van de medische eerstehulpuitrusting aan boord toelichten. MFA-01.02: Uitleggen hoe eerstehulpuitrusting aan boord wordt gevonden en tijdig beschikbaar gemaakt. MFA-01.03: De bijzondere functie van medische uitrusting in reddingsmiddelen onderscheiden. MFA-01.04: Geselecteerde eerstehulpmaterialen doelmatig en hygiënisch toepassen in een scenario.
>
> MFA-L02 Lichaamsbouw en systematisch slachtofferonderzoek (ongeveer 80 minuten studietijd). Leerdoelen: MFA-02.01: De functie van skelet, spieren en gewrichten verbinden met herkenning van letsel. MFA-02.02: De werking van hart en circulatie relateren aan observaties bij een zieke of gewonde. MFA-02.03: Ademhaling en gaswisseling uitleggen en verbinden met herkenning van afwijkende ademhaling. MFA-02.04: De belangrijkste buikorganen en hun functies op hoofdlijnen onderscheiden. MFA-04.01: Een systematische eerste indruk en relevante observaties van een patiënt verzamelen. MFA-04.02: Een gerichte anamnese en medische voorgeschiedenis uitvragen. MFA-04.03: Onderzoek en metingen uitvoeren en de bevindingen gebruiken voor een onderbouwde inschatting. MFA-04.04: Een veranderende patiëntsituatie herbeoordelen en relevante wijzigingen overdragen.
>
> MFA-L03 Levensbedreigende situaties (ongeveer 70 minuten studietijd). Leerdoelen: MFA-00.03: Een ernstige uitwendige bloeding herkennen en de eerste hulp daarbij als herhaling van basisveiligheid toepassen. MFA-00.04: Verschijnselen van shock herkennen, de urgentie uitleggen en basismaatregelen en medisch advies organiseren. MFA-05.02: Complicaties van bewusteloosheid herkennen en de verhouding met een veilige ademweg beoordelen. MFA-12.01: Een mogelijke circulatiestilstand herkennen en onmiddellijk passende hulp organiseren. MFA-12.02: Reanimatie en beademing op een oefenpop en het gebruik van een trainings-AED demonstreren volgens de actuele vastgestelde DRTC-werkwijze. MFA-12.03: Asfyxie of luchtwegobstructie herkennen en passende eerste hulp demonstreren. MFA-12.04: Bij een verdrinkingsincident eigen veiligheid, patiëntbeoordeling en eerste hulp combineren.
>
> MFA-L04 Trauma, brandwonden, hitte en koude (ongeveer 85 minuten studietijd). Leerdoelen: MFA-05.01: Mogelijk wervelkolomletsel op basis van incident en verschijnselen herkennen. MFA-05.02: Complicaties van bewusteloosheid herkennen en de verhouding met een veilige ademweg beoordelen. MFA-05.03: Veilige hulp en verplaatsing bij vermoedelijk wervelletsel voorbereiden en demonstreren. MFA-05.04: Veranderingen in bewustzijn na hoofdletsel herkennen en vastleggen. MFA-06.01: Brandwonden, verbranding door hete vloeistof en andere temperatuurletsels onderscheiden. MFA-06.02: Passende eerste hulp bij brandwonden voorbereiden en uitvoeren op trainingswijze. MFA-06.03: Het doel van steriel afdekken bij brandwonden uitleggen en toepassen. MFA-06.04: Hittegerelateerde ziekteverschijnselen herkennen en passende hulp organiseren. MFA-06.05: Onderkoeling onderscheiden van plaatselijk koudeletsel en risico op verdere afkoeling beoordelen. MFA-06.06: Zorg bij koudeletsel demonstreren binnen actuele instructies en hulp op afstand betrekken. MFA-07.01: Kenmerken en relevante categorieën van breuken, ontwrichtingen en spierletsel onderscheiden. MFA-07.02: Het doel van ondersteunen en immobiliseren uitleggen en een passende keuze voorbereiden. MFA-07.03: Bij bekken- of wervelletsel aanvullende risico’s en passende ondersteuning benoemen. MFA-07.04: Verstuiking en verrekking onderscheiden van mogelijk ernstiger letsel. MFA-07.05: Een passend spalksysteem veilig gebruiken en effecten bij de patiënt controleren.
>
> MFA-L05 Toxicologische risico's, zuurstof en geredde personen (ongeveer 60 minuten studietijd). Leerdoelen: MFA-03.01: Gevaren van gevaarlijke stoffen aan boord en de functie van bijbehorende veiligheidsinformatie uitleggen. MFA-03.02: De passende MFAG-informatie of het nationale equivalent voor een incident vinden en gebruiken. MFA-03.03: Blootstellingsroute en verschijnselen verzamelen om eerste hulp en medisch advies te onderbouwen. MFA-03.04: Het doel, de onderdelen en het veilige gebruik van zuurstof- en beademingsapparatuur toelichten. MFA-08.01: De eerste zorgbehoefte van geredde personen beoordelen en opvangprioriteiten bepalen. MFA-08.02: Bij een geredde persoon risico’s van koude, wind en vocht herkennen en verdere schade beperken. MFA-08.03: Zeeziekte, zonblootstelling, vocht- en voedingsproblemen in reddingssituaties herkennen.
>
> MFA-L06 Medicatiebasis, materiaalhygiëne en psychosociale aandacht (ongeveer 40 minuten studietijd). Leerdoelen: MFA-10.01: Gegevens over gebruik en dosering in de vastgestelde medicatiedocumentatie vinden. MFA-10.02: Toedieningsvormen en bijbehorende grenzen, risico’s en controles op hoofdlijnen onderscheiden. MFA-10.03: Vaststellen wanneer oude of onduidelijke medicatie-instructies eerst moeten worden geverifieerd. MFA-11.01: Reinigen, desinfecteren en steriliseren functioneel onderscheiden. MFA-11.02: Desinfectie van daarvoor aangewezen instrumenten demonstreren. MFA-13.01: Uitleggen hoe scheepsomstandigheden en langdurige scheiding het psychisch functioneren kunnen beïnvloeden. MFA-13.02: Bij vermoedelijke psychische problemen passende ondersteuning en aanvullende medische hulp organiseren.
>
> MFA-L07 Radiomedisch advies voorbereiden en overdragen (ongeveer 45 minuten studietijd). Leerdoelen: MFA-09.01: De beschikbaarheid en functie van radiomedisch advies en GMDSS toelichten. MFA-09.02: Een radiomedisch consult voorbereiden met relevante patiënt- en scheepsgegevens. MFA-09.03: Ontvangen medisch advies verifiëren, vastleggen en verwerken in de patiëntzorg.
>
> MFA-L08 Theorieafronding en voorbereiding op de praktijkdag (ongeveer 30 minuten studietijd). Leerdoelen: MFA-00.01: Een onveilige incidentlocatie herkennen, eigen risico benoemen en hulp organiseren. MFA-00.02: Eerdere eerstehulpkennis activeren en de eerste prioriteiten in een boordincident uitleggen. MFA-00.03: Een ernstige uitwendige bloeding herkennen en de eerste hulp daarbij als herhaling van basisveiligheid toepassen.
>
> Harde grenzen: gebruik uitsluitend de geüploade bronbestanden. Voeg geen medische feiten, getallen, doseringen, middelen, codes of handelingen toe die niet in de bron staan, en vul niet aan uit algemene kennis. Kort geen stappen, waarschuwingen of uitzonderingen in en verander de volgorde van stappen niet. Ontbreekt er iets, zet dan in de les een Note met de tekst VRAAG VOOR MATHANJE en wat er ontbreekt. Online leren vervangt de praktijkbeoordeling niet: verwijs bij handelingen naar de praktijkdag.

## 3. Correctiechecklist voor de outline

Loop de outline na voordat je de lessen laat maken. Stuur bij met een korte correctieprompt per punt, zoals: "Zet les 3 terug op de titel uit de bron en neem leerdoel MFA-12.02 op."

- Zijn er precies 9 lessen, in de volgorde en met de titels uit de startprompt?
- Staat bij iedere les ieder leerdoel uit de startprompt, en geen leerdoel dat er niet bij hoort?
- Komen alle onderwerpen in de beschrijving uit het bronbestand van die les? Schrap onderwerpen die er niet in staan.
- Belooft een beschrijving geen handeling die alleen op de praktijkdag hoort, zoals zelf injecteren of hechten in MFA?
- Staat er een eindtoets in de outline? Haal die eruit: de afsluitende kennistoets komt in Moodle Quiz.
- Is de beschrijving van de cursus kort, zonder beloften over certificering of goedkeuring?
- Klopt de verdeling van de studietijd ongeveer met de minuten per les?

## 4. Instellingen

| Instelling | Keuze |
| --- | --- |
| Course content | Text and interactive content |
| AI images | Uit; beelden komen uit de bron en uit de beeldbank |
| Final quiz | Uit; de eindtoets komt in Moodle Quiz |
| Knowledge checks | Aan, met de instructie hieronder |
| Taal | Nederlands |
| Stijl | De DRTC-stijl uit Security Awareness |

Maak voor het genereren een kopie van de cursus. Als je een generatie annuleert, kan Rise al gemaakte lessen verwijderen.

## 5. Instructie voor kennischecks en scenario's

> Neem de kennischecks uit de bron letterlijk over: de vraag, de antwoorden in dezelfde volgorde, het juiste antwoord en de feedback per antwoord.
>
> Voeg per onderwerp oefenvragen toe als het antwoord letterlijk in de bron staat. Maak er bij voorkeur een korte situatie aan boord van, met de vraag wat de cursist doet of ziet.
>
> Foute antwoorden zijn echte denkfouten uit de bron, geen onzin. Begin de feedback met Juist. of Onjuist. en leg uit waarom, met de reden uit de bron.
>
> Alle vragen zijn formatief: de cursist mag opnieuw proberen en er is geen score.
>
> Bouw de casussen met keuzes uit de bron als Scenario-blok: één scène per keuze, en een onjuiste keuze gaat met uitleg terug naar dezelfde scène. Personen en dialogen mogen verzonnen zijn. Wat zij medisch doen of zeggen, komt uit de bron.
>
> Wissel uitleg en activiteit af: na hoogstens twee tekstblokken komt een interactief blok of een oefenvraag. Gebruik geen flashcards. Gebruik een accordeon alleen voor naslag.
>
> Waar de bron een Storyline-scenario noemt, laat je een lege plek met de tekst STORYLINE-BLOK.

Storyline-scenario's die DRTC apart bouwt en daarna in de les zet: MFA-L07-SL01 RMD-gesprek in MFA-L07. Zie `articulate/storyline/`.

Zet na de generatie bij Settings > Navigation de navigatie op Restricted. Zet na ieder interactief blok en iedere kennischeck een Continue-blok met Complete block above.

## 6. Controleprompt per gegenereerde les

Plak deze prompt in de AI Assistant bij iedere les, met het bronbestand van die les geselecteerd:

> Vergelijk deze les met het geselecteerde bronbestand. Maak een lijst van:
>
> 1. iedere stap, waarschuwing, uitzondering of lijstonderdeel uit de bron dat ontbreekt;
>
> 2. iedere zin met een medisch feit, getal, middel, code of handeling die niet in de bron staat;
>
> 3. iedere kennischeck uit de bron die anders is overgenomen;
>
> 4. iedere plek waar de volgorde van stappen anders is dan in de bron;
>
> 5. iedere nieuwe oefenvraag waarvan het antwoord niet letterlijk in de bron staat.
>
> Geef per punt het blok en de bronzin. Herschrijf niets.

Herstel ieder punt in het betreffende blok, met de tekst uit de bron. Laat de les niet opnieuw genereren. Tel daarna de studietijd met de rekenregel en leg de les vast in `articulate/revisieregister.csv`. Mathanje beoordeelt daarna de gepubliceerde les, met de nieuwe oefenvragen en casussen. Een gegenereerde les krijgt geen andere status dan een les uit de letterlijke import: medische review nodig.

## Leerdoelen per les

| Les | Leerdoel | Gedrag |
| --- | --- | --- |
| MFA-L00 | MFA-00.01 Een onveilige incidentlocatie herkennen, eigen risico benoemen en hulp organiseren. | beslissen |
| MFA-L00 | MFA-00.02 Eerdere eerstehulpkennis activeren en de eerste prioriteiten in een boordincident uitleggen. | beslissen |
| MFA-L01 | MFA-01.01 De functie en relevante inhoud van de medische eerstehulpuitrusting aan boord toelichten. | uitleggen |
| MFA-L01 | MFA-01.02 Uitleggen hoe eerstehulpuitrusting aan boord wordt gevonden en tijdig beschikbaar gemaakt. | uitleggen |
| MFA-L01 | MFA-01.03 De bijzondere functie van medische uitrusting in reddingsmiddelen onderscheiden. | herkennen |
| MFA-L01 | MFA-01.04 Geselecteerde eerstehulpmaterialen doelmatig en hygiënisch toepassen in een scenario. | doen |
| MFA-L02 | MFA-02.01 De functie van skelet, spieren en gewrichten verbinden met herkenning van letsel. | herkennen |
| MFA-L02 | MFA-02.02 De werking van hart en circulatie relateren aan observaties bij een zieke of gewonde. | uitleggen |
| MFA-L02 | MFA-02.03 Ademhaling en gaswisseling uitleggen en verbinden met herkenning van afwijkende ademhaling. | herkennen |
| MFA-L02 | MFA-02.04 De belangrijkste buikorganen en hun functies op hoofdlijnen onderscheiden. | herkennen |
| MFA-L02 | MFA-04.01 Een systematische eerste indruk en relevante observaties van een patiënt verzamelen. | uitleggen |
| MFA-L02 | MFA-04.02 Een gerichte anamnese en medische voorgeschiedenis uitvragen. | uitleggen |
| MFA-L02 | MFA-04.03 Onderzoek en metingen uitvoeren en de bevindingen gebruiken voor een onderbouwde inschatting. | doen |
| MFA-L02 | MFA-04.04 Een veranderende patiëntsituatie herbeoordelen en relevante wijzigingen overdragen. | uitleggen |
| MFA-L03 | MFA-00.03 Een ernstige uitwendige bloeding herkennen en de eerste hulp daarbij als herhaling van basisveiligheid toepassen. | doen |
| MFA-L03 | MFA-00.04 Verschijnselen van shock herkennen, de urgentie uitleggen en basismaatregelen en medisch advies organiseren. | beslissen |
| MFA-L03 | MFA-05.02 Complicaties van bewusteloosheid herkennen en de verhouding met een veilige ademweg beoordelen. | herkennen |
| MFA-L03 | MFA-12.01 Een mogelijke circulatiestilstand herkennen en onmiddellijk passende hulp organiseren. | beslissen |
| MFA-L03 | MFA-12.02 Reanimatie en beademing op een oefenpop en het gebruik van een trainings-AED demonstreren volgens de actuele vastgestelde DRTC-werkwijze. | doen |
| MFA-L03 | MFA-12.03 Asfyxie of luchtwegobstructie herkennen en passende eerste hulp demonstreren. | doen |
| MFA-L03 | MFA-12.04 Bij een verdrinkingsincident eigen veiligheid, patiëntbeoordeling en eerste hulp combineren. | uitleggen |
| MFA-L04 | MFA-05.01 Mogelijk wervelkolomletsel op basis van incident en verschijnselen herkennen. | herkennen |
| MFA-L04 | MFA-05.02 Complicaties van bewusteloosheid herkennen en de verhouding met een veilige ademweg beoordelen. | herkennen |
| MFA-L04 | MFA-05.03 Veilige hulp en verplaatsing bij vermoedelijk wervelletsel voorbereiden en demonstreren. | doen |
| MFA-L04 | MFA-05.04 Veranderingen in bewustzijn na hoofdletsel herkennen en vastleggen. | herkennen |
| MFA-L04 | MFA-06.01 Brandwonden, verbranding door hete vloeistof en andere temperatuurletsels onderscheiden. | herkennen |
| MFA-L04 | MFA-06.02 Passende eerste hulp bij brandwonden voorbereiden en uitvoeren op trainingswijze. | doen |
| MFA-L04 | MFA-06.03 Het doel van steriel afdekken bij brandwonden uitleggen en toepassen. | doen |
| MFA-L04 | MFA-06.04 Hittegerelateerde ziekteverschijnselen herkennen en passende hulp organiseren. | beslissen |
| MFA-L04 | MFA-06.05 Onderkoeling onderscheiden van plaatselijk koudeletsel en risico op verdere afkoeling beoordelen. | herkennen |
| MFA-L04 | MFA-06.06 Zorg bij koudeletsel demonstreren binnen actuele instructies en hulp op afstand betrekken. | doen |
| MFA-L04 | MFA-07.01 Kenmerken en relevante categorieën van breuken, ontwrichtingen en spierletsel onderscheiden. | herkennen |
| MFA-L04 | MFA-07.02 Het doel van ondersteunen en immobiliseren uitleggen en een passende keuze voorbereiden. | doen |
| MFA-L04 | MFA-07.03 Bij bekken- of wervelletsel aanvullende risico’s en passende ondersteuning benoemen. | uitleggen |
| MFA-L04 | MFA-07.04 Verstuiking en verrekking onderscheiden van mogelijk ernstiger letsel. | herkennen |
| MFA-L04 | MFA-07.05 Een passend spalksysteem veilig gebruiken en effecten bij de patiënt controleren. | doen |
| MFA-L05 | MFA-03.01 Gevaren van gevaarlijke stoffen aan boord en de functie van bijbehorende veiligheidsinformatie uitleggen. | uitleggen |
| MFA-L05 | MFA-03.02 De passende MFAG-informatie of het nationale equivalent voor een incident vinden en gebruiken. | doen |
| MFA-L05 | MFA-03.03 Blootstellingsroute en verschijnselen verzamelen om eerste hulp en medisch advies te onderbouwen. | herkennen |
| MFA-L05 | MFA-03.04 Het doel, de onderdelen en het veilige gebruik van zuurstof- en beademingsapparatuur toelichten. | doen |
| MFA-L05 | MFA-08.01 De eerste zorgbehoefte van geredde personen beoordelen en opvangprioriteiten bepalen. | beslissen |
| MFA-L05 | MFA-08.02 Bij een geredde persoon risico’s van koude, wind en vocht herkennen en verdere schade beperken. | herkennen |
| MFA-L05 | MFA-08.03 Zeeziekte, zonblootstelling, vocht- en voedingsproblemen in reddingssituaties herkennen. | herkennen |
| MFA-L06 | MFA-10.01 Gegevens over gebruik en dosering in de vastgestelde medicatiedocumentatie vinden. | doen |
| MFA-L06 | MFA-10.02 Toedieningsvormen en bijbehorende grenzen, risico’s en controles op hoofdlijnen onderscheiden. | herkennen |
| MFA-L06 | MFA-10.03 Vaststellen wanneer oude of onduidelijke medicatie-instructies eerst moeten worden geverifieerd. | beslissen |
| MFA-L06 | MFA-11.01 Reinigen, desinfecteren en steriliseren functioneel onderscheiden. | herkennen |
| MFA-L06 | MFA-11.02 Desinfectie van daarvoor aangewezen instrumenten demonstreren. | doen |
| MFA-L06 | MFA-13.01 Uitleggen hoe scheepsomstandigheden en langdurige scheiding het psychisch functioneren kunnen beïnvloeden. | uitleggen |
| MFA-L06 | MFA-13.02 Bij vermoedelijke psychische problemen passende ondersteuning en aanvullende medische hulp organiseren. | beslissen |
| MFA-L07 | MFA-09.01 De beschikbaarheid en functie van radiomedisch advies en GMDSS toelichten. | uitleggen |
| MFA-L07 | MFA-09.02 Een radiomedisch consult voorbereiden met relevante patiënt- en scheepsgegevens. | uitleggen |
| MFA-L07 | MFA-09.03 Ontvangen medisch advies verifiëren, vastleggen en verwerken in de patiëntzorg. | beslissen |
| MFA-L08 | MFA-00.01 Een onveilige incidentlocatie herkennen, eigen risico benoemen en hulp organiseren. | beslissen |
| MFA-L08 | MFA-00.02 Eerdere eerstehulpkennis activeren en de eerste prioriteiten in een boordincident uitleggen. | beslissen |
| MFA-L08 | MFA-00.03 Een ernstige uitwendige bloeding herkennen en de eerste hulp daarbij als herhaling van basisveiligheid toepassen. | doen |
