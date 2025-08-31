'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function LoginInner() {
  const searchParams = useSearchParams();
  const nextQuery = searchParams.get('next');
  const next = nextQuery && nextQuery.startsWith('/') ? nextQuery : '/resume';
  const hasError = searchParams.get('error') === '1';

  const action = `/api/resume/login?next=${encodeURIComponent(next)}`;

  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md rounded-2xl border border-neutral-200/70 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight">Resume Access</h1>
        <p className="mt-2 text-sm text-neutral-600">
          Enter the access password to view the private resume.
        </p>

        <form action={action} method="post" className="mt-6 space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-neutral-800">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-2 outline-none focus:ring-2 focus:ring-[#D49670]/40"
              autoComplete="current-password"
              required
            />
          </div>

          {hasError && (
            <div className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
              Invalid password. Please try again.
            </div>
          )}

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-xl border border-transparent bg-[#D49670] px-4 py-2 font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Unlock Resume
          </button>

          <p className="text-xs text-neutral-500 text-center">
            You’ll be redirected to <span className="font-medium">{next}</span> after login.
          </p>
        </form>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<main className="p-6">Loading…</main>}>
      <LoginInner />
    </Suspense>
  );
}
