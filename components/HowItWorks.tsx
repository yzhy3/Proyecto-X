export default function HowItWorks() {
  return (
    <section className="sec" id="como">
      <div className="wrap">
        <div className="sec-head rv">
          <span className="kicker">Cómo funciona</span>
          <h2>Tu grupo con ZenBot en 3 pasos</h2>
        </div>
        <ol className="steps">
          <li className="step rv">
            <h3>Elige tu plan</h3>
            <p>Escoge por cuánto tiempo y para cuántos grupos, y paga como prefieras.</p>
          </li>
          <li className="step rv d1">
            <h3>Pega el enlace de tu grupo</h3>
            <p>Con el enlace de invitación, ZenBot entra a tu grupo o comunidad.</p>
          </li>
          <li className="step rv d2">
            <h3>
              Escribe
              {" "}
              <span className="cmd">.menu</span>
            </h3>
            <p>Activa lo que necesites: bienvenidas, antilink, horarios y mucho más.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
