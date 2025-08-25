// app/page.tsx

import Design from './design/page';

// Read either server-only or public env, treat anything else as "off".
const isMaintenance =
  (process.env.MAINTENANCE_MODE ?? process.env.NEXT_PUBLIC_MAINTENANCE) === 'true';

export default function Page() {
  return isMaintenance ? <Maintenance /> : <Design />;
}

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
