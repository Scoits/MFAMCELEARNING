# Proefles MFA-L01

Werkversie 0.1, 21 november 2026. MFA-L01 versie 0.3 (Medische uitrusting aan boord, 19 schermen, 54 minuten) wordt de proefles. Die les wordt volledig gebouwd, in Moodle gepubliceerd en getest voordat de andere lessen worden gebouwd. Wat in de proef werkt, wordt de standaard voor alle lessen. Zie [productiewerkwijze](productiewerkwijze.md).

## Wat er klaarstaat

In de projectmap, `articulate-proef/rise/MFA-L01/`:

- `MFA-L01-D1-import.docx`, `-D2-` en `-D3-`: de drie importbestanden voor Magic Lesson Import, één per Rise-les van ongeveer 15 tot 19 minuten;
- `MFA-L01-na-import.md`: de checklist na de import;
- `MFA-L01-rise-bouwboek.docx` en `MFA-L01-bouwlijst-blokken.csv`: de controle per blok;
- `articulate-proef/media/MFA-L01/`: de eigen schema's en de tijdelijke beelden.

## Wat de proefles extra nodig heeft

MFA-L01 heeft geen video en geen scenario. De proef moet ook die technieken testen. Daarom komen er twee onderdelen bij in de proefcursus, buiten de lesinhoud:

1. Een korte video uit map 025 (S026) bij MFA-L01-S18, "Een steriel gaasje aanbrengen", als daar een passende film is. Martijn kiest de film. Test de ondertiteling (VTT) en het afspelen op een telefoon.
2. Een technisch testblok in Storyline: één slide met een keuze en een eindslide. De voltooiing wordt doorgegeven bij het bereiken van de eindslide. Dit test de registratie, niet de inhoud. Zodra MFA-L07-SL01 klaar is, vervangt dat scenario het testblok.

Voor de afsluitende kennistoets komt een testquiz van drie vragen in Moodle Quiz. Dat zijn geen echte toetsvragen.

## Stappen

1. Maak een kopie van de DRTC-stijlcursus (Security Awareness) als lege proefcursus. Zet Settings > Navigation op Restricted.
2. Upload als bron in de cursus de presentaties uit map 025 die bij MFA-L01 horen: S044, S045 en S058. Controleer in een beeldblok of de afbeeldingen in "From your sources" staan.
3. Importeer `MFA-L01-D1-import.docx` met Magic Lesson Import als nieuwe les. Doe nog niets met D2 en D3.
4. Vergelijk de les met het bouwboek:
   - Staat ieder scherm er als kop?
   - Heeft ieder blok het bloktype uit het label?
   - Is de tekst ongewijzigd?
   - Staan de beelden op de goede plek?
   - Zijn de kennischecks goed, met het juiste antwoord en de feedback?
5. Kies op basis van stap 4 de route:
   - **Import werkt goed.** Importeer D2 en D3 ook. De route voor alle lessen wordt: importbestand plus checklist.
   - **Import zet blokken verkeerd of herschrijft tekst.** Bouw D1 opnieuw per blok met het bouwboek. De route voor alle lessen wordt: bouwboek per blok, met Magic text import voor Tabs, Accordion en Process.
   - **Import werkt deels.** Noteer welke bloktypes goed gaan. Het script zet dan alleen die in het importbestand en de rest in de checklist.
6. Werk de checklist `MFA-L01-na-import.md` af: doorgaan-knoppen, ontbrekende beelden via "From your sources", en de verwijdering van labels die als tekst zijn overgenomen.
7. Voeg de video en het Storyline-testblok toe. Zet bij het Storyline-blok Require completion aan.
8. Publiceer als SCORM naar de Moodle-testomgeving, met de instellingen uit het [integratieplan](integratieplan.md).
9. Test de registratie in Moodle:
   - start, stop en hervat de les;
   - beantwoord een kennischeck fout en daarna goed;
   - rond het Storyline-blok af;
   - maak de testquiz in Moodle;
   - rond de hele les af.

   Kijk bij iedere stap wat Moodle registreert.
10. Laat twee mensen uit de doelgroep de gepubliceerde les op een gewone telefoon doen. Noteer waar ze aarzelen, iets verkeerd lezen of verkeerd kiezen, en hoe lang ze erover doen. Die tijd is ook de eerste meting voor de rekenregel (OB-06).
11. Laat Mathanje de inhoud en de beelden beoordelen in de gepubliceerde les.
12. Bewaar de vijf block templates uit [productiewerkwijze](productiewerkwijze.md) en deel ze in Teams. Vul het [revisieregister](revisieregister.csv) en het [bouwlog](../templates/bouwlog.md) in.

## Uitkomst

| Vraag | Antwoord na de proef |
| --- | --- |
| Welke importroute wordt de standaard? | |
| Welke bloktypes maakt de import goed? | |
| Hoeveel tijd kostte herstel na de import, per deel? | |
| Registreert Moodle de voltooiing van Rise, het Storyline-blok en de quiz? | |
| Hervat de les op de juiste plek? | |
| Werkt alles op een telefoon? | |
| Hoe lang deden de testcursisten over de les? | |
| Wat moet Mathanje aanpassen? | |

Na de proef past het bouwscript zich aan de gekozen route aan. Daarna worden alle lessen in dezelfde vorm opnieuw gemaakt.
