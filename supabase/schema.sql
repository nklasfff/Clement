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

-- Indexes
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON email_subscribers(email);
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

-- ═══════════════════════════════════════════
-- Seed data — velkomstnotifikation
-- ═══════════════════════════════════════════

INSERT INTO notifications (notification_id, title, body) VALUES (
    '2026-03-19-welcome',
    'Velkommen til Nervesystemsterapi',
    'Tak fordi du har slået notifikationer til. Du vil modtage besked når der tilføjes nyt indhold.'
) ON CONFLICT (notification_id) DO NOTHING;
