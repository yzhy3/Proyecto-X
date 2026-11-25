// NamiBot · inicio: (1) el título se escribe letra por letra con un destello que va dejando chispas, y (2) el fondo de
// toda la página es de puntos que se mueven como agua: olas con el mouse y ondas al hacer clic o tocar.
(function () {
    'use strict';
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---------- 1) Título que se escribe con un destello ----------
    var GRAD = [[26, 255, 140], [24, 242, 196], [32, 227, 255]]; // los colores de .grad-tx, letra por letra
    function gradAt(t) {
        var seg = t * (GRAD.length - 1), i = Math.min(GRAD.length - 2, Math.floor(seg)), f = seg - i;
        var a = GRAD[i], b = GRAD[i + 1];
        return 'rgb(' + a.map(function (v, k) { return Math.round(v + (b[k] - v) * f); }).join(',') + ')';
    }
    // Parte el texto en palabras (no se cortan) y letras; las del degradado llevan su color
    function split(h1) {
        if (h1.__split) return h1.__split;
        var chars = [];
        function walk(node, grad) {
            Array.prototype.slice.call(node.childNodes).forEach(function (n) {
                if (n.nodeType === 3) {
                    var frag = document.createDocumentFragment();
                    n.textContent.split(/(\s+)/).forEach(function (part) {
                        if (!part) return;
                        if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
                        var w = document.createElement('span'); w.className = 'w';
                        Array.from(part).forEach(function (c) {
                            var s = document.createElement('span'); s.className = 'ch'; s.textContent = c;
                            if (grad) s.__grad = true;
                            w.appendChild(s); chars.push(s);
                        });
                        frag.appendChild(w);
                    });
                    n.parentNode.replaceChild(frag, n);
                } else if (n.nodeType === 1) {
                    var g = grad || n.classList.contains('grad-tx');
                    if (n.classList.contains('grad-tx')) n.classList.add('split');
                    walk(n, g);
                }
            });
        }
        walk(h1, false);
        var gs = chars.filter(function (c) { return c.__grad; });
        gs.forEach(function (c, i) { c.style.color = gradAt(gs.length > 1 ? i / (gs.length - 1) : 0); });
        h1.setAttribute('aria-label', h1.textContent.replace(/\s+/g, ' ').trim());
        h1.__split = chars;
        return chars;
    }
    var DUST = ['#ffffff', '#1aff8c', '#20e3ff', '#b8ffe0', '#eafff5'];
    function dust(h1, x, y, n) {
        for (var i = 0; i < n; i++) {
            var d = document.createElement('i');
            d.className = 'dust';
            var size = 2 + Math.random() * 3.5;
            d.style.cssText = 'width:' + size + 'px;height:' + size + 'px;background:' + DUST[Math.floor(Math.random() * DUST.length)] + ';box-shadow:0 0 6px currentColor';
            h1.appendChild(d);
            var dx = (Math.random() - 0.6) * 46, dy = 18 + Math.random() * 46, dur = 650 + Math.random() * 650;
            var a = d.animate([
                { transform: 'translate(' + x + 'px,' + y + 'px) scale(1)', opacity: 1 },
                { transform: 'translate(' + (x + dx * 0.5) + 'px,' + (y + dy * 0.35) + 'px) scale(1.1)', opacity: 0.9, offset: 0.35 },
                { transform: 'translate(' + (x + dx) + 'px,' + (y + dy) + 'px) scale(.2)', opacity: 0 }
            ], { duration: dur, easing: 'cubic-bezier(.3,.6,.4,1)' });
            a.onfinish = function () { this.remove(); }.bind(d);
        }
    }
    var running = new WeakMap();
    function write(h1) {
        if (!h1) return;
        // Con la letra ya cargada (si no, las posiciones de cada letra cambian)
        if (document.fonts && document.fonts.status !== 'loaded' && !h1.__waitFonts) {
            h1.__waitFonts = true;
            var go = false, once = function () { if (!go) { go = true; write(h1); } };
            document.fonts.ready.then(once);
            setTimeout(once, 600); // si la letra tarda, no se espera más
            return;
        }
        var chars = split(h1);
        h1.classList.add('ready');
        if (reduce || !Element.prototype.animate) { chars.forEach(function (c) { c.classList.add('on'); c.style.opacity = 1; c.style.animation = 'none'; }); return; }
        var run = (running.get(h1) || 0) + 1;
        running.set(h1, run);
        chars.forEach(function (c) { c.classList.remove('on'); });
        h1.querySelectorAll('.fairy,.dust').forEach(function (x) { x.remove(); });
        var fairy = document.createElement('span');
        fairy.className = 'fairy';
        h1.appendChild(fairy);
        var box = h1.getBoundingClientRect();
        var pos = chars.map(function (c) { var r = c.getBoundingClientRect(); return [r.left - box.left + r.width * 0.85, r.top - box.top + r.height * 0.42]; });
        if (pos.length) fairy.style.transform = 'translate(' + (pos[0][0] - 30) + 'px,' + pos[0][1] + 'px)';
        var STEP = Math.max(28, Math.min(48, 1500 / chars.length));
        chars.forEach(function (c, i) {
            setTimeout(function () {
                if (running.get(h1) !== run) return;
                c.classList.add('on');
                fairy.style.transform = 'translate(' + pos[i][0] + 'px,' + pos[i][1] + 'px)';
                dust(h1, pos[i][0], pos[i][1], 2 + (i % 3 === 0 ? 1 : 0));
                if (i === chars.length - 1) {
                    setTimeout(function () { dust(h1, pos[i][0], pos[i][1], 9); fairy.classList.add('done'); }, 120);
                    setTimeout(function () { fairy.remove(); }, 700);
                }
            }, 260 + i * STEP);
        });
    }
    window.NBHero = { write: write };
    // nb.js lo llama al mostrar el título de «Para grupos» o «Para negocios»

    // ---------- 2) Fondo de puntos en toda la página de inicio, que se mueve como agua ----------
    // La textura de puntos (más juntos) queda quieta; con el mouse los puntos hacen olas y al hacer clic o tocar salen
    // ondas (no en botones, enlaces, formularios ni en el teléfono del ejemplo).
    var cv = document.createElement('canvas'), cx = cv.getContext('2d');
    if (!cx) return;
    cv.className = 'nb-water'; cv.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(cv, document.body.firstChild);
    document.documentElement.classList.add('has-water');
    var bgEl = document.querySelector('.hero-bg');
    if (bgEl) bgEl.classList.add('has-ripple');
    var GAP = 17, W = 0, H = 0, DPR = 1, dots = [], waves = [], mouse = null, raf = 0;
    function size() {
        DPR = Math.min(2, window.devicePixelRatio || 1);
        W = window.innerWidth; H = window.innerHeight;
        cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR);
        cx.setTransform(DPR, 0, 0, DPR, 0, 0);
        dots = [];
        for (var y = GAP / 2; y < H; y += GAP) for (var x = GAP / 2; x < W; x += GAP) dots.push(x, y);
        draw(performance.now());
    }
    function draw(now) {
        cx.clearRect(0, 0, W, H);
        waves = waves.filter(function (w) { return now - w.t < w.life; });
        var base = [], lit = [[], [], [], []];
        for (var i = 0; i < dots.length; i += 2) {
            var x = dots[i], y = dots[i + 1], ox = 0, oy = 0, glow = 0;
            for (var k = 0; k < waves.length; k++) {
                var w = waves[k], age = (now - w.t) / 1000;
                if (age < 0) continue;
                var dx = x - w.x, dy = y - w.y, dist = Math.sqrt(dx * dx + dy * dy) || 1;
                var off = dist - age * w.sp;
                if (off > 64 || off < -64) continue;
                var amp = w.a * (1 - (now - w.t) / w.life) * Math.exp(-(off * off) / 800) * Math.cos(off / 10);
                ox += dx / dist * amp; oy += dy / dist * amp; glow += Math.abs(amp) / 5;
            }
            if (mouse) {
                var mx = x - mouse.x, my = y - mouse.y, md = Math.sqrt(mx * mx + my * my);
                if (md < 150) { var p = Math.pow(1 - md / 150, 2); ox += mx / (md || 1) * p * 11; oy += my / (md || 1) * p * 11; glow += p * 1.2; }
            }
            if (glow < 0.06) base.push(x + ox, y + oy);
            else lit[Math.min(3, Math.floor(glow * 2.2))].push(x + ox, y + oy, glow);
        }
        // puntos quietos: casi no se ven; donde pasa la ola brillan en verde agua y crecen un poco
        cx.fillStyle = 'rgba(255,255,255,.075)';
        cx.beginPath();
        for (var b = 0; b < base.length; b += 2) { cx.moveTo(base[b] + 1, base[b + 1]); cx.arc(base[b], base[b + 1], 1, 0, 6.2832); }
        cx.fill();
        for (var l = 0; l < 4; l++) {
            var arr = lit[l];
            if (!arr.length) continue;
            cx.fillStyle = 'rgba(' + (190 - l * 20) + ',255,' + (215 + l * 8) + ',' + (0.16 + l * 0.14).toFixed(2) + ')';
            cx.beginPath();
            var r = 1.15 + l * 0.38;
            for (var q = 0; q < arr.length; q += 3) { cx.moveTo(arr[q] + r, arr[q + 1]); cx.arc(arr[q], arr[q + 1], r, 0, 6.2832); }
            cx.fill();
        }
    }
    function loop(now) {
        raf = 0;
        draw(now);
        if (!document.hidden && (waves.length || mouse)) raf = requestAnimationFrame(loop);
    }
    function kick() { if (!raf) raf = requestAnimationFrame(loop); }
    size();
    window.addEventListener('resize', size);
    if (reduce) return;
    var last = null;
    var SKIP = 'a,button,input,textarea,select,label,summary,details,form,.iph,.demo-steps,.modes,.ftag,.plan,.panel';
    document.addEventListener('pointermove', function (e) {
        if (e.pointerType === 'touch') return;
        var p = { x: e.clientX, y: e.clientY };
        mouse = p;
        if (!last || Math.abs(p.x - last.x) + Math.abs(p.y - last.y) > 50) { waves.push({ x: p.x, y: p.y, t: performance.now(), a: 4.5, sp: 230, life: 1400 }); last = p; if (waves.length > 24) waves.shift(); }
        kick();
    }, { passive: true });
    document.documentElement.addEventListener('pointerleave', function () { mouse = null; last = null; kick(); });
    window.addEventListener('blur', function () { mouse = null; kick(); });
    // clic o toque: ondas como al tirar una piedra al agua (no en botones ni enlaces)
    document.addEventListener('pointerdown', function (e) {
        if (e.target.closest && e.target.closest(SKIP)) return;
        var t0 = performance.now();
        [0, 140, 300].forEach(function (dl, i) { waves.push({ x: e.clientX, y: e.clientY, t: t0 + dl, a: 12 - i * 3.5, sp: 320, life: 2200 }); });
        kick();
    }, { passive: true });
})();
