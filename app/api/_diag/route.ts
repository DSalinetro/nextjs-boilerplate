import { NextResponse } from "next/server";

export async function GET() {
  const hasAdminPassword = Boolean(process.env.ADMIN_PASSWORD && process.env.ADMIN_PASSWORD.trim().length > 0);
  return NextResponse.json({ ok: true, hasAdminPassword });
}
