// app/api/resume/login/route.ts
import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // ensure env vars are available

function isInternalPath(p: string) {
  return p.startsWith('/') && !p.startsWith('//');
}

export async function POST(req: Request) {
  const url = new URL(req.url);
  const next = isInternalPath(url.searchParams.get('next') || '')
    ? (url.searchParams.get('next') as string)
    : '/resume';

  const ct = req.headers.get('content-type') || '';
  const isForm = ct.includes('application/x-www-form-urlencoded');
  const isJson = ct.includes('application/json');

  // Read password from JSON or form
  let provided = '';
  if (isJson) {
    const body = await req.json().catch(() => ({} as any));
    provided = (body.password ?? '').toString();
  } else if (isForm) {
    const form = await req.formData();
    provided = (form.get('password') ?? '').toString();
  } else {
    try {
      const raw = await req.text();
      provided = (JSON.parse(raw).password ?? '').toString();
    } catch {}
  }

  const expected = (process.env.RESUME_PASSWORD || '').trim();
  if (!expected) {
    return NextResponse.json(
      { ok: false, error: 'Server password not configured' },
      { status: 500 }
    );
  }

  if (provided.trim() !== expected) {
    // For form posts, bounce back to the login page with an error flag.
    if (isForm) {
      const back = new URL('/resume/login', url.origin);
      back.searchParams.set('error', '1');
      return NextResponse.redirect(back, { status: 303 });
    }
    return NextResponse.json({ ok: false, error: 'Invalid password' }, { status: 401 });
  }

  // Success: set the auth cookie
  const cookieOptions = {
    name: 'resumeAuthed',
    value: 'true',
    httpOnly: true,
    secure: true,
    sameSite: 'lax' as const,
    path: '/',                 // <-- broader path to avoid scoping issues
    maxAge: 60 * 60 * 8,       // 8 hours
  };

  if (isForm) {
    const res = NextResponse.redirect(new URL(next, url.origin), { status: 303 });
    res.cookies.set(cookieOptions);
    return res;
  }

  // JSON/XHR callers still get JSON; client can navigate after.
  const res = NextResponse.json({ ok: true, next });
  res.cookies.set(cookieOptions);
  return res;
}
