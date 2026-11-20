# Review en inhoudelijke goedkeuring

Mathanje geeft de definitieve medische inhoudelijke goedkeuring. Het project bevat bij de start nog geen medisch goedgekeurde nieuwe lessen of vragen. Een AI-review is een voorbereidende controle en wordt niet als Mathanjes goedkeuring geregistreerd.

| Veld | Vast te leggen gegevens |
| --- | --- |
| Object | Leerdoel-, les-, scenario-, vraag- of assessment-ID |
| Versie | Exact beoordeelde versie of commit |
| Reviewtype | Broncontrole, didactisch, medisch, technisch of vertaling |
| Bevinding | Concrete wijziging met bronplaats |
| Beoordelaar | Naam van degene die de controle werkelijk uitvoerde |
| Datum | Werkelijke beoordelingsdatum |
| Uitkomst | Aanpassen, akkoord of openstaand |
| Afhandeling | Wijzigingsverwijzing en eventueel benodigde herbeoordeling |

Gebruik in werkbestanden de status `concept`, `broncontrole_nodig`, `medische_review_nodig`, `medisch_goedgekeurd` of `technisch_getest` uitsluitend voor de controle die werkelijk is uitgevoerd. Medische goedkeuring en technische test zijn verschillende aspecten en kunnen daarom apart worden bijgehouden.

Na inhoudelijke wijzigingen wordt bekeken welke medische goedkeuring opnieuw nodig is en welke vertalingen en vragen worden geraakt. Vermeld geen echte patiënt- of cursistgegevens in reviewvoorbeelden. Summatieve examenvragen en antwoorden krijgen hun reviewregistratie in de afgeschermde toetsomgeving.

## Eerste ingevulde schermreview

[MFA-L07-schermreview.csv](MFA-L07-schermreview.csv) bevat acht schermrecords met bron- en leerdoelkoppeling, interactie, feedback, tijdsraming en Mathanjes commentaarveld. Alle medische beoordelingen staan open. De [Markdown-master](../content/nl/MFA-L07-radiomedisch-advies.md) beschrijft expliciet de gedeeltelijke RMD-dekking; een administratieve tijdafspraak is nog geen beoordeelde toepassing van medisch advies in patiëntzorg.

## Ontvangen hoofdlijnenreview

[MH-001, Mathanje](2026-11-20-mathanje-hoofdlijnen.md) registreert de via Martijn ontvangen reactie op 20 november 2026. De hoofdlijnen zijn positief beoordeeld; de tijd moet in de praktijk worden bevestigd. Mathanje ondersteunt toetsing met een slagingsgrens en stelt een MFA-indeling en twee MC-varianten voor. Dit is geen detailvrijgave van alle leerdoelen, les- of vraaginhoud. De bestaande scherm- en doelrecords houden hun open reviewstatus.

## Uitgewerkte lessen en reviewvragen ronde 1

Sinds 20 november 2026 zijn er schermreviews voor [MFA-L00](MFA-L00-schermreview.csv), [MFA-L01](MFA-L01-schermreview.csv) en [MFA-L07 versie 0.3](MFA-L07-schermreview.csv). Alle schermen hebben de status medische_review_nodig. Concrete onzekerheden staan per scherm als TE VERIFIËREN in het veld source_location en in de master. De gebundelde vragen voor Mathanje staan in [reviewvragen ronde 1](2026-11-20-reviewvragen-mathanje.md).

MFA-L02 en MFA-L03 zijn op 20 november 2026 toegevoegd: [MFA-L02](MFA-L02-schermreview.csv) met 18 schermen en [MFA-L03](MFA-L03-schermreview.csv) met 16 schermen, beide medische_review_nodig. De aanvullende vragen R18 tot en met R26 staan onderaan de reviewvragen van ronde 1. MFA-L03 volgt de huidige DRTC-dia's en blijft in alle medische handelingen TE VERIFIËREN tot de keuze voor S041.

Na lezing van S044 zijn MFA-L03 versie 0.2 (bloeding) en [MFA-L04 deel A](MFA-L04-schermreview.csv) met 11 schermen toegevoegd; de vragen R27 tot en met R31 en een aanvulling op R10 staan onderaan de reviewvragen.

Na lezing van S045 (dag 1 ochtend) zijn MFA-L02 versie 0.2, MFA-L03 versie 0.3 en MFA-L04 versie 0.2 met deel B (22 schermen) bijgewerkt; de vragen R32 tot en met R34 en aanvullingen op R05 en R18 staan onderaan de reviewvragen.

[MFA-L05](MFA-L05-schermreview.csv) is op 20 november 2026 uitgewerkt met 13 schermen; de vragen R36 tot en met R39 staan onderaan de reviewvragen.

[MFA-L06](MFA-L06-schermreview.csv) is op 20 november 2026 uitgewerkt met 10 schermen; de vragen R40 tot en met R42 staan onderaan de reviewvragen.
