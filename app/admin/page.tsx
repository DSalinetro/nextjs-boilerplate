import { isAdmin } from '../../lib/admin';
import AdminPanel from '../../components/admin/AdminPanel';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const authed = await isAdmin();           // 👈 await here

  if (!authed) {
    return (
      <main className="page-container py-16">
        <h1 className="text-3xl font-bold">Admin sign in</h1>
        <div className="mt-6 glass-card p-6 max-w-md">
          <label className="block text-sm">Password</label>
          <input id="admin-pass" type="password"
                 className="mt-1 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2" />
          <button
            className="btn-primary mt-4"
            onClick={async () => {
              const pwd = (document.getElementById('admin-pass') as HTMLInputElement).value;
              const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ password: pwd }),
              });
              if (res.ok) location.reload(); else alert('Incorrect password');
            }}
          >
            Sign in
          </button>
        </div>
      </main>
    );
  }
  return <AdminPanel />;
}
