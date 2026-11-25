export default function Business() {
  return (
    <section className="sec biz-sec" id="negocios">
      <div className="wrap">
        <div className="sec-head rv" id="negocios-que">
          <span className="kicker">ZenBot para negocios</span>
          <h2>
            Un asistente que
            {" "}
            <span className="grad-tx">vende y atiende</span>
            {" "}
            por ti
          </h2>
          <p>Lo armamos a la medida de tu negocio, con tus productos, precios, horarios y forma de trabajar.</p>
        </div>
        <div className="biz-grid">
          <div className="biz-feats rv">
            <div>
              <span className="bf-ico"><svg><use href="#i-bolt" /></svg></span>
              <b>Responde al instante, 24/7</b>
              <p>Tus clientes reciben respuesta en segundos, aunque sea de madrugada o estés ocupado.</p>
            </div>
            <div>
              <span className="bf-ico"><svg><use href="#i-list" /></svg></span>
              <b>Catálogo y precios</b>
              <p>Muestra tus productos o servicios con botones, sin que el cliente tenga que esperar.</p>
            </div>
            <div>
              <span className="bf-ico"><svg><use href="#i-box" /></svg></span>
              <b>Pedidos y reservas</b>
              <p>Toma pedidos, agenda citas y te deja todo anotado para que solo confirmes.</p>
            </div>
            <div>
              <span className="bf-ico"><svg><use href="#i-user" /></svg></span>
              <b>Pasa a una persona</b>
              <p>Cuando el cliente necesita algo especial, el bot te avisa y tú sigues la conversación.</p>
            </div>
            <div>
              <span className="bf-ico"><svg><use href="#i-clock" /></svg></span>
              <b>Horarios y ubicación</b>
              <p>Respuestas listas para lo que más te preguntan: dónde estás, a qué hora abres y cómo pagar.</p>
            </div>
            <div>
              <span className="bf-ico"><svg><use href="#i-spark" /></svg></span>
              <b>Con tu marca</b>
              <p>Habla con el tono de tu negocio, con tu nombre y tus mensajes de bienvenida.</p>
            </div>
          </div>
          <div className="biz-form panel rv d1">
            <div className="biz-price">
              <span>Precio según lo que necesites</span>
              <b>
                <small>USD</small>
                250
                <em>a</em>
                320
              </b>
              <p>Cada negocio es distinto: cuéntanos qué necesitas y te escribimos con una propuesta.</p>
            </div>
            <form id="biz-form" noValidate data-wa="573227488395">
              <div className="bz-row">
                <label>
                  <span>Tu nombre</span>
                  <input
                    name="name"
                    autoComplete="name"
                    maxLength={80}
                    required
                    placeholder="Ej.: Laura Gómez"
                  />
                </label>
                <label>
                  <span>Nombre del negocio</span>
                  <input
                    name="business"
                    autoComplete="organization"
                    maxLength={80}
                    required
                    placeholder="Ej.: Dulce Antojo"
                  />
                </label>
              </div>
              <div className="bz-row">
                <label>
                  <span>Tipo de negocio</span>
                  <span className="sel">
                    <select name="kind" required>
                      <option value="">Elige uno</option>
                      <option>Tienda o emprendimiento</option>
                      <option>Restaurante, comidas o postres</option>
                      <option>Belleza, uñas o barbería</option>
                      <option>Salud o consultorio</option>
                      <option>Servicios profesionales</option>
                      <option>Educación o cursos</option>
                      <option>Otro</option>
                    </select>
                  </span>
                </label>
                <label>
                  <span>Tu WhatsApp</span>
                  <input
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={22}
                    required
                    placeholder="+57 300 123 4567"
                  />
                </label>
              </div>
              <label>
                <span>
                  Correo
                  {" "}
                  <i>(opcional)</i>
                </span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={120}
                  placeholder="tucorreo@ejemplo.com"
                />
              </label>
              <label>
                <span>¿Qué quieres que haga tu bot?</span>
                <textarea
                  name="need"
                  rows={4}
                  maxLength={1200}
                  required
                  placeholder="Ej.: que muestre mi menú, tome pedidos a domicilio y me avise cuando alguien quiera hablar conmigo."
                />
              </label>
              <label className="check">
                <input type="checkbox" name="accept" />
                <span className="box"><svg><use href="#i-check" /></svg></span>
                <span>
                  Acepto que me contacten por WhatsApp o correo y la
                  {" "}
                  <a href="/privacidad" target="_blank" rel="noopener">política de tratamiento de datos</a>
                  .
                </span>
              </label>
              <div className="alert" id="biz-alert" role="alert" hidden />
              <button type="submit" className="btn btn-primary bz-send">
                Enviar mis datos
                <svg><use href="#i-send" /></svg>
              </button>
            </form>
            <div className="bz-done" id="biz-done" hidden>
              <span className="o-icon ok"><svg><use href="#i-check" /></svg></span>
              <h3>¡Recibimos tus datos!</h3>
              <p>
                Revisamos lo que necesitas y te escribimos por WhatsApp con una propuesta. Si prefieres, escríbenos tú ahora mismo.
              </p>
              <a className="btn btn-ghost" id="biz-wa" href="#" target="_blank" rel="noopener">
                <svg><use href="#i-chat" /></svg>
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
