# Testrapport technische proef Code Block

Versie 1, 21 november 2026. Proefpakketten: **MFA-L01-I01** plattegrond (versie 0.2, voor de proefles MFA-L01) en **MC-L04-SL01** verslechtering in de nacht (versie 0.2, representatief voor alle scenario's: vertakking, omweg, kaartjes kiezen, checklist, observatielijst met grafiek). Beide gebruiken dezelfde codebasis als de andere pakketten. MFA-L07-SL01 en MC-L08-SL01 staan klaar als concept en worden pas na beoordeling van deze proef bijgewerkt (taalbestand, hervatten).

## Uitkomst in het kort

Aanvulling 21 november avond: MC-L04-SL01 is nu versie 0.3, met ingetogen beweging en de observatielijst als kaarten op een telefoon (de bloeddruk viel eerst buiten beeld). Alle tests hieronder zijn daarna opnieuw uitgevoerd en goed. Gebruik voor checklist punt 1 tot en met 8 de ZIP van versie 0.3.

Alles wat buiten Rise te testen is, werkt: telefoon, toetsenbord, hervatten, afrondingsmelding, toegankelijkheid en taalwissel. Wat alleen in Rise en Moodle te zien is, staat in de checklist onderaan. Pas als die checklist goed is, rollen we de techniek uit naar de andere scenario's. Terugval als het tegenvalt: een Rise Scenario-blok met dezelfde inhoud.

## Hoe Rise de afronding herkent

Articulate documenteert dit officieel (Rise 360: How to Use Code Block, bijgewerkt 15 mei 2026; aankondiging Set completion requirements op het Code Block-forum). Werkwijze:

1. In het Code Block zet je Set completion requirements aan.
2. Het pakket stuurt bij afronding `window.parent.postMessage({ type: 'complete' }, '*')`. Dat zit al in beide pakketten.
3. Een Continue-blok met Complete block above wacht daarna tot die melding binnen is.

Let op volgens Articulate: staat de eis aan en stuurt een pakket de melding niet, dan kan de cursist niet verder. Daarom testen we ook het opnieuw openen na afronding: het pakket stuurt de melding dan opnieuw.

## Zelf getest (headless Chromium, pakket in een iframe zoals in Rise)

| Onderdeel | Uitkomst | Hoe |
| --- | --- | --- |
| Afrondingsmelding naar de parent | Goed, beide pakketten, precies één melding per afronding | Iframe-harnas vangt `postMessage` op |
| Telefoon met aanraken | Goed: volledige route getikt op iPhone 13-profiel, alle knoppen minimaal 44 px hoog, geen horizontaal scrollen | `test/proef.js` |
| Telefoon 390 px en desktop 900 px | Goed: 11 routes in vier pakketten | `test/run.js` |
| Alleen toetsenbord | Goed: MC-L04 omweg-route met Tab, Enter en spatie (35 keer Tab), MFA-L01 volledige opdracht (25 keer Tab); focus steeds zichtbaar | `test/proef.js`, `test/toegankelijkheid.js` |
| Hervatten midden in het pakket | Goed: venster dicht op scherm 3, opnieuw open, melding Verder waar je was, stand en punten hersteld; MFA-L01 hervat bij opdracht 2 | localStorage per browser |
| Opnieuw openen na afronding | Goed: melding al afgerond, afrondingsmelding opnieuw verstuurd | |
| Opslag geblokkeerd (privévenster, strenge instelling) | Goed: pakket werkt en rondt af, alleen zonder hervatten | |
| Lage blokhoogte (500 px) | Inhoud scrolt binnen het blok; knoppen blijven bereikbaar | Zie checklist punt 4 |
| Toegankelijkheid WCAG 2.1 AA | Goed: axe-core 4.10 zonder overtredingen op 16 momenten (MC-L04) en 9 momenten (MFA-L01). Opgelost tijdens de proef: contrast van de grafieklegenda en een scrollbare tabel die niet met het toetsenbord bereikbaar was | `test/toegankelijkheid.js` |
| Tekst op 200 procent | Goed: geen afgesneden knoppen of horizontaal scrollen; de plattegrond zet de ruimtes dan onder elkaar van boeg naar achterschip | Venster 195 CSS-pixels |
| Schermlezer | Labels aanwezig: knoppen met tekst, ruimtes op de plattegrond met naam en veiligheidsteken, feedback in een live-regio, tabel met kop en naam. Niet getest met VoiceOver of NVDA zelf | |
| Taalwissel | Goed: met een proefvertaling en-GB komt alle tekst uit het taalbestand en staat de pagina op `lang="en-GB"` | Tekst in `tekst.nl-NL.json`, knoppen in `shared/ui.<taal>.json` |
| Versie zichtbaar | Onderaan ieder pakket, bijvoorbeeld Versie 0.2 | |

Kortste volledige pad (telt voor de studietijd; rekenregel woorden gedeeld door 150 plus 1 minuut per beslismoment, `node test/studietijd.js`): MFA-L01-I01 ongeveer 5 minuten, MC-L04-SL01 11 minuten (langste pad 14). Alleen meting met testcursisten is definitief.

## Wat niet zelf te testen is

- De echte Rise-omgeving: of het Continue-blok werkelijk wacht, hoe hoog Rise het blok maakt en of er dubbele scrollbalken ontstaan.
- Export naar Moodle (SCORM) en het gedrag van het pakket daarin.
- Echte iPhone, Android en tablet, Safari en de Moodle-app.
- Wisselen van apparaat. Verwachting: de stand binnen het pakket gaat **niet** mee naar een ander apparaat, omdat een Code Block geen toegang heeft tot de SCORM-gegevens van Moodle. Rise zelf onthoudt wel welke blokken af zijn; een al afgerond pakket blokkeert de cursist dus niet.

## Checklist voor Martijn in Rise en Moodle

Neem een testcursus met één les. Zet daarin: een tekstblok, het Code Block met `MFA-L01-I01.zip`, een Continue-blok, een tweede Code Block met `MC-L04-SL01.zip`, een Continue-blok en een slottekst. Navigatie op Restricted.

1. Code Block toevoegen, Upload project, ZIP kiezen. Uploadt het zonder foutmelding?
2. Set completion requirements aanzetten bij beide Code Blocks. Continue-blok op Complete block above.
3. Preview in Rise: is het Continue-blok geblokkeerd tot het pakket klaar is, en gaat het open na de laatste stap?
4. Format: zet de maximale hoogte zo hoog mogelijk. Zie je één scrollbalk (van de pagina) of twee (pagina en blok)? Noteer de hoogte waarbij het goed is.
5. Publiceer naar Review 360 en open op een iPhone, een Android-telefoon en een tablet: alles leesbaar, knoppen niet afgesneden, geen dubbele scrollbalk?
6. Toetsenbord op Windows (Chrome of Edge): kun je met Tab en Enter het hele pakket doorlopen?
7. Halverwege het scenario het venster sluiten en opnieuw openen: zie je Verder waar je was?
8. Exporteer als SCORM (zelfde instelling als straks), zet het in Moodle en herhaal 3, 5 en 7. Ziet Moodle de les als voltooid na de laatste stap?
9. Start op de computer, ga verder op de telefoon: Rise moet de afgeronde blokken onthouden; het pakket begint op het andere apparaat opnieuw (verwacht).
10. Noteer per punt goed of fout, met apparaat en browser, en stuur een schermafbeelding bij fouten.

## Bestanden

- Pakketten: `articulate-proef/code-blocks/MFA-L01-I01.zip` en `MC-L04-SL01.zip` in de projectmap.
- Schermafbeeldingen van de proef: `articulate-proef/code-blocks/proef/`.
- Broncode en tests: `articulate/code-blocks/` in de repository.
