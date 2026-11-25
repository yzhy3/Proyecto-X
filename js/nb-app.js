// NamiBot · lo común de todas las páginas: sesión (la misma cuenta de NamiChats), llamadas a /api/nb, cuenta en la
// barra, menú del celular y aparecer al bajar.
(function () {
    'use strict';
    var KEY = 'nb:session';
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var esc = function (t) { return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };

    function read() { try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { return null; } }
    function write(s) { try { if (s) localStorage.setItem(KEY, JSON.stringify(s)); else localStorage.removeItem(KEY); } catch (e) {} }
    var S = read();

    var NB = window.NB = {
        esc: esc,
        reduce: reduce,
        get token() { return S && S.token || ''; },
        get user() { return S && S.user || null; },
        setSession: function (token, user) { S = { token: token, user: user || {} }; write(S); renderAcct(); },
        logout: function () { S = null; write(null); renderAcct(); },
        // Llama a la API con la sesión; si el servidor manda una sesión nueva (X-Session-Token) se guarda
        api: function (path, opts) {
            opts = opts || {};
            var h = { 'Content-Type': 'application/json' };
            if (S && S.token) h.Authorization = 'Bearer ' + S.token;
            return fetch(path, { method: opts.method || (opts.body ? 'POST' : 'GET'), headers: h, body: opts.body ? JSON.stringify(opts.body) : undefined, cache: 'no-store' })
                .then(function (r) {
                    var nt = r.headers.get('X-Session-Token');
                    if (nt && S) { S.token = nt; write(S); }
                    if (r.status === 401 && S) { NB.logout(); }
                    return r.json().catch(function () { return {}; }).then(function (j) { j = j || {}; j._status = r.status; j._ok = r.ok; return j; });
                })
                .catch(function () { return { _status: 0, _ok: false, error: 'Sin conexión. Revisa tu internet e intenta de nuevo.' }; });
        },
        // Iniciar sesión: va a namilinofc.com (misma cuenta de NamiChats, con Google o correo) y vuelve aquí
        login: function (after) {
            try { sessionStorage.setItem('nb:after', after || (location.pathname + location.search)); } catch (e) {}
            var back = after || (location.pathname + location.search);
            NB.api('/api/nb/login-url').then(function (j) { location.href = (j.url || 'https://namilinofc.com/cuenta/namibots') + '?volver=' + encodeURIComponent(back); });
        },
        initial: function (u) { var n = String((u && (u.name || u.email)) || '?').trim(); return n.charAt(0).toUpperCase(); },
        // Grupo: su foto de perfil (la trae su bot) sobre sus iniciales en un color propio del nombre; si la foto no
        // carga, quedan las iniciales
        groupAvatar: function (g, cls) {
            var name = String((g && g.nombre) || '');
            var words = name.replace(/[^\p{L}\p{N}\s]/gu, ' ').trim().split(/\s+/).filter(Boolean);
            var ini = words.length ? (words[0].charAt(0) + (words[1] ? words[1].charAt(0) : '')).toUpperCase() : '';
            var h = 0;
            for (var i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 360;
            return '<span class="gav' + (cls ? ' ' + cls : '') + '" style="--h:' + h + '" aria-hidden="true">' + (ini ? esc(ini) : '<svg><use href="#i-groups"/></svg>') +
                (g && g.foto ? '<img src="' + esc(g.foto) + '" alt="" loading="lazy" decoding="async" onerror="this.remove()">' : '') + '</span>';
        }
    };

    // ---------- Estadísticas (panel admin → NamiBots): visitas, quién vio precios y pasos de la compra ----------
    // id anónimo del navegador; cada cosa se avisa una vez por visita (pestaña)
    var VID = (function () {
        try { var v = localStorage.getItem('nb:vid'); if (!/^[a-z0-9]{8,32}$/.test(v || '')) { v = Math.random().toString(36).slice(2, 12) + Date.now().toString(36); localStorage.setItem('nb:vid', v); } return v; } catch (e) { return ''; }
    })();
    NB.vid = VID;
    NB.track = function (t, data, once) {
        if (once) { try { var k = 'nb:t:' + once; if (sessionStorage.getItem(k)) return; sessionStorage.setItem(k, '1'); } catch (e) {} }
        var b = { t: t, vid: VID, path: location.pathname };
        for (var x in (data || {})) b[x] = data[x];
        var h = { 'Content-Type': 'application/json' };
        if (S && S.token) h.Authorization = 'Bearer ' + S.token;
        try { fetch('/api/nb/track', { method: 'POST', headers: h, body: JSON.stringify(b), keepalive: true }).catch(function () {}); } catch (e) {}
    };
    (function () {
        var q = new URLSearchParams(location.search);
        var src = q.get('utm_source') || q.get('src') || q.get('ref') || '';
        NB.track('view', { ref: document.referrer || '', src: src });
        // «Vio los precios»: la sección de planes a la vista un momento, o la página de compra
        if (location.pathname === '/comprar') NB.track('planes', { from: 'comprar' }, 'planes');
        var pl = document.getElementById('planes');
        if (pl && 'IntersectionObserver' in window) {
            var timer = null;
            var io2 = new IntersectionObserver(function (es) {
                es.forEach(function (e) {
                    clearTimeout(timer);
                    if (e.isIntersecting) timer = setTimeout(function () { NB.track('planes', { from: 'inicio' }, 'planes'); io2.disconnect(); }, 900);
                });
            }, { threshold: 0.35 });
            io2.observe(pl);
        }
    })();

    // ---------- Cuenta en la barra ----------
    function avatarHtml(u, cls) {
        if (u && u.avatar && /^(https:\/\/|\/)/.test(u.avatar)) return '<span class="' + cls + '" style="background-image:url(\'' + esc(u.avatar).replace(/'/g, '%27') + '\')"></span>';
        return '<span class="' + cls + '">' + esc(NB.initial(u)) + '</span>';
    }
    NB.avatarHtml = avatarHtml;
    function renderAcct() {
        var box = document.getElementById('nb-acct');
        if (!box) return;
        var u = NB.user;
        if (!NB.token || !u) { box.innerHTML = ''; return; }
        box.innerHTML = '<div class="acct"><button type="button" class="acct-btn" aria-haspopup="true" aria-expanded="false">' + avatarHtml(u, 'acct-av') +
            '<span class="acct-mail">' + esc(u.email || u.name || '') + '</span></button>' +
            '<div class="acct-menu" role="menu"><div class="who">Conectado como<b>' + esc(u.email || u.name || '') + '</b></div>' +
            '<a href="/pedidos" role="menuitem"><svg><use href="#i-box"/></svg>Mis pedidos</a>' +
            '<button type="button" data-logout role="menuitem"><svg><use href="#i-out"/></svg>Cerrar sesión</button></div></div>';
        var acct = box.querySelector('.acct'), btn = box.querySelector('.acct-btn');
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            var open = !acct.classList.contains('is-open');
            acct.classList.toggle('is-open', open);
            btn.setAttribute('aria-expanded', String(open));
        });
        box.querySelector('[data-logout]').addEventListener('click', function () { NB.logout(); if (/^\/(pedidos)/.test(location.pathname)) location.href = '/'; });
    }
    document.addEventListener('click', function () { var a = document.querySelector('.acct.is-open'); if (a) a.classList.remove('is-open'); });
    renderAcct();
    // Si la sesión ya no sirve (se cerró desde NamiChats, venció…), se olvida
    if (NB.token) NB.api('/api/nb/me').then(function (j) { if (j && j.user && S) { S.user = j.user; write(S); renderAcct(); } });

    // ---------- Barra superior y menú del celular ----------
    var top = document.getElementById('top');
    if (top) {
        var onScroll = function () { top.classList.toggle('is-scrolled', window.scrollY > 8); };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        var mbtn = top.querySelector('.menu-btn'), nav = document.getElementById('nav');
        if (mbtn && nav) {
            var use = mbtn.querySelector('use');
            var setOpen = function (open) {
                top.classList.toggle('is-open', open);
                mbtn.setAttribute('aria-expanded', String(open));
                mbtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
                if (use) use.setAttribute('href', open ? '#i-close' : '#i-menu');
            };
            mbtn.addEventListener('click', function () { setOpen(!top.classList.contains('is-open')); });
            nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
            document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
        }
    }

    // ---------- Aparecer al bajar ----------
    var rv = document.querySelectorAll('.rv');
    if (!('IntersectionObserver' in window) || reduce) {
        rv.forEach(function (el) { el.classList.add('in'); });
    } else {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (!en.isIntersecting) return;
                en.target.classList.add('in');
                io.unobserve(en.target);
            });
        }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
        rv.forEach(function (el) { io.observe(el); });
    }

    // ---------- Canal de WhatsApp: aviso a pantalla completa en Grupos gratis, Comprar y Funciones ----------
    // Sale a los pocos segundos. Con la X (o Esc) se omite y no vuelve en 3 días; si se unió, en 60.
    var CANAL = 'https://whatsapp.com/channel/0029VaZRzX9ISTkSWySXet3L';
    var CKEY = 'nb:canal';
    var WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z';
    if (/^\/(grupos|comprar|funciones)\/?$/.test(location.pathname)) {
        var until = 0;
        try { until = parseInt(localStorage.getItem(CKEY) || '0', 10) || 0; } catch (e) {}
        if (until < Date.now()) setTimeout(showCanal, location.pathname.indexOf('/comprar') === 0 ? 9000 : 5000);
    }
    function hideCanalFor(days) { try { localStorage.setItem(CKEY, String(Date.now() + days * 864e5)); } catch (e) {} }
    function showCanal() {
        if (document.querySelector('.nb-canal') || document.querySelector('.gcm')) return;
        var box = document.createElement('div');
        box.className = 'nb-canal';
        box.setAttribute('role', 'dialog');
        box.setAttribute('aria-modal', 'true');
        box.setAttribute('aria-labelledby', 'nb-canal-t');
        box.innerHTML = '<button type="button" class="nb-canal-x" aria-label="Omitir"><svg><use href="#i-close"/></svg></button>' +
            '<div class="nb-canal-in">' +
            '<span class="nb-canal-wa" aria-hidden="true"><svg viewBox="0 0 24 24"><path fill="currentColor" d="' + WA_PATH + '"/></svg></span>' +
            '<span class="nb-canal-k">Canal oficial de WhatsApp</span>' +
            '<h2 id="nb-canal-t">Únete al canal de <span class="grad-tx">NamiBot</span></h2>' +
            '<p>Novedades, funciones nuevas y grupos gratis, directo en tu WhatsApp.</p>' +
            '<a class="btn btn-primary nb-canal-go" href="' + CANAL + '" target="_blank" rel="noopener"><img src="/assets/img/namibot-96.webp?v=1" alt="" width="34" height="34">Unirme al canal</a>' +
            '</div>';
        document.body.appendChild(box);
        var html = document.documentElement, prevOv = html.style.overflow;
        html.style.overflow = 'hidden';
        var close = function () {
            box.classList.add('out');
            html.style.overflow = prevOv;
            setTimeout(function () { box.remove(); }, reduce ? 0 : 260);
            document.removeEventListener('keydown', onKey);
        };
        var onKey = function (e) { if (e.key === 'Escape') { hideCanalFor(3); close(); } };
        document.addEventListener('keydown', onKey);
        box.querySelector('.nb-canal-x').addEventListener('click', function () { hideCanalFor(3); close(); });
        box.querySelector('.nb-canal-go').addEventListener('click', function () { hideCanalFor(60); NB.track('canal', {}); close(); });
        try { box.querySelector('.nb-canal-go').focus({ preventScroll: true }); } catch (e) {}
    }

})();
