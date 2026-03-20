// Admin panel logic — Nervesystemsterapi
(function() {
    'use strict';

    var loginScreen = document.getElementById('login-screen');
    var dashboard = document.getElementById('dashboard');
    var loginForm = document.getElementById('login-form');
    var loginError = document.getElementById('login-error');
    var logoutBtn = document.getElementById('logout-btn');

    var subscribersData = [];

    // ── Init ──
    function init() {
        if (!window.SupabaseClient || !SupabaseClient.isConfigured()) {
            showError('Supabase er ikke konfigureret. Tilføj URL og nøgle i meta-tags i admin.html.');
            return;
        }

        var token = SupabaseClient.getToken();
        if (token) {
            showDashboard();
        }

        loginForm.addEventListener('submit', handleLogin);
        logoutBtn.addEventListener('click', handleLogout);
        document.getElementById('export-csv-btn').addEventListener('click', exportCSV);

        var newNotifBtn = document.getElementById('new-notif-btn');
        var cancelNotifBtn = document.getElementById('cancel-notif-btn');
        var notifForm = document.getElementById('notif-form');

        newNotifBtn.addEventListener('click', function() {
            document.getElementById('new-notif-form').classList.add('open');
            newNotifBtn.style.display = 'none';
        });
        cancelNotifBtn.addEventListener('click', function() {
            document.getElementById('new-notif-form').classList.remove('open');
            newNotifBtn.style.display = '';
        });
        notifForm.addEventListener('submit', handleCreateNotification);
    }

    // ── Auth ──
    function handleLogin(e) {
        e.preventDefault();
        hideError();
        var email = document.getElementById('login-email').value;
        var password = document.getElementById('login-password').value;

        SupabaseClient.signIn(email, password).then(function(result) {
            if (result.error) {
                showError(result.error);
                return;
            }
            showDashboard();
        });
    }

    function handleLogout() {
        SupabaseClient.signOut();
        dashboard.classList.remove('active');
        loginScreen.style.display = '';
    }

    function showDashboard() {
        loginScreen.style.display = 'none';
        dashboard.classList.add('active');
        loadSubscribers();
        loadNotifications();
    }

    // ── Subscribers ──
    function loadSubscribers() {
        SupabaseClient.getSubscribers().then(function(result) {
            if (result.error) {
                if (result.error === 'Ikke logget ind') { handleLogout(); return; }
                document.getElementById('sub-list').innerHTML = '<li class="empty">Kunne ikke indlæse: ' + result.error + '</li>';
                return;
            }

            subscribersData = result.data || [];
            var count = subscribersData.length;
            document.getElementById('sub-count').textContent = count + ' tilmelding' + (count !== 1 ? 'er' : '');

            if (count === 0) {
                document.getElementById('sub-list').innerHTML = '<li class="empty">Ingen tilmeldinger endnu.</li>';
                return;
            }

            var html = '';
            for (var i = 0; i < subscribersData.length; i++) {
                var sub = subscribersData[i];
                var date = new Date(sub.subscribed_at).toLocaleDateString('da-DK', { day: 'numeric', month: 'short', year: 'numeric' });
                html += '<li class="sub-item">' +
                    '<span class="sub-email">' + escapeHtml(sub.email) + '</span>' +
                    '<span class="sub-date">' + date + '</span>' +
                    '</li>';
            }
            document.getElementById('sub-list').innerHTML = html;
        });
    }

    function exportCSV() {
        if (subscribersData.length === 0) return;
        var csv = 'Email,Tilmeldt,Kilde\n';
        for (var i = 0; i < subscribersData.length; i++) {
            var s = subscribersData[i];
            csv += '"' + s.email + '","' + s.subscribed_at + '","' + (s.source || 'web') + '"\n';
        }
        var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'tilmeldinger-' + new Date().toISOString().slice(0, 10) + '.csv';
        a.click();
        URL.revokeObjectURL(url);
    }

    // ── Notifications ──
    function loadNotifications() {
        SupabaseClient.getAdminNotifications().then(function(result) {
            if (result.error) {
                document.getElementById('notif-list').innerHTML = '<p class="empty">Kunne ikke indlæse: ' + result.error + '</p>';
                return;
            }

            var notifs = result.data || [];
            document.getElementById('notif-count').textContent = notifs.length + ' notifikation' + (notifs.length !== 1 ? 'er' : '');

            if (notifs.length === 0) {
                document.getElementById('notif-list').innerHTML = '<p class="empty">Ingen notifikationer endnu.</p>';
                return;
            }

            var html = '';
            for (var i = 0; i < notifs.length; i++) {
                var n = notifs[i];
                var date = new Date(n.created_at).toLocaleDateString('da-DK', { day: 'numeric', month: 'short', year: 'numeric' });
                var statusLabel = n.active ? 'Deaktiver' : 'Aktiver';
                html += '<div class="notif-item">' +
                    '<div class="notif-top">' +
                    '<span class="notif-title">' + escapeHtml(n.title) + '</span>' +
                    '<span class="notif-date">' + date + (n.active ? '' : ' (inaktiv)') + '</span>' +
                    '</div>' +
                    (n.body ? '<p class="notif-body">' + escapeHtml(n.body) + '</p>' : '') +
                    '<button class="notif-toggle" data-id="' + n.id + '" data-active="' + (n.active ? 'false' : 'true') + '">' + statusLabel + '</button>' +
                    '</div>';
            }
            document.getElementById('notif-list').innerHTML = html;

            // Toggle handlers
            document.querySelectorAll('.notif-toggle').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    var id = btn.getAttribute('data-id');
                    var newActive = btn.getAttribute('data-active') === 'true';
                    SupabaseClient.toggleNotification(id, newActive).then(function() {
                        loadNotifications();
                    });
                });
            });
        });
    }

    function handleCreateNotification(e) {
        e.preventDefault();
        var title = document.getElementById('notif-title').value.trim();
        var body = document.getElementById('notif-body').value.trim();
        if (!title) return;

        // Generate notification_id from date and title
        var dateStr = new Date().toISOString().slice(0, 10);
        var slug = title.toLowerCase().replace(/[^a-zæøå0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 30);
        var notifId = dateStr + '-' + slug;

        var errEl = document.getElementById('notif-error');
        errEl.style.display = 'none';

        SupabaseClient.createNotification(notifId, title, body).then(function(result) {
            if (result.error) {
                errEl.textContent = result.error;
                errEl.style.display = 'block';
                return;
            }
            document.getElementById('notif-title').value = '';
            document.getElementById('notif-body').value = '';
            document.getElementById('new-notif-form').classList.remove('open');
            document.getElementById('new-notif-btn').style.display = '';
            loadNotifications();
        });
    }

    // ── Helpers ──
    function escapeHtml(str) {
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function showError(msg) {
        loginError.textContent = msg;
        loginError.style.display = 'block';
    }

    function hideError() {
        loginError.style.display = 'none';
    }

    document.addEventListener('DOMContentLoaded', init);
})();
