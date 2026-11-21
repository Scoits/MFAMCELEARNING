# MFA-L05-SL01 Gas in de tank

Vertakt scenario bij MFA-L05 Toxicologische risico's, zuurstof en geredde personen. Versie 0.1, 21 november 2026. Concept: deze les is nog niet medisch goedgekeurd. De medisch deskundige van DRTC beoordeelt de inhoud voordat cursisten de les volgen. De casus is fictief.

Volgens de afspraken wordt dit scenario een HTML-pakket voor een Code Block in Rise. Storyline is secundair gereedschap. Het scenario bereidt voor op SC-MFA-04 en MFA-P03 en vervangt de oefening met de zuurstofkoffer op locatie niet. De procedure voor besloten ruimten van het eigen schip blijft leidend.

## Gegevens

| Veld | Uitwerking |
| --- | --- |
| Leerdoelen | MFA-03.01: gevaren van stoffen aan boord en veiligheidsinformatie. MFA-03.02: het MFAG opzoeken en gebruiken. MFA-03.03: blootstellingsroute, verschijnselen en eerste hulp. MFA-03.04: zuurstof veilig toedienen |
| Duur | Kortste volledige pad volgens `tools/studietijd.py`; met omwegen langer |
| Bronnen | MFA-L05-S15 (eerst je eigen veiligheid, besloten ruimten, beadem nooit zonder hulpmiddel); S16 en S17 (soorten gassen, zwavelwaterstof); S19 (gas ingeademd: wat je ziet en wat je doet); S20 (ook later nog gevaar); S04 en S05 (het MFAG, gegevens voor de arts); S07 en S08 (zuurstof veilig toedienen, het masker); S016 GH1, S043, S044 en S054, zie de bronverwijzingen bij die schermen |
| Afronding | Bereiken van het scherm Debriefing. Het pakket meldt dan aan Rise dat het is voltooid |
| Variabelen | `Punten` (0 tot 9, één punt per hoofdscherm met een keuze, alleen bij de eerste poging), `Omweg` |
| Personages | Jij, de opvarende met Medical First Aid; Kevin, matroos, 30 jaar, fictief; Mo, matroos, fictief; de chief officer; het reddingsteam van het schip; de arts van de Radio Medische Dienst (alleen als tekst) |
| Media | Eigen illustraties: een open mangat van een ballasttank, een slachtoffer onderin de tank, persluchtapparatuur en een lijn, een zuurstofkoffer met masker en reservoir. Iedere keuze is een knop met de volledige tekst |

## Situatie vooraf

Het is 14.00 uur. Kevin is tien minuten geleden een ballasttank in gegaan om een sensor te bekijken. Mo stond bij het mangat. Hij roept je: "Kevin ligt onderin en reageert niet! Ik ga naar beneden!" Toen Kevin naar binnen ging, rook het in de tank naar rotte eieren.

## Schermen

### Scherm 1 Mo wil naar binnen

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je gaat samen met Mo naar beneden; met twee kun je Kevin sneller naar boven halen. | Scherm 1B | Niet goed. Wat Kevin velde, is er nog steeds. Wie zonder bescherming naar binnen gaat, valt zelf ook neer. | 0 |
| B. Je houdt Mo tegen. Niemand gaat de tank in zonder bescherming. | Scherm 2 | Goed. Stop en denk na. Ligt iemand om onduidelijke reden in een afgesloten ruimte, ga dan niet naar binnen. | 1 |
| C. Je laat Mo snel naar binnen gaan met zijn adem ingehouden. | Scherm 1 opnieuw | Niet goed. Adem inhouden beschermt niet genoeg. Niemand gaat naar binnen zonder persluchtapparatuur. | 0 |

### Scherm 1B Terug naar boven (alleen bij A)

Tekst: Op de ladder wordt Mo duizelig. Je trekt hem terug naar boven. Hij knapt op in de frisse lucht. Doorgaan naar scherm 2. `Omweg` plus 1.

### Scherm 2 Alarm

Vraag: wat doe je nu?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je waarschuwt de brug en de andere helpers en volgt de procedure voor besloten ruimten van het schip. | Scherm 3 | Goed. Sla alarm en volg de procedure. Dan komt het reddingsteam met de juiste uitrusting. | 1 |
| B. Je roept naar beneden dat Kevin zelf naar boven moet klimmen. | Scherm 2 opnieuw | Niet goed. Kevin reageert niet. Sla alarm en volg de procedure. | 0 |
| C. Je laat een ventilator in het mangat blazen en gaat dan na vijf minuten naar binnen. | Scherm 2 opnieuw | Niet goed. Je weet niet of de lucht dan veilig is. Sla alarm en volg de procedure, met gasmeting en bescherming. | 0 |

### Scherm 3 Wie gaat naar binnen?

Tekst: het reddingsteam is er.

Vraag: hoe gaat de redding volgens de procedure?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Een redder gaat naar binnen met een gasmasker met filter. | Scherm 3 opnieuw | Niet goed. Een filter beschermt niet bij zuurstoftekort of veel gas. De procedure noemt persluchtapparatuur. | 0 |
| B. Een redder gaat naar binnen met persluchtapparatuur en een lijn om het middel. Een collega buiten de tank bewaakt de lijn. | Scherm 4 | Goed. Alleen met persluchtapparatuur, een lijn en een collega die buiten de lijn bewaakt, zoals in de procedure staat. | 1 |
| C. Twee redders zonder ademlucht, maar met een lijn, zodat ze snel terug kunnen. | Scherm 3 opnieuw | Niet goed. Een lijn alleen is niet genoeg. Zonder ademlucht valt de redder zelf neer. | 0 |

### Scherm 4 Kevin is boven

Tekst: Kevin ligt aan dek in de frisse lucht. Hij reageert niet. Je controleert de ademhaling: hij ademt normaal.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je maakt knellende kleding los, legt hem in stabiele zijligging en laat de zuurstofkoffer halen. Je controleert de ademhaling steeds opnieuw. | Scherm 5 | Goed. Frisse lucht, knellende kleding los, een vrije ademweg en stabiele zijligging bij een bewusteloze die normaal ademt. Zuurstof bij tekenen van zuurstoftekort. | 1 |
| B. Je laat hem op zijn rug liggen en gaat de arts bellen. | Scherm 4 opnieuw | Niet goed. Een bewusteloze die normaal ademt, leg je in stabiele zijligging. Blijf bij hem en laat een ander bellen. | 0 |
| C. Je start met borstcompressies. | Scherm 4 opnieuw | Niet goed. Hij ademt normaal. Leg hem in stabiele zijligging en blijf de ademhaling controleren. | 0 |

### Scherm 5 Zuurstof geven

Tekst: de zuurstofkoffer is er. De slang is aangesloten.

Vraag: hoe breng je het masker aan?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je legt het masker los op zijn gezicht en zet de cilinder open. | Scherm 5 opnieuw | Te weinig. Laat eerst het reservoirzakje vollopen en zorg dat het masker goed aansluit. | 0 |
| B. Je houdt de ademweg vrij, laat het reservoirzakje vollopen, plaatst het masker over mond, neus en kin en drukt het bij de neus aan. Je kijkt hoe Kevin reageert. Iemand die rookt, stuur je weg. | Scherm 6 | Goed. Een vrije ademweg, een vol reservoir en een goed aansluitend masker. Zuurstof maakt een brand heftiger: geen vuur, roken of vet in de buurt. | 1 |
| C. Je wacht met zuurstof tot de arts het adviseert. | Scherm 5 opnieuw | Niet goed. In de DRTC-werkwijze geef je zuurstof bij tekenen van zuurstoftekort, ook voordat je de arts spreekt. | 0 |

### Scherm 6 Ik ruik niks meer

Tekst: Mo zegt: "Het stinkt niet meer in de tank. Ik ga Kevins gereedschap halen."

Vraag: wat zeg je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. "Goed idee, maar doe het snel." | Scherm 6 opnieuw | Niet goed. Zwavelwaterstof schakelt na enkele minuten je reukvermogen uit, terwijl er nog steeds gas kan zijn. | 0 |
| B. "Neem een ventilator mee, dan is het veilig." | Scherm 6 opnieuw | Niet goed. Je weet niet of de lucht veilig is. Alleen een gasmeting en de procedure kunnen dat vaststellen. | 0 |
| C. "Nee. Zwavelwaterstof ruik je na een paar minuten niet meer, terwijl het er nog is. Niemand gaat de tank in voordat de gasmeting en de procedure zeggen dat het veilig is." | Scherm 7 | Goed. Bij zwavelwaterstof kun je niet op je neus vertrouwen. Een gasmeter en de procedure voor besloten ruimten beschermen je wel. | 1 |

### Scherm 7 Kevin stopt met ademen

Tekst: bij de volgende controle ademt Kevin niet meer normaal.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je draait hem op zijn rug, laat de AED halen en start reanimatie. Je beademt met het beademingsmasker met ventiel of de ballon uit de zuurstofkoffer. | Scherm 8 | Goed. Ademt hij niet normaal, start dan reanimatie. Iemand die een giftig gas heeft ingeademd, kan dat weer uitademen. Beadem daarom alleen met een hulpmiddel. | 1 |
| B. Je start reanimatie met mond-op-mondbeademing, want dat is het snelst. | Scherm 7B | Niet goed. Beadem nooit zonder hulpmiddel. Kevin kan het gas uitademen en dan word jij ook vergiftigd. | 0 |
| C. Je laat hem in stabiele zijligging liggen met het zuurstofmasker op. | Scherm 7 opnieuw | Niet goed. Hij ademt niet meer normaal. Start reanimatie. | 0 |

### Scherm 7B Met hulpmiddel (alleen bij B)

Tekst: Je stopt voordat je beademt en pakt het beademingsmasker met ventiel uit de zuurstofkoffer. Doorgaan naar scherm 8. `Omweg` plus 1.

### Scherm 8 Het gesprek met de arts

Tekst: na enkele minuten reanimatie gaat Kevin weer normaal ademen. Hij ligt in stabiele zijligging met zuurstof. De chief officer meldt dat de gasmeter in de tank zwavelwaterstof aangaf. De kapitein legt contact met de Radio Medische Dienst.

Vraag: wat geef je door?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. "Hij is in een tank flauwgevallen. Wat moet ik doen?" | Scherm 8 opnieuw | Te weinig. De arts heeft de stof, de route, de tijd en de verschijnselen nodig. | 0 |
| B. De stof volgens de gasmeting, dat hij het heeft ingeademd, hoe lang hij in de tank was en hoe laat, dat hij bewusteloos was en is gereanimeerd, wat je nu ziet, dat hij zuurstof krijgt, en wat het MFAG of het veiligheidsinformatieblad over deze stof zegt, met de bladzijde. | Scherm 9 | Goed. Geef de stof, de route, de duur en de tijd van de blootstelling, de verschijnselen en wat je al hebt gedaan. Noem ook waar je het hebt opgezocht. | 1 |
| C. "Het was gas. Hij ademt weer, dus het is goed." | Scherm 8 opnieuw | Niet goed. Wie gas heeft ingeademd, wordt besproken met de arts, ook als hij opknapt. Geef de stof en het verloop. | 0 |

### Scherm 9 Weer bij

Tekst: een uur later is Kevin weer bij. Hij hoest af en toe en wil in zijn hut gaan slapen.

Vraag: wat doe je?

| Keuze | Gevolg | Feedback | Punten |
| --- | --- | --- | --- |
| A. Je laat hem gaan; hij is weer helder. | Scherm 9 opnieuw | Niet goed. Een slachtoffer dat na gas weer opknapt, is nog niet buiten gevaar. Schade aan de longen wordt soms pas na uren duidelijk. | 0 |
| B. Je laat hem niet alleen. Je controleert regelmatig zijn ademhaling, schrijft op wat je ziet en meldt toenemende kortademigheid of ophoesten van schuimend vocht direct aan de arts. | Debriefing | Goed. Na het inademen van gas kunnen de longen later nog problemen geven. Laat hem niet alleen slapen en blijf hem bewaken. | 1 |
| C. Je geeft hem hoestsiroop uit de medicijnkist. | Scherm 9 opnieuw | Niet goed. Medicijnen geef je alleen op advies van de arts. Blijf zijn ademhaling bewaken. | 0 |

### Debriefing

Tekst: "De arts geeft advies voor de bewaking van Kevin. De procedure voor besloten ruimten wordt na dit voorval met de bemanning besproken."

Toon `Punten` van de 9 en het aantal omwegen. Toon daarna de lessen:

1. Ligt iemand om onduidelijke reden in een afgesloten ruimte, ga dan niet naar binnen. Sla alarm en volg de procedure.
2. Alleen met persluchtapparatuur, een lijn en een collega die buiten de lijn bewaakt.
3. Je kunt niet op je neus vertrouwen. Zwavelwaterstof ruik je na een paar minuten niet meer.
4. Frisse lucht, een vrije ademweg, stabiele zijligging bij een bewusteloze die normaal ademt, en zuurstof met een goed aansluitend masker.
5. Beadem nooit zonder hulpmiddel bij iemand die gas heeft ingeademd.
6. Geef de arts de stof, de route, de duur en de tijd van de blootstelling, de verschijnselen en wat je hebt gedaan.
7. Wie gas heeft ingeademd, laat je niet alleen, ook als hij weer opknapt.

Knop: "Opnieuw" (zet de variabelen terug en begint bij de situatie). Het pakket meldt de voltooiing aan Rise zodra de cursist dit scherm bereikt.

## Te verifiëren door Mathanje

- Het scenario noemt een gasmasker met filter als onjuiste keuze. Dat staat niet letterlijk in de les; de les noemt alleen persluchtapparatuur. Mathanje en DRTC bevestigen de feedback.
- Is het juist dat de cursist de zuurstof geeft voordat hij de arts spreekt, volgens de DRTC-werkwijze in MFA-L05-S07?
- Zwavelwaterstof in een ballasttank is als voorbeeld gekozen. Staat het in het MFAG, of verwijst de cursist hier naar het veiligheidsinformatieblad of de procedure van het schip?

Reviewvraag: R140.
