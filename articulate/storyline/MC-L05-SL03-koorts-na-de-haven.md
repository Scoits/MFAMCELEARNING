# MC-L05-SL03 Koorts na de haven

Vertakt scenario bij MC-L05 Ziekten en medische noodsituaties. Versie 0.1, 21 november 2026. Concept: deze les is nog niet medisch goedgekeurd. De medisch deskundige van DRTC beoordeelt de inhoud voordat cursisten de les volgen. De casus is fictief.

Volgens de afspraken wordt dit scenario een HTML-pakket voor een Code Block in Rise. Storyline is secundair gereedschap.

## Gegevens

| Veld | Uitwerking |
| --- | --- |
| Leerdoelen | MC-16.01: reis- en blootstellingsgegevens verbinden met signalen van mogelijke tropische ziekte. MC-16.02: preventie, medische consultatie en observatie bij een verdenking van tropische ziekte. MC-17.01: besmettingsroutes en signalen van infectie herkennen |
| Duur | Kortste volledige pad volgens `tools/studietijd.py`; met omwegen langer |
| Bronnen | MC-L05-S16 (tropische ziekten herkennen, naar reis en muggen vragen); S41 (malaria: griep uit de tropen, drie fasen van de aanval, de gevaarlijkste vorm, wat je doet); S38 (afzonderen, jezelf beschermen, van top tot teen onderzoeken, meten en bijhouden, melden waar het schip is geweest); S17 (muggen, malariaprofylaxe via de rederij, observatie weken of maanden later); S18 (koorts na West-Afrika); S017 GH2 en S062, zie de bronverwijzingen bij die schermen |
| Afronding | Bereiken van het scherm Debriefing. Het pakket meldt dan aan Rise dat het is voltooid |
| Variabelen | `Punten` (0 tot 9, één punt per hoofdscherm met een keuze, alleen bij de eerste poging), `Omweg` |
| Personages | Jij, de opvarende met Medical Care; Ruben, matroos, 31 jaar, fictief; Sanne, stuurman, fictief; de kapitein; de arts van de Radio Medische Dienst (alleen als tekst) |
| Media | Eigen illustraties: een hut, de ziekenboeg, een thermometer, een vochtlijst, een klamboe. Iedere keuze is een knop met de volledige tekst |

## Situatie vooraf

Het schip is achttien dagen geleden vertrokken uit een haven in West-Afrika en vaart nu op de Noord-Atlantische Oceaan. Het is 14.00 uur. Ruben meldt zich bij je. Hij heeft het koud, rilt en heeft hoofdpijn en spierpijn. "Ik heb griep," zegt hij. "Een paracetamol en een middag slapen, dan ben ik er weer."

## Schermen

### Scherm 1 Wat wil je eerst weten?

Vraag: wat vraag je Ruben als eerste?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. "Neem maar iets tegen de koorts, dan kijken we morgen verder." | Scherm 1B | Niet goed. Je begint niet met een middel, maar met vragen. Koorts na een verblijf in de tropen kan iets anders zijn dan griep. | 0 |
| B. "Is er nog iemand aan boord met griep of koorts?" | Scherm 1 opnieuw | Dat is later een goede vraag. Het schip komt net uit West-Afrika; vraag eerst naar de reis en naar muggenbeten. | 0 |
| C. "Waar ben je geweest, was je aan wal en ben je gestoken?" | Scherm 2 | Goed. Vraag bij koorts altijd naar de tropen in de afgelopen maanden, het gebied en muggenbeten. Griep uit de tropen is malaria tot het tegendeel is bewezen. | 1 |

### Scherm 1B Eerst vragen (alleen bij A)

Tekst: Je zegt tegen Ruben dat je eerst wilt weten waar hij is geweest. Hij vertelt dat hij in de haven twee avonden aan wal is geweest en veel muggenbulten had. Doorgaan naar scherm 2. `Omweg` plus 1.

### Scherm 2 Waar ligt Ruben?

Tekst: Ruben deelt een hut met een collega. Je weet nog niet wat hij heeft.

Vraag: wat regel je nu?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Ruben blijft in zijn eigen hut; zijn collega houdt een oogje in het zeil. | Scherm 2 opnieuw | Niet goed. Je weet nog niet of hij een besmettelijke ziekte heeft. Zonder hem af in een eigen hut of de ziekenboeg. | 0 |
| B. Ruben gaat na een paar uur rust en een koortsremmer weer op wacht. | Scherm 2 opnieuw | Niet goed. Met hoge koorts en rillingen hoort hij in bed. Malaria kan snel levensbedreigend worden. | 0 |
| C. Naar de ziekenboeg; jij beschermt jezelf en wast na iedere verzorging je handen. | Scherm 3 | Goed. Zolang je niet weet wat hij heeft, verzorg je hem als een patiënt met een mogelijk besmettelijke ziekte. | 1 |

### Scherm 3 Van top tot teen

Vraag: hoe onderzoek je Ruben?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je bekijkt het hele ontblote lichaam en let op huiduitslag. | Scherm 4 | Goed. Veel infectieziekten zijn te herkennen aan huiduitslag. Er zijn diagnoses gemist omdat dit niet gebeurde. | 1 |
| B. Je kijkt in zijn keel; bij griep is dat genoeg onderzoek. | Scherm 3 opnieuw | Niet goed. Kijk naar het hele ontblote lichaam. Huiduitslag kan op een andere plek zitten. | 0 |
| C. Je meet alleen zijn temperatuur, twee keer om zeker te zijn. | Scherm 3 opnieuw | Te weinig. Meten hoort erbij, maar bekijk ook het hele ontblote lichaam op huiduitslag. | 0 |

### Scherm 4 Meten en bijhouden

Tekst: je ziet geen huiduitslag. De oefenwaarden om 14.20 uur: temperatuur 39,6 °C, pols 108, ademhaling 20 per minuut. Ruben rilt en heeft het ijskoud, terwijl zijn huid warm aanvoelt.

Vraag: wat leg je vast?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. "Waarschijnlijk malaria", met de temperatuur van vanochtend erbij. | Scherm 4 opnieuw | Niet goed. Dat stel je niet vast; de diagnose vraagt bloedonderzoek. Schrijf op wat je ziet en meet. | 0 |
| B. Alleen de temperatuur, één keer per dag, en hoe hij zich voelt. | Scherm 4 opnieuw | Te weinig. Meet een paar keer per dag temperatuur, pols en bloeddruk en houd bij hoeveel hij drinkt en uitplast. | 0 |
| C. Temperatuur, pols, bloeddruk en ademhaling met tijd, en een vochtlijst. | Scherm 5 | Goed. Een paar keer per dag meten en opschrijven laat het verloop zien. Bij koorts is uitdroging een groot gevaar; daarom houd je ook het vocht bij. | 1 |

### Scherm 5 De arts inschakelen

Tekst: de kapitein legt contact met de Radio Medische Dienst en geeft jou het woord.

Vraag: wat vertel je de arts?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. "Hij heeft griep met hoge koorts. Mag hij paracetamol?" | Scherm 5B | Niet goed. Je geeft geen diagnose en vraagt niet meteen om een middel. De arts heeft de feiten en de reis nodig. | 0 |
| B. "Hij heeft koorts sinds gisteren. Kunt u later terugbellen?" | Scherm 5B | Te weinig. Zonder verloop, metingen en reisgegevens kan de arts de situatie niet beoordelen. | 0 |
| C. Klachten en begin, metingen, geen uitslag, West-Afrika, muggenbulten, wat hij kreeg. | Scherm 6 | Goed. Vertel de arts altijd waar het schip is geweest. Met de reis, de muggenbeten en het verloop kan de arts aan malaria denken en beslissen over onderzoek, behandeling en evacuatie. | 1 |

### Scherm 5B Aanvullen (alleen bij A of B)

Tekst: De arts vraagt door. Je geeft alsnog de metingen met de tijd, de reis, de muggenbeten en wat hij heeft gekregen. Doorgaan naar scherm 6. `Omweg` plus 1.

### Scherm 6 Het advies uitvoeren

Tekst: fictief oefenadvies: "Bedrust in de ziekenboeg. Meet iedere vier uur temperatuur, pols en bloeddruk en schrijf ze op. Laat hem veel drinken en houd bij hoeveel. Bel morgen om 08.00 uur terug, direct als hij verward of suf wordt."

Vraag: hoe regel je dit?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Advies teruglezen en noteren, drinken klaarzetten, vochtlijst bijhouden, nachtmetingen regelen. | Scherm 7 | Goed. Je voert het advies uit, regelt de metingen voor de nacht en bewaakt het vocht. | 1 |
| B. Je laat hem slapen en komt morgen om 08.00 uur weer kijken. | Scherm 6 opnieuw | Niet goed. De arts vraagt iedere vier uur te meten. Regel wie dat 's nachts doet. | 0 |
| C. Je geeft hem alvast iets tegen de koorts, want dat helpt bij het slapen. | Scherm 6 opnieuw | Niet goed. Je geeft alleen wat de arts adviseert. Je past een advies niet zelf aan. | 0 |

### Scherm 7 Het lijkt mee te vallen

Tekst: om 18.00 uur zweet Ruben hevig. De temperatuur is gedaald en hij heeft geslapen. "Ik voel me veel beter," zegt hij. "Ik kan vannacht gewoon mijn wacht draaien."

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je laat hem zijn wacht weer draaien, want de koorts is nu weg. | Scherm 7 opnieuw | Niet goed. Rillen, daarna heet en droog en dan hevig zweten zijn de drie fasen van een malaria-aanval. Na het zweten voelt de patiënt zich beter, maar de volgende aanval komt. | 0 |
| B. Je legt uit dat het terug kan komen; hij blijft in bed en jij blijft meten. | Scherm 8 | Goed. Dat hij zich beter voelt, betekent niet dat het voorbij is. Het verloop met koude rillingen, hitte en zweten is belangrijke informatie voor de arts. | 1 |
| C. Je stopt met meten, want het gaat duidelijk beter met hem. | Scherm 7 opnieuw | Niet goed. Blijf meten volgens het advies. Het verloop over meerdere dagen is wat de arts wil weten. | 0 |

### Scherm 8 Midden in de nacht

Tekst: om 02.00 uur maakt Sanne je wakker. Ruben is heel erg ziek. De temperatuur is weer hoog, hij heeft heftige hoofdpijn en hij reageert traag als je hem aanspreekt. Hij ademt.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je wacht tot 08.00 uur, zoals met de arts is afgesproken. | Scherm 8B | Niet goed. De arts zei: direct bellen als hij verward of suf wordt. Een dalend bewustzijn meld je meteen. | 0 |
| B. Direct alles meten en noteren en via de kapitein direct de arts. | Scherm 9 | Goed. Hoge koorts, heftige hoofdpijn en een dalend bewustzijn passen bij de gevaarlijkste vorm van malaria. Die kan binnen een dag dodelijk zijn. Je wacht niet tot de afgesproken tijd. | 1 |
| C. Je laat hem rustig slapen, want hij is moe van de koorts. | Scherm 8B | Niet goed. Traag reageren is een dalend bewustzijn en geen moeheid. Meld het direct. | 0 |

### Scherm 8B Direct melden (alleen bij A of C)

Tekst: Je laat de kapitein alsnog direct contact leggen en meldt de verandering met de tijd. Doorgaan naar scherm 9. `Omweg` plus 1.

### Scherm 9 De rest van de bemanning

Tekst: de arts en de kapitein bespreken een evacuatie. De volgende ochtend vraagt Sanne wat de rest van de bemanning moet doen. Het schip vaart over drie weken weer naar West-Afrika.

Vraag: wat adviseer je de kapitein?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Niets meer, want het schip is uit de tropen, dus het risico is voorbij. | Scherm 9 opnieuw | Niet goed. Koorts na een verblijf in de tropen kan ook weken of maanden later komen. Iedereen die koorts krijgt, meldt zich. | 0 |
| B. Muggenwerende maatregelen, profylaxe volgens de rederij en koorts altijd melden. | Debriefing | Goed. Voorkom muggenbeten, volg de afspraken van de rederij over profylaxe en blijf alert op koorts, ook weken of maanden na de tropen. | 1 |
| C. Alleen overdag lange mouwen, want muggen steken vooral overdag. | Scherm 9 opnieuw | Niet volledig. De malariamug steekt tussen zonsondergang en zonsopgang. De muggen van dengue en gele koorts steken ook overdag. Bescherm je dus de hele dag en vooral 's avonds en 's nachts. | 0 |

### Debriefing

Tekst: "Ruben wordt overgebracht naar een ziekenhuis aan de wal. Het bloedonderzoek daar bepaalt wat hij heeft. De metingen en het verloop die jij hebt vastgelegd, gaan met hem mee."

Toon `Punten` van de 9 en het aantal omwegen. Toon daarna de lessen:

1. Vraag bij koorts altijd waar iemand de afgelopen maanden is geweest en of hij door muggen is gestoken.
2. Griep uit de tropen is malaria tot het tegendeel is bewezen. Neem contact op met de arts en vertel waar het schip is geweest.
3. Verzorg een patiënt van wie je niet weet wat hij heeft als een patiënt met een mogelijk besmettelijke ziekte: afzonderen, jezelf beschermen, van top tot teen onderzoeken, meten en het vocht bijhouden.
4. Een malaria-aanval verloopt in drie fasen. Dat de patiënt zich na het zweten beter voelt, betekent niet dat het voorbij is.
5. Hoge koorts, heftige hoofdpijn en een dalend bewustzijn meld je direct.
6. Voorkom muggenbeten en blijf alert op koorts, ook weken of maanden na de tropen.

Knop: "Opnieuw" (zet de variabelen terug en begint bij de situatie). Het pakket meldt de voltooiing aan Rise zodra de cursist dit scherm bereikt.

## Te verifiëren door Mathanje

- Passen de oefenwaarden (39,6 °C, pols 108, ademhaling 20) en het verloop over een middag en een nacht bij malaria als oefening, zonder dat het scenario grenswaarden suggereert?
- Is het fictieve advies (bedrust, iedere vier uur meten, veel drinken, direct bellen bij verwardheid of sufheid) passend als oefening?
- Klopt het dat de cursist de patiënt afzondert en zich beschermt zolang onduidelijk is wat hij heeft, ook al wordt malaria niet via druppels overgedragen?
- Moet de cursist bij het gesprek met de arts vragen of de patiënt malariatabletten heeft gebruikt? Het scenario noemt dit niet, omdat de les profylaxe bij de rederij legt (S17, R70).
- Hoort een malariasneltest in dit scenario thuis? Dat hangt af van R47.

Reviewvraag: R130.
