/* eslint-disable @next/next/no-img-element */

export default function Header() {
  return (
    <header className="top" id="top">
      <div className="wrap top-in">
        <a
          className="brand"
          href="/"
          aria-label="ZenBot, inicio"
          data-svc-switch="nb"
          data-hub="https://Zenlinofc.com"
          data-nc="https://Zenchats.Zenlinofc.com"
          data-nb="https://Zenbots.Zenlinofc.com"
        >
          <img src="/images/namibot-96.webp" alt="" width={38} height={38} />
          <span>
            Zen
            <b>Bot</b>
          </span>
        </a>
        <nav className="nav" id="nav" aria-label="Secciones">
          <a href="/funciones">Funciones</a>
          <a href="/grupos">Grupos gratis</a>
          <a href="/#como" className="nav-wide">Cómo funciona</a>
          <a href="/#planes">Planes</a>
          <a href="/?para=negocios#negocios">Negocios</a>
          <a href="/#preguntas">Preguntas</a>
          <a href="/pedidos" className="nav-mob">Mis pedidos</a>
        </nav>
        <div className="top-actions">
          <div id="nb-acct" />
          <a className="btn btn-ghost btn-sm top-orders" href="/pedidos">
            <svg><use href="#i-box" /></svg>
            Mis pedidos
          </a>
          <a className="btn btn-primary btn-sm top-cta" href="/comprar">Comprar</a>
          <button
            className="menu-btn"
            type="button"
            aria-controls="nav"
            aria-expanded="false"
            aria-label="Abrir menú"
          >
            <svg><use href="#i-menu" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
