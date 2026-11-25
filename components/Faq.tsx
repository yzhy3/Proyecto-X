export default function Faq() {
  return (
    <section className="sec sec-alt" id="preguntas">
      <div className="wrap">
        <div className="sec-head rv">
          <span className="kicker">Preguntas frecuentes</span>
          <h2>Lo que más nos preguntan</h2>
        </div>
        <div className="faq rv">
          <details>
            <summary>¿Qué necesito para comprar?</summary>
            <p>
              Una cuenta en Zenlinofc.com (puedes entrar con Google) y el enlace de invitación de tu grupo. Eliges el plan, pegas el enlace, pagas y nosotros agregamos a ZenBot.
            </p>
          </details>
          <details>
            <summary>¿Qué pasa después de comprar?</summary>
            <p>
              Te llega un correo con tu pedido. Luego agregamos a ZenBot a tus grupos desde el usuario
              {" "}
              <b>@Zenbot002</b>
              {" "}
              usando el enlace que nos diste (déjalo activo hasta entonces) y te avisamos por correo cuando esté funcionando. El tiempo de tu plan empieza a contar desde ese momento. Todo lo puedes seguir en
              {" "}
              <a href="/pedidos">Mis pedidos</a>
              .
            </p>
          </details>
          <details>
            <summary>¿Por qué tengo que darle admin al bot?</summary>
            <p>
              Para borrar los mensajes con enlaces, frenar el spam, expulsar y cambiar los ajustes del grupo, WhatsApp exige que el bot sea administrador. Apenas entre, cualquier admin del grupo se lo puede dar.
            </p>
          </details>
          <details>
            <summary>¿Cómo puedo pagar?</summary>
            <p>
              En Colombia con Nequi, Daviplata, PSE o tarjeta. En México, Argentina, Brasil, Chile, Perú y otros países, con los medios de pago locales. Y en todo el mundo con PayPal.
            </p>
          </details>
          <details>
            <summary>¿Funciona en iPhone y en PC?</summary>
            <p>Sí. Los menús con botones y las listas se ven en WhatsApp de Android, iPhone y PC.</p>
          </details>
          <details>
            <summary>¿El precio es por grupo?</summary>
            <p>
              Sí, cada plan es 1 bot para 1 grupo. Al comprar eliges para cuántos grupos (hasta 10 por pedido). Si necesitas más, escríbenos.
            </p>
          </details>
          <details>
            <summary>¿Qué pasa cuando se vence mi plan?</summary>
            <p>
              ZenBot avisa en el grupo 3 días y 1 día antes. Al vencer, se pausa en ese grupo hasta que renueves; para renovar escribe
              {" "}
              <span className="cmd">.comprar</span>
              .
            </p>
          </details>
          <details>
            <summary>¿Qué incluye el plan permanente?</summary>
            <p>
              Pagas una sola vez y tu grupo no tiene fecha de vencimiento mientras el servicio ZenBot exista. Por eso cuesta menos: no incluye soporte prioritario. Los detalles están en los
              {" "}
              <a href="/terminos">términos</a>
              .
            </p>
          </details>
          <details>
            <summary>¿Y si quiero un bot para el chat de mi negocio?</summary>
            <p>
              Para eso está
              {" "}
              <a href="/?para=negocios#negocios">ZenBot para negocios</a>
              : atiende a tus clientes por chat privado, muestra tu catálogo, toma pedidos y agenda citas. Lo armamos a la medida y cuesta de 250 a 320 USD según lo que necesites. Déjanos tus datos y te escribimos con una propuesta.
            </p>
          </details>
          <details>
            <summary>¿Necesito dejar mi celular encendido?</summary>
            <p>
              No. ZenBot funciona en nuestros servidores las 24 horas; tu celular puede estar apagado y el bot sigue trabajando en el grupo.
            </p>
          </details>
          <details>
            <summary>¿Puedo arrepentirme de la compra?</summary>
            <p>
              Sí. Tienes 5 días hábiles después de comprar para retractarte, siempre que ZenBot todavía no haya empezado a funcionar en tu grupo; en ese caso te devolvemos el dinero. Los detalles están en los
              {" "}
              <a href="/terminos">términos</a>
              .
            </p>
          </details>
          <details>
            <summary>¿Dónde veo mis pedidos?</summary>
            <p>
              Arriba, en
              {" "}
              <b>Mis pedidos</b>
              . Entras con la misma cuenta con la que compraste y ves cada compra: cuántos bots, cuándo empezó, cuándo vence y cuántos días le quedan.
            </p>
          </details>
          <details>
            <summary>¿Qué es el soporte prioritario?</summary>
            <p>En los planes de 1, 3 y 6 meses tus dudas y ajustes se atienden primero.</p>
          </details>
          <details>
            <summary>¿ZenBot es de WhatsApp?</summary>
            <p>No. ZenBot es un servicio independiente hecho por ZenlinOFC; no está afiliado a WhatsApp ni a Meta.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
