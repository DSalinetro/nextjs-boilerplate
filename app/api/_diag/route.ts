import { NextResponse } from "next/server";

export async function GET() {
  // do NOT return the value, just whether it exists & looks non-empty
  const hasAdminPassword = Boolean(process.env.ADMIN_PASSWORD && process.env.ADMIN_PASSWORD.trim().length > 0);

  return NextResponse.json({
    ok: true,
    hasAdminPassword,
    // add anything else you want to confirm
  });
}
