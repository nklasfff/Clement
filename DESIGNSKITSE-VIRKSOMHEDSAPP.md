# Designskitse: Nervesystemsregulering for Virksomheder

## Baggrund

Denne app bygger på Annemarie Clements nervesystemsterapi-model og er specifikt udviklet til kontormedarbejdere i store danske virksomheder (Novo Nordisk, PFA m.fl.). Annemarie har allerede erfaring med disse virksomheder.

Den eksisterende app (`nklasfff/Clement`) indeholder det komplette faglige fundament — polyvagal teori, tilknytningsmønstre, kropsbevidsthed, stressregulering og øvelser. Denne nye app oversætter det til en arbejdshverdag med skærmarbejde, møder, deadlines og kontormiljø.

---

## Koncept

**Kerneide**: Samme nervesystemsmodel, nyt sprog. I stedet for terapeutisk kontekst taler vi direkte ind i medarbejderens hverdag.

**Unik værdi for virksomheder**: Appen kan skræddersyes per virksomhed — eget navn, farver, logo og eventuelt branchespecifikke eksempler.

---

## Struktur: De 7 Cirkler (tilpasset virksomhedskontekst)

Den originale app har 7 dimensioner i en cirkelmodel. Her er den tilpassede version:

### 1. Nervesystemsregulering (centrum)
**Original**: Nervesystemsregulering generelt
**Virksomhed**: "Dit nervesystem på arbejde" — Hvordan dit nervesystem reagerer på mails, deadlines, møder og kontormiljø. Grundlæggende forståelse af at din produktivitet, koncentration og trivsel styres af dit nervesystems tilstand.

### 2. De tre tilstande (polyvagal teori)
**Original**: Polyvagal teori (grøn/gul/rød)
**Virksomhed**: "Tre tilstande i din arbejdsdag" — Grøn (fokuseret, samarbejdende, kreativ), Gul (stresset, presset, irritabel), Rød (udbrændt, fraværende, ligeglad). Lær at genkende hvilken tilstand du er i lige nu.

### 3. Relationer & Samarbejde (tilknytning)
**Original**: Tilknytningsmønstre
**Virksomhed**: "Samarbejde og relationer" — Hvordan dine relationsmønstre påvirker samarbejde, konflikter og kommunikation med kolleger og ledere. Hvorfor nogle samarbejdsrelationer føles trygge og andre drænende.

### 4. Krop & Skrivebordsergonomi (kropsterapi)
**Original**: Kropsterapi & Behandling
**Virksomhed**: "Kroppen ved skrivebordet" — Spændinger i nakke, skuldre og ryg er nervesystemets sprog. Mikro-pauser, strækøvelser og kropsbevidsthed der kan gøres ved skrivebordet eller i et mødelokale.

### 5. Hjerne & Biologi (psykobiologi)
**Original**: Psykobiologi
**Virksomhed**: "Din hjerne under pres" — Hvordan cortisol, adrenalin og hormoner påvirker din koncentration, hukommelse og beslutningsevne. Hvorfor du tænker dårligere under stress og hvad du kan gøre ved det.

### 6. Stress & Overbelastning (traumer)
**Original**: Traumer & Dissociation
**Virksomhed**: "Stress og overbelastning" — Kronisk stress, overarbejde og udbrændthed set fra nervesystemets perspektiv. Hvordan gentagen overbelastning ændrer dit nervesystems grundindstilling, og hvordan du finder tilbage.

### 7. Ledelse & Kultur (terapeutisk relation)
**Original**: Terapeutisk Relation
**Virksomhed**: "Ledelse og arbejdskultur" — Lederen som nervesystemsregulator: en rolig leder skaber rolige medarbejdere (co-regulering). Psykologisk tryghed som biologisk fænomen, ikke bare et HR-begreb.

---

## To perspektiver (i stedet for klient/fagfolk)

### Medarbejder
Hverdagssprog. Praktiske eksempler fra kontorlivet. Fokus på "hvad kan jeg gøre nu".

### Leder
Dybere forståelse af gruppedynamik og co-regulering. Hvordan ledelsesadfærd direkte påvirker medarbejdernes nervesystemer. Konkrete ledelsesværktøjer.

---

## Temaer (i stedet for angst/stress/traumer/søvn/tilknytning)

### 1. Generelt
Grundlæggende forståelse af nervesystemet på arbejde.

### 2. Møder
Hvordan nervesystemet reagerer på møder — præsentationsangst, konflikter i møder, zoom-træthed, back-to-back møder uden pause.

### 3. Deadlines & Pres
Nervesystemet under tidspres. Forskellen på sund aktivering (gul zone der hjælper) og overbelastning (gul der tipper til rød).

### 4. Skærmarbejde
Langvarigt skærmarbejde og dets effekt på nervesystemet — blåt lys, stillestående krop, informationsoverload, konstante notifikationer.

### 5. Konflikter
Konflikter på arbejdspladsen set fra nervesystemets perspektiv — fight/flight-reaktioner i svære samtaler, at finde tilbage til grøn efter en konflikt.

### 6. Work-Life Balance
Når nervesystemet ikke kan skifte gear — at tage arbejdsstressen med hjem, søvnproblemer, weekender der ikke oplader.

---

## Øvelser (tilpasset kontormiljøet)

Baseret på de 5 eksisterende øvelser, tilpasset til at kunne udføres:
- Ved skrivebordet
- I et mødelokale (før/efter møder)
- I en pause (2-5 minutter)
- Derhjemme efter arbejde

### Forslag til øvelseskategorier:

1. **Åndedrætsøvelse ved skrivebordet** (baseret på "Vagus-aktivering gennem åndedræt")
   - 2-minutters vagusaktivering mellem opgaver

2. **Kropsscanning i stolen** (baseret på "Body scan")
   - Hurtig tjek-ind med kroppen uden at forlade stolen

3. **Grounding før møde** (baseret på "Find ro i nervesystemet")
   - 1-minuts landing i kroppen inden et vigtigt møde

4. **Grænser i åbent kontormiljø** (baseret på "Selvafgrænsning")
   - At skabe indre rum når det ydre rum er åbent og forstyrrende

5. **Reset efter stressende situation** (baseret på "Mærk din sikre tilstand")
   - Tilbage til grøn efter en svær samtale, deadline eller konflikt

---

## Virksomhedstilpasning

Appen kan skræddersyes per virksomhed:

- **Logo og farver**: Virksomhedens visuelle identitet
- **Branchespecifikke eksempler**: Laboratoriemiljø (Novo), kundeservice (PFA), osv.
- **Sprog**: "Hos [Virksomhedsnavn] arbejder vi med..." i stedet for generisk tekst
- **Leder-modul**: Ekstra indhold til ledere i den specifikke virksomhedskultur

---

## Teknisk tilgang

Samme arkitektur som den eksisterende app:

- **Statisk webapp**: HTML + CSS + vanilla JavaScript, ingen dependencies
- **Single-page**: Alt indhold i én side med interaktiv SVG-cirkelmodel
- **Data-drevet**: Alt indhold i JavaScript-objekter, let at tilpasse per virksomhed
- **Mobilvenlig**: Responsive design optimeret til smartphone på hjemmeskærm
- **Ingen login**: Åben adgang (eller bag virksomhedens intranet)

### Tilpasningsmodel
En `config.js` fil per virksomhed med:
```javascript
const companyConfig = {
    name: "Novo Nordisk",
    logo: "novo-logo.png",
    primaryColor: "#00205B",   // Novo's brand blue
    secondaryColor: "#...",
    customExamples: true       // Aktiverer branchespecifikke eksempler
};
```

---

## Indholdskilder

Alt fagligt indhold kan udledes fra den eksisterende app (`nklasfff/Clement`):
- **script.js**: 84 unikke indholdsblokke (7 cirkler × 6 temaer × 2 perspektiver)
- **script.js**: 252 forbindelsesbeskrivelser mellem cirkler
- **script.js**: 5 strukturerede øvelser
- **script.js**: 3 uddannelsesprogrammer (kan inspirere ledermodulet)

Indholdet skal omskrives fra terapeutisk sprog til hverdags-arbejdssprog, men det faglige fundament (polyvagal teori, co-regulering, nervesystemstilstande) forbliver det samme.

---

## Næste skridt

1. Opret nyt GitHub-repo (privat)
2. Start ny Claude Code-session med reference til dette dokument
3. Byg grundstruktur (HTML + CSS + JS)
4. Skriv indhold for "Generelt"-temaet som prototype
5. Tilføj øvelser tilpasset kontormiljø
6. Test på mobil
7. Tilpas til første virksomhed (f.eks. Novo Nordisk som pilot)
