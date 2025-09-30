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
  // ✅ Gallery items (Books of Dreams is first; also used as hero)
  const gallery: GalleryItem[] = [
    {
      src: '/images/books-of-dreams.png',
      alt: 'Books of Dreams — warm, moody library scene',
      caption: 'Books of Dreams',
    },
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
      src: '/images/field-of-flowers.png',
      alt: 'Field of flowers at golden hour',
      caption: 'Field of Flowers',
    },
    {
      // If/when you rename the file to remove the double extension,
      // update to '/images/bubbles-and-butterflies.png'
      src: '/images/bubbles-and-butterflies.png.png',
      alt: 'Bubbles and Butterflies — dreamy artwork',
      caption: 'Bubbles & Butterflies',
    },

    // 🔹 New Imgur items (direct links). Feel free to reorder.
    { src: 'https://i.imgur.com/7WiZ7HW.png', alt: 'Wildflower & Willow Spa — Empathy by Design hero artwork.' },
    { src: 'https://i.imgur.com/QYax1on.png', alt: 'Wildflower & Willow Spa — Empathy by Design hero artwork.' },

    { src: 'https://i.imgur.com/JfKkTV4.png', alt: 'Empathy by Design — Hero Artwork (JfKkTV4)' },
    { src: 'https://i.imgur.com/YXFseqs.png', alt: 'Empathy by Design — Hero Artwork (YXFseqs)' },
    { src: 'https://i.imgur.com/bQagKo6.png', alt: 'Empathy by Design — Hero Artwork (bQagKo6)' },
    { src: 'https://i.imgur.com/cvpLp6e.png', alt: 'Empathy by Design — Hero Artwork (cvpLp6e)' },
    { src: 'https://i.imgur.com/tSCUORv.png', alt: 'Empathy by Design — Hero Artwork (tSCUORv)' },
    { src: 'https://i.imgur.com/SPlMkgL.png', alt: 'Empathy by Design — Hero Artwork (SPlMkgL)' },
    { src: 'https://i.imgur.com/OpSKBdD.png', alt: 'Empathy by Design — Hero Artwork (OpSKBdD)' },
    { src: 'https://i.imgur.com/J7jy2ob.png', alt: 'Empathy by Design — Hero Artwork (J7jy2ob)' },
    { src: 'https://i.imgur.com/A2YqFuX.png', alt: 'Empathy by Design — Hero Artwork (A2YqFuX)' },
    { src: 'https://i.imgur.com/GttboQT.png', alt: 'Empathy by Design — Hero Artwork (GttboQT)' },
    { src: 'https://i.imgur.com/VMhswmq.png', alt: 'Empathy by Design — Hero Artwork (VMhswmq)' },
    { src: 'https://i.imgur.com/CDaEvkB.png', alt: 'Empathy by Design — Hero Artwork (CDaEvkB)' },
    { src: 'https://i.imgur.com/2BKtXpU.png', alt: 'Empathy by Design — Hero Artwork (2BKtXpU)' },
    { src: 'https://i.imgur.com/nn0HTzZ.png', alt: 'Empathy by Design — Hero Artwork (nn0HTzZ)' },
    { src: 'https://i.imgur.com/tzYZbVL.png', alt: 'Empathy by Design — Hero Artwork (tzYZbVL)' },
    { src: 'https://i.imgur.com/sXsDX6c.png', alt: 'Empathy by Design — Hero Artwork (sXsDX6c)' },
    { src: 'https://i.imgur.com/cdOprHO.png', alt: 'Empathy by Design — Hero Artwork (cdOprHO)' },
    { src: 'https://i.imgur.com/NhPGLAC.png', alt: 'Empathy by Design — Hero Artwork (NhPGLAC)' },
    { src: 'https://i.imgur.com/CjeFrwt.png', alt: 'Empathy by Design — Hero Artwork (CjeFrwt)' },
    { src: 'https://i.imgur.com/ruYw9PO.png', alt: 'Empathy by Design — Hero Artwork (ruYw9PO)' },
  ];

  // 🔹 Hero is locked to Books of Dreams by caption (falls back to first if missing)
  const hero =
    gallery.find((g) => g.caption?.toLowerCase() === 'books of dreams') ??
    gallery[0];

  const [openSrc, setOpenSrc] = useState<string | null>(null);

  // Close lightbox on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenSrc(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      {/* Back link (adjust target to where your grid lives) */}
      <Link href="/design#portfolio" className="text-sm text-gray-500 hover:text-[#d4967d]">
        &larr; Back to Portfolio
      </Link>

      <h1 className="mt-4 text-4xl md:text-5xl font-bold">
        Empathy by Design — Hero Artwork
      </h1>
      <p className="mt-3 text-gray-600 max-w-2xl">
        Photography &amp; art direction for a warm, emotive hero visual.
      </p>

      {/* HERO — now showing Books of Dreams */}
      <motion.button
        onClick={() => setOpenSrc(hero.src)}
        whileHover={{ y: -4 }}
        className="mt-8 block w-full text-left"
        aria-label="Open Books of Dreams in lightbox"
      >
        <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-gray-50 shadow-lg">
          <img
            src={hero.src}
            alt={hero.alt}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        {hero.caption && (
          <div className="mt-3 text-base text-gray-700 font-medium">{hero.caption}</div>
        )}
      </motion.button>

      {/* GALLERY */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item, i) => (
          <motion.button
            key={`${item.src}-${i}`}
            className="group text-left"
            whileHover={{ y: -4 }}
            onClick={() => setOpenSrc(item.src)}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-50">
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading={i > 2 ? 'lazy' : undefined}
              />
            </div>
            {item.caption && (
              <div className="mt-2 text-sm text-gray-600">{item.caption}</div>
            )}
          </motion.button>
        ))}
      </div>

      {/* LIGHTBOX */}
      {openSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setOpenSrc(null)}
          role="dialog"
          aria-modal="true"
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
