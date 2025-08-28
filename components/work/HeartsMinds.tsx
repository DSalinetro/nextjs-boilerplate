'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeartsMinds() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="relative isolate">
        <div className="absolute inset-0">
          <img
            src="/images/hearts-minds/hero.jpg"
            alt="Hearts & Minds concept hero"
            className="w-full h-72 object-cover"
            onError={(e) => ((e.currentTarget.style.display = 'none'))}
          />
          {/* fallback gradient if image missing */}
          <div className="h-72 w-full bg-gradient-to-br from-rose-50 to-orange-50" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
            Hearts & Minds — Empathy Concept
          </h1>
          <p className="text-gray-600">
            A compact case study on designing for emotion, clarity, and trust. Includes research
            pillars, decision framework, and sample artifacts.
          </p>

          <div className="mt-5 flex gap-3 flex-wrap">
            <Link
              href="/design#portfolio"
              className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50"
            >
              ← Back to Portfolio
            </Link>
            {/* Optional download — upload /public/Hearts-and-Minds-Concept.pdf to enable */}
            <a
              href="/Hearts-and-Minds-Concept.pdf"
              className="rounded-xl px-4 py-2 text-sm text-white"
              style={{ backgroundColor: '#D49670' }}
            >
              Download Concept (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-3" style={{ color: '#D49670' }}>
          Objective
        </h2>
        <p className="text-gray-800 leading-7">
          Show how empathetic design can guide decisions — aligning user emotion (hearts) with
          information clarity (minds). The concept packages research insights into a practical
          framework teams can apply to onboarding, marketing, or service flows.
        </p>
      </section>

      {/* PILLARS */}
      <section className="max-w-4xl mx-auto px-4 py-6">
        <h3 className="text-xl font-semibold mb-3" style={{ color: '#D49670' }}>
          Research Pillars
        </h3>
        <ul className="list-disc ml-5 space-y-2 text-gray-800">
          <li>Empathy audits to surface emotional blockers and friction points.</li>
          <li>Plain-language patterns to build trust and reduce cognitive load.</li>
          <li>Story structure to move users from concern → clarity → confident action.</li>
        </ul>
      </section>

      {/* FRAMEWORK */}
      <section className="max-w-4xl mx-auto px-4 py-6">
        <h3 className="text-xl font-semibold mb-3" style={{ color: '#D49670' }}>
          Decision Framework (H→M)
        </h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            ['Acknowledge', 'Name the fear or need; mirror language users already use.'],
            ['Orient', 'Set simple expectations. What happens next? How long? What do I need?'],
            ['Invite', 'Offer a clear, respectful next step with lightweight commitment.'],
          ].map(([title, body]) => (
            <div key={title} className="rounded-xl border p-4 bg-white">
              <div className="font-medium">{title}</div>
              <div className="text-sm text-gray-600 mt-1">{body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ARTIFACTS */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h3 className="text-xl font-semibold mb-4" style={{ color: '#D49670' }}>
          Artifacts (Samples)
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { src: '/images/hearts-minds/personas.jpg', alt: 'Personas' },
            { src: '/images/hearts-minds/empathy-loop.png', alt: 'Empathy loop' },
            { src: '/images/hearts-minds/storyboard.jpg', alt: 'Storyboard' },
            { src: '/images/hearts-minds/ui-mock.png', alt: 'UI mock' },
          ].map((img) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-xl overflow-hidden border bg-white"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover"
                onError={(e) => ((e.currentTarget.style.display = 'none'))}
              />
              <div className="p-3 text-sm text-gray-600">{img.alt}</div>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-4">
          Tip: add your own images to <code>/public/images/hearts-minds/</code> with the filenames
          above to replace the placeholders.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="flex flex-wrap gap-3">
          <a
            href="/Hearts-and-Minds-Concept.pdf"
            className="rounded-xl px-4 py-2 text-sm text-white"
            style={{ backgroundColor: '#D49670' }}
          >
            Download Concept (PDF)
          </a>
          <Link href="/design#contact" className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50">
            Discuss this concept
          </Link>
        </div>
      </section>
    </main>
  );
}
