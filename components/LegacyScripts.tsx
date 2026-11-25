"use client";

import { useEffect } from "react";

// Scripts originales del sitio (public/js). Son imperativos: buscan elementos
// del DOM por id/clase y los animan, así que se cargan una sola vez, en este
// orden, cuando la página ya se hidrató.
const SCRIPTS = [
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

export default function LegacyScripts() {
  useEffect(() => {
    if (started) return; // evita la doble ejecución de React StrictMode en desarrollo
    started = true;
    (async () => {
      for (const src of SCRIPTS) await load(src);
    })();
  }, []);

  return null;
}
