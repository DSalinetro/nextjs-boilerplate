'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Lock, ChevronLeft } from 'lucide-react';

export default function ResumeLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get('next') || '/resume';

  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch('/api/auth/resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.replace(next);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.error || 'Invalid password. Please try again.');
        setSubmitting(false);
      }
    } catch {
      setError('Something went wrong. Please try again.');
      setSubmitting(false);
    }
  }

  return (
    <main className="mx-auto max-w-md px-6 py-16">
      {/* Back link */}
      <div className="mb-8">
        <Link
          href="/design"
          className="inline-flex items-center gap-1 text-[#D49670] hover:underline"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </Link>
      </div>

      <section className="rounded-2xl border border-neutral-200/70 bg-white shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-2">
            <Lock className="h-5 w-5 text-[#D49670]" />
            <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Enter resume password
            </h1>
          </div>
          <p className="text-sm sm:text-base text-neutral-600 mb-6">
            This area is restricted. Authorized employers only.
          </p>

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-neutral-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-neutral-300 px-4 py-2.5 outline-none focus-visible:ring-2 focus-visible:ring-[#D49670]/40"
                placeholder="Enter password"
              />
            </div>

            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-transparent bg-[#D49670] px-4 py-2.5 font-semibold text-white shadow-sm transition hover:opacity-90 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D49670]/40"
            >
              {submitting ? 'Checking…' : 'Unlock Resume'}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
