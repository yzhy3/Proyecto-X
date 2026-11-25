"use client";

import { useEffect } from "react";

// Scripts originales del sitio (public/js). Son imperativos: buscan elementos
// del DOM por id/clase y los animan, así que se cargan una sola vez, en este
// orden, cuando la página ya se hidrató. Cada página pasa los que necesita;
// si no pasa ninguno, se cargan los de la portada.
const HOME_SCRIPTS = [
  "/js/svc-switch.js",
  "/js/nb-app.js",
  "/js/nb-hero.js",
  "/js/nb.js",
  "/js/nb-negocios.js",
];

let started = false;

function load(src: string) {
  return new Promise<void>((resolve) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => {
      console.error("No se pudo cargar", src);
      resolve();
    };
    document.body.appendChild(s);
  });
}

export default function LegacyScripts({
  scripts = HOME_SCRIPTS,
}: {
  scripts?: string[];
}) {
  useEffect(() => {
    if (started) return; // evita la doble ejecución de React StrictMode en desarrollo
    started = true;
    (async () => {
      for (const src of scripts) await load(src);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
