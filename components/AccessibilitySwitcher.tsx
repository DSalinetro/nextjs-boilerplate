'use client';

import { useEffect, useState } from 'react';

type Motion = 'system' | 'reduce';
type Cvd = 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';

type A11ySettings = {
  dyslexia: boolean;
  contrast: boolean;
  motion: Motion;
  cvd: Cvd;
};

const STORAGE_KEY = 'a11y-settings-v1';

const defaultSettings: A11ySettings = {
  dyslexia: false,
  contrast: false,
  motion: 'system',
  cvd: 'none',
};

export default function AccessibilitySwitcher() {
  const [open, setOpen] = useState(false);
  const [s, setS] = useState<A11ySettings>(defaultSettings);

  // Load saved settings (client only)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setS({ ...defaultSettings, ...JSON.parse(raw) });
    } catch {}
  }, []);

  // Apply to <html> and persist
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-a11y-dyslexia', s.dyslexia ? 'on' : 'off');
    root.setAttribute('data-a11y-contrast', s.contrast ? 'on' : 'off');
    root.setAttribute('data-a11y-motion', s.motion === 'reduce' ? 'reduce' : 'system');
    root.setAttribute('data-a11y-cvd', s.cvd);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch {}
  }, [s]);

  const chip = 'rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-sm hover:bg-black/60';
  const label = 'text-sm';

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-controls="a11y-panel"
        className="rounded-2xl border border-white/20 bg-black/60 px-4 py-2 text-sm font-semibold shadow-lg hover:bg-black/70"
        title="Accessibility / Perspective Switcher"
        style={{ boxShadow: '0 6px 20px rgba(0,0,0,.35)' }}
      >
        Accessibility
      </button>

      {open && (
        <div
          id="a11y-panel"
          role="dialog"
          aria-label="Accessibility settings"
          className="mt-3 w-[320px] rounded-2xl border border-white/15 bg-black/70 p-4 backdrop-blur-sm"
        >
          <div className="mb-3 text-base font-semibold">Perspective Switcher</div>

          {/* Dyslexia */}
          <div className="mb-3 flex items-center justify-between">
            <span className={label}>Dyslexia-friendly font</span>
            <button
              className={chip}
              aria-pressed={s.dyslexia}
              onClick={() => setS(v => ({ ...v, dyslexia: !v.dyslexia }))}
            >
              {s.dyslexia ? 'On' : 'Off'}
            </button>
          </div>

          {/* High contrast */}
          <div className="mb-3 flex items-center justify-between">
            <span className={label}>High contrast</span>
            <button
              className={chip}
              aria-pressed={s.contrast}
              onClick={() => setS(v => ({ ...v, contrast: !v.contrast }))}
            >
              {s.contrast ? 'On' : 'Off'}
            </button>
          </div>

          {/* Reduced motion */}
          <div className="mb-4">
            <div className="mb-1 text-sm">Motion</div>
            <div className="flex gap-2">
              {(['system', 'reduce'] as Motion[]).map(m => (
                <button
                  key={m}
                  className={`${chip} ${s.motion === m ? 'bg-white/20' : ''}`}
                  aria-pressed={s.motion === m}
                  onClick={() => setS(v => ({ ...v, motion: m }))}
                >
                  {m === 'system' ? 'Follow System' : 'Reduced'}
                </button>
              ))}
            </div>
          </div>

          {/* Color-vision filter */}
          <div className="mb-4">
            <div className="mb-1 text-sm">Color-vision filter (preview)</div>
            <div className="flex flex-wrap gap-2">
              {(['none','protanopia','deuteranopia','tritanopia'] as Cvd[]).map(k => (
                <button
                  key={k}
                  className={`${chip} ${s.cvd === k ? 'bg-white/20' : ''}`}
                  aria-pressed={s.cvd === k}
                  onClick={() => setS(v => ({ ...v, cvd: k }))}
                >
                  {k[0].toUpperCase() + k.slice(1)}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs opacity-70">
              Simulations are approximate; use for perspective, not testing.
            </p>
          </div>

          <div className="flex justify-between">
            <button
              className="rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm hover:bg-black/55"
              onClick={() => setS(defaultSettings)}
            >
              Reset
            </button>
            <button
              className="rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm hover:bg-black/55"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
