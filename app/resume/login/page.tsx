'use client';

import { useSearchParams } from 'next/navigation';

export default function ResumeLoginPage() {
  const params = useSearchParams();
  const hasError = params.get('error') === '1';

  return (
    <main className="min-h-screen grid place-items-center bg-black">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="text-xl font-semibold">Enter resume password</h1>
        <p className="mt-1 text-sm text-neutral-600">
          This area is private for employers with access.
        </p>

        {hasError && (
          <div className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            Incorrect password. Please try again.
          </div>
        )}

        <form action={authenticate} className="mt-5 space-y-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#D49670]"
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-[#D49670] px-4 py-2 font-semibold text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D49670]/40"
          >
            Unlock Resume
          </button>
        </form>
      </div>
    </main>
  );
}

// ----- server action -----
async function authenticate(formData: FormData) {
  'use server';

  const { cookies } = await import('next/headers');
  const { redirect } = await import('next/navigation');

  const submitted = (formData.get('password') || '').toString();
  const expected = process.env.RESUME_PASSWORD || '';

  if (expected && submitted === expected) {
    // set a short-lived, httpOnly cookie that middleware will check
    cookies().set('resume_auth', '1', {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    redirect('/resume');
  }

  redirect('/resume/login?error=1');
}
