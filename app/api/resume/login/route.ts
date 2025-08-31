import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // ensure env vars are available

export async function POST(req: Request) {
  // Accept JSON or form posts
  let provided = '';
  const ct = req.headers.get('content-type') || '';
  if (ct.includes('application/json')) {
    const body = await req.json().catch(() => ({} as any));
    provided = (body.password ?? '').toString();
  } else if (ct.includes('application/x-www-form-urlencoded')) {
    const form = await req.formData();
    provided = (form.get('password') ?? '').toString();
  } else {
    // fallback
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
    return NextResponse.json({ ok: false, error: 'Invalid password' }, { status: 401 });
  }

  // set cookie used by middleware to allow /resume
  const res = NextResponse.json({ ok: true });
  res.cookies.set({
    name: 'resumeAuthed',
    value: 'true',
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/resume',
    maxAge: 60 * 60 * 8, // 8h
  });
  return res;
}
