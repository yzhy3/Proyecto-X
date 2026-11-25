/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import IconSprite from "@/components/IconSprite";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegacyScripts from "@/components/LegacyScripts";
import GroupList from "@/components/grupos/GroupList";
import GroupsInteractions from "@/components/grupos/GroupsInteractions";

const SHARE_URL =
  "https://wa.me/?text=Grupos%20de%20WhatsApp%20gratis%20con%20ZenBot%3A%20stickers%20al%20instante%2C%20juegos%20y%20m%C3%A1s%20%F0%9F%A9%B5%20https%3A%2F%2Fzenbots.zenlinofc.com%2Fgrupos";

export const metadata: Metadata = {
  title: "Grupos de WhatsApp gratis · ZenBot",
  description:
    "Únete gratis a los grupos de WhatsApp con ZenBot: stickers al instante, juegos y más. Sin instalar nada.",
  alternates: { canonical: "/grupos" },
  openGraph: {
    type: "website",
    siteName: "ZenBot",
    locale: "es_LA",
    title: "Grupos de WhatsApp gratis con ZenBot",
    description: "Stickers al instante, juegos y más en los grupos gratis de ZenBot.",
    url: "/grupos",
    images: [{ url: "/images/og-namibot.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function GruposPage() {
  return (
    <>
      <IconSprite />
      <Header />

      <main className="stk-page">
        <section className="f-hero stk-hero">
          <div className="wrap">
            <span className="kicker">Gratis para todos</span>
            <h1>
              Grupos de WhatsApp <span className="grad-tx">gratis</span>
            </h1>
            <p>
              Únete a los grupos donde ZenBot está activo: haz stickers al instante, juega y
              diviértete con la comunidad. Sin instalar nada.
            </p>
            <ol className="stk-steps">
              <li>
                <span className="stk-n">1</span>
                <div><b>Únete al grupo</b><small>El que diga «Disponible».</small></div>
              </li>
              <li>
                <span className="stk-n">2</span>
                <div><b>Usa a ZenBot</b><small>Manda una foto y recibe tu sticker.</small></div>
              </li>
              <li>
                <span className="stk-n">3</span>
                <div><b>Comparte</b><small>Invita a tus amigos.</small></div>
              </li>
            </ol>
          </div>
        </section>

        <section className="stk-sec" id="grupos">
          <div className="wrap stk-wrap">
            <div className="stk-head">
              <h2>Grupos</h2>
              <p>Cuando un grupo se llena, abrimos uno nuevo. Únete al que esté disponible.</p>
            </div>
            <GroupList />
          </div>
        </section>

        <section className="stk-sec" id="donar">
          <div className="wrap stk-wrap">
            <div className="panel stk-don">
              <div className="stk-don-tx">
                <span className="kicker">Apoya los grupos</span>
                <h2>
                  ¿Te sirvió? Invítanos un café <span aria-hidden="true">☕</span>
                </h2>
                <p>
                  Los grupos son gratis para todos. Mantener a ZenBot encendido las 24 horas
                  cuesta (servidor y números de WhatsApp). Si quieres ayudar, dona lo que quieras:
                  cada aporte nos ayuda a abrir más grupos.
                </p>
                <div className="stk-don-cta">
                  <a
                    className="btn btn-primary"
                    href="https://www.paypal.com/donate/?hosted_button_id=MSF3GVU8RELRS"
                    target="_blank"
                    rel="noopener"
                    data-stk-donar="paypal"
                  >
                    <svg><use href="#i-spark" /></svg>Donar con PayPal
                  </a>
                  <a
                    className="btn btn-ghost"
                    id="stk-share"
                    href={SHARE_URL}
                    target="_blank"
                    rel="noopener"
                  >
                    <svg><use href="#i-send" /></svg>Compartir los grupos
                  </a>
                </div>
                <small className="stk-don-note">
                  Con tarjeta o con tu cuenta de PayPal, desde cualquier país. ¿No puedes donar?
                  Compartir los grupos también ayuda.
                </small>
              </div>
              <div className="stk-qr">
                <img
                  src="/images/pp-donationqr.png"
                  alt="Código QR para donar con PayPal"
                  width={148}
                  height={148}
                  loading="lazy"
                />
                <span>Escanea para donar</span>
              </div>
            </div>
          </div>
        </section>

        <section className="sec stk-end">
          <div className="wrap">
            <div className="final">
              <img src="/images/namibot-240.webp" alt="" width={104} height={104} loading="lazy" />
              <div>
                <h2>¿Quieres ZenBot en tu propio grupo?</h2>
                <p>Stickers automáticos y más de 260 comandos, activo 24/7.</p>
              </div>
              <div className="cta-row">
                <a className="btn btn-primary" href="/comprar">Comprar ZenBot</a>
                <a className="btn btn-ghost" href="/funciones">Ver funciones</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <LegacyScripts scripts={["/js/svc-switch.js", "/js/nb-app.js"]} />
      <GroupsInteractions />
    </>
  );
}
