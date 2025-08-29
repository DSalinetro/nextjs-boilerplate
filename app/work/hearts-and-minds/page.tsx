'use client';

import Image from 'next/image';
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
    // Using the full image for the thumbnail so nothing 404s/crops
    src: '/images/hearts-minds/letterhead.png',
    alt: 'Hearts & Minds letterhead',
    fullSrc: '/images/hearts-minds/letterhead.png', // lightbox uses this too
  },
];

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
      // initialize modal src (prefer fullSrc if provided)
      const asset = ASSETS[openIndex];
      setModalSrc(asset.fullSrc ?? asset.src);
      setModalError(false);

      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }
  }, [openIndex, onKey]);

  // If the image fails to load, try fallback (full -> preview). If that also fails, show error.
  const handleImgError = () => {
    if (openIndex === null) return;
    const asset = ASSETS[openIndex];
    const primary = asset.fullSrc ?? asset.src;
    const fallback = asset.src;

    if (modalSrc === primary && primary !== fallback) {
      setModalSrc(fallback); // try preview
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

      {/* Brand Collateral */}
      <section aria-labelledby="brand-collateral">
        <h2
          id="brand-collateral"
          className="mb-6 text-2xl font-semibold tracking-tight"
          style={{ color: '#0F2E34' }}
        >
          Brand Collateral
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {ASSETS.map((a, i) => (
            <button
              key={a.title}
              onClick={() => setOpenIndex(i)}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                borderColor: 'rgba(15,46,52,0.08)',
                boxShadow: '0 6px 18px rgba(15,46,52,0.06)',
              }}
              aria-label={`Open ${a.title} preview`}
            >
              {/* Natural-size thumbnail (no cropping) */}
              <div
                className="relative w-full h-64 sm:h-72 bg-zinc-50 flex items-center justify-center"
                style={{ border: '1px solid rgba(15,46,52,0.08)' }}
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
              {/* Close button */}
              <button
                onClick={close}
                aria-label="Close preview"
                className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full p-2 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ color: '#0F2E34' }}
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
                <span className="px-2 text-xs" style={{ color: '#0F2E34' }}>
                  {Math.round(zoom * 100)}%
                </span>
              </div>

              {/* Lightbox image with fallback */}
              {(() => {
                const asset = ASSETS[openIndex!]; // guarded by conditional
                return (
                  <>
                    <div
                      className="relative w-full max-h-[85vh] overflow-auto bg-zinc-50"
                      style={{ border: '1px solid rgba(15,46,52,0.12)' }}
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
                          <p className="text-sm" style={{ color: '#0F2E34' }}>
                            Sorry, this image couldn’t be loaded.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between gap-3 px-4 py-3">
                      <p className="text-sm" style={{ color: '#0F2E34' }}>
                        {asset.title}
                      </p>
                      <span className="text-xs" style={{ color: '#0F2E34' }}>
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
