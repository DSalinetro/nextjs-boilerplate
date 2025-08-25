'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ExternalLink } from 'lucide-react';

const IMAGES = [
  // Add/remove as you create more artwork
  '/images/empathy-rose.png',
  '/images/empathy-by-design.png',
  '/images/field-of-flowers.png',
];

export default function EmpathyByDesignCase() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/design" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ChevronLeft size={18} />
            Back to Collection
          </a>

          <a
            href="https://daniellesalinetro.design"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            Portfolio Site <ExternalLink size={16} />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative isolate w-full min-h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(/images/field-of-flowers.png)` }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,.45) 0%, rgba(0,0,0,.6) 60%, rgba(0,0,0,.45) 100%)',
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
          <motion.h1
            className="text-white font-extrabold tracking-wide"
            style={{ fontSize: 'clamp(36px,5.5vw,64px)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Empathy by Design
          </motion.h1>
          <motion.p
            className="mt-3 max-w-2xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Ongoing series exploring warmth, compassion, and emotional resonance
            through photography, type, and light.
          </motion.p>
        </div>
      </section>

      {/* Body */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <p>
            This collection will evolve as new graphics are added. Below is a
            starter gallery—replace or add images in <code>/public/images/</code>
            and update the <code>IMAGES</code> list at the top of this file.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMAGES.map((src, i) => (
            <motion.a
              key={src}
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <img src={src} alt={`Empathy by Design ${i + 1}`} className="w-full h-64 object-cover" />
            </motion.a>
          ))}
        </div>
      </main>
    </div>
  );
}
