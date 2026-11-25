export default function Subscription() {
  return (
    <section className="sec" id="suscripcion">
      <div className="wrap subs">
        <div className="rv">
          <span className="kicker">Tu suscripción</span>
          <h2>Siempre sabes hasta cuándo tienes tu bot</h2>
          <p>Sin cobros sorpresa ni renovaciones automáticas: tú decides cuándo renovar.</p>
        </div>
        <ul className="timeline">
          <li className="rv">
            <span className="d">.verfecha</span>
            <div>
              <b>Consulta tu fecha cuando quieras</b>
              <span>
                Un administrador del grupo escribe
                {" "}
                <span className="cmd">.verfecha</span>
                {" "}
                y ZenBot le dice hasta cuándo está activo.
              </span>
            </div>
          </li>
          <li className="rv d1">
            <span className="d w">3 y 1 día</span>
            <div>
              <b>Te avisamos antes de que venza</b>
              <span>ZenBot avisa en el grupo 3 días y 1 día antes de la fecha.</span>
            </div>
          </li>
          <li className="rv d2">
            <span className="d x">Al vencer</span>
            <div>
              <b>Se pausa hasta que renueves</b>
              <span>
                El bot deja de responder en ese grupo y vuelve al renovar con
                {" "}
                <span className="cmd">.comprar</span>
                .
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
