// Cambiar de servicio desde el logo (como cambiar de cuenta en WhatsApp): junto al logo de NamiChats o de NamiBot sale
// un botón ⇅ que abre una tarjeta con los servicios de Namilin OFC. El logo sigue llevando al inicio de cada servicio.
// Se activa en el elemento con data-svc-switch="nc" | "nb" (el servicio en el que se está). Opcional:
// data-hub / data-nc / data-nb con las direcciones de cada sitio (namibots las pone el servidor); si no, se calculan.
// Lo usan NamiChats (public/) y NamiBot (namibots.* sirve este mismo archivo en /assets/svc-switch.js).
(function () {
    'use strict';
    var brand = document.querySelector('[data-svc-switch]');
    if (!brand || brand.__svc) return;
    brand.__svc = true;
    var cur = brand.getAttribute('data-svc-switch');

    // Direcciones: namichats.X / namibots.X / X (en el PC, *.localhost con el mismo puerto)
    var h = location.hostname, port = location.port ? ':' + location.port : '', pr = location.protocol + '//';
    var root = h.replace(/^(namichats|namibots|www)\./, '');
    var o = { hub: brand.getAttribute('data-hub'), nc: brand.getAttribute('data-nc'), nb: brand.getAttribute('data-nb') };
    if (o.hub == null && o.nc == null) {
        if (/^namichats\./.test(h) || /^namibots\./.test(h)) { o.hub = pr + root + port; o.nc = pr + 'namichats.' + root + port; }
        else { o.hub = ''; o.nc = location.origin; } // NamiChats todavía en namilinofc.com: no hay portada aparte
    }
    if (!o.nb) o.nb = pr + 'namibots.' + root + port;
    var assets = o.hub || o.nc;

    // Cada servicio con su marca: nombre en dos colores, su letra y su color
    var LIST = [
        { id: 'nc', a: 'Nami', b: 'Chats', sub: 'Crea y descarga chats realistas', href: o.nc + '/', img: o.nc + '/assets/img/brand/namichats-icon.svg?v=1', ac: '#b026ff', tx: '#c879ff', font: "'Montserrat',Inter,sans-serif", w: 900 },
        { id: 'nb', a: 'Nami', b: 'Bot', sub: 'Bot de WhatsApp para grupos y negocios', href: o.nb + '/', img: o.nb + '/assets/img/namibot-96.webp?v=1', round: true, ac: '#1aff8c', tx: '#1aff8c', font: "'Sora',Inter,sans-serif", w: 800 }
    ];

    var css = [
        '.svc-sw{position:relative;display:inline-flex;align-items:center;gap:6px;flex-shrink:0}',
        '.svc-btn{position:relative;display:inline-grid;place-items:center;width:30px;height:30px;padding:0;border-radius:10px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.06);color:inherit;cursor:pointer;transition:background .15s,border-color .15s;-webkit-tap-highlight-color:transparent}',
        '.svc-btn:hover,.svc-sw.open .svc-btn{background:rgba(255,255,255,.13);border-color:rgba(255,255,255,.3)}',
        '.svc-btn svg{width:15px;height:15px}',
        '.svc-pop{position:absolute;top:calc(100% + 14px);left:-6px;z-index:3000;width:344px;max-width:calc(100vw - 24px);border-radius:22px;overflow:hidden;background:#0f0f11;border:1px solid rgba(255,255,255,.1);box-shadow:0 30px 70px -20px rgba(0,0,0,.9);color:#f4f4f5;font:500 14px/1.35 Inter,system-ui,sans-serif;text-align:left;opacity:0;visibility:hidden;transform:translateY(-8px) scale(.98);transform-origin:16px 0;transition:opacity .18s,transform .22s cubic-bezier(.2,.9,.3,1.2),visibility .18s}',
        '.svc-sw.open .svc-pop{opacity:1;visibility:visible;transform:none}',
        '.svc-hd{display:flex;align-items:center;gap:11px;padding:16px 18px 14px;border-bottom:1px solid rgba(255,255,255,.07);background:linear-gradient(180deg,rgba(255,255,255,.035),transparent)}',
        '.svc-hd img{width:30px;height:30px;border-radius:9px;background:#000}',
        '.svc-hd b{display:block;font:900 14px/1.1 Montserrat,Inter,sans-serif;letter-spacing:-.02em;text-transform:uppercase}',
        '.svc-hd small{display:block;margin-top:3px;color:#8a8a93;font-size:12px}',
        '.svc-ls{display:grid;grid-template-columns:minmax(0,1fr);gap:8px;padding:12px}',
        '.svc-it{position:relative;display:flex;align-items:center;gap:13px;padding:12px 14px 12px 12px;border-radius:16px;border:1px solid rgba(255,255,255,.07);background:#16161a;color:inherit;text-decoration:none;transition:border-color .15s,background .15s,transform .15s}',
        'a.svc-it:hover{border-color:color-mix(in srgb,var(--ac) 55%,transparent);background:#1a1a1f;transform:translateY(-1px)}',
        '.svc-it.cur{border-color:color-mix(in srgb,var(--ac) 60%,transparent);background:linear-gradient(120deg,color-mix(in srgb,var(--ac) 12%,#16161a),#16161a 70%)}',
        '.svc-ic{position:relative;width:46px;height:46px;flex-shrink:0}',
        '.svc-ic img{width:46px;height:46px;object-fit:cover;border-radius:14px;background:#000}',
        '.svc-ic img.rd{border-radius:50%}',
        '.svc-tx{flex:1;min-width:0}',
        '.svc-nm{display:block;font-size:17px;line-height:1.1;letter-spacing:-.03em;color:#fff}',
        '.svc-tx small{display:block;margin-top:4px;color:#a1a1aa;font-size:12.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
        '.svc-now{flex:none;padding:5px 9px;border-radius:999px;background:var(--ac);color:#0a0a0b;font:800 10px/1 Montserrat,Inter,sans-serif;letter-spacing:.08em;text-transform:uppercase}',
        '.svc-go{flex:none;width:30px;height:30px;display:grid;place-items:center;border-radius:50%;border:1px solid rgba(255,255,255,.14);color:#d4d4d8;transition:background .15s,color .15s,border-color .15s,transform .15s}',
        '.svc-go svg{width:14px;height:14px}',
        'a.svc-it:hover .svc-go{background:var(--ac);border-color:var(--ac);color:#0a0a0b;transform:translateX(2px)}',
        '.svc-ft{display:flex;align-items:center;justify-content:center;gap:7px;padding:12px;border-top:1px solid rgba(255,255,255,.07);color:#a1a1aa;font:700 12.5px/1 Inter,sans-serif;text-decoration:none;transition:color .15s,background .15s}',
        '.svc-ft:hover{color:#fff;background:rgba(255,255,255,.03)}',
        '.svc-ft svg{width:13px;height:13px}',
        'html[data-theme="light"] .svc-btn{border-color:rgba(0,0,0,.14);background:rgba(0,0,0,.04)}',
        '@media (max-width:480px){.svc-pop{position:fixed;left:12px;right:12px;top:66px;width:auto;transform-origin:30px 0}}'
    ].join('');
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

    var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
    var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
    var SWAP = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 9.5 12 4.5l5 5M7 14.5l5 5 5-5"/></svg>';

    var wrap = document.createElement('span');
    wrap.className = 'svc-sw';
    brand.parentNode.insertBefore(wrap, brand);
    wrap.appendChild(brand);
    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'svc-btn';
    btn.setAttribute('aria-haspopup', 'true'); btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Cambiar de servicio'); btn.title = 'Cambiar de servicio';
    btn.innerHTML = SWAP;
    var pop = document.createElement('div');
    pop.className = 'svc-pop'; pop.setAttribute('role', 'menu');
    pop.innerHTML =
        '<div class="svc-hd"><img src="' + esc(assets + '/assets/img/brand/favicon.png') + '" alt=""><div><b>Namilin OFC</b><small>Cambiar de servicio</small></div></div>' +
        '<div class="svc-ls">' + LIST.map(function (s) {
            var on = s.id === cur;
            var name = '<span class="svc-nm" style="font-family:' + s.font + ';font-weight:' + s.w + '">' + esc(s.a) + '<span style="color:' + s.tx + '">' + esc(s.b) + '</span></span>';
            var body = '<span class="svc-ic"><img src="' + esc(s.img) + '" alt=""' + (s.round ? ' class="rd"' : '') + '></span>' +
                '<span class="svc-tx">' + name + '<small>' + esc(s.sub) + '</small></span>' +
                (on ? '<span class="svc-now">Estás aquí</span>' : '<span class="svc-go">' + ARROW + '</span>');
            return on
                ? '<div class="svc-it cur" role="menuitem" aria-current="true" style="--ac:' + s.ac + '">' + body + '</div>'
                : '<a class="svc-it" role="menuitem" href="' + esc(s.href) + '" style="--ac:' + s.ac + '">' + body + '</a>';
        }).join('') + '</div>' +
        (o.hub ? '<a class="svc-ft" href="' + esc(o.hub + '/') + '">Ver todos los servicios de Namilin OFC ' + ARROW + '</a>' : '');
    wrap.appendChild(btn);
    wrap.appendChild(pop);

    function setOpen(v) { wrap.classList.toggle('open', v); btn.setAttribute('aria-expanded', String(v)); }
    btn.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); setOpen(!wrap.classList.contains('open')); });
    pop.addEventListener('click', function (e) { e.stopPropagation(); });
    document.addEventListener('click', function () { setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
})();
