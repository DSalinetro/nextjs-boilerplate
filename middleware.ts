// STEP 3.2 — Admin guard + Logout
// Goal: Protect /admin routes behind a simple password check and add a Logout flow.
// Prereqs: ADMIN_PASSWORD env set (Vercel & .env.local), Step 3.1 login form/actions created or included below.

// ─────────────────────────────────────────────────────────────────────────────
// FILE: middleware.ts
// Guards all /admin pages (except /admin/login) by checking a cookie "admin".
// ─────────────────────────────────────────────────────────────────────────────
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginRoute = pathname.startsWith("/admin/login");

  if (isAdminRoute && !isLoginRoute) {
    const isAuthed = req.cookies.get("admin")?.value === "true";
    if (!isAuthed) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"], // include the root and all subpaths
};

// ─────────────────────────────────────────────────────────────────────────────
// FILE: app/admin/actions.ts
// Server Actions for logging in & out. Sets/clears the `admin` cookie.
// ─────────────────────────────────────────────────────────────────────────────
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ADMIN_COOKIE = "admin";

export async function loginAction(formData: FormData) {
  const password = formData.get("password");
  // small delay to avoid obvious timing oracle
  await new Promise((r) => setTimeout(r, 150));

  const ok = typeof password === "string" && password === process.env.ADMIN_PASSWORD;
  if (!ok) {
    return { ok: false, error: "Invalid password." } as const;
  }

  cookies().set(ADMIN_COOKIE, "true", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  });

  // Optionally honor `next` query param if present
  const next = (formData.get("next") as string) || "/admin";
  redirect(next);
}

export async function logoutAction() {
  cookies().delete(ADMIN_COOKIE);
  redirect("/admin/login");
}

// ─────────────────────────────────────────────────────────────────────────────
// FILE: app/admin/login/page.tsx
// Minimal login screen that posts to loginAction. Tailwind-based.
// If Step 3.1 already added a login page, you can replace it with this or merge.
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { loginAction } from "../actions";

export default function AdminLoginPage() {
  const params = useSearchParams();
  const next = params.get("next") || "/admin";

  const [state, formAction] = useActionState(async (_prevState: any, formData: FormData) => {
    const res = await loginAction(formData);
    // If loginAction redirects, this return is ignored.
    return res ?? { ok: true };
  }, null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="w-full max-w-sm rounded-2xl border bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold tracking-tight mb-4">Admin Login</h1>
        <form action={formAction} className="space-y-4">
          {/* carry forward the next param if present */}
          <input type="hidden" name="next" value={next} />
          <label className="block">
            <span className="text-sm text-gray-700">Password</span>
            <input
              type="password"
              name="password"
              required
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter admin password"
            />
          </label>
          {state?.error && (
            <p className="text-sm text-red-600">{state.error}</p>
          )}
          <button
            type="submit"
            className="w-full rounded-lg bg-gray-900 px-4 py-2 text-white text-sm font-medium hover:bg-gray-800"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FILE: app/admin/layout.tsx
// Optional: adds a simple top bar with a Logout button for all admin pages.
// ─────────────────────────────────────────────────────────────────────────────
import React from "react";
import { logoutAction } from "./actions";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <div className="text-sm font-medium">Admin</div>
          <form action={logoutAction}>
            <button
              type="submit"
              className="rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-100"
            >
              Logout
            </button>
          </form>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FILE: app/admin/page.tsx
// A placeholder protected page so you can verify the guard works.
// ─────────────────────────────────────────────────────────────────────────────
export default function AdminHome() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      <p className="text-gray-600 text-sm">
        If you can see this, the middleware guard and cookie are working.
      </p>
    </div>
  );
}
