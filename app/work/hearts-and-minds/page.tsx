'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

type Asset = {
  title: string;
  src: string;      // thumbnail / grid image
  alt: string;
  fullSrc?: string; // full-size image for the lightbox (optional)
};

const ASSETS: Asset[] = [
  {
    title: 'Business Card',
    src: '/images/hearts-minds/business-card.png',
    alt: 'Hearts & Minds business card with coral dot, bold title, and sage accents',
  },
  {
    title: 'Letterhead',
    // using full image for the thumbnail so there’s no crop/404
    src: '/images/hearts-minds/letterhead.png',
    alt: 'Hearts & Minds letterhead',
    fullSrc: '/images/hearts-minds/letterhead.png',
  },
];

// Brand tokens used throughout page
const BRAND = {
  coral: '#d47d70',
  sage: '#70d496',
  text: '#0F2E34',
  light: '#F6FAF8',
  neutralBorder: 'rgba(15,46,52,0.08)',
  subtleBorder: 'rgba(15,46,52,0.12)',
};

export default function HeartsAndMindsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Zoom state
  const [zoom, setZoom] = useState(1);
  const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
  const zoomIn  = () => setZoom((z) => clamp(Number((z + 0.2).toFixed(2)), 0.5, 4));
  const zoomOut = () => setZoom((z) => clamp(Number((z - 0.2).toFixed(2)), 0.5, 4));
  const reset   = () => setZoom(1);

  // Lightbox image src + fallback/error state
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const [modalError, setModalError] = useState(false);

  const close = useCallback(() => {
    setOpenIndex(null);
    setZoom(1);
    setModalSrc(null);
    setModalError(false);
  }, []);

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    },
    [close]
  );

  useEffect(() => {
    if (openIndex !== null) {
      const asset = ASSETS[openIndex];
      setModalSrc(asset.fullSrc ?? asset.src);
      setModalError(false);

      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }
  }, [openIndex, onKey]);

  // If the image fails to load, try fallback (full -> thumbnail). If that also fails, show error.
  const handleImgError = () => {
    if (openIndex === null) return;
    const asset = ASSETS[openIndex];
    const primary = asset.fullSrc ?? asset.src;
    const fallback = asset.src;

    if (modalSrc === primary && primary !== fallback) {
      setModalSrc(fallback); // try thumbnail as fallback
    } else {
      setModalError(true);   // both failed
    }
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      {/* Hero */}
      <section className="mb-10">
        <div className="relative w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/hearts-minds/hero.jpg"
            alt="Hearts & Minds hero image"
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </section>

      {/* ---------- Overview ---------- */}
      <section aria-labelledby="overview" className="mb-14">
        <h2
          id="overview"
          className="mb-4 text-2xl font-semibold tracking-tight"
          style={{ color: BRAND.text }}
        >
          Overview
        </h2>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 lg:col-span-2"
               style={{ borderColor: BRAND.neutralBorder }}>
            <p className="leading-relaxed" style={{ color: BRAND.text }}>
              Hearts &amp; Minds is a compact brand system expressing warmth (coral) and clarity (sage)
              across business stationery and the portfolio site. The goal: a calm, modern voice that
              balances care with confidence—simple enough to scale, strong enough to feel distinct.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6"
               style={{ borderColor: BRAND.neutralBorder }}>
            <dl className="space-y-3 text-sm" style={{ color: BRAND.text }}>
              <div className="flex items-center justify-between">
                <dt className="opacity-70">Role</dt><dd>Brand Design, UI</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="opacity-70">Scope</dt><dd>Wordmark, color, type, stationery</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="opacity-70">Year</dt><dd>2025</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ---------- Problem ---------- */}
      <section aria-labelledby="problem" className="mb-14">
        <h2
          id="problem"
          className="mb-4 text-2xl font-semibold tracking-tight"
          style={{ color: BRAND.text }}
        >
          Problem
        </h2>
        <div className="rounded-2xl border bg-white p-6 leading-relaxed"
             style={{ borderColor: BRAND.neutralBorder, color: BRAND.text }}>
          As a Creative Director &amp; Social Impact Designer, I needed a personal identity that
          felt warm and trustworthy without losing clarity. The previous materials were inconsistent,
          difficult to reproduce, and didn’t translate cleanly between print and web.
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section aria-labelledby="process" className="mb-14">
        <h2
          id="process"
          className="mb-4 text-2xl font-semibold tracking-tight"
          style={{ color: BRAND.text }}
        >
          Process
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            'Discovery: tone & value mapping; audit of past materials; mood exploration.',
            'System: palette (coral + sage), deep-teal text for contrast, soft gradient motif.',
            'Type & hierarchy: headline weight + generous body copy; spacing rhythm for calm.',
            'Prototyping: stationery in Figma; responsive components for the portfolio site.',
            'Accessibility: contrast checks; legible sizes; minimal ornamentation.',
            'Production: export print-ready PNGs/SVGs; dev handoff for Next.js components.',
          ].map((step) => (
            <div key={step}
                 className="rounded-2xl border bg-white p-4 leading-relaxed"
                 style={{ borderColor: BRAND.neutralBorder, color: BRAND.text }}>
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Solution ---------- */}
      <section aria-labelledby="solution" className="mb-14">
        <h2
          id="solution"
          className="mb-4 text-2xl font-semibold tracking-tight"
          style={{ color: BRAND.text }}
        >
          Solution
        </h2>
        <div className="rounded-2xl border bg-white p-6 leading-relaxed"
             style={{ borderColor: BRAND.neutralBorder, color: BRAND.text }}>
          A restrained system that travels well. The coral “heartbeat” dot and a clear wordmark anchor the
          stationery; sage accents and a soft gradient provide warmth. In code, the same tokens power
          accessible components, ensuring cohesive visuals across the site and print.
        </div>
      </section>

      {/* ---------- Brand System ---------- */}
      <section aria-labelledby="brand-system" className="mb-14">
        <h2
          id="brand-system"
          className="mb-6 text-2xl font-semibold tracking-tight"
          style={{ color: BRAND.text }}
        >
          Brand System
        </h2>

        {/* Colors */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          {[
            { name: 'Coral', hex: BRAND.coral },
            { name: 'Sage', hex: BRAND.sage },
            { name: 'Deep Teal (Text)', hex: BRAND.text },
            { name: 'Light Surface', hex: BRAND.light },
          ].map((c) => (
            <div
              key={c.name}
              className="rounded-2xl border overflow-hidden"
              style={{ borderColor: BRAND.neutralBorder }}
            >
              <div className="h-24" style={{ backgroundColor: c.hex }} />
              <div className="px-4 py-3 text-sm"
                   style={{ color: BRAND.text, backgroundColor: 'white' }}>
                <div className="font-medium">{c.name}</div>
                <div className="opacity-70">{c.hex}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient motif */}
        <div
          className="mb-6 h-12 w-full rounded-xl border"
          style={{
            borderColor: BRAND.neutralBorder,
            background:
              `linear-gradient(90deg, ${BRAND.coral} 0%, rgba(212,125,112,0.35) 40%, rgba(112,212,150,0.35) 60%, ${BRAND.sage} 100%)`,
          }}
          aria-label="Brand gradient motif"
        />

        {/* Type sample */}
        <div className="rounded-2xl border bg-white p-6"
             style={{ borderColor: BRAND.neutralBorder, color: BRAND.text }}>
          <p className="mb-1 text-xs opacity-70">Typography sample</p>
          <h3 className="text-3xl font-semibold tracking-tight mb-2">
            Hearts &amp; Minds
          </h3>
          <p className="leading-relaxed">
            A straightforward sans-serif stack is used for clarity and accessibility.
            Headings carry weight and tight tracking, while body text stays generous and
            readable. Color and spacing do most of the expressive work.
          </p>
        </div>
      </section>

      {/* ---------- Brand Collateral (gallery) ---------- */}
      <section aria-labelledby="brand-collateral" className="mb-14">
        <h2
          id="brand-collateral"
          className="mb-6 text-2xl font-semibold tracking-tight"
          style={{ color: BRAND.text }}
        >
          Brand Collateral
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {ASSETS.map((a, i) => (
            <button
              key={a.title}
              onClick={() => setOpenIndex(i)}
              className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                borderColor: BRAND.neutralBorder,
                boxShadow: '0 6px 18px rgba(15,46,52,0.06)',
              }}
              aria-label={`Open ${a.title} preview`}
            >
              {/* Natural-size thumbnail (no cropping) */}
              <div
                className="relative w-full h-64 sm:h-72 bg-zinc-50 flex items-center justify-center"
                style={{ borderBottom: `1px solid ${BRAND.neutralBorder}` }}
              >
                <Image
                  src={a.src}
                  alt={a.alt}
                  width={1600}
                  height={1200}
                  className="max-h-full max-w-full h-auto w-auto object-contain"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="flex items-center justify-between p-4">
                <p className="text-base font-medium" style={{ color: BRAND.text }}>
                  {a.title}
                </p>
                <span
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{ backgroundColor: 'rgba(112,212,150,0.14)', color: BRAND.text }}
                >
                  Click to enlarge
                </span>
              </div>

              {/* subtle top border accent */}
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{
                  background:
                    `linear-gradient(90deg, ${BRAND.coral} 0%, rgba(212,125,112,0.3) 40%, rgba(112,212,150,0.3) 60%, ${BRAND.sage} 100%)`,
                }}
              />
            </button>
          ))}
        </div>
      </section>

      {/* ---------- Outcomes ---------- */}
      <section aria-labelledby="outcomes" className="mb-20">
        <h2
          id="outcomes"
          className="mb-4 text-2xl font-semibold tracking-tight"
          style={{ color: BRAND.text }}
        >
          Outcomes
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {[
            'Consistent brand across print and web with minimal tokens.',
            'Clear hierarchy and improved readability using a calm, high-contrast palette.',
            'Flexible card + letterhead ready for proposals, outreach, and case studies.',
            'Lightweight components that can extend to presentations and social templates.',
          ].map((item) => (
            <li
              key={item}
              className="rounded-2xl border bg-white p-4 leading-relaxed"
              style={{ borderColor: BRAND.neutralBorder, color: BRAND.text }}
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- Next Project CTA ---------- */}
      <section className="mb-24">
        <div
          className="rounded-2xl border bg-white p-6 md:flex md:items-center md:justify-between"
          style={{ borderColor: BRAND.neutralBorder }}
        >
          <div>
            <p className="text-sm opacity-70" style={{ color: BRAND.text }}>
              Up next
            </p>
            <h3 className="text-xl font-semibold" style={{ color: BRAND.text }}>
              Brand Identity Portfolio Collection
            </h3>
          </div>
          <Link
            href="/work/brand-identity"
            className="mt-4 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition md:mt-0"
            style={{
              color: BRAND.text,
              border: `1px solid ${BRAND.neutralBorder}`,
              background:
                `linear-gradient(90deg, ${BRAND.coral}1A 0%, ${BRAND.sage}1A 100%)`,
            }}
          >
            View project
          </Link>
        </div>
      </section>

      {/* ---------- Lightbox (kept at end) ---------- */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 240, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={close}
                aria-label="Close preview"
                className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full p-2 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ color: BRAND.text }}
              >
                <X className="h-5 w-5" />
              </button>

              {/* Zoom toolbar */}
              <div className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full bg-white/90 p-1 shadow">
                <button
                  onClick={zoomOut}
                  className="rounded-full p-2 hover:bg-zinc-100 focus:outline-none"
                  aria-label="Zoom out"
                  title="Zoom out"
                >
                  <ZoomOut className="h-4 w-4" />
                </button>
                <button
                  onClick={zoomIn}
                  className="rounded-full p-2 hover:bg-zinc-100 focus:outline-none"
                  aria-label="Zoom in"
                  title="Zoom in"
                >
                  <ZoomIn className="h-4 w-4" />
                </button>
                <button
                  onClick={reset}
                  className="rounded-full p-2 hover:bg-zinc-100 focus:outline-none"
                  aria-label="Reset zoom"
                  title="Reset zoom"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <span className="px-2 text-xs" style={{ color: BRAND.text }}>
                  {Math.round(zoom * 100)}%
                </span>
              </div>

              {/* Lightbox image with fallback */}
              {(() => {
                const asset = ASSETS[openIndex!];
                return (
                  <>
                    <div
                      className="relative w-full max-h-[85vh] overflow-auto bg-zinc-50"
                      style={{ border: `1px solid ${BRAND.subtleBorder}` }}
                    >
                      {!modalError ? (
                        <img
                          src={modalSrc ?? (asset.fullSrc ?? asset.src)}
                          alt={asset.alt}
                          onError={handleImgError}
                          className="block mx-auto"
                          style={{
                            transform: `scale(${zoom})`,
                            transformOrigin: 'center center',
                            transition: 'transform 120ms ease',
                            maxWidth: '90vw',
                            maxHeight: '85vh',
                            objectFit: 'contain',
                          }}
                        />
                      ) : (
                        <div className="flex h-[50vh] items-center justify-center">
                          <p className="text-sm" style={{ color: BRAND.text }}>
                            Sorry, this image couldn’t be loaded.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between gap-3 px-4 py-3">
                      <p className="text-sm" style={{ color: BRAND.text }}>
                        {asset.title}
                      </p>
                      <span className="text-xs" style={{ color: BRAND.text }}>
                        Use + / − to zoom
                      </span>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
