/* eslint-disable @next/next/no-img-element */

export default function FinalCta() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="final rv">
          <img src="/images/namibot-240.webp" alt="" width={104} height={104} loading="lazy" />
          <div>
            <h2>¿Listo para darle superpoderes a tu grupo?</h2>
            <p>Compra en minutos y ZenBot empieza a trabajar en tu grupo.</p>
          </div>
          <div className="cta-row">
            <a className="btn btn-primary" href="/comprar">Comprar ahora</a>
            <a
              className="btn btn-ghost"
              href="https://wa.me/message/JVQ2XYUNRJCSE1"
              target="_blank"
              rel="noopener"
            >
              <svg><use href="#i-chat" /></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
