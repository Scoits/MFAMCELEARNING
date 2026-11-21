# MFA-L04-SL02 Val van de ladder

Vertakt scenario bij MFA-L04 Trauma, brandwonden, hitte en koude. Versie 0.2, 21 november 2026 (scherm 10 en 11 toegevoegd). Concept: deze les is nog niet medisch goedgekeurd. De medisch deskundige van DRTC beoordeelt de inhoud voordat cursisten de les volgen. De casus is fictief.

Volgens de afspraken wordt dit scenario een HTML-pakket voor een Code Block in Rise. Storyline is secundair gereedschap. Het scenario bereidt voor op MFA-P05 en SC-MFA-02 en vervangt het stabiliseren, de log-roll en het spalken op locatie niet.

## Gegevens

| Veld | Uitwerking |
| --- | --- |
| Leerdoelen | MFA-05.01: mogelijk wervelletsel herkennen. MFA-05.03: hoofd stabiliseren, nekspalk en verplaatsen. MFA-05.04: hoofdletsel en verandering in bewustzijn. MFA-07.01: breuken herkennen. MFA-07.02 en MFA-07.05: ondersteunen, spalken, de circulatie controleren en blijven controleren op complicaties zoals shock |
| Duur | Kortste volledige pad volgens `tools/studietijd.py`; met omwegen langer |
| Bronnen | MFA-L04-S12 (behandel eerst wat het eerst doodt, toedracht vastleggen); S13 en S42 (wervelletsel herkennen en stabiliseren, nekkraag, log-roll); S16 en S17 (hoofdletsel en bewustzijn, eerst helder dan suf); S18 en S39 (breuken herkennen, toedracht); S19 (spalken, circulatie voor en na, niet terugzetten); S40 en S41 (na het spalken blijven controleren); S016 GH1, S045, S056 en S065, zie de bronverwijzingen bij die schermen |
| Afronding | Bereiken van het scherm Debriefing. Het pakket meldt dan aan Rise dat het is voltooid |
| Variabelen | `Punten` (0 tot 11, één punt per hoofdscherm met een keuze, alleen bij de eerste poging), `Omweg` |
| Personages | Jij, de opvarende met Medical First Aid; Jesse, matroos, 26 jaar, fictief; Linda, stuurman, fictief; twee helpers; de arts van de Radio Medische Dienst (alleen als tekst) |
| Media | Eigen illustraties: een ruim met een ladder, handen die het hoofd stabiliseren, een nekkraag, een vacuümspalk om een onderbeen, een log-roll met vier hulpverleners. Iedere keuze is een knop met de volledige tekst |

## Situatie vooraf

Het is 08.20 uur. Jesse is van een ladder in het ruim gevallen, van ongeveer drie meter. Hij ligt op zijn rug op de vloer van het ruim. Hij heeft pijn in zijn rug, zijn rechteronderbeen ligt in een vreemde stand en hij heeft een bult op zijn hoofd. Het ruim is veilig.

## Schermen

### Scherm 1 Waar begin je?

Vraag: waar begin je bij Jesse?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Volgens DRS-ABCDE: eerst behandelen wat het eerst doodt. | Scherm 2 | Goed. Ook bij letsel werk je in de vaste volgorde. Het been komt later aan bod. | 1 |
| B. Bij het been, want dat ziet er het ergst uit en doet de meeste pijn. | Scherm 1 opnieuw | Niet goed. Een gebroken been ziet er heftig uit, maar is meestal niet het eerste probleem. Behandel eerst wat het eerst doodt. | 0 |
| C. Bij de bult op zijn hoofd, want die moet direct gekoeld worden. | Scherm 1 opnieuw | Niet goed. Een zwelling koel je later. Begin met de vaste volgorde, zodat je niets mist dat levensbedreigend is. | 0 |

### Scherm 2 Hij wil opstaan

Tekst: Jesse is aanspreekbaar en ademt normaal. Je ziet geen grote bloeding. Hij zegt: "Mijn rug doet pijn. Help me even overeind."

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je helpt hem voorzichtig rechtop zitten, zodat hij beter ademt. | Scherm 2B | Niet goed. Na een val van hoogte met rugpijn denk je aan wervelletsel. Laat hem liggen en niet bewegen. | 0 |
| B. Hem laten liggen, zeggen dat hij niet mag bewegen en het hoofd stabiliseren. | Scherm 3 | Goed. Bij een val van hoogte en pijn in de rug denk je aan wervelletsel. Je beweegt hem niet onnodig en stabiliseert het hoofd. | 1 |
| C. Je vraagt hem zijn hoofd heen en weer te draaien om te zien of de nek pijn doet. | Scherm 2 opnieuw | Niet goed. Laat hem het hoofd niet bewegen. Pijn in nek of rug na een ongeval is al een alarmsignaal. | 0 |

### Scherm 2B Weer liggen (alleen bij A)

Tekst: Jesse schreeuwt van de pijn. Je laat hem direct weer liggen, zegt dat hij niet mag bewegen en houdt zijn hoofd stil. Linda raadpleegt de Radio Medische Dienst. Doorgaan naar scherm 3. `Omweg` plus 1.

### Scherm 3 De nekkraag

Tekst: de arts vraagt of de nek onbeweeglijk is. Jesse is van drie meter gevallen.

Vraag: hoe breng je de nekkraag aan?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Jij fixeert de nek, een helper meet en plaatst de kraag, daarna controleren. | Scherm 4 | Goed. Bij een val van hoogte maak je de nek onbeweeglijk met een verstelbare nekkraag, met twee hulpverleners. Daarna controleer je hoe de kraag zit. | 1 |
| B. Je doet het alleen, terwijl Jesse zijn hoofd zelf stilhoudt. | Scherm 3 opnieuw | Niet goed. Een nekkraag breng je met twee hulpverleners aan. De een houdt het hoofd, de ander brengt de kraag aan. | 0 |
| C. Een nekkraag is niet nodig, want hij kan praten en bewegen. | Scherm 3 opnieuw | Niet goed. Praten zegt niets over de wervelkolom. Bij een val van hoogte maak je de nek onbeweeglijk. | 0 |

### Scherm 4 De bult op zijn hoofd

Tekst: Jesse zegt dat hij na de val even weg was. Hij heeft hoofdpijn.

Vraag: wat onderzoek je en wat leg je vast?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Alleen of de bult op zijn hoofd groter wordt. | Scherm 4 opnieuw | Te weinig. Bij hoofdletsel onderzoek je het bewustzijn, de pupillen en tekenen van verlamming aan één kant. Het verloop is belangrijker dan één beoordeling. | 0 |
| B. Je vraagt of hij zich goed voelt; hij zegt ja, dus dat is in orde. | Scherm 4 opnieuw | Te weinig. Hij is even weg geweest. Bepaal het bewustzijn met de GCS, kijk naar de pupillen en schrijf het op. | 0 |
| C. GCS, pupillen en tekenen van verlamming, met tijd genoteerd. | Scherm 11 | Goed. Een bloeding in of rond de hersenen kan pas na enige tijd verschijnselen geven. Met de tijden erbij zie je later of er iets verandert. | 1 |

### Scherm 11 Wat er gebeurd is

Tekst: Linda heeft de arts van de Radio Medische Dienst aan de lijn. De arts vraagt hoe het ongeval is gebeurd, want de toedracht helpt om het letsel in te schatten.

Vraag: wat geef je door over het ongeval?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Alleen dat hij gevallen is; de arts vraagt zelf wel door als hij meer wil weten. | Scherm 11 opnieuw | Te weinig. De toedracht helpt de arts het letsel in te schatten. Geef de hoogte, de klachten en je metingen zelf door. | 0 |
| B. Val van drie meter, rugpijn, even weg geweest, been in vreemde stand, metingen met tijd. | Scherm 5 | Goed. Met de hoogte van de val, de klachten en je metingen met de tijd erbij kan de arts het letsel beter inschatten. | 1 |
| C. Vooral het been, want dat is het letsel dat je duidelijk kunt zien en beschrijven. | Scherm 11 opnieuw | Niet goed. Het been ziet er heftig uit, maar de val van hoogte en het even weg zijn zijn voor de arts minstens zo belangrijk. | 0 |

### Scherm 5 Het been

Tekst: het rechteronderbeen is gezwollen en staat iets gedraaid. De huid is heel.

Vraag: wat controleer je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je beweegt het been voorzichtig om te voelen of het bot kraakt. | Scherm 5 opnieuw | Niet goed. Abnormale beweeglijkheid of kraken probeer je nooit uit. Je let er alleen op als je het merkt. | 0 |
| B. Je trekt aan de voet om het been weer recht te leggen. | Scherm 5 opnieuw | Niet goed. Een breuk of ontwrichting terugzetten doe je alleen in overleg met een arts. | 0 |
| C. Gevoel, beweging, kleur en doorbloeding voorbij de breuk controleren en noteren. | Scherm 6 | Goed. Je controleert wat er voorbij de breuk gebeurt en legt de toedracht vast. Dat helpt de arts het letsel in te schatten. | 1 |

### Scherm 6 Spalken

Tekst: de tenen zijn warm en roze en de kleur komt na drukken op de nagel binnen enkele seconden terug. Jesse voelt de aanraking.

Vraag: hoe spalk je het been?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Been ondersteunen, vacuümspalk eronder, vormen, lucht eruit, tijd en circulatie noteren. | Scherm 7 | Goed. Met twee hulpverleners en een vacuümspalk zet je het been onbeweeglijk vast. Controleer de circulatie voor en na en noteer de tijd. | 1 |
| B. Je bindt het been met tape strak aan het andere been. | Scherm 6B | Niet de DRTC-werkwijze. DRTC gebruikt een vacuümspalk. En te strak vastzetten kan de doorbloeding afknellen. | 0 |
| C. Je spalkt niet, want hij ligt toch stil tot de brancard er is. | Scherm 6 opnieuw | Niet goed. Ondersteunen of immobiliseren vermindert pijn en voorkomt verdere schade aan bloedvaten, zenuwen en weefsel. | 0 |

### Scherm 6B De vacuümspalk (alleen bij B)

Tekst: Je haalt de tape weg. Met een helper breng je de vacuümspalk aan, noteert de tijd en controleert de circulatie opnieuw. Doorgaan naar scherm 7. `Omweg` plus 1.

### Scherm 7 Koude tenen

Tekst: twintig minuten later voelen Jesses tenen koud aan en zien ze blauwig. De kleur komt na drukken op de nagel langzaam terug.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je wacht af; dat komt door de kou in het ruim. | Scherm 7 opnieuw | Niet goed. Koude, blauwe tenen kunnen betekenen dat een bloedvat wordt afgekneld. Dat kan blijvende schade geven. | 0 |
| B. Spalk losser opnieuw aanleggen; helpt het niet, direct de RMD. | Scherm 10 | Goed. De zwelling kan na het spalken nog toenemen. Is de circulatie slechter, maak de spalk dan losser en raadpleeg de arts als dat niet helpt. | 1 |
| C. Je pompt de spalk nog harder op, zodat het been beter vastzit. | Scherm 7 opnieuw | Niet goed. Dan knelt hij nog meer af. Maak de spalk juist losser. | 0 |

### Scherm 10 Bleek en klam

Tekst: de spalk zit nu losser en de tenen worden weer warmer. Terwijl je wacht op de brancard, zie je dat Jesse bleek wordt en klam aanvoelt. Zijn pols is sneller dan bij je eerste meting.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je stelt hem gerust; hij is geschrokken, je meet over een uur opnieuw. | Scherm 10 opnieuw | Niet goed. Bleek, klam en een snellere pols kunnen betekenen dat er shock ontstaat. Wacht daar niet een uur mee. | 0 |
| B. Je legt een extra deken over hem en kijkt pas weer bij de ziekenboeg. | Scherm 10 opnieuw | Niet goed. Je stopt dan met controleren. Door pijn en bloedverlies rond de breuk kan shock ontstaan; blijf pols, bloeddruk en huid volgen. | 0 |
| C. Pols, bloeddruk en huid controleren, noteren en direct aan de RMD melden. | Scherm 8 | Goed. Door pijn en bloedverlies rond een breuk kan shock ontstaan. Met de metingen naast elkaar ziet de arts of het slechter wordt. | 1 |

### Scherm 8 Naar de brancard

Tekst: de arts vraagt Jesse naar de ziekenboeg te brengen. Er zijn vier hulpverleners.

Vraag: hoe leg je hem op de brancard?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Met de log-roll op jouw teken, hoofd, nek en romp in één lijn. | Scherm 9 | Goed. Met meerdere hulpverleners en de log-roll blijven hoofd, nek en romp in één lijn. Eén persoon aan het hoofd stuurt aan. | 1 |
| B. Twee helpers tillen hem onder de armen en de knieën op de brancard. | Scherm 8 opnieuw | Niet goed. Zo buig je de wervelkolom. Gebruik de log-roll met hoofd, nek en romp in één lijn. | 0 |
| C. Jesse rolt zelf op de brancard, dan doet hij wat hij kan. | Scherm 8 opnieuw | Niet goed. Hij mag niet zelf bewegen. Gebruik de log-roll met meerdere hulpverleners. | 0 |

### Scherm 9 Eerst helder, dan suf

Tekst: om 09.30 uur in de ziekenboeg is Jesse suffer. Hij opent zijn ogen pas als je hem aanspreekt en geeft trage antwoorden. Om 08.30 uur was hij nog helder.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je laat hem slapen, want hij is moe van de val en de pijn. | Scherm 9 opnieuw | Niet goed. Suffer worden na een klap op het hoofd kan een bloeding in de schedel zijn. Het verloop is belangrijker dan één beoordeling. | 0 |
| B. GCS en pupillen opnieuw, naast de eerste noteren en direct de RMD. | Debriefing | Goed. Eerst helder en daarna suffer is een alarmsignaal. Meld het direct, met de metingen naast elkaar. | 1 |
| C. Je wacht tot de volgende afgesproken controle over een half uur. | Scherm 9 opnieuw | Niet goed. Een verslechtering van het bewustzijn meld je direct. | 0 |

### Debriefing

Tekst: "De arts beoordeelt het verloop en bespreekt met de kapitein of Jesse van boord moet. Jij blijft hem bewaken."

Toon `Punten` van de 11 en het aantal omwegen. Toon daarna de lessen:

1. Werk ook bij letsel volgens DRS-ABCDE en behandel eerst wat het eerst doodt.
2. Denk bij een val van hoogte aan wervelletsel. Laat het slachtoffer liggen en stabiliseer het hoofd. Geef de toedracht door aan de arts.
3. Breng een nekkraag aan met twee hulpverleners en controleer daarna hoe hij zit.
4. Bij hoofdletsel bepaal je het bewustzijn met de GCS en kijk je naar de pupillen, met de tijd erbij.
5. Controleer bij een breuk gevoel, beweging en circulatie voorbij de breuk. Probeer nooit uit of het bot kraakt en zet niets terug.
6. Spalk met een vacuümspalk, noteer de tijd en controleer de circulatie voor en na en daarna regelmatig.
7. Verplaats met de log-roll: hoofd, nek en romp in één lijn.
8. Blijf na het spalken controleren: bleek, klam en een snellere pols kunnen shock zijn.
9. Eerst helder en daarna suffer meld je direct.

Knop: "Opnieuw" (zet de variabelen terug en begint bij de situatie). Het pakket meldt de voltooiing aan Rise zodra de cursist dit scherm bereikt.

## Te verifiëren door Mathanje

- Blijft de nekkraag in de werkwijze (R05)? Het scenario volgt MFA-L04-S13 en PH8 (S056) bij een hoogenergetisch trauma.
- Is een val van drie meter een goed voorbeeld van een hoogenergetisch trauma voor dit scenario?
- Klopt het verloop met eerst helder en na ongeveer een uur suffer als oefening, zonder dat het scenario een vast interval suggereert?

- Scherm 10 (versie 0.2): klopt het beeld van beginnende shock na een onderbeenbreuk als oefening, en is de feedback volledig genoeg zonder behandeling van shock voor te schrijven die niet in MFA-L04-S40 staat?

- Scherm 11 (versie 0.2): is de lijst met wat je over de toedracht doorgeeft volledig genoeg voor deze oefening?

Reviewvraag: R139, voor scherm 10 en 11 R151.
