// NamiBot · inicio: teléfono con un chat de WhatsApp que se escribe solo. Dos ejemplos (botones «Para grupos» y
// «Para negocios»): el grupo «Los Reales 🫂😍» (el bot entra, le dan admin y empieza a trabajar) y el chat privado de
// un negocio ficticio (Dulce Antojo) atendido por el bot. Avanza solo mientras está a la vista; se repite.
(function () {
    'use strict';
    var feed = document.getElementById('ph-feed');
    if (!feed) return;
    var reduce = window.NB ? NB.reduce : false;
    var demo = document.getElementById('demo');
    var nameEl = document.getElementById('ph-name'), subEl = document.getElementById('ph-sub'), avEl = document.getElementById('ph-av');
    var stepsEl = document.getElementById('demo-steps');
    var AV = '/assets/img/namibot-96.webp?v=1';
    var PIC = '/assets/img/ejemplo-sticker.webp?v=1'; // la foto que se manda; el sticker es la misma foto (1:1)
    var PLAY = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l12-7.5z"/></svg>';
    var TICKS = '<svg class="tk" viewBox="0 0 18 11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M1 6l3.2 3L11 2M7.5 9 9 10.2 16.6 2"/></svg>';
    var SHIELD = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.6-3 8.6-7 10-4-1.4-7-5.4-7-10V6z"/><path d="M9 12l2 2 4-4"/></svg>';
    var wave = function () { var h = ''; for (var i = 0; i < 28; i++) h += '<i style="height:' + (20 + Math.round(Math.random() * 80)) + '%"></i>'; return h; };
    var BOT = 'NamiBot 🩵';

    // Miembros del grupo (nombre, color del nombre, inicial del avatar)
    var P = {
        andres: ['Andrés', '#53bdeb'], vale: ['Valentina', '#ff72a1'], kevin: ['Kevin', '#ffbc38'],
        sofi: ['Sofía', '#a791ff'], mateo: ['Mateo', '#06cf9c']
    };

    // Pasos: { k: tipo, ... }  · tipos: date, sys, admin, in (miembro), out (tú), bot, typing (pausa del bot)
    var MODES = {
        grupos: {
            name: 'Los Reales 🫂😍', sub: 'Andrés, Valentina, Kevin, Sofía, Mateo, Tú y 31 más', av: '🫂', avBg: 'linear-gradient(135deg,#ff8a3d,#ff3d7f)',
            start: [20, 4],
            steps: [
                { k: 'date', t: 'HOY' },
                { k: 'sys', t: BOT + ' se unió usando el enlace de invitación', cap: '🤖 Entra al grupo' },
                { k: 'in', p: 'andres', t: 'y ese quién es? 👀' },
                { k: 'in', p: 'mateo', t: 'Es el bot, denle admin por favor 🙏' },
                { k: 'admin', t: 'Tú hiciste admin a ' + BOT, cap: '🛡️ Le das admin' },
                { k: 'bot', t: '¡Gracias por el admin! 🩵 Ya estoy activo en <b>Los Reales 🫂😍</b>. Escriban <code>.menu</code> para ver todo lo que hago.' },
                { k: 'sys', t: 'Valentina se unió usando el enlace de invitación', cap: '👋 Bienvenidas' },
                { k: 'bot', t: '<div class="wl"><span class="wl-av" style="background:#ff72a1">V</span><div><b>¡BIENVENIDA, VALENTINA!</b><small>Los Reales 🫂😍 · ya somos 38</small></div></div>Lee las reglas con <code>.reglas</code> y preséntate 😎' },
                { k: 'in', p: 'vale', t: 'holaaa 👋 gracias!! 🥹' },
                { k: 'in', p: 'kevin', t: 'JAJAJAJA', cap: '⚠️ Antispam', fast: true },
                { k: 'in', p: 'kevin', t: 'JAJAJAJA', fast: true },
                { k: 'in', p: 'kevin', t: 'JAJAJAJAJA 😂😂', fast: true },
                { k: 'bot', t: '⚠️ <span class="mn">@Kevin</span>, sin spam por favor. <b>Advertencia 1/3</b>.' },
                { k: 'in', p: 'sofi', t: 'únanse a mi grupo de ventas 👉 <span class="lk">chat.whatsapp.com/K8f2Lq…</span>', zap: true, cap: '🚫 Antilink' },
                { k: 'bot', t: '🚫 <span class="mn">@Sofía</span>, aquí no se permiten enlaces de otros grupos. Mensaje eliminado. <b>Advertencia 1/3</b>.' },
                { k: 'in', p: 'mateo', t: '<span class="pic"></span><code>.sticker</code>', cap: '✨ Stickers' },
                { k: 'bot', t: '<img class="stk2" src="' + PIC + '" alt="">', plain: true },
                { k: 'in', p: 'vale', t: 'JAJA quedó perfecto 😂' },
                { k: 'in', p: 'andres', t: '<code>.play</code> reggaetón viejo mix', cap: '🎵 Música' },
                { k: 'bot', t: '<div class="au"><span class="au-play">' + PLAY + '</span><div class="au-r"><div class="au-wave">' + wave() + '</div><small>🎵 Reggaetón viejo mix · 3:12</small></div></div>' },
                { k: 'in', p: 'kevin', t: 'temazo 🔥🔥' },
                { k: 'out', t: '<code>.todos</code> Partido hoy 8 p. m. ⚽ no falten', cap: '📢 Menciones' },
                { k: 'bot', t: '📢 <b>Partido hoy 8 p. m. ⚽ no falten</b><div class="mt"><span>@Andrés</span><span>@Valentina</span><span>@Kevin</span><span>@Sofía</span><span>@Mateo</span><span>+31</span></div>', stagger: true }
            ]
        },
        negocios: {
            name: 'Dulce Antojo 🧁', sub: 'Cuenta de empresa', av: '🧁', avBg: 'linear-gradient(135deg,#ffb3d1,#ff6fa8)',
            start: [19, 32], biz: true,
            steps: [
                { k: 'date', t: 'HOY' },
                { k: 'sys', t: '🔒 Los mensajes están cifrados de extremo a extremo.' },
                { k: 'out', t: 'Hola, buenas noches 👋', cap: '💬 Responde al instante' },
                { k: 'bot', t: '¡Hola! Bienvenida a <b>Dulce Antojo</b> 🧁<br>Soy el asistente virtual, te atiendo 24/7. ¿En qué te ayudo?', btns: ['📖 Ver catálogo', '🛍️ Hacer un pedido', '📍 Horarios y ubicación'] },
                { k: 'out', t: '📖 Ver catálogo', cap: '📖 Muestra tu catálogo' },
                { k: 'bot', t: '<b>Nuestros favoritos</b><div class="cat"><div><i>🎂</i><span>Torta de chocolate<small>Para 12 personas</small></span><b>$45.000</b></div><div><i>🍓</i><span>Cheesecake de fresa<small>Para 8 personas</small></span><b>$38.000</b></div><div><i>🧁</i><span>Caja de 6 cupcakes<small>Sabores surtidos</small></span><b>$30.000</b></div></div>', btns: ['🛍️ Pedir ahora'] },
                { k: 'out', t: 'Quiero la torta de chocolate para el sábado 😍', cap: '🛍️ Toma pedidos' },
                { k: 'bot', t: '¡Excelente elección! 🎂 <b>Torta de chocolate</b> para el <b>sábado 22</b>.<br>¿La enviamos a domicilio o la recoges en la tienda?', btns: ['🛵 A domicilio', '🏪 Recoger en tienda'] },
                { k: 'out', t: '🛵 A domicilio' },
                { k: 'bot', t: '✅ <b>Pedido #1042 registrado</b><div class="rc"><span>Torta de chocolate</span><b>$45.000</b><span>Domicilio</span><b>$6.000</b><span class="tt">Total</span><b class="tt">$51.000</b></div>Te envío el enlace de pago seguro 👇', btns: ['💳 Pagar mi pedido'], cap: '💳 Cobra y confirma' },
                { k: 'out', t: 'Listo, ya pagué 🙌' },
                { k: 'bot', t: '¡Pago recibido! 🥳 Tu torta llega el <b>sábado entre 2 y 4 p. m.</b> Te aviso cuando salga. ¡Gracias por elegir Dulce Antojo! 🧁' },
                { k: 'out', t: '¿Tienen Instagram? 👀', cap: '🔗 Lleva a tus redes' },
                { k: 'bot', t: '¡Claro! Síguenos para ver los postres nuevos de cada semana 💕', btns: ['📸 Ver Instagram', '🌐 Ver menú completo'] },
                { k: 'out', t: 'Gracias!! 😍' }
            ]
        }
    };

    var mode = 'grupos', run = 0, clock = 0, lastWho = null;
    var visible = true, pending = null;
    function later(fn, ms) {
        var r = run;
        setTimeout(function () { if (r !== run) return; if (visible && !document.hidden) fn(); else pending = fn; }, ms);
    }
    function resume() { if (pending && visible && !document.hidden) { var fn = pending; pending = null; fn(); } }
    document.addEventListener('visibilitychange', resume);
    if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { visible = e[0].isIntersecting; resume(); }, { threshold: 0.15 }).observe(feed);

    function hhmm() {
        var h = Math.floor(clock / 60) % 24, m = clock % 60;
        return (h % 12 || 12) + ':' + (m < 10 ? '0' : '') + m + (h < 12 ? ' a. m.' : ' p. m.');
    }
    // Los mensajes que ya están se deslizan hacia arriba cuando entra otro
    function flip(change) {
        var kids = Array.prototype.slice.call(feed.children), before = kids.map(function (k) { return k.getBoundingClientRect().top; });
        var out = change();
        kids.forEach(function (k, i) {
            if (!k.isConnected) return;
            var d = before[i] - k.getBoundingClientRect().top;
            if (d && k.animate && !reduce) k.animate([{ transform: 'translateY(' + d + 'px)' }, { transform: 'none' }], { duration: 420, easing: 'cubic-bezier(.2,.8,.2,1)' });
        });
        // Lo que ya salió por arriba se quita
        var top = feed.getBoundingClientRect().top;
        Array.prototype.slice.call(feed.children).forEach(function (k) { if (k.getBoundingClientRect().bottom < top - 40) k.remove(); });
        return out;
    }
    function el(cls, html) { var d = document.createElement('div'); d.className = cls; d.innerHTML = html; return d; }
    function make(s, M) {
        var who = s.k === 'in' ? s.p : s.k;
        var first = who !== lastWho;
        lastWho = (s.k === 'date' || s.k === 'sys' || s.k === 'admin') ? null : who;
        if (s.k === 'date') return el('m sys date', s.t);
        if (s.k === 'sys') return el('m sys', s.t);
        if (s.k === 'admin') {
            var a = el('m sys admin', '<span class="ad-ico">' + SHIELD + '</span>' + s.t);
            for (var i = 0; i < 8; i++) { var sp = document.createElement('i'); sp.className = 'spk'; sp.style.setProperty('--a', (i * 45) + 'deg'); a.appendChild(sp); }
            return a;
        }
        var tm = '<span class="tm">' + hhmm() + (s.k === 'out' ? TICKS : '') + '</span>';
        if (s.k === 'out') return el('m out' + (first ? ' first' : ''), s.t + tm);
        if (s.k === 'in') {
            var p = P[s.p];
            return el('m in' + (first ? ' first' : '') + (M.biz ? '' : ' grp'), (first ? '<span class="av" style="background:' + p[1] + '">' + p[0].charAt(0) + '</span><span class="nm" style="color:' + p[1] + '">' + p[0] + '</span>' : '') + s.t + tm);
        }
        // Bot
        if (s.plain) return el('m in plain' + (M.biz ? '' : ' grp') + (first ? ' first' : ''), (first && !M.biz ? '<span class="av bot"><img src="' + AV + '" alt=""></span>' : '') + s.t + '<span class="tm on-pic">' + hhmm() + '</span>');
        var head = M.biz ? '' : (first ? '<span class="av bot"><img src="' + AV + '" alt=""></span><span class="nm bot">' + BOT + '</span>' : '');
        var btns = s.btns ? '<div class="btns">' + s.btns.map(function (b) { return '<span>' + b + '</span>'; }).join('') + '</div>' : '';
        var m = el('m in bot' + (first ? ' first' : '') + (M.biz ? ' biz' : ' grp') + (s.btns ? ' has-btns' : ''), head + s.t + tm + btns);
        if (s.stagger) m.querySelectorAll('.mt span').forEach(function (x, i) { x.style.animationDelay = (0.3 + i * 0.1) + 's'; });
        return m;
    }
    function add(s, M) { return flip(function () { var m = make(s, M); feed.appendChild(m); return m; }); }
    function typing(on, M) {
        subEl.textContent = on ? (M.biz ? 'escribiendo…' : BOT + ' está escribiendo…') : M.sub;
        subEl.classList.toggle('typing-st', on);
    }
    // Guía del ejemplo: un paso por cada parte (cap) de la conversación; se marca la que se está viendo y al tocar
    // una, el chat salta a esa parte
    function buildSteps(M) {
        if (!stepsEl) return;
        stepsEl.innerHTML = M.steps.map(function (s, i) {
            if (!s.cap) return '';
            var sp = s.cap.indexOf(' ');
            return '<li data-i="' + i + '" role="button" tabindex="0"><span class="ds-n">' + s.cap.slice(0, sp) + '</span><span>' + s.cap.slice(sp + 1) + '</span></li>';
        }).join('');
    }
    function markStep(i) {
        if (!stepsEl) return;
        var items = stepsEl.querySelectorAll('li'), on = null;
        items.forEach(function (li) { if (Number(li.getAttribute('data-i')) <= i) on = li; });
        items.forEach(function (li) {
            var k = Number(li.getAttribute('data-i'));
            li.classList.toggle('on', li === on);
            li.classList.toggle('done', !!on && k < Number(on.getAttribute('data-i')));
        });
        // En fila (celular): que el paso actual quede a la vista
        if (on && stepsEl.scrollWidth > stepsEl.clientWidth + 4) stepsEl.scrollTo({ left: on.offsetLeft - (stepsEl.clientWidth - on.offsetWidth) / 2, behavior: reduce ? 'auto' : 'smooth' });
    }
    // Pone de una vez (sin animar) los mensajes de antes del paso elegido
    function instant(s, M) {
        clock += s.k === 'in' || s.k === 'out' ? 1 : 0;
        var m = make(s, M);
        m.classList.add('now');
        if (s.zap) {
            var p = P[s.p];
            m.classList.add('del');
            m.innerHTML = (m.classList.contains('first') ? '<span class="av" style="background:' + p[1] + '">' + p[0].charAt(0) + '</span><span class="nm" style="color:' + p[1] + '">' + p[0] + '</span>' : '') + '<span class="del-t">🚫 ' + BOT + ' eliminó este mensaje</span>';
        }
        feed.appendChild(m);
    }
    function jumpTo(i) {
        var M = MODES[mode];
        run++; pending = null;
        feed.innerHTML = '';
        clock = M.start[0] * 60 + M.start[1]; lastWho = null;
        typing(false, M);
        for (var k = 0; k < i; k++) { if (k >= i - 6) instant(M.steps[k], M); else clock += M.steps[k].k === 'in' || M.steps[k].k === 'out' ? 1 : 0; }
        flip(function () {});
        markStep(i);
        later(function () { step(i); }, 250);
    }
    if (stepsEl) {
        var pick = function (e) { var li = e.target.closest('li[data-i]'); if (li) jumpTo(Number(li.getAttribute('data-i'))); };
        stepsEl.addEventListener('click', pick);
        stepsEl.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(e); } });
    }

    function step(i) {
        var M = MODES[mode];
        if (i >= M.steps.length) {
            later(function () {
                feed.classList.add('fade');
                later(function () { feed.innerHTML = ''; feed.classList.remove('fade'); start(); }, 600);
            }, 3200);
            return;
        }
        var s = M.steps[i];
        if (s.cap) markStep(i);
        clock += s.k === 'in' || s.k === 'out' ? (s.fast ? 0 : (Math.random() < 0.5 ? 1 : 0)) : 0;
        if (s.k === 'bot') {
            typing(true, M);
            var t = flip(function () { var d = el('m in typ' + (M.biz ? '' : ' grp'), '<span class="typing"><i></i><i></i><i></i></span>'); feed.appendChild(d); return d; });
            later(function () {
                flip(function () { t.remove(); });
                typing(false, M);
                add(s, M);
                later(function () { step(i + 1); }, s.btns ? 1700 : 1300);
            }, s.plain ? 1300 : 1000);
            return;
        }
        var m = add(s, M);
        if (s.zap) {
            later(function () {
                m.classList.add('zap');
                setTimeout(function () {
                    m.classList.remove('zap'); m.classList.add('del');
                    var p = P[s.p];
                    m.innerHTML = (m.classList.contains('first') ? '<span class="av" style="background:' + p[1] + '">' + p[0].charAt(0) + '</span><span class="nm" style="color:' + p[1] + '">' + p[0] + '</span>' : '') +
                        '<span class="del-t">🚫 ' + BOT + ' eliminó este mensaje</span>';
                }, 450);
                later(function () { step(i + 1); }, 900);
            }, 1200);
            return;
        }
        var wait = s.k === 'date' ? 350 : s.k === 'sys' ? 1100 : s.k === 'admin' ? 1900 : s.fast ? 380 : 1400;
        later(function () { step(i + 1); }, wait);
    }
    function start() {
        var M = MODES[mode];
        clock = M.start[0] * 60 + M.start[1];
        lastWho = null;
        typing(false, M);
        step(0);
    }
    function setMode(m) {
        if (!MODES[m]) return;
        mode = m; run++; pending = null;
        var M = MODES[m];
        demo.setAttribute('data-mode', m);
        nameEl.textContent = M.name; subEl.textContent = M.sub;
        avEl.textContent = M.av; avEl.style.background = M.avBg;
        feed.innerHTML = '';
        buildSteps(M);
        if (reduce) {
            // Sin animaciones: se muestra completa una parte del ejemplo
            clock = M.start[0] * 60 + M.start[1]; lastWho = null;
            M.steps.slice(0, 9).forEach(function (s) { feed.appendChild(make(s, M)); });
            return;
        }
        later(start, 350);
    }
    // Botones «Para grupos» / «Para negocios»: cambian el texto de arriba y el ejemplo del teléfono (#negocios abre negocios)
    var tabs = document.querySelectorAll('[data-mode-btn]');
    function choose(m, push) {
        tabs.forEach(function (b) { var on = b.getAttribute('data-mode-btn') === m; b.classList.toggle('on', on); b.setAttribute('aria-selected', String(on)); });
        document.querySelectorAll('[data-for]').forEach(function (x) { var on = x.getAttribute('data-for') === m; x.classList.toggle('is-on', on); x.setAttribute('aria-hidden', String(!on)); x.inert = !on; });
        // El título del modo elegido se vuelve a escribir con el destello (nb-hero.js)
        var h1 = document.querySelector('[data-for="' + m + '"] h1');
        if (window.NBHero && h1 && (push || !h1.classList.contains('ready'))) NBHero.write(h1);
        setMode(m);
        if (push) { try { history.replaceState(null, '', m === 'negocios' ? '/?para=negocios' : '/'); } catch (e) {} }
    }
    tabs.forEach(function (b) { b.addEventListener('click', function () { if (mode !== b.getAttribute('data-mode-btn') || !feed.children.length) choose(b.getAttribute('data-mode-btn'), true); }); });
    window.NBDemo = { setMode: choose };
    choose(/[?&]para=negocios/.test(location.search) ? 'negocios' : 'grupos', false);
})();
