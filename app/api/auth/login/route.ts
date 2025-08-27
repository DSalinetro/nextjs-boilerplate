import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const password = form.get("password");
  const next = (form.get("next") as string) || "/admin";

  const ok = typeof password === "string" && password === process.env.ADMIN_PASSWORD;
  if (!ok) {
    const url = new URL("/admin/login", req.url);
    url.searchParams.set("error", "Invalid password");
    return NextResponse.redirect(url);
  }

  const res = NextResponse.redirect(new URL(next, req.url));
  res.cookies.set("admin", "true", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  });
  return res;
}
