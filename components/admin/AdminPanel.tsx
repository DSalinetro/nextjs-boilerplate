'use client';

import { useEffect, useState } from 'react';

type Item = {
  id: string;
  title: string;
  slug: string;
  description?: string;
  category: 'Design'|'Art'|'Writing'|'Community';
  tags?: string[];
  cover_url?: string;
  gallery_urls?: string[];
  featured: boolean;
  published: boolean;
  sort_order: number;
};

export default function AdminPanel() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState<File | null>(null);
  const [form, setForm] = useState<Partial<Item>>({
    category: 'Design',
    featured: false,
    published: false,
    sort_order: 0,
    tags: [],
  });

  async function load() {
    setLoading(true);
    const r = await fetch('/api/portfolio?publishedOnly=false');
    const j = await r.json();
    setItems(j.items || []);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function uploadFile(): Promise<string | undefined> {
    if (!file) return undefined;
    const fd = new FormData();
    fd.append('file', file);
    const r = await fetch('/api/upload', { method: 'POST', body: fd });
    const j = await r.json();
    if (!r.ok) { alert(j.error || 'Upload failed'); return; }
    return j.url as string;
  }

  async function createItem() {
    if (!form.title || !form.slug) {
      alert('Please fill Title and Slug.');
      return;
    }
    const cover_url = await uploadFile();
    const r = await fetch('/api/portfolio', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ ...form, cover_url }),
    });
    const j = await r.json();
    if (!r.ok) return alert(j.error || 'Create failed');

    setFile(null);
    const input = document.getElementById('cover') as HTMLInputElement | null;
    if (input) input.value = '';
    setForm(f => ({ ...f, title: '', slug: '', description: '' }));
    await load();
  }

  async function togglePublish(it: Item) {
    const r = await fetch(`/api/portfolio/${it.id}`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ published: !it.published }),
    });
    if (!r.ok) alert('Update failed');
    await load();
  }

  async function del(id: string) {
    if (!confirm('Delete this item?')) return;
    const r = await fetch(`/api/portfolio/${id}`, { method: 'DELETE' });
    if (!r.ok) alert('Delete failed');
    await load();
  }

  return (
    <main className="page-container py-16">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Admin</h1>
        <button
          className="btn-secondary"
          onClick={async () => {
            await fetch('/api/admin/logout', { method: 'POST' });
            location.href = '/';
          }}
        >
          Log out
        </button>
      </div>

      {/* Create */}
      <section className="mt-8 glass-card p-6">
        <h2 className="text-xl font-semibold">Add portfolio item</h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm">Title</label>
            <input
              value={form.title || ''}
              className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2"
              onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm">Slug (unique)</label>
            <input
              value={form.slug || ''}
              className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2"
              onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm">Description</label>
            <textarea
              rows={4}
              value={form.description || ''}
              className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2"
              onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm">Category</label>
            <select
              className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2"
              value={form.category || 'Design'}
              onChange={e => setForm(f => ({ ...f, category: e.target.value as Item['category'] }))}
            >
              <option>Design</option>
              <option>Art</option>
              <option>Writing</option>
              <option>Community</option>
            </select>
          </div>

          <div>
            <label className="block text-sm">Tags (comma-separated)</label>
            <input
              className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2"
              onChange={e =>
                setForm(f => ({
                  ...f,
                  tags: e.target.value.split(',').map(s => s.trim()).filter(Boolean),
                }))
              }
            />
          </div>

          <div>
            <label className="block text-sm">Sort order</label>
            <input
              type="number"
              value={form.sort_order ?? 0}
              className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2"
              onChange={e => setForm(f => ({ ...f, sort_order: Number(e.target.value) }))}
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={!!form.featured}
                onChange={e => setForm(f => ({ ...f, featured: e.target.checked }))}
              /> Featured
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={!!form.published}
                onChange={e => setForm(f => ({ ...f, published: e.target.checked }))}
              /> Published
            </label>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm">Cover image</label>
            <input
              id="cover"
              type="file"
              accept="image/*"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2"
              onChange={e => setFile(e.currentTarget.files?.[0] || null)}
            />
          </div>
        </div>

        <div className="mt-4">
          <button className="btn-primary" onClick={createItem}>Create</button>
        </div>
      </section>

      {/* List */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">All items</h2>
        {loading ? (
          <p className="mt-4 opacity-70">Loading…</p>
        ) : (
          <div className="mt-4 grid gap-4">
            {items.map(it => (
              <div key={it.id} className="glass-card p-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold">{it.title}</div>
                  <div className="text-sm opacity-70">
                    {it.category} • {it.published ? 'Published' : 'Draft'}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="btn-secondary px-3 py-2 text-sm"
                    onClick={() => togglePublish(it)}
                  >
                    {it.published ? 'Unpublish' : 'Publish'}
                  </button>
                  <button
                    className="btn-secondary px-3 py-2 text-sm"
                    onClick={() => del(it.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
