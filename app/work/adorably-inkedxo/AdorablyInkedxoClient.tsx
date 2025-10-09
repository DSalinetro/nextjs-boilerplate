// app/work/adorably-inkedxo/AdorablyInkedxoClient.tsx
'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
// ...your other client-only imports (hooks, framer-motion, etc.)

function Content() {
  const params = useSearchParams(); // SAFE: we’re inside Suspense via parent
  const utm = params.get('utm_source') || undefined;

  // ...use params in your UI if needed
  return (
    <main>
      {/* your existing JSX for this case study */}
    </main>
  );
}

export default function AdorablyInkedxoClient() {
  return (
    <Suspense fallback={null}>
      <Content />
    </Suspense>
  );
}
