import { NextResponse } from "next/server";

// PLACEHOLDER: sesión de usuario. Sin backend de cuentas, siempre responde «no autenticado».
export async function GET() {
  return NextResponse.json({ user: null }, { status: 401 });
}
