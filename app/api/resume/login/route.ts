import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs'; // ensure env vars are available

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const next = url.searchParams.get('next') || '/resume';

  // Read password from JSON or form posts
  const ct = req.headers.get('content-type') || '';
  let provided = '';

  if (ct.includes('application/x-www-form-urlencoded')) {
    const form = await req.formData();
    provided = (form.get('password') ?? '').toString();
  } else if (ct.includes('application/json')) {
    const body = await req.json().catch(() => ({} as any));
    provided = (body.password ?? '').toString();
  } else {
    const raw = await req.text().catch(() => '');
    try {
      const data = JSON.parse(raw || '{}');
      provided = (data.password ?? '').toString();
    } catch {
      // ignore
    }
  }

  const expected = (process.env.RESUME_PASSWORD || '').trim();

  // If no server password or wrong password → send back to login with error flag
  if (!expected || provided.trim() !== expected) {
    const back = new URL(
      `/resume/login?error=1&next=${encodeURIComponent(next)}`,
      url.origin
    );
    return NextResponse.redirect(back, { status: 303 });
  }

  // Success → set auth cookie and redirect to the target page
  const res = NextResponse.redirect(new URL(next, url), { status: 303 });
  res.cookies.set('resumeAuthed', 'true', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',            // readable on /resume and anywhere else
    maxAge: 60 * 60 * 8,  // 8 hours
  });
  return res;
}
