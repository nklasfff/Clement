-- ═══════════════════════════════════════════
-- Nervesystemsterapi — Seed Data
-- Kør dette EFTER schema.sql i Supabase SQL Editor
-- ═══════════════════════════════════════════

-- Velkomstnotifikation
INSERT INTO notifications (notification_id, title, body) VALUES (
    '2026-03-19-welcome',
    'Velkommen til Nervesystemsterapi',
    'Tak fordi du har slået notifikationer til. Du vil modtage besked når der tilføjes nyt indhold.'
) ON CONFLICT (notification_id) DO NOTHING;

-- ═══════════════════════════════════════════
-- Øvelser (alle 10)
-- ═══════════════════════════════════════════

INSERT INTO exercises (title, kategori, tid, intro, steps, refleksion, sort_order) VALUES

-- 1. Find ro i nervesystemet
(
    'Find ro i nervesystemet',
    'regulering',
    '3-5 min',
    'Denne øvelse er kernen i mit arbejde. Ved at lande i kroppen og mærke vejrtrækningen, aktiverer du naturligt den del af nervesystemet der skaber ro og sikkerhed. Det er simpelt, men dybt virkningsfuldt.',
    '["Sid eller læg dig komfortabelt. Luk gerne øjnene.","Læg én hånd på dit bryst og én på maven.","Mærk vejrtrækningen bevæge sig under dine hænder.","Pust langsomt ud gennem munden — længere end du puster ind.","Fortsæt i 3-5 minutter. Mærk kroppen blive tungere og mere afslappet."]',
    'Hvad lagde du mærke til? Var det lettere at mærke brystet eller maven? Den del der var sværest at mærke, er ofte den del der har mest brug for opmærksomhed.',
    1
),

-- 2. Mærk din sikre tilstand
(
    'Mærk din sikre tilstand',
    'regulering',
    '5 min',
    'Polyvagal teori lærer os at nervesystemet har forskellige tilstande. I denne øvelse lærer du at genkende og aktivere din sikre tilstand — den tilstand hvor healing sker.',
    '["Tænk på et sted hvor du føler dig tryg — måske dit hjem, naturen, eller hos en elsket person.","Luk øjnene og forestil dig at være der nu. Se detaljerne.","Mærk hvordan din krop reagerer. Bliver skuldrene bløde? Bliver vejret dybere?","Læg mærke til disse signaler — det er din sikre tilstand.","Øv dig i at genkalde denne følelse når du har brug for ro."]',
    'Hvilket billede kom først? Og hvad skete der i kroppen da du fandt det? Denne forbindelse mellem indre billede og kropslig respons er nervesystemets sprog.',
    2
),

-- 3. Vagus-aktivering gennem åndedræt
(
    'Vagus-aktivering gennem åndedræt',
    'aandedraet',
    '4 min',
    'Vagusnerven er motorvejen mellem hjerne og krop. Når vi aktiverer den gennem åndedræt, sender vi direkte besked til nervesystemet om at det er sikkert at slappe af.',
    '["Sid oprejst med en lige ryg.","Pust ind gennem næsen i 4 tællinger.","Hold vejret i 4 tællinger.","Pust langsomt ud gennem munden i 6-8 tællinger.","Gentag 10 gange. Mærk roen brede sig i kroppen."]',
    'Blev udåndingen lettere mod slutningen? Når udåndingen forlænges naturligt, er det et tegn på at vagusnerven responderer — dit nervesystem begynder at stole på roen.',
    3
),

-- 4. Selvafgrænsning — mærk dit rum
(
    'Selvafgrænsning — mærk dit rum',
    'krop',
    '3 min',
    'Denne øvelse styrker din kropslige selvfornemmelse og giver en følelse af at have et eget sikkert rum — særligt værdifuldt hvis du let mister dig selv i relationer.',
    '["Stå med fødderne i hoftebredde. Mærk kontakten med gulvet.","Ryk let op og ned i knæene — mærk din vægt i benene.","Løft langsomt armene ud til siden — mærk dit rum omkring dig.","Forestil dig en boble omkring dig — det er dit rum.","Ånd roligt og mærk: ''Dette er mit rum. Jeg er her.''"]',
    'Føltes boblen stor eller lille? Var den tæt på kroppen eller langt ude? Din grænse i dag fortæller noget om hvad dit nervesystem har brug for lige nu.',
    4
),

-- 5. Body scan — lyt til kroppen
(
    'Body scan — lyt til kroppen',
    'krop',
    '5-8 min',
    'Kroppen taler konstant til os gennem fornemmelser, men vi har glemt at lytte. Body scan genåbner denne dialog og lærer dig at mærke hvad kroppen har brug for.',
    '["Læg dig på ryggen. Luk øjnene.","Start med fødderne — mærk dem uden at ændre noget.","Bevæg langsomt opmærksomheden op gennem ben, mave, bryst, arme, hoved.","Hvis du finder spændinger, ånd blidt ind i dem — lad dem være der.","Når du når hovedet, mærk hele kroppen på én gang i 1-2 minutter."]',
    'Hvor holdt du spænding uden at vide det? Bare det at opdage det er begyndelsen på forandring. Kroppen løsner når den bliver set.',
    5
),

-- 6. Grounding — land i nuet
(
    'Grounding — land i nuet',
    'regulering',
    '2-3 min',
    'Når tankerne løber og nervesystemet er i alarm, har du brug for at lande. Grounding forbinder dig til din krop og til nuet — det simpleste og mest effektive første skridt.',
    '["Mærk dine fødder mod gulvet. Pres dem let ned.","Navngiv 5 ting du kan se omkring dig.","Navngiv 4 ting du kan røre ved eller mærke.","Navngiv 3 lyde du kan høre.","Tag én dyb indånding og én lang udånding.","Mærk: du er her. Du er til stede."]',
    'Hvad ændrede sig i kroppen da du begyndte at navngive? Grounding virker fordi det skifter nervesystemet fra indre alarm til ydre opmærksomhed.',
    6
),

-- 7. Beroligende berøring
(
    'Beroligende berøring',
    'krop',
    '3 min',
    'Berøring aktiverer oxytocin og sender sikkerhedssignaler direkte til nervesystemet. Du kan give dig selv den berøring der regulerer — også når du er alene.',
    '["Læg begge hænder på dit bryst. Mærk varmen.","Pust langsomt ind og ud. Mærk brystkassen hæve og sænke sig under hænderne.","Bevæg én hånd til siden af halsen. Mærk pulsen.","Giv dig selv et let tryk — som en hånd der siger: du er okay.","Bliv her i 1-2 minutter. Mærk hvad der sker i kroppen."]',
    'Var det uvant at røre dig selv sådan? Mange af os er frakoblet selvberøring. Men kroppen genkender det — den husker at berøring betyder tryghed.',
    7
),

-- 8. Orienteringsrespons
(
    'Orienteringsrespons',
    'regulering',
    '2 min',
    'Orienteringsresponsen er nervesystemets måde at scanne for sikkerhed. Denne øvelse bruger den bevidst til at signalere til dit system at der ikke er fare.',
    '["Sid eller stå stille et øjeblik.","Drej langsomt hovedet til højre. Lad øjnene følge med.","Kig på noget specifikt. Mærk det. Tag dig tid.","Drej langsomt hovedet til venstre. Gør det samme.","Drej til midten. Tag en dyb udånding.","Gentag 2-3 gange. Mærk om skuldrene falder."]',
    'Denne øvelse er særligt kraftfuld efter en belastende oplevelse. Nervesystemet har brug for at bekræfte at faren er ovre — og øjnene er døren ind.',
    8
),

-- 9. Summe-åndedræt (Bhramari)
(
    'Summe-åndedræt (Bhramari)',
    'aandedraet',
    '3-4 min',
    'Vibration fra summen stimulerer vagusnerven dybt og effektivt. Denne urgamle teknik skaber en direkte kropslig vej til ro.',
    '["Sid med lukket mund og afslappet kæbe.","Pust ind gennem næsen i 4 tællinger.","Pust ud mens du summer — en lang, rolig mmmm-lyd.","Mærk vibrationen i brystet, halsen og ansigtet.","Gentag 8-10 gange. Lad summen blive roligere for hvert åndedræt."]',
    'Hvor mærkede du vibrationen tydeligst? Vibration er kroppens eget reguleringssprog — tænk på hvordan en mors nynnen beroliger et barn.',
    9
),

-- 10. Penduløvelse — mellem spænding og ro
(
    'Penduløvelse — mellem spænding og ro',
    'krop',
    '4-5 min',
    'Nervesystemet healer ikke ved at fryse i én tilstand, men ved at pendle mellem aktivering og ro. Denne øvelse træner netop den fleksibilitet.',
    '["Mærk et sted i kroppen der føles neutralt eller behageligt. Bliv her et øjeblik.","Flyt nu opmærksomheden til et sted med spænding eller ubehag. Vær kort.","Vend tilbage til det behagelige sted. Mærk forskellen.","Pendlér langsomt mellem de to — 3-4 gange.","Afslut altid på det behagelige sted. Lad kroppen hvile der."]',
    'Blev det lettere at vende tilbage til det behagelige? Denne pendulering er præcis hvad nervesystemet gør når det healer — det lærer at bevægelsen er sikker.',
    10
)

ON CONFLICT DO NOTHING;
