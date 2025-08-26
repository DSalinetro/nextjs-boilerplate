// app/work/empathy-by-design/page.tsx
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
  // ✨ Add/remove pieces here
  const gallery: GalleryItem[] = [
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
    // Add more pieces below as you upload them to /public/images
    // { src: '/images/your-file.png', alt: 'Description', caption: 'Optional caption' },
  ];

  const [openSrc, setOpenSrc] = useState<string | null>(null);

  // close on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenSrc(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <Link href="/#portfolio" className="text-sm text-gray-500 hover:text-[#d4967d]">
        &larr; Back to Portfolio
      </Link>

      <h1 className="mt-4 text-4xl md:text-5xl font-bold">Empathy by Design — Hero Artwork</h1>
      <p className="mt-3 text-gray-600 max-w-3xl">
        A living gallery of photography, art direction, and visual experiments behind the
        “Empathy by Design” aesthetic. Click any image to view it larger.
      </p>

      {/* Gallery */}
      <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2">
        {gallery.map((item, i) => (
          <motion.figure
            key={item.src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow bg-white"
          >
            <button
              onClick={() => setOpenSrc(item.src)}
              className="block w-full focus:outline-none focus:ring-2 focus:ring-[#d4967d]"
              aria-label={`Open ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover"
              />
            </button>
            {item.caption && (
              <figcaption className="px-4 py-3 text-sm text-gray-600">{item.caption}</figcaption>
            )}
          </motion.figure>
        ))}
      </div>

      {/* Lightbox */}
      {openSrc && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 grid place-items-center p-4"
          onClick={() => setOpenSrc(null)}
        >
          <img
            src={openSrc}
            alt=""
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setOpenSrc(null)}
            className="absolute top-4 right-4 text-white/90 hover:text-white text-xl"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}
    </main>
  );
}
