/* eslint-disable @next/next/no-img-element */
import { GRUPOS } from "@/lib/grupos";

export default function GroupList() {
  return (
    <div className="stk-list">
      {GRUPOS.map((g) => {
        const abierto = g.disponible && !!g.enlace;
        return (
          <article key={g.id} className={abierto ? "stk-g" : "stk-g is-full"}>
            <img
              className="stk-ico stk-foto"
              src={g.foto}
              alt=""
              width={46}
              height={46}
              loading="lazy"
            />
            <div className="stk-g-tx">
              <b>{g.nombre}</b>
              <span className="stk-meta">
                <span className="stk-cat">{g.categoria}</span>
                <span className={abierto ? "stk-st on" : "stk-st"}>
                  <i />
                  {abierto ? "Disponible" : "Lleno"}
                </span>
              </span>
            </div>
            {abierto ? (
              <a
                className="btn btn-primary btn-sm stk-join"
                href={g.enlace}
                target="_blank"
                rel="noopener"
                data-stk-join={g.id}
                data-stk-name={g.nombre}
              >
                <svg><use href="#i-arrow" /></svg>Unirme gratis
              </a>
            ) : (
              <button className="btn btn-ghost btn-sm stk-join" type="button" disabled>
                <svg><use href="#i-lock" /></svg>Grupo lleno
              </button>
            )}
          </article>
        );
      })}
    </div>
  );
}
