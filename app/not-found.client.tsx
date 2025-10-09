'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function Content() {
  const params = useSearchParams(); // SAFE: inside Suspense
  const ref = params.get('ref') || undefined;

  return (
    <main className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      {ref ? (
        <p className="mt-3 text-base text-gray-600">
          We couldn’t find the page you were looking for from “{ref}”.
        </p>
      ) : (
        <p className="mt-3 text-base text-gray-600">
          The page you’re looking for doesn’t exist or has moved.
        </p>
      )}
      <a href="/" className="mt-6 inline-block underline">Go back home</a>
    </main>
  );
}

export default function NotFoundClient() {
  return <Suspense fallback={null}><Content /></Suspense>;
}
