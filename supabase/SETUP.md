# Supabase Opsætning — Nervesystemsterapi

## 1. Opret Supabase-projekt

1. Gå til [supabase.com](https://supabase.com) og opret en konto (gratis)
2. Klik "New Project"
3. Vælg et navn (f.eks. "nervesystemsterapi") og en adgangskode til databasen
4. Vælg region "West EU (Ireland)" for hurtigst mulig forbindelse
5. Vent til projektet er klar (~1 minut)

## 2. Opret databasetabeller

1. Gå til **SQL Editor** i venstre menu
2. Klik "New query"
3. Åbn filen `supabase/schema.sql` og kopier hele indholdet
4. Indsæt i SQL Editoren og klik **Run**
5. Du skulle se "Success. No rows returned" — det er korrekt

## 3. Konfigurer appen

1. Gå til **Settings → API** i Supabase
2. Kopiér **Project URL** (ligner `https://xxxxx.supabase.co`)
3. Kopiér **anon public** key (den lange tekst under "Project API keys")
4. Åbn `index.html` og find disse linjer:
   ```html
   <meta name="supabase-url" content="">
   <meta name="supabase-anon-key" content="">
   ```
5. Indsæt URL og key:
   ```html
   <meta name="supabase-url" content="https://xxxxx.supabase.co">
   <meta name="supabase-anon-key" content="eyJhbGci...din-key-her">
   ```
6. Gør det samme i `admin.html` (samme to meta-tags)

## 4. Opret admin-bruger

1. Gå til **Authentication → Users** i Supabase
2. Klik "Add user" → "Create new user"
3. Indtast en email og adgangskode (dette er til admin-panelet, ikke en rigtig bruger)
4. Klik "Create user"

## 5. Test

1. Åbn appen i browseren — den skal fungere præcis som før
2. Tilmeld dig nyhedsbrevet med en test-email
3. Gå til Supabase → **Table Editor → email_subscribers** — din email skal stå der
4. Åbn `admin.html` — log ind med admin-brugeren
5. Bekræft at du kan se tilmeldingen og oprette en notifikation

## Fejlfinding

**"Supabase er ikke konfigureret"**
→ Tjek at meta-tags i HTML-filen har korrekt URL og key (ingen mellemrum, ingen anførselstegn)

**Login fejler i admin-panelet**
→ Tjek at du har oprettet en bruger under Authentication → Users

**Tilmeldinger vises ikke**
→ Tjek at schema.sql er kørt korrekt. Gå til Table Editor og bekræft at tabellerne `email_subscribers` og `notifications` eksisterer

**Appen virker ikke efter ændringer**
→ Appen er designet til at virke uden Supabase. Hvis meta-tags er tomme, bruges lokale data som backup. Tøm meta-tags for at vende tilbage til lokal-only tilstand.
