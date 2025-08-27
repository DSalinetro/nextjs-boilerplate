"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ADMIN_COOKIE = "admin";

export async function loginAction(formData: FormData) {
  const password = formData.get("password");
  await new Promise(r => setTimeout(r, 150));
  const ok = typeof password === "string" && password === process.env.ADMIN_PASSWORD;
  if (!ok) return { ok: false, error: "Invalid password." } as const;

  cookies().set(ADMIN_COOKIE, "true", {
    httpOnly: true, sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/", maxAge: 60 * 60 * 8
  });
  const next = (formData.get("next") as string) || "/admin";
  redirect(next);
}

export async function logoutAction() {
  cookies().delete(ADMIN_COOKIE);
  redirect("/admin/login");
}
