export default function AdminHome() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      <p className="text-gray-600 text-sm">
        Welcome! Use the link below to add a new portfolio item.
      </p>
      <a
        href="/admin/portfolio/new"
        className="inline-block rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-100"
      >
        ➕ New Portfolio Item
      </a>
    </div>
  );
}
