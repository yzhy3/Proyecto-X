"use client";

import { useEffect } from "react";

// Lo que el HTML original hacía en un <script> al cargar /grupos:
// 1) armar el enlace de «Compartir» con el dominio real y
// 2) avisar al panel quién entró a un grupo o fue a donar (NB.track, de nb-app.js).
type NBWindow = Window & {
  NB?: { track?: (t: string, data?: Record<string, string>) => void };
};

export default function GroupsInteractions() {
  useEffect(() => {
    const share = document.getElementById("stk-share") as HTMLAnchorElement | null;
    if (share) {
      share.href =
        "https://wa.me/?text=" +
        encodeURIComponent(
          "Grupos de WhatsApp gratis con ZenBot: stickers al instante, juegos y más 🩵 " +
            location.origin +
            "/grupos",
        );
    }

    const onClick = (e: MouseEvent) => {
      const el = e.target as Element | null;
      const join = el?.closest("[data-stk-join]");
      const donar = el?.closest("[data-stk-donar]");
      const NB = (window as NBWindow).NB;
      if (!NB?.track) return;
      if (join) {
        NB.track("grupo", {
          g: join.getAttribute("data-stk-join") ?? "",
          n: join.getAttribute("data-stk-name") ?? "",
        });
      }
      if (donar) NB.track("donar", { via: donar.getAttribute("data-stk-donar") ?? "" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
