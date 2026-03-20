// Supabase REST-klient — ingen SDK, ren fetch
// Læser konfiguration fra <meta> tags. Hvis tags er tomme, falder alt
// tilbage til lokal funktionalitet (localStorage, notifications.json).

(function() {
    'use strict';

    var metaUrl = document.querySelector('meta[name="supabase-url"]');
    var metaKey = document.querySelector('meta[name="supabase-anon-key"]');
    var SUPABASE_URL = (metaUrl && metaUrl.content) ? metaUrl.content.replace(/\/+$/, '') : '';
    var SUPABASE_ANON_KEY = (metaKey && metaKey.content) ? metaKey.content : '';

    function isConfigured() {
        return !!(SUPABASE_URL && SUPABASE_ANON_KEY);
    }

    function headers(extra) {
        var h = {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
            'Content-Type': 'application/json',
            'Prefer': 'return=representation'
        };
        if (extra) {
            for (var k in extra) { h[k] = extra[k]; }
        }
        return h;
    }

    function authHeaders(token) {
        return headers({ 'Authorization': 'Bearer ' + token });
    }

    // Core REST request
    function request(method, table, options) {
        options = options || {};
        var url = SUPABASE_URL + '/rest/v1/' + table;
        if (options.query) url += '?' + options.query;

        var h = options.token ? authHeaders(options.token) : headers();
        if (options.extraHeaders) {
            for (var k in options.extraHeaders) { h[k] = options.extraHeaders[k]; }
        }

        var fetchOpts = { method: method, headers: h };
        if (options.body) fetchOpts.body = JSON.stringify(options.body);

        return fetch(url, fetchOpts).then(function(r) {
            if (r.status === 204) return { data: null, error: null };
            return r.json().then(function(json) {
                if (r.ok) return { data: json, error: null };
                // 409 = duplicate (e.g. email already exists) — treat as success
                if (r.status === 409) return { data: null, error: null };
                return { data: null, error: json.message || json.msg || 'Fejl' };
            });
        }).catch(function(err) {
            return { data: null, error: err.message || 'Netværksfejl' };
        });
    }

    // ── Public API ──

    window.SupabaseClient = {

        isConfigured: isConfigured,

        // Newsletter-tilmelding
        subscribeEmail: function(email) {
            if (!isConfigured()) return Promise.resolve({ data: null, error: 'Ikke konfigureret' });
            return request('POST', 'email_subscribers', {
                body: { email: email, source: 'web' }
            });
        },

        // Hent notifikationer (aktive, nyeste først)
        getNotifications: function() {
            if (!isConfigured()) return Promise.resolve({ data: null, error: 'Ikke konfigureret' });
            return request('GET', 'notifications', {
                query: 'active=eq.true&order=created_at.desc&limit=10'
            }).then(function(result) {
                // Map notification_id → id for kompatibilitet med eksisterende kode
                if (result.data && Array.isArray(result.data)) {
                    result.data = result.data.map(function(n) {
                        return { id: n.notification_id, title: n.title, body: n.body, date: n.created_at };
                    });
                }
                return result;
            });
        },

        // ── Admin Auth ──

        signIn: function(email, password) {
            if (!isConfigured()) return Promise.resolve({ data: null, error: 'Ikke konfigureret' });
            return fetch(SUPABASE_URL + '/auth/v1/token?grant_type=password', {
                method: 'POST',
                headers: {
                    'apikey': SUPABASE_ANON_KEY,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email, password: password })
            }).then(function(r) {
                return r.json().then(function(json) {
                    if (r.ok) {
                        try { sessionStorage.setItem('sb-token', json.access_token); } catch(e) {}
                        return { data: json, error: null };
                    }
                    return { data: null, error: json.error_description || json.msg || 'Login fejlede' };
                });
            }).catch(function(err) {
                return { data: null, error: err.message || 'Netværksfejl' };
            });
        },

        signOut: function() {
            try { sessionStorage.removeItem('sb-token'); } catch(e) {}
            return Promise.resolve({ data: null, error: null });
        },

        getToken: function() {
            try { return sessionStorage.getItem('sb-token') || null; } catch(e) { return null; }
        },

        // ── Admin: Subscribers ──

        getSubscribers: function() {
            var token = this.getToken();
            if (!token) return Promise.resolve({ data: null, error: 'Ikke logget ind' });
            return request('GET', 'email_subscribers', {
                query: 'order=subscribed_at.desc',
                token: token
            });
        },

        // ── Admin: Notifications ──

        getAdminNotifications: function() {
            var token = this.getToken();
            if (!token) return Promise.resolve({ data: null, error: 'Ikke logget ind' });
            return request('GET', 'notifications', {
                query: 'order=created_at.desc',
                token: token
            });
        },

        createNotification: function(notificationId, title, body) {
            var token = this.getToken();
            if (!token) return Promise.resolve({ data: null, error: 'Ikke logget ind' });
            return request('POST', 'notifications', {
                body: { notification_id: notificationId, title: title, body: body, active: true },
                token: token
            });
        },

        toggleNotification: function(id, active) {
            var token = this.getToken();
            if (!token) return Promise.resolve({ data: null, error: 'Ikke logget ind' });
            return request('PATCH', 'notifications', {
                query: 'id=eq.' + id,
                body: { active: active },
                token: token
            });
        }
    };
})();
