// app/api/resume/login/route.ts
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  // Accept JSON or form posts (with a safe fallback)
  let provided = '';
  const ct = req.headers.get('content-type') || '';

  if (ct.includes('application/json')) {
    const body = await req.json().catch(() => ({} as any));
    provided = String(body?.password ?? '');
  } else if (ct.includes('application/x-www-form-urlencoded')) {
    const form = await req.formData();
    provided = String(form.get('password') ?? '');
  } else {
    try {
      const raw = await req.text();
      provided = String((JSON.parse(raw) as any)?.password ?? '');
    } catch {
      provided = '';
    }
  }

  const expected = (process.env.RESUME_PASSWORD || '').trim();
  if (!expected) {
    return NextResponse.json(
      { ok: false, message: 'Server password not configured' },
      { status: 500 }
    );
  }

  if (provided.trim() !== expected) {
    return NextResponse.json(
      { ok: false, message: 'Invalid password' },
      { status: 401 }
    );
  }

  // Set cookie read by middleware
  const res = NextResponse.json({ ok: true });
  res.cookies.set('resume', 'true', {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secure: true,
    maxAge: 60 * 60 * 8, // 8 hours
  });
  return res;
}
