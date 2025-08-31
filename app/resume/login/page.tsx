'use client';

import { Suspense, useState, FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';

function LoginInner() {
  const searchParams = useSearchParams();
  const next = searchParams.get('next') || '/resume';

  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/resume/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // allow Set-Cookie
        cache: 'no-store',
        body: JSON.stringify({ password }),
      });

      const data = await res.json().catch(() => ({} as any));
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || 'Invalid password');
      }

      // Hard redirect so the cookie is sent on the next request
      const target = next.startsWith('/') ? next : '/resume';
      window.location.assign(target);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
      setLoading(false);
    }
  }

  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md rounded-2xl border border-neutral-200/70 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight">Resume Access</h1>
        <p className="mt-2 text-sm text-neutral-600">
          Enter the access password to view the private resume.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-neutral-800">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-2 outline-none focus:ring-2 focus:ring-[#D49670]/40"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          {error && (
            <div className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center rounded-xl border border-transparent bg-[#D49670] px-4 py-2 font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Checking…' : 'Unlock Resume'}
          </button>

          <p className="text-xs text-neutral-500 text-center">
            You’ll be redirected to <span className="font-medium">{next || '/resume'}</span> after login.
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
