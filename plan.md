# Plan: Opdatering af TRE-VISUAL app med nye cirkler

## Overblik
Appen beholdes 100% som den er i struktur og funktionalitet. Vi ændrer kun **3 af de 6 cirkler** og alt tilhørende indhold. De 4 bjælker (Til klienter, Til fagfolk, Videnskabeligt, Til mennesker med sclerose) forbliver uændrede.

## Hvad der ændres

### Cirkel-ændringer:
| Position | FRA | TIL |
|----------|-----|-----|
| Øverst-højre (narrative) | Wired for Story | **Kropsorienteret Psykoterapi** |
| Nederst-højre (enactivisme) | Enactivisme | **Trauma & Stress** |
| Nederst (levine) | Somatic Experiencing | **Sclerose & Kronisk Sygdom** |

### Hvad der forbliver:
| Position | Cirkel |
|----------|--------|
| Center | TRE |
| Top | Polyvagal teori |
| Nederst-venstre | Bioenergetik |
| Øverst-venstre | Klinisk Psykologi |

## Implementeringsplan (5 trin)

### Trin 1: Kopiér TRE-VISUAL filerne ind i Clement-repoet
- Overskriv index.html, script.js og styles.css med TRE-VISUAL koden
- Verificér at den eksisterende app-struktur virker

### Trin 2: Opdatér SVG-figuren i index.html
Ændr tekst-labels på de 3 nye cirkler:
- `narrative` → tekst ændres til "Kropsorienteret" / "Psykoterapi"
- `enactivisme` → tekst ændres til "Trauma &" / "Stress"
- `levine` → tekst ændres til "Sclerose &" / "Kronisk Sygdom"

Data-id'er i HTML beholdes (`narrative`, `enactivisme`, `levine`) for at undgå at bryde forbindelseslogikken.

### Trin 3: Opdatér circleNames i script.js
Ændr display-navne:
```javascript
narrative: 'Kropsorienteret Psykoterapi'  // var 'Wired for Story'
enactivisme: 'Trauma & Stress'            // var 'Enactivisme'
levine: 'Sclerose & Kronisk Sygdom'       // var 'Somatic Experiencing'
```

### Trin 4: Opdatér cirkel-indhold i content.circles (script.js)
For hver af de 3 nye cirkler, skriv nyt indhold i alle 4 modes:

#### A) `narrative` → Kropsorienteret Psykoterapi
- **klient**: Hvordan kropsarbejde (vejrtrækning, øvelser, vibration) hjælper med healing
- **fagfolk**: Bioenergetisk ramme, bottom-up regulering, fascial work, integration af krop og psyke
- **videnskab**: Neurobiologisk grundlag for somatisk intervention, proprioception, interoception
- **sclerose**: Skånsom kropslig tilgang tilpasset MS, spasticitetsreduktion, energihåndtering

#### B) `enactivisme` → Trauma & Stress
- **klient**: Hvordan traumer og stress sidder fast i kroppen, og TRE hjælper med at forløse
- **fagfolk**: Freezing, flooding, dissociation, incomplete defensive responses, window of tolerance
- **videnskab**: HPA-akse, cortisol, amygdala-respons, periaqueductal gray, central pattern generators
- **sclerose**: Diagnosechok, kronisk stress ved MS, immunpåvirkning, TRE som traumeforløsning

#### C) `levine` → Sclerose & Kronisk Sygdom
- **klient**: Hvordan TRE hjælper mennesker med kronisk sygdom, spasticitet, træthed, smerte
- **fagfolk**: 13 års erfaring fra Scleroseforeningen, videnskabelige studier, tilpasning af TRE
- **videnskab**: Neuroinflammation, demyelinisering, autonomt nervesystem-dysregulering, forskningsresultater
- **sclerose**: Specifik MS-erfaring, konkrete resultater, tilpassede øvelser, livskvalitetsforbedring

### Trin 5: Opdatér alle forbindelsestekster i content.connections (script.js)
Alle connections der involverer de 3 ændrede cirkler skal have nyt indhold i alle 4 modes.

Forbindelser der skal opdateres (15 ud af 21):
- `tre-narrative` → TRE ↔ Kropsorienteret Psykoterapi
- `tre-enactivisme` → TRE ↔ Trauma & Stress
- `tre-levine` → TRE ↔ Sclerose & Kronisk Sygdom
- `polyvagal-narrative` → Polyvagal ↔ Kropsorienteret Psykoterapi
- `polyvagal-enactivisme` → Polyvagal ↔ Trauma & Stress
- `polyvagal-levine` → Polyvagal ↔ Sclerose & Kronisk Sygdom
- `narrative-enactivisme` → Kropsorienteret Psykoterapi ↔ Trauma & Stress
- `narrative-levine` → Kropsorienteret Psykoterapi ↔ Sclerose & Kronisk Sygdom
- `narrative-reich` → Kropsorienteret Psykoterapi ↔ Bioenergetik
- `narrative-psykologi` → Kropsorienteret Psykoterapi ↔ Klinisk Psykologi
- `enactivisme-levine` → Trauma & Stress ↔ Sclerose & Kronisk Sygdom
- `enactivisme-reich` → Trauma & Stress ↔ Bioenergetik
- `enactivisme-psykologi` → Trauma & Stress ↔ Klinisk Psykologi
- `levine-reich` → Sclerose & Kronisk Sygdom ↔ Bioenergetik
- `levine-psykologi` → Sclerose & Kronisk Sygdom ↔ Klinisk Psykologi

Forbindelser der forbliver uændrede (6 ud af 21):
- `tre-polyvagal`
- `tre-reich`
- `tre-psykologi`
- `polyvagal-reich`
- `polyvagal-psykologi`
- `reich-psykologi`

## Samlet omfang
- **index.html**: 3 tekst-ændringer i SVG
- **script.js**:
  - 3 cirkelnavne i `circleNames`
  - 3 × 4 = 12 nye cirkel-tekster (titel + text for hver mode)
  - 15 × 4 = 60 nye forbindelsestekster
- **styles.css**: Ingen ændringer
- **Total nye tekster**: 72 stykker indhold, alle baseret på Michael Morin Nissens profil og metoder
