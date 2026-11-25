import type { CSSProperties } from "react";

export default function Features() {
  return (
    <section className="sec" id="funciones">
      <div className="wrap">
        <div className="sec-head rv">
          <span className="kicker">Funciones</span>
          <h2>
            Todo lo que tu grupo necesita, en
            {" "}
            <span className="grad-tx">un solo bot</span>
          </h2>
          <p>Comandos listos para usar y automáticos que trabajan solos, aunque nadie del grupo esté conectado.</p>
        </div>
        <div className="fcloud rv">
          <a className="ftag" href="/funciones#f-basico" style={{ "--i": 0 } as CSSProperties}>
            <svg><use href="#i-spark" /></svg>
            Lo básico
          </a>
          <a className="ftag hot" href="/funciones#f-admin" style={{ "--i": 1 } as CSSProperties}>
            <svg><use href="#i-shield" /></svg>
            Administrar el grupo
          </a>
          <a className="ftag" href="/funciones#f-menciones" style={{ "--i": 2 } as CSSProperties}>
            <svg><use href="#i-bell" /></svg>
            Menciones y avisos
          </a>
          <a className="ftag" href="/funciones#f-horarios" style={{ "--i": 3 } as CSSProperties}>
            <svg><use href="#i-clock" /></svg>
            Horarios y alarmas
          </a>
          <a className="ftag" href="/funciones#f-bienvenidas" style={{ "--i": 4 } as CSSProperties}>
            <svg><use href="#i-wave" /></svg>
            Bienvenidas y despedidas
          </a>
          <a className="ftag" href="/funciones#f-listas" style={{ "--i": 5 } as CSSProperties}>
            <svg><use href="#i-list" /></svg>
            Listas, eventos y sorteos
          </a>
          <a className="ftag hot" href="/funciones#f-proteccion" style={{ "--i": 6 } as CSSProperties}>
            <svg><use href="#i-lock" /></svg>
            Protección automática
          </a>
          <a className="ftag" href="/funciones#f-auto" style={{ "--i": 7 } as CSSProperties}>
            <svg><use href="#i-bolt" /></svg>
            Interacción automática
          </a>
          <a className="ftag" href="/funciones#f-interruptores" style={{ "--i": 8 } as CSSProperties}>
            <svg><use href="#i-toggle" /></svg>
            Interruptores del grupo
          </a>
          <a className="ftag hot" href="/funciones#f-freefire" style={{ "--i": 9 } as CSSProperties}>
            <svg><use href="#i-target" /></svg>
            Free Fire
          </a>
          <a className="ftag hot" href="/funciones#f-descargas" style={{ "--i": 10 } as CSSProperties}>
            <svg><use href="#i-down" /></svg>
            Descargas
          </a>
          <a className="ftag" href="/funciones#f-convertidores" style={{ "--i": 11 } as CSSProperties}>
            <svg><use href="#i-swap" /></svg>
            Stickers y convertidores
          </a>
          <a className="ftag" href="/funciones#f-audio" style={{ "--i": 12 } as CSSProperties}>
            <svg><use href="#i-music" /></svg>
            Efectos de audio
          </a>
          <a className="ftag" href="/funciones#f-diseno" style={{ "--i": 13 } as CSSProperties}>
            <svg><use href="#i-palette" /></svg>
            Logos y diseños
          </a>
          <a className="ftag" href="/funciones#f-juegos" style={{ "--i": 14 } as CSSProperties}>
            <svg><use href="#i-dice" /></svg>
            Juegos y diversión
          </a>
          <a className="ftag" href="/funciones#f-herramientas" style={{ "--i": 15 } as CSSProperties}>
            <svg><use href="#i-tool" /></svg>
            Herramientas y búsquedas
          </a>
          <a className="ftag" href="/funciones#f-perfil" style={{ "--i": 16 } as CSSProperties}>
            <svg><use href="#i-user" /></svg>
            Perfil de usuario
          </a>
          <a className="ftag" href="/funciones#f-personalizar" style={{ "--i": 17 } as CSSProperties}>
            <svg><use href="#i-edit" /></svg>
            Comandos personalizados
          </a>
        </div>
        <div className="more-funcs rv">
          <a className="btn btn-primary" href="/funciones">
            Ver los 260+ comandos
            <svg><use href="#i-arrow" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
