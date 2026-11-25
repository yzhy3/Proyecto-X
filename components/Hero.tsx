export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="wrap hero-in">
        <div className="hero-copy">
          <div className="modes" role="tablist" aria-label="¿Para qué lo quieres?">
            <button type="button" role="tab" data-mode-btn="grupos" className="on" aria-selected="true">
              <svg><use href="#i-groups" /></svg>
              Para grupos
            </button>
            <button type="button" role="tab" data-mode-btn="negocios" aria-selected="false">
              <svg><use href="#i-brief" /></svg>
              Para negocios
            </button>
          </div>
          <div className="for-stack">
            <div data-for="grupos" className="is-on">
              <h1>
                Cumple tus necesidades en tus
                {" "}
                <span className="grad-tx">grupos de WA</span>
              </h1>
              <p className="lead">
                ZenBot da la bienvenida, borra los links, frena el spam, arma listas y anima a tus miembros con stickers, música y juegos. Tú le das admin y él se encarga, de día y de noche.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="/comprar">
                  Comprar ZenBot
                  <svg><use href="#i-arrow" /></svg>
                </a>
                <a className="btn btn-ghost" href="/funciones">Ver funciones</a>
              </div>
              <ul className="facts">
                <li>
                  <svg><use href="#i-check" /></svg>
                  Android, iPhone y PC
                </li>
                <li>
                  <svg><use href="#i-check" /></svg>
                  Desde 4,99 USD al mes
                </li>
                <li>
                  <svg><use href="#i-check" /></svg>
                  Activo 24/7
                </li>
              </ul>
            </div>
            <div data-for="negocios" aria-hidden="true">
              <h1>
                Tu negocio atendiendo por
                {" "}
                <span className="grad-tx">WhatsApp 24/7</span>
              </h1>
              <p className="lead">
                Un ZenBot hecho a la medida de tu negocio: responde a tus clientes al instante, muestra tu catálogo, toma pedidos y agenda citas, incluso mientras duermes.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#negocios">
                  Cotizar mi bot
                  <svg><use href="#i-arrow" /></svg>
                </a>
                <a className="btn btn-ghost" href="#negocios-que">Qué puede hacer</a>
              </div>
              <ul className="facts">
                <li>
                  <svg><use href="#i-check" /></svg>
                  Hecho a tu medida
                </li>
                <li>
                  <svg><use href="#i-check" /></svg>
                  De 250 a 320 USD
                </li>
                <li>
                  <svg><use href="#i-check" /></svg>
                  Te asesoramos
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hero-side">
          <div
            className="demo"
            id="demo"
            data-mode="grupos"
            aria-label="Ejemplo de ZenBot en un chat de WhatsApp"
          >
            <div className="iph">
              <i className="iph-b b1" />
              <i className="iph-b b2" />
              <i className="iph-b b3" />
              <i className="iph-b b4" />
              <div className="iph-screen">
                <span className="iph-island" aria-hidden="true" />
                <div className="iph-status" aria-hidden="true">
                  <span>9:41</span>
                  <span className="iph-icons">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <rect x="2" y="15" width="3.4" height="6" rx="1" />
                      <rect x="7.5" y="11.5" width="3.4" height="9.5" rx="1" />
                      <rect x="13" y="8" width="3.4" height="13" rx="1" />
                      <rect x="18.5" y="4" width="3.4" height="17" rx="1" />
                    </svg>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    >
                      <path d="M2.5 9.5a14 14 0 0 1 19 0M6 13.2a9 9 0 0 1 12 0M9.5 16.8a4 4 0 0 1 5 0" />
                      <circle cx="12" cy="20" r="1" fill="currentColor" />
                    </svg>
                    <span className="bat"><i /></span>
                  </span>
                </div>
                <div className="wa-head">
                  <span className="wa-back glass" aria-hidden="true">
                    <svg
                      viewBox="0 0 22 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14.5 3.5 6.2 12l8.3 8.5" />
                    </svg>
                    3
                  </span>
                  <span className="ph-av" id="ph-av">🫂</span>
                  <div className="ph-who">
                    <b id="ph-name">Los Reales 🫂😍</b>
                    <small id="ph-sub">Andrés, Valentina, Kevin, Tú y 33 más</small>
                  </div>
                  <span className="wa-acts glass" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="1.5" y="5" width="14" height="14" rx="3.2" />
                      <path d="M15.5 10 21.5 6.6v10.8l-6-3.4" />
                    </svg>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="ph-feed" id="ph-feed" aria-hidden="true" />
                <div className="wa-foot" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  >
                    <path d="M12 3.5v17M3.5 12h17" />
                  </svg>
                  <span className="wa-in">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    >
                      <path d="M14 21H9a6 6 0 0 1-6-6V9a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v5c0 3.9-3.1 7-7 7z" />
                      <path d="M14 21v-2a5 5 0 0 1 5-5h2" />
                    </svg>
                  </span>
                  <svg
                    className="wa-cam"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
                    />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                  <span className="wa-mic">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <rect
                        x="8.7"
                        y="1.8"
                        width="6.6"
                        height="12.4"
                        rx="3.3"
                        fill="currentColor"
                        stroke="none"
                      />
                      <path d="M5.2 11a6.8 6.8 0 0 0 13.6 0M12 17.8v3.6" />
                    </svg>
                  </span>
                </div>
                <span className="iph-home" aria-hidden="true" />
              </div>
            </div>
          </div>
          <ol className="demo-steps" id="demo-steps" aria-label="Lo que muestra el ejemplo" />
        </div>
      </div>
    </section>
  );
}
