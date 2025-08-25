// app/page.tsx
'use client';

import Design from './design/page';

// Optional maintenance toggle via env:
// NEXT_PUBLIC_MAINTENANCE=true
const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE === 'true';

function Maintenance() {
  return (
    <main className="min-h-screen grid place-items-center bg-black text-white">
      <div className="text-center px-6">
        <h1 className="text-3xl font-bold mb-3">Under Construction</h1>
        <p>Site update in progress. Please check back soon.</p>
      </div>
    </main>
  );
}

export default function Page() {
  return isMaintenance ? <Maintenance /> : <Design />;
}
