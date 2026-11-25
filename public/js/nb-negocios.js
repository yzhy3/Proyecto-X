// ZenBot · formulario «ZenBot para negocios» (inicio, #negocios): la persona deja sus datos y lo que necesita;
// llega al panel /admin (ZenBots → Negocios) y por correo, y se le escribe por WhatsApp con una propuesta.
(function () {
    'use strict';
    var form = document.getElementById('biz-form');
    if (!form) return;
    var alertEl = document.getElementById('biz-alert'), done = document.getElementById('biz-done');
    var WA = form.getAttribute('data-wa') || '';
    var f = function (n) { return form.elements[n]; };
    function err(msg, field) {
        alertEl.textContent = msg; alertEl.hidden = !msg;
        form.querySelectorAll('.bad').forEach(function (x) { x.classList.remove('bad'); });
        if (field) { var el = f(field); el.closest('label').classList.add('bad'); el.focus(); }
    }
    form.addEventListener('input', function (e) { var l = e.target.closest('label'); if (l) l.classList.remove('bad'); });
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var d = {
            name: f('name').value.trim(), business: f('business').value.trim(), kind: f('kind').value,
            phone: f('phone').value.trim(), email: f('email').value.trim(), need: f('need').value.trim()
        };
        if (d.name.length < 2) return err('Escribe tu nombre.', 'name');
        if (d.business.length < 2) return err('Escribe el nombre de tu negocio.', 'business');
        if (!d.kind) return err('Elige el tipo de negocio.', 'kind');
        if (d.phone.replace(/\D/g, '').length < 8) return err('Escribe tu número de WhatsApp con el indicativo del país (ej.: +57).', 'phone');
        if (d.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email)) return err('Revisa tu correo o déjalo vacío.', 'email');
        if (d.need.length < 10) return err('Cuéntanos un poco más de lo que quieres que haga tu bot.', 'need');
        if (!f('accept').checked) return err('Para enviarlo, acepta que te contactemos y la política de datos.');
        err('');
        var btn = form.querySelector('.bz-send');
        btn.classList.add('is-busy'); btn.disabled = true;
        d.vid = window.NB ? NB.vid : '';
        d.accept = true;
        NB.api('/api/nb/lead', { body: d }).then(function (j) {
            btn.classList.remove('is-busy'); btn.disabled = false;
            if (!j.success) return err(j.error || 'No se pudo enviar. Intenta de nuevo.');
            var txt = 'Hola, quiero un ZenBot para mi negocio 🤖\n' +
                'Soy *' + d.name + '* de *' + d.business + '* (' + d.kind + ').\n' +
                'Necesito: ' + d.need.slice(0, 600);
            document.getElementById('biz-wa').href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(txt);
            form.hidden = true; done.hidden = false;
            done.scrollIntoView({ behavior: NB.reduce ? 'auto' : 'smooth', block: 'center' });
        });
    });
})();
