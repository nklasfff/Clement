-- ═══════════════════════════════════════════
-- Nervesystemsterapi — Database Schema
-- Kør dette i Supabase SQL Editor
-- ═══════════════════════════════════════════

-- Tabel: Email-tilmeldinger (nyhedsbrev)
CREATE TABLE IF NOT EXISTS email_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL UNIQUE,
    subscribed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    source TEXT DEFAULT 'web'
);

-- Tabel: Notifikationer
CREATE TABLE IF NOT EXISTS notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    notification_id TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    body TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    active BOOLEAN DEFAULT true
);

-- Tabel: Øvelser
CREATE TABLE IF NOT EXISTS exercises (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    kategori TEXT NOT NULL,
    tid TEXT,
    intro TEXT,
    steps JSONB NOT NULL DEFAULT '[]',
    refleksion TEXT,
    sort_order INTEGER DEFAULT 0,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON email_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_exercises_active ON exercises(active);
CREATE INDEX IF NOT EXISTS idx_exercises_sort ON exercises(sort_order);
CREATE INDEX IF NOT EXISTS idx_notifications_created ON notifications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_notifications_active ON notifications(active);

-- ═══════════════════════════════════════════
-- Row Level Security
-- Besøgende kan tilmelde sig og læse notifikationer.
-- Kun admin (authenticated) kan se tilmeldinger og redigere.
-- ═══════════════════════════════════════════

ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Email-tilmeldinger: Alle kan tilmelde sig (INSERT), kun admin kan læse/slette
CREATE POLICY "Alle kan tilmelde sig" ON email_subscribers
    FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Admin kan se tilmeldinger" ON email_subscribers
    FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admin kan slette tilmeldinger" ON email_subscribers
    FOR DELETE TO authenticated USING (true);

-- Notifikationer: Alle kan læse aktive, kun admin kan oprette/redigere
CREATE POLICY "Alle kan læse aktive notifikationer" ON notifications
    FOR SELECT TO anon USING (active = true);

CREATE POLICY "Admin kan læse alle notifikationer" ON notifications
    FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admin kan oprette notifikationer" ON notifications
    FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Admin kan redigere notifikationer" ON notifications
    FOR UPDATE TO authenticated USING (true);

-- Exercises: Alle kan læse aktive, kun admin kan oprette/redigere
ALTER TABLE exercises ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Alle kan læse aktive øvelser" ON exercises
    FOR SELECT TO anon USING (active = true);

CREATE POLICY "Admin kan læse alle øvelser" ON exercises
    FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admin kan oprette øvelser" ON exercises
    FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Admin kan redigere øvelser" ON exercises
    FOR UPDATE TO authenticated USING (true);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER exercises_updated_at
    BEFORE UPDATE ON exercises
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();
