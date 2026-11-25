/* eslint-disable @next/next/no-img-element */

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-in">
          <div>
            <a className="brand" href="/">
              <img src="/images/namibot-96.webp" alt="" width={38} height={38} loading="lazy" />
              <span>
                Zen
                <b>Bot</b>
              </span>
            </a>
            <p className="foot-tag">Cumple tus necesidades en tus grupos de WA. ZenBot hecho por ZenlinOFC.</p>
          </div>
          <div>
            <h4>ZenBot</h4>
            <ul>
              <li><a href="/funciones">Funciones</a></li>
              <li><a href="/#planes">Planes</a></li>
              <li><a href="/comprar">Comprar</a></li>
              <li><a href="/pedidos">Mis pedidos</a></li>
              <li><a href="/grupos">Grupos gratis</a></li>
              <li><a href="/grupos#donar">Donar</a></li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li><a href="mailto:info@namilinofc.com">info@namilinofc.com</a></li>
              <li><a href="https://instagram.com/Zenchatsbot" target="_blank" rel="noopener">Instagram</a></li>
              <li><a href="https://wa.me/message/JVQ2XYUNRJCSE1" target="_blank" rel="noopener">WhatsApp</a></li>
            </ul>
          </div>
          <div>
            <h4>ZenlinOFC</h4>
            <ul>
              <li><a href="https://Zenlinofc.com" target="_blank" rel="noopener">Zenlinofc.com</a></li>
              <li><a href="/?para=negocios#negocios">ZenBot para negocios</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacidad">Privacidad y datos</a></li>
              <li><a href="/terminos">Términos</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 ZenlinOFC</span>
          <p>
            ZenBot es un servicio independiente: no está afiliado a WhatsApp, Meta ni Garena (Free Fire). Las marcas mencionadas son de sus dueños.
          </p>
        </div>
      </div>
    </footer>
  );
}
