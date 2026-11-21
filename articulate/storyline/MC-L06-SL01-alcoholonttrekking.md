# MC-L06-SL01 De motorman die beestjes ziet

Vertakt scenario bij MC-L06 Bijzondere zorg. Versie 0.1, 21 november 2026. Concept: deze les is nog niet medisch goedgekeurd. De medisch deskundige van DRTC beoordeelt de inhoud voordat cursisten de les volgen. De casus is fictief.

Volgens de afspraken wordt dit scenario een HTML-pakket voor een Code Block in Rise. Storyline is secundair gereedschap.

## Gegevens

| Veld | Uitwerking |
| --- | --- |
| Leerdoelen | MC-18.01: de gevolgen van alcohol- en drugsgebruik herkennen. MC-18.02: passende zorg geven en tijdig de arts inschakelen bij onttrekking, verwardheid en gevaar |
| Duur | Kortste volledige pad volgens `tools/studietijd.py`; met omwegen langer |
| Bronnen | MC-L06-S03 en S18 (onttrekking: de beef na enkele uren, delirium tremens na twee tot vier dagen, wat je doet); S21 (eerst lichamelijk denken: shock, suiker, hoofdletsel, vergiftiging, infectie, epilepsie); S22 (een psychisch zieke opvangen); S24 (gevaar voor zelfdoding, durf te vragen); S26 (agressief of dreigend gedrag); S017 GH2, zie de bronverwijzingen bij die schermen |
| Afronding | Bereiken van het scherm Debriefing. Het pakket meldt dan aan Rise dat het is voltooid |
| Variabelen | `Punten` (0 tot 10, één punt per hoofdscherm met een keuze, alleen bij de eerste poging), `Omweg` |
| Personages | Jij, de opvarende met Medical Care; Kevin, motorman, 41 jaar, fictief; Ahmed, zijn vaste maat; de kapitein; de arts van de Radio Medische Dienst (alleen als tekst) |
| Media | Eigen illustraties: de messroom, een hut met gedimd licht, het patiëntevaluatieformulier. Iedere keuze is een knop met de volledige tekst |

## Situatie vooraf

Het schip is gisteren vertrokken voor een reis van drie weken. Aan boord geldt een alcoholverbod. Ahmed komt naar je toe: "Kevin is niet zichzelf. Hij zit in de mess te trillen."

## Schermen

### Scherm 1 De eerste dag

Tekst: Kevin zit aan tafel. Zijn handen trillen als hij zijn koffie pakt. Hij zweet, zegt dat zijn hart bonkt en dat hij vannacht niet heeft geslapen. Ahmed vertelt dat Kevin thuis veel dronk.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je meet de vitale functies en de temperatuur, schrijft ze op en overlegt nu al met de arts. | Scherm 2 | Goed. Trillen, zweten, hartkloppingen en slecht slapen na het stoppen met drinken passen bij de beef. Overleg zo vroeg mogelijk, want in de eerste dagen kan de arts nog veel doen. | 1 |
| B. Je zegt dat het vanzelf overgaat en dat hij moet proberen te slapen. | Scherm 1B | Niet goed. Bij de eerste tekenen van onttrekking overleg je al met de arts. Een delirium tremens kan dodelijk zijn. | 0 |
| C. Je meldt aan de kapitein dat Kevin stiekem heeft gedronken. | Scherm 1 opnieuw | Niet goed. Deze verschijnselen passen juist bij stoppen met drinken. Het gaat om zijn gezondheid, niet om een oordeel. | 0 |

### Scherm 1B Toch overleggen (alleen bij B)

Tekst: 's Middags trilt Kevin nog erger. Je meet de vitale functies en overlegt alsnog met de arts. Doorgaan naar scherm 2. `Omweg` plus 1.

### Scherm 2 Het advies

Tekst: fictief oefenadvies: "Zorg dat hij genoeg drinkt, water of thee. Meet drie keer per dag pols, bloeddruk en temperatuur. Bel direct als hij verward raakt of koorts krijgt. Een middel kan ik later adviseren."

Vraag: Kevin vraagt of hij een slaappil mag uit de medicijnkist. Wat zeg je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. "Je krijgt alleen iets als de arts dat adviseert. Ik geef je vraag door." | Scherm 3 | Goed. Middelen geef je alleen op advies van de arts. Je noteert zijn vraag en geeft die door. | 1 |
| B. "Eén pil kan geen kwaad." | Scherm 2 opnieuw | Niet goed. Alcohol en slaapmiddelen versterken elkaar, en je geeft niets zonder advies van de arts. | 0 |
| C. "Nee", en je noteert het niet. | Scherm 2 opnieuw | Bijna. Je geeft terecht niets, maar de arts moet de vraag weten. Noteer het en geef het door. | 0 |

### Scherm 3 Dag twee

Tekst: Kevin eet bijna niets en is prikkelbaar. Hij loopt heen en weer in zijn hut. Je meet: pols snel, temperatuur iets verhoogd (oefenwaarden).

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je noteert de waarden met de tijd, laat hem veel drinken, moedigt hem aan te eten en meldt de verandering aan de arts. | Scherm 4 | Goed. Onrust, prikkelbaarheid en geen eetlust kunnen het begin van een delirium tremens zijn. Dat meld je. | 1 |
| B. Je laat hem met rust; hij heeft gewoon een slecht humeur. | Scherm 3 opnieuw | Niet goed. Na twee tot vier dagen kan een delirium tremens ontstaan. Het begint vaak met onrust, prikkelbaarheid en geen eetlust. | 0 |
| C. Je zet hem aan het werk, zodat hij afleiding heeft. | Scherm 3 opnieuw | Niet goed. Hij is ziek en niet geschikt voor werk. Bewaak hem en meld de verandering aan de arts. | 0 |

### Scherm 4 De beestjes

Tekst: op dag drie roept Ahmed je. Kevin staat op zijn kooi en slaat naar de muur. "Daar! Zie je die beestjes niet?" Hij weet niet welke dag het is. Hij trilt hevig en zweet.

Vraag: wat doe je eerst?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je zegt dat er geen beestjes zijn en dat hij moet ophouden. | Scherm 4 opnieuw | Niet goed. Ga niet in discussie over wat hij ziet. Voor hem is het echt. | 0 |
| B. Je blijft kalm, spreekt hem rustig aan en kijkt of er direct gevaar is voor hemzelf of anderen. | Scherm 5 | Goed. Eerst stel je vast of er direct gevaar is. Blijf kalm en probeer contact te houden. | 1 |
| C. Je sluit de hut af, zodat hij niemand kan lastigvallen. | Scherm 4 opnieuw | Niet goed. Laat hem als het kan niet alleen en sluit hem niet op. | 0 |

### Scherm 5 Eerst lichamelijk denken

Vraag: Kevin is verward. Waar zoek je eerst naar?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Naar een lichamelijke oorzaak: pols en bloeddruk, de bloedsuiker als dat kan, letsel aan het hoofd, de temperatuur en huiduitslag, en of er een aanval is geweest. | Scherm 6 | Goed. Bij verwardheid zoek je altijd eerst naar een lichamelijke oorzaak, zoals shock, suiker, hoofdletsel, vergiftiging, infectie of epilepsie. | 1 |
| B. Nergens naar; het is duidelijk een delirium. | Scherm 5 opnieuw | Niet goed. Ook als onttrekking voor de hand ligt, kan er iets anders achter zitten, zoals een infectie of hoofdletsel. | 0 |
| C. Naar alcohol in zijn hut. | Scherm 5 opnieuw | Dat helpt niet bij de zorg. Zoek eerst naar een lichamelijke oorzaak van de verwardheid. | 0 |

### Scherm 6 Direct overleggen

Tekst: je vindt geen letsel. De temperatuur is verder opgelopen (oefenwaarde). Kevin blijft verward.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je laat de kapitein direct contact leggen met de arts. Je geeft door wat je meet, en letterlijk wat Kevin zegt en hoe hij reageert. | Scherm 7 | Goed. Een delirium tremens kan dodelijk zijn: overleg direct. Geef letterlijk door wat hij zegt. | 1 |
| B. Je wacht tot de volgende geplande meting. | Scherm 6B | Niet goed. Verwardheid en oplopende temperatuur meld je direct, zoals de arts heeft gevraagd. | 0 |
| C. Je zegt tegen de arts: "Hij is gek geworden." | Scherm 6 opnieuw | Te weinig, en geen respect. Geef de metingen door en letterlijk wat hij zegt en doet. | 0 |

### Scherm 6B Direct melden (alleen bij B)

Tekst: Je laat de kapitein alsnog direct contact leggen. Doorgaan naar scherm 7. `Omweg` plus 1.

### Scherm 7 De omgeving

Tekst: de arts adviseert een rustige omgeving en geeft een middel op (fictief). Hij bespreekt met de kapitein dat Kevin waarschijnlijk van boord moet.

Vraag: hoe richt je de zorg in?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Een rustige hut met gedimd licht, Ahmed als vaste begeleider, veel drinken, en de vitale functies en temperatuur blijven meten. | Scherm 8 | Goed. Een prikkelarme ruimte en één vaste begeleider helpen hem rustig te worden. | 1 |
| B. In de mess, waar altijd mensen zijn die op hem letten. | Scherm 7 opnieuw | Niet goed. Daar zijn te veel prikkels. Kies een rustige hut met gedimd licht. | 0 |
| C. Steeds een andere collega, zodat niemand te moe wordt. | Scherm 7 opnieuw | Bijna. Afwisselen kan nodig zijn, maar één vaste, vertrouwde begeleider werkt het best. | 0 |

### Scherm 8 Dreiging

Tekst: 's Nachts schreeuwt Kevin tegen Ahmed: "Jij hebt die beestjes hier neergezet!" Hij pakt een stoel.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je gaat alleen naar binnen om hem te kalmeren. | Scherm 8 opnieuw | Niet goed. Ga nooit alleen het gesprek aan met een dreigende persoon. | 0 |
| B. Je haalt Ahmed weg, waarschuwt de kapitein en zorgt dat er meerdere collega's in de buurt zijn. Wat er verder moet, gebeurt volgens de afspraken van het schip en in overleg met de arts. | Scherm 9 | Goed. Let op je eigen veiligheid en die van anderen. Moet hij in bedwang worden gehouden, dan doe je dat met meerdere mensen tegelijk, in overleg met de arts. | 1 |
| C. Je dreigt dat je hem opsluit als hij niet ophoudt. | Scherm 8 opnieuw | Niet goed. Blijf kalm en dreig niet. Waarschuw de kapitein en zorg voor meer mensen. | 0 |

### Scherm 9 Een vraag die je durft te stellen

Tekst: de volgende ochtend is Kevin rustiger. Hij zegt zacht: "Ik ben iedereen tot last. Misschien is het beter als ik er niet meer ben."

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je vraagt rechtstreeks of hij eraan denkt zichzelf iets aan te doen, en of hij een plan heeft. | Scherm 10 | Goed. Durf te vragen. Daarmee breng je niemand op het idee. Het antwoord bepaalt hoe groot het gevaar is. | 1 |
| B. Je verandert van onderwerp, zodat hij er niet aan blijft denken. | Scherm 9 opnieuw | Niet goed. Neem zo'n uitspraak altijd serieus en vraag er rechtstreeks naar. | 0 |
| C. Je zegt dat hij zich niet zo moet aanstellen. | Scherm 9 opnieuw | Niet goed. Oordeel niet en maak geen verwijten. Vraag rechtstreeks wat hij bedoelt. | 0 |

### Scherm 10 Wat je doorgeeft

Tekst: Kevin zegt dat hij er soms aan denkt, maar geen plan heeft.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je geeft het letterlijk door aan de arts, zorgt dat hij niet bij gevaarlijke middelen kan, laat hem niet alleen en schrijft alles op. | Debriefing | Goed. Ook zonder plan is het risico reëel. De arts moet het weten voor de beslissing over de evacuatie. | 1 |
| B. Je houdt het voor je, omdat hij het in vertrouwen zei. | Scherm 10 opnieuw | Niet goed. Gevaar voor zelfdoding meld je aan de arts. Leg Kevin uit dat je dat doet om hem te helpen. | 0 |
| C. Je laat hem slapen; hij is nu rustig. | Scherm 10 opnieuw | Niet goed. Laat hem niet alleen en meld zijn uitspraak aan de arts. | 0 |

### Debriefing

Tekst: "Kevin gaat in de eerstvolgende haven van boord, naar een ziekenhuis. Jouw aantekeningen gaan met hem mee."

Toon `Punten` van de 10 en het aantal omwegen. Toon daarna de lessen:

1. Trillen, zweten, hartkloppingen en slecht slapen na het stoppen met drinken zijn tekenen van onttrekking. Overleg al bij de eerste tekenen met de arts.
2. Na twee tot vier dagen kan een delirium tremens ontstaan. Dat kan dodelijk zijn: overleg direct.
3. Bij verwardheid zoek je eerst naar een lichamelijke oorzaak.
4. Geef een verwarde patiënt een rustige hut met gedimd licht en één vaste begeleider. Ga niet in discussie over wat hij ziet.
5. Ga nooit alleen naar een dreigende persoon. Waarschuw de kapitein en zorg voor meer mensen.
6. Durf te vragen naar gedachten aan zelfdoding, en meld het aan de arts.
7. Middelen geef je alleen op advies van de arts.

Knop: "Opnieuw" (zet de variabelen terug en begint bij de situatie). Het pakket meldt de voltooiing aan Rise zodra de cursist dit scherm bereikt.

## Te verifiëren door Mathanje

- Is het verloop over drie dagen (de beef, dan onrust en geen eetlust, dan het delirium) passend als oefening?
- Is het fictieve oefenadvies (veel drinken, drie keer per dag meten, een middel later) passend, zonder dat het een protocol lijkt?
- Past de combinatie van delirium en een uitspraak over zelfdoding in één scenario, of wordt het te zwaar?

Reviewvraag: R126.
