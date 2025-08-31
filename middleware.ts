// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // --- ADMIN GUARD ---
  const isAdminRoute = pathname.startsWith("/admin");
  const isAdminLogin = pathname.startsWith("/admin/login");
  if (isAdminRoute && !isAdminLogin) {
    const isAuthed = req.cookies.get("admin")?.value === "true";
    if (!isAuthed) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin/login";
      url.searchParams.set("next", `${pathname}${search}`);
      return NextResponse.redirect(url);
    }
  }

  // --- RESUME GUARD ---
  const isResumeRoute = pathname.startsWith("/resume");
  const isResumeLogin = pathname.startsWith("/resume/login");
  if (isResumeRoute && !isResumeLogin) {
    const resumeAuthed = req.cookies.get("resume_auth")?.value === "1";
    if (!resumeAuthed) {
      const url = req.nextUrl.clone();
      url.pathname = "/resume/login";
      url.searchParams.set("from", `${pathname}${search}`);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/resume", "/resume/:path*"],
};
