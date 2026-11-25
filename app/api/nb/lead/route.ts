import { NextResponse } from "next/server";

// PLACEHOLDER: recibe el formulario «ZenBot para negocios» (public/js/nb-negocios.js).
// Hoy solo valida y lo escribe en el log del servidor. Conéctalo a tu correo,
// base de datos o webhook antes de publicar.
export async function POST(req: Request) {
  const d = await req.json().catch(() => null);
  if (!d || typeof d !== "object") {
    return NextResponse.json(
      { success: false, error: "Datos inválidos." },
      { status: 400 },
    );
  }
  const need = String(d.need ?? "").trim();
  if (
    String(d.name ?? "").trim().length < 2 ||
    String(d.business ?? "").trim().length < 2 ||
    !d.kind ||
    String(d.phone ?? "").replace(/\D/g, "").length < 8 ||
    need.length < 10 ||
    d.accept !== true
  ) {
    return NextResponse.json(
      { success: false, error: "Revisa los datos e intenta de nuevo." },
      { status: 400 },
    );
  }
  console.log("[nb/lead]", {
    name: d.name,
    business: d.business,
    kind: d.kind,
    phone: d.phone,
    email: d.email || null,
    need,
  });
  return NextResponse.json({ success: true });
}
