// FILE: app/admin/page.tsx
// A placeholder protected page so you can verify the guard works.
export default function AdminHome() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      <p className="text-gray-600 text-sm">
        If you can see this, the middleware guard and cookie are working.
      </p>
    </div>
  );
}
