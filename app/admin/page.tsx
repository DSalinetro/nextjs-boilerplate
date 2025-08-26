'use client';

import { useState } from 'react';
import AdminPanel from '../../components/admin/AdminPanel';

export default function AdminPage() {
  const [ok, setOk] = useState(false);
  const [pw, setPw] = useState('');

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    const r = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ password: pw }),
    });
    if (r.ok) setOk(true);
    else alert('Wrong password');
  }

  if (!ok) {
    return (
      <main className="page-container py-16">
        <h1 className="text-2xl font-bold">Admin sign-in</h1>
        <form onSubmit={signIn} className="mt-4 flex gap-2">
          <input
            type="password"
            placeholder="Admin password"
            className="w-64 rounded-xl border border-white/15 bg-white/5 px-3 py-2"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          <button className="btn-primary">Sign in</button>
        </form>
      </main>
    );
  }

  return <AdminPanel />;
}
