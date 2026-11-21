# MC-L04-SL01 in Storyline met de AI Assistant: proefpakket

Versie 0.1, 21 november 2026. Hiermee bouw je hetzelfde nachtscenario als het codepakket `MC-L04-SL01.zip`, maar in Storyline 360 met de AI Assistant. Daarna vergelijk je beide routes op resultaat en moeite. De inhoud komt uit het script [MC-L04-SL01-verslechtering-nacht.md](MC-L04-SL01-verslechtering-nacht.md) (versie 0.1). Het script is nog een concept, niet medisch goedgekeurd, en de casus is fictief.

## Wat de AI Assistant wel en niet doet

Dit is gebaseerd op jouw schermafbeeldingen van de AI Assistant (Beta) en de tutorial *Animate a Title Slide with AI Assistant*.

| Kan de assistent | Moet je zelf doen (voor zover nu bekend) |
| --- | --- |
| Slides en scenes toevoegen (experimentele functie) | Variabelen aanmaken |
| Themakleuren maken op basis van een slide | Triggers voor de knoppen: naar welke slide, punten erbij |
| Tekst schrijven en verbeteren | Feedbacklagen per keuze |
| Ingebouwde animaties voorstellen | Voorwaarden, zoals een andere tekst bij te laat |
| JavaScript-triggers voor animaties schrijven en bijstellen in preview | De kaartjes-, klik- en checklistopdracht |
| Ondertiteling maken | Afronding en publiceren naar Rise |

In stap 4 probeer je één keer of de assistent ook een knoptrigger kan maken. Lukt dat, dan scheelt het veel handwerk. Noteer de uitkomst in de vergelijking.

## Stap 1. Voorbereiden (10 minuten)

1. Nieuw Storyline-project, slidegrootte 16:9 (1280 x 720). Speler: Modern.
2. Rechts het tabblad **AI Assistant**, zet **Use experimental features** aan.
3. Zet op slide 1 een rechthoek in DRTC-navy `#203658` met daarop het logo en de titel. Plak dan prompt 1.

**Prompt 1, themakleuren**
> Maak themakleuren op basis van deze slide. Gebruik deze huisstijl van De Ruyter Training & Consultancy: donkerblauw #203658, middenblauw #2c4a78, lichtblauw #00a1db, accent oranje #f0a443, tekst #1f2933, achtergrond wit en lichtgrijs #f4f7fa, groen voor goed #1d7a46, rood voor fout #b3261e.

## Stap 2. Slides laten maken (15 minuten)

**Prompt 2, scene en slides**
> Voeg een nieuwe scene toe met de naam "MC-L04-SL01 Verslechtering in de nacht" en daarin 12 slides met precies deze titels, in deze volgorde: 1 Start; 2 De bel; 2B Een uur later; 3 De metingen; 3A Terug naar de lijn; 4 Het gesprek voorbereiden; 5 Het advies; 5A Terug in de ziekenboeg; 6 Bewaken tot de evacuatie; 7 Overdracht; 8 Wat als; 9 Debriefing. Gebruik op iedere slide hetzelfde ontwerp: een donkerblauwe kopbalk met een tijdlabel links, de titel, een tekstvak voor de situatie en ruimte voor drie keuzeknoppen onder elkaar. Gebruik de themakleuren.

Daarna per slide één prompt voor de tekst. Ga naar de slide, plak de prompt en vervang daarin `[tekst uit het script]` door het blok van die slide uit het script. Zo blijft de medische tekst precies zoals Mathanje hem straks beoordeelt.

**Prompt 3, tekst per slide (12 keer)**
> Zet op deze slide de onderstaande tekst. Neem de tekst letterlijk over, in het Nederlands, zonder te herschrijven of in te korten. Situatie in het tekstvak, de vraag vet eronder, de keuzes A, B en C elk op een eigen knop. Zet de feedback per keuze nog niet op de slide.
> [tekst uit het script]

Voor slide 1, 3 en 6 komt er ook een observatielijst bij:

**Prompt 4, observatielijst**
> Maak op deze slide een tabel "Observatielijst" met de kolommen Tijd, Temp. (°C), Pols, Ademhaling, Bloeddruk en Bewustzijn, en deze rijen: [rijen uit het script]. Maak de laatste rij lichtoranje (#fff7e8) en vet. Zet er rechts een lijngrafiek naast met pols, ademhaling en bovendruk over de tijd.

Lukt de grafiek niet, zet dan de tabel alleen. In het codepakket staat de grafiek wel.

## Stap 3. Animatie (20 minuten)

Gebruik animatie alleen waar ze iets laat zien: dat de tijd verspringt, dat een waarde verandert, of waar de aandacht heen moet. Geen versiering. Speel na iedere prompt de preview af, vraag om aanpassingen en geef een duim omhoog als het goed is.

**Prompt 5, op iedere slide**
> Maak een JavaScript-ingangsanimatie voor deze slide: de kopbalk staat er meteen, het tijdlabel draait kort om als een klapklok, daarna komen titel, tekst en keuzeknoppen na elkaar omhoog en in beeld (fade en 10 pixels omhoog, 0,4 seconde per onderdeel, 0,06 seconde ertussen). Rustig, zonder stuiteren.

**Prompt 6, alleen op slide 1, 3 en 6**
> Laat de lijnen in de grafiek van links naar rechts tekenen in 1,2 seconde en laat de laatste rij van de tabel één keer kort oplichten in oranje. Daarna staat alles stil.

**Prompt 7, op slide 9**
> Laat het puntentotaal oplopen van 0 tot de waarde van de variabele Punten in 0,9 seconde en laat er een balkje meegroeien. De leerpunten komen daarna één voor één in beeld.

Vraag tot slot één keer: *"Respecteer de instelling Minder beweging van het besturingssysteem: als die aan staat, geen animatie."* Noteer of dat lukt.

## Stap 4. Handwerk (de meeste tijd)

Probeer eerst op slide 1:

**Prompt 8, proef met een trigger**
> Maak bij knop A een trigger: als de gebruiker klikt, tel 1 op bij de variabele Punten en ga naar de volgende slide.

Lukt dat niet, dan doe je het onderstaande met de hand.

1. **Variabelen** (Projectvariabelen): `Punten` getal 0; `Tijdpad` tekst `juist`; `GegevensJuist` getal 0.
2. **Feedbacklagen**: op iedere keuzeslide per keuze een laag met de feedback uit het script en een knop **Verder**. In de laag-eigenschappen: andere knoppen op de basislaag uitschakelen.
3. **Triggers per keuzeknop**: laag tonen, bij de juiste keuze `Punten` + 1. De punten tellen alleen bij de eerste poging; omdat er per slide maar één keuze kan, kan dat zonder extra variabele. Knop Verder in de laag: naar de slide uit de kolom Gevolg.
4. **Slide 2**: keuze A zet `Tijdpad` op `juist`, keuze B en C op `laat` en springen naar 2B.
5. **Slide 3**: twee statussen van het tekstvak en de tabel (waarden 01.05 of 02.00). Trigger bij begin tijdlijn: status op laat als `Tijdpad` = laat.
6. **Slide 3A**: drie hotspots op de grafiek (pols, ademhaling, bloeddruk), elk met een status Geselecteerd. De knop Verder wordt actief als ze alle drie geselecteerd zijn.
7. **Slide 4**: acht selectievakjes met de kaartjes uit het script. Knop Controleer: per juist aangevinkt kaartje `GegevensJuist` + 1, daarna een laag met feedback. Als `GegevensJuist` = 5 en geen fout kaartje aangevinkt: `Punten` + 1.
8. **Slide 7**: vijf selectievakjes. De knop Verder wordt pas actief als alles is aangevinkt.
9. **Slide 8**: bij Verder op slide 7 naar slide 8 als `Tijdpad` = laat, anders naar slide 9.
10. **Slide 9**: tekst `Je maakte %Punten% van de 6 sterkste keuzes.` Knop Opnieuw: alle variabelen terugzetten en naar slide 1. Trigger bij begin tijdlijn: **Cursus voltooien**.
11. **Speler**: menu en zoekbalk uit, alleen de knoppen die in de slides staan. Toetsenbordvolgorde (Focusvolgorde) per slide nalopen.
12. **Publiceren**: Publiceren naar Review 360 om te testen, en voor de cursus: in Rise een Storyline-blok, dit project kiezen en **Completion: Complete block** aanzetten, met een Continue-blok eronder.

## Stap 5. Vergelijken

Zet beide versies in dezelfde testles: het codepakket in een Code Block, de Storyline-versie in een Storyline-blok. Bekijk ze op je computer en je telefoon en vul de tabel in.

| Vraag | Codepakket | Storyline met AI |
| --- | --- | --- |
| Jouw tijd om het te bouwen | Plaatsen, ongeveer 5 minuten | invullen |
| Ziet het er goed uit op de computer? | | |
| Leesbaar op een telefoon, rechtop? | Ja, de lijst wordt kaarten | invullen (een vaste slide van 16:9 wordt op een telefoon klein) |
| Animatie zoals je wilt? | | |
| Blokkeert het Continue-blok tot het einde? | | |
| Werkt het in Moodle na export? | | |
| Vertalen naar het Engels | Apart taalbestand, maak ik | Eigen vertaalexport (XLIFF) in Storyline, dat is een voordeel |
| Een tekst aanpassen na de review van Mathanje | Ik pas het aan en lever een nieuwe ZIP | Jij past het aan in Storyline en publiceert opnieuw |
| Totaal oordeel | | |

Mijn schatting voor jouw tijd met Storyline: ongeveer 45 minuten voor stap 1 tot en met 3 en twee tot drie uur handwerk voor stap 4. Het is een schatting; jouw meting telt. Met ruim twintig scenario's in de planning tellen die uren mee in het besluit.
