// components/AdminBar.tsx
'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Wrench, Grid, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';

type A11yFlags = {
  dyslexia: boolean;
  contrast: boolean;
  motionReduce: boolean;
  cvd: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
};

const STORAGE_KEY = 'hm_a11y_flags_v1';

export default function AdminBar() {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // Only show when ?admin=true
  const isAdmin = params.get('admin') === 'true';
  if (!isAdmin) return null;

  // --- a11y flags ---
  const [flags, setFlags] = useState<A11yFlags>({
    dyslexia: false,
    contrast: false,
    motionReduce: false,
    cvd: 'none',
  });

  // load saved prefs on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as A11yFlags;
        setFlags(parsed);
      }
    } catch {}
  }, []);

  // apply flags to <html data-*> and persist
  useEffect(() => {
    const html = document.documentElement;
    html.dataset.a11yDyslexia = flags.dyslexia ? 'on' : 'off';
    html.dataset.a11yContrast = flags.contrast ? 'on' : 'off';
    html.dataset.a11yMotion   = flags.motionReduce ? 'reduce' : 'normal';
    html.dataset.a11yCvd      = flags.cvd;

    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(flags)); } catch {}
  }, [flags]);

  // --- grid overlay ---
  const [gridOn, setGridOn] = useState(false);

  // simple 20px baseline grid overlay
  const GridOverlay = useMemo(() => {
    if (!gridOn) return null;
    return (
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[9998]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(15,46,52,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,46,52,0.08) 1px, transparent 1px)',
          backgroundSize: '20px 20px, 20px 20px',
        }}
      />
    );
  }, [gridOn]);

  // helpers
  const toggle = (key: keyof A11yFlags) =>
    setFlags((f) => ({ ...f, [key]: typeof f[key] === 'boolean' ? !f[key] : f[key] }));

  const setCvd = (cvd: A11yFlags['cvd']) => setFlags((f) => ({ ...f, cvd }));

  const setQuery = (k: string, v: string | null) => {
    const q = new URLSearchParams(params.toString());
    if (v === null) q.delete(k);
    else q.set(k, v);
    router.replace(`${pathname}?${q.toString()}`);
  };

  const toggleBusinessParam = () => {
    const on = params.get('business') === 'true';
    setQuery('business', on ? null : 'true');
    toast.success(on ? 'Business tools hidden' : 'Business tools enabled');
  };

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success('URL copied to clipboard');
    } catch {
      toast.error('Could not copy URL');
    }
  };

  return (
    <>
      {GridOverlay}
      <div
        className="fixed bottom-5 right-5 z-[9999] rounded-2xl border bg-white/95 backdrop-blur px-3 py-2 shadow-lg"
        style={{ borderColor: 'rgba(15,46,52,0.12)', color: '#0F2E34' }}
        role="region"
        aria-label="Admin tools"
      >
        <div className="mb-1 flex items-center gap-2 text-sm font-semibold">
          <Wrench className="h-4 w-4" />
          Admin
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Grid toggle */}
          <button
            onClick={() => setGridOn((v) => !v)}
            className="rounded-xl border px-3 py-1 text-xs hover:bg-zinc-50"
            style={{ borderColor: 'rgba(15,46,52,0.12)' }}
            title="Toggle grid overlay"
          >
            <Grid className="mr-1 inline h-3.5 w-3.5" />
            {gridOn ? 'Grid on' : 'Grid off'}
          </button>

          {/* Business flag */}
          <button
            onClick={toggleBusinessParam}
            className="rounded-xl border px-3 py-1 text-xs hover:bg-zinc-50"
            style={{ borderColor: 'rgba(15,46,52,0.12)' }}
            title="Show/hide business PDF buttons"
          >
            {params.get('business') === 'true' ? 'Business: on' : 'Business: off'}
          </button>

          {/* Copy URL */}
          <button
            onClick={copyUrl}
            className="rounded-xl border px-3 py-1 text-xs hover:bg-zinc-50"
            style={{ borderColor: 'rgba(15,46,52,0.12)' }}
            title="Copy current URL"
          >
            Copy URL
          </button>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
          <button
            onClick={() => toggle('dyslexia')}
            className="rounded-xl border px-3 py-1 hover:bg-zinc-50 text-left"
            style={{ borderColor: 'rgba(15,46,52,0.12)' }}
            title="Atkinson Hyperlegible font"
          >
            Dyslexia: {flags.dyslexia ? 'on' : 'off'}
          </button>
          <button
            onClick={() => toggle('contrast')}
            className="rounded-xl border px-3 py-1 hover:bg-zinc-50 text-left"
            style={{ borderColor: 'rgba(15,46,52,0.12)' }}
          >
            Contrast: {flags.contrast ? 'high' : 'normal'}
          </button>
          <button
            onClick={() => toggle('motionReduce')}
            className="rounded-xl border px-3 py-1 hover:bg-zinc-50 text-left"
            style={{ borderColor: 'rgba(15,46,52,0.12)' }}
          >
            Motion: {flags.motionReduce ? 'reduce' : 'normal'}
          </button>

          <label className="rounded-xl border px-3 py-1 hover:bg-zinc-50"
                 style={{ borderColor: 'rgba(15,46,52,0.12)' }}>
            CVD:&nbsp;
            <select
              className="bg-transparent outline-none"
              value={flags.cvd}
              onChange={(e) => setCvd(e.target.value as A11yFlags['cvd'])}
            >
              <option value="none">none</option>
              <option value="protanopia">protanopia</option>
              <option value="deuteranopia">deuteranopia</option>
              <option value="tritanopia">tritanopia</option>
            </select>
          </label>
        </div>

        <div className="mt-2 text-[11px] opacity-70">
          Toggle with <Eye className="inline h-3 w-3" /> your a11y states; use <EyeOff className="inline h-3 w-3" /> to revert.
        </div>
      </div>
    </>
  );
}
