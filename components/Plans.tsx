export default function Plans() {
  return (
    <section className="sec sec-alt" id="planes">
      <div className="wrap">
        <div className="sec-head rv">
          <span className="kicker">Planes</span>
          <h2>Un precio claro por cada grupo</h2>
          <p>Cada plan es 1 bot para 1 grupo, con todas las funciones incluidas.</p>
        </div>
        <div className="plans rv">
          <article className="plan">
            <h3 className="plan-name">1 mes</h3>
            <p className="plan-price">
              <span className="plan-cur">USD</span>
              <b>4</b>
              <span className="plan-dec">,99</span>
            </p>
            <p className="plan-sub">Pago mensual por grupo</p>
            <p className="plan-save plan-save--empty" aria-hidden="true">&nbsp;</p>
            <ul className="plan-list">
              <li className="ok">Todas las funciones, activo 24/7</li>
              <li className="ok">Avisos 3 días y 1 día antes de vencer</li>
              <li className="ok"><b>Soporte prioritario</b></li>
            </ul>
            <a className="btn btn-ghost plan-btn" href="/comprar?plan=1m">Comprar 1 mes</a>
          </article>
          <article className="plan plan--hot">
            <span className="plan-tag">El más elegido</span>
            <h3 className="plan-name">3 meses</h3>
            <p className="plan-price">
              <span className="plan-cur">USD</span>
              <b>11</b>
              <span className="plan-dec">,99</span>
            </p>
            <p className="plan-sub">Equivale a 4,00 USD al mes</p>
            <p className="plan-save">Ahorras 2,98 USD</p>
            <ul className="plan-list">
              <li className="ok">Todas las funciones, activo 24/7</li>
              <li className="ok">Avisos 3 días y 1 día antes de vencer</li>
              <li className="ok"><b>Soporte prioritario</b></li>
            </ul>
            <a className="btn btn-primary plan-btn" href="/comprar?plan=3m">Comprar 3 meses</a>
          </article>
          <article className="plan">
            <h3 className="plan-name">6 meses</h3>
            <p className="plan-price">
              <span className="plan-cur">USD</span>
              <b>24</b>
              <span className="plan-dec">,99</span>
            </p>
            <p className="plan-sub">Equivale a 4,17 USD al mes</p>
            <p className="plan-save">Ahorras 4,95 USD</p>
            <ul className="plan-list">
              <li className="ok">Todas las funciones, activo 24/7</li>
              <li className="ok">Avisos 3 días y 1 día antes de vencer</li>
              <li className="ok"><b>Soporte prioritario</b></li>
            </ul>
            <a className="btn btn-ghost plan-btn" href="/comprar?plan=6m">Comprar 6 meses</a>
          </article>
          <article className="plan plan--perm">
            <h3 className="plan-name">Permanente</h3>
            <p className="plan-price">
              <span className="plan-cur">USD</span>
              <b>14</b>
              <span className="plan-dec">,99</span>
            </p>
            <p className="plan-sub">Un solo pago, sin fecha de vencimiento</p>
            <p className="plan-save plan-save--empty" aria-hidden="true">&nbsp;</p>
            <ul className="plan-list">
              <li className="ok">Todas las funciones, activo 24/7</li>
              <li className="ok">Sin renovaciones</li>
              <li className="no">Sin soporte prioritario</li>
            </ul>
            <a className="btn btn-ghost plan-btn" href="/comprar?plan=perm">Comprar permanente</a>
          </article>
        </div>
        <div className="plans-more">
          <div className="more rv">
            <span className="ico"><svg><use href="#i-groups" /></svg></span>
            <div>
              <h3>¿Más de 10 grupos?</h3>
              <p>Escríbenos y te armamos un precio para todos tus grupos.</p>
            </div>
            <a
              className="btn btn-ghost btn-sm"
              href="https://wa.me/message/JVQ2XYUNRJCSE1"
              target="_blank"
              rel="noopener"
            >
              Pedir precio
            </a>
          </div>
          <div className="more rv d1">
            <span className="ico"><svg><use href="#i-brief" /></svg></span>
            <div>
              <h3>Para negocios</h3>
              <p>ZenBot a la medida de tu negocio, con precio personalizado.</p>
            </div>
            <a
              className="btn btn-ghost btn-sm"
              href="mailto:info@namilinofc.com?subject=NamiBot%20para%20mi%20negocio"
            >
              Escribir
            </a>
          </div>
        </div>
        <div className="pay-row rv">
          Paga con
          {" "}
          <span className="pm">Nequi</span>
          <span className="pm">Daviplata</span>
          <span className="pm">PSE</span>
          <span className="pm">Tarjeta</span>
          <span className="pm">PayPal</span>
          <span className="pm">Pagos locales de tu país</span>
        </div>
      </div>
    </section>
  );
}
