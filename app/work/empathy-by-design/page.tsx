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
  // ✅ Update this list as you add more artwork to /public/images
  const gallery: GalleryItem[] = [
    {
      src: '/images/moody-library.png',
      alt: 'Moody library hero artwork',
      caption: 'Moody Library',
    },
    {
      src: '/images/rainy-day.png',
      alt: 'Child in a red coat holding an umbrella in a rain-dappled wildflower field under dark storm clouds.',
      caption: 'Rainy Day',
    },
    {
      src: '/images/books-of-dreams.png',
      alt: 'Books of Dreams — warm, moody library scene',
      caption: 'Books of Dreams',
    },
    {
      src: '/images/field-of-flowers.png',
      alt: 'Field of flowers at golden hour',
      caption: 'Field of Flowers',
    },
    {
      // If you rename this file to remove the double extension, update the src to '/images/bubbles-and-butterflies.png'
      src: '/images/bubbles-and-butterflies.png.png',
      alt: 'Bubbles and Butterflies — dreamy artwork',
      caption: 'Bubbles & Butterflies',
    },
  ];

  const [openSrc, setOpenSrc] = useState<string | null>(null);

  // Close lightbox on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenSrc(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* If your portfolio grid lives on /design, keep /design#portfolio.
          If it’s on the home page, switch to "/#portfolio" instead. */}
      <Link href="/design#portfolio" className="text-sm text-gray-500 hover:text-[#d4967d]">
        &larr; Back to Portfolio
      </Link>

      <h1 className="mt-4 text-4xl md:text-5xl font-bold">
        Empathy by Design — Hero Artwork
      </h1>
      <p className="mt-3 text-gray-600 max-w-2xl">
        Photography &amp; art direction for a warm, emotive hero visual.
      </p>

      {/* Gallery */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item, i) => (
          <motion.button
            key={i}
            className="group text-left"
            whileHover={{ y: -4 }}
            onClick={() => setOpenSrc(item.src)}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-50">
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            {item.caption && (
              <div className="mt-2 text-sm text-gray-600">{item.caption}</div>
            )}
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      {openSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setOpenSrc(null)}
        >
          <img
            src={openSrc}
            alt=""
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
          />
        </div>
      )}
    </main>
  );
}
