  'use client';

import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

type Asset = {
  title: string;
  src: string;
  alt: string;
  caption?: string;
};

const ASSETS = [
  {
    title: 'Business Card',
    src: '/images/hearts-minds/business-card.png',
    alt: 'Hearts & Minds business card with coral dot, bold title, and sage accents',
  },
  {
    title: 'Letterhead',
    src: '/images/hearts-minds/letterhead.png',
    alt: 'Hearts & Minds letterhead with coral dot, title, and soft top-right gradient wash',
  },
];

export default function HeartsAndMindsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') close();
  }, [close]);

  useEffect(() => {
    if (openIndex !== null) {
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }
  }, [openIndex, onKey]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      {/* Hero */}
      <section className="mb-10">
       {/* Lightbox image */}
<div
  className="relative w-full max-h-[85vh] bg-zinc-50"
  style={{ border: '1px solid rgba(15,46,52,0.12)' }} // subtle outline so white paper shows
>
  {/* Lightbox image (robust version) */}
<div
  className="relative w-full max-h-[85vh] bg-zinc-50"
  style={{ border: '1px solid rgba(15,46,52,0.12)' }}
>
  <img
    src={ASSETS[openIndex!].src}
    alt={ASSETS[openIndex!].alt}
    className="block max-h-[85vh] w-auto mx-auto object-contain"
    onError={(e) => {
      console.error('Image failed to load:', ASSETS[openIndex!].src);
      (e.currentTarget as HTMLImageElement).alt = 'Image failed to load';
    }}
  />
</div>
      </section>

      {/* Brand Collateral */}
      <section aria-labelledby="brand-collateral">
        <h2
          id="brand-collateral"
          className="mb-6 text-2xl font-semibold tracking-tight"
          style={{ color: '#0F2E34' }} // deep teal
        >
          Brand Collateral
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {ASSETS.map((a, i) => (
            <button
              key={a.title}
              onClick={() => setOpenIndex(i)}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ borderColor: 'rgba(15,46,52,0.08)', boxShadow: '0 6px 18px rgba(15,46,52,0.06)' }}
              aria-label={`Open ${a.title} preview`}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={a.src}
                  alt={a.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex items-center justify-between p-4">
                <p className="text-base font-medium" style={{ color: '#0F2E34' }}>
                  {a.title}
                </p>
                <span
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{ backgroundColor: 'rgba(112,212,150,0.14)', color: '#0F2E34' }}
                >
                  Click to enlarge
                </span>
              </div>

              {/* subtle top border accent */}
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{
                  background:
                    'linear-gradient(90deg, #d47d70 0%, rgba(212,125,112,0.3) 40%, rgba(112,212,150,0.3) 60%, #70d496 100%)',
                }}
              />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
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
        <button ...>...</button>

        {/* Lightbox image (robust version) */}
        <div
          className="relative w-full max-h-[85vh] bg-zinc-50"
          style={{ border: '1px solid rgba(15,46,52,0.12)' }}
        >
          <img
            src={ASSETS[openIndex!].src}
            alt={ASSETS[openIndex!].alt}
            className="block max-h-[85vh] w-auto mx-auto object-contain"
          />
        </div>

        <div className="flex items-center justify-between px-4 py-3">
          {/* footer / download buttons */}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </main>
  );
}
