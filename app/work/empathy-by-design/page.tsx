'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

export default function EmpathyByDesignPage() {
  // Put all artwork you want to show here.
  // Make sure each file exists in /public/images/ with the exact name & extension.
 // Inside app/work/empathy-by-design/page.tsx
// ...existing imports and types...

const gallery: GalleryItem[] = [
  { src: '/images/moody-library.png',        alt: 'Moody library hero artwork', caption: 'Moody Library' },
  { src: '/images/books-of-dreams.png',      alt: 'Books of Dreams — warm, moody library scene', caption: 'Books of Dreams' },
  { src: '/images/field-of-flowers.png',     alt: 'Field of flowers at golden hour', caption: 'Field of Flowers' },

  // ✅ New image (uses your exact filename with .png.png)
  { src: '/images/bubbles-and-butterflies.png.png', alt: 'Bubbles and Butterflies — dreamy artwork', caption: 'Bubbles & Butterflies' },
];
    {
      src: '/images/moody-library.png',
      alt: 'Moody library hero artwork',
      caption: 'Moody Library',
    },
    {
      src: '/images/books-of-dreams.png',
      alt: 'Books of Dreams – warm, moody library scene',
      caption: 'Books of Dreams',
    },
    {
      src: '/images/field-of-flowers.png',
      alt: 'Field of flowers at golden hour',
      caption: 'Field of Flowers',
    },
    {
      src: '/images/flowers.png', // ✅ lowercase filename
      alt: 'Flowers close-up study',
      caption: 'Flowers (study)',
    },
    {
      src: '/images/typewriter-roses.png',
      alt: 'Vintage typewriter with roses',
      caption: 'Typewriter & Roses',
    },
    // If you had the “woman in poppies” image before, add it back here with the correct filename:
    // { src: '/images/woman-in-poppies.jpg', alt: 'Woman in poppy field, golden hour', caption: 'Poppy Field' },
  ];

  const [openSrc, setOpenSrc] = useState<string | null>(null);

  // Allow closing the lightbox with Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenSrc(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <Link href="/#portfolio" className="text-sm text-gray-500 hover:text-[#d4967d]">
        &larr; Back to Portfolio
      </Link>

      <h1 className="mt-4 text-4xl md:text-5xl font-bold">Empathy by Design — Hero Artwork</h1>
      <p className="mt-3 text-gray-600">
        A growing gallery of hero imagery, photography, and graphic explorations that set the tone for my
        empathy-driven branding work.
      </p>

      {/* Gallery grid */}
      <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item, idx) => (
          <motion.figure
            key={item.src}
            className="group relative overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-black/5 cursor-zoom-in"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            onClick={() => setOpenSrc(item.src)}
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            {item.caption && (
              <figcaption className="p-4 text-sm text-gray-600">{item.caption}</figcaption>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.figure>
        ))}
      </section>

      {/* Lightbox */}
      {openSrc && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setOpenSrc(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-4 top-4 rounded-md bg-white/10 px-3 py-2 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setOpenSrc(null);
            }}
          >
            Close
          </button>
          <motion.img
            src={openSrc}
            alt={gallery.find((g) => g.src === openSrc)?.alt ?? 'Artwork'}
            className="max-h-[80vh] w-auto rounded-xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
