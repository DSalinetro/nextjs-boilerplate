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
  // ✅ Put all artwork you want to show here.
  // Make sure each file exists in /public/images/ with the exact name & extension.
  const gallery: GalleryItem[] = [
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
    // If you had the “woman in poppies” image here before, add it back with the correct filename:
    // { src: '/images/woman-in-poppies.jpg', alt: 'Woman in poppy field, golden hour', caption: 'Poppy Field' },
  ];

  const [openSrc, setOpenSrc] = useState<string | null>(null);

  // Allow closing the lightbox with Esc
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
      <p className="mt-3 text-
