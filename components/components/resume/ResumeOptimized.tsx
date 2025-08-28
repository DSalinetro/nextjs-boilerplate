'use client';

import React from 'react';

export default function ResumeOptimized() {
  return (
    <article className="text-sm leading-6 text-gray-900">
      {/* NAME + CONTACT */}
      <header className="mb-6">
        <h2 className="text-2xl font-bold leading-tight">Danielle N. Salinetro</h2>
        <div className="text-[13px] text-gray-600">
          Kansas City, MO (Remote) · 636.252.5894 ·{' '}
          <a className="underline" href="mailto:dsalinetro@pm.me">dsalinetro@pm.me</a> ·{' '}
          <a className="underline" href="https://daniellesalinetro.design" target="_blank" rel="noreferrer">
            daniellesalinetro.design
          </a>
        </div>
      </header>

      {/* SUMMARY */}
      <section className="mb-5">
        <h3 className="text-lg font-semibold" style={{ color: '#D49670' }}>Summary</h3>
        <p>
          Creative Designer & Researcher with cross-disciplinary experience in mortgage operations, brand design,
          and content marketing. Known for research depth, documentation rigor, and empathetic UX thinking.
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mb-5">
        <h3 className="text-lg font-semibold" style={{ color: '#D49670' }}>Highlights</h3>
        <ul className="list-disc ml-5 space-y-1">
          <li>Mortgage closing (FHA/USDA/VA/Refi) — document QA, compliance, stakeholder coordination</li>
          <li>Commercial real-estate research at Moody’s — property data, flood zones, taxes, HOAs</li>
          <li>Adobe CC, Figma, Tailwind; content & SEO basics; data visualization</li>
          <li>Published empathy-driven design writing; strong writing/editing</li>
        </ul>
      </section>

      {/* EXPERIENCE — replace bullets with your final content */}
      <section className="mb-5">
        <h3 className="text-lg font-semibold" style={{ color: '#D49670' }}>Experience</h3>

        <div className="mb-3">
          <div className="font-medium">Mortgage Closer</div>
          <div className="text-[13px] text-gray-600">FHA · USDA · VA · Refinance</div>
          <ul className="list-disc ml-5">
            <li>Reviewed and verified loan documents; resolved discrepancies; coordinated with title & stakeholders.</li>
            <li>Prepared HUD-1 / TIL; ensured adherence to federal and state regulations.</li>
          </ul>
        </div>

        <div className="mb-3">
          <div className="font-medium">Commercial Real Estate Researcher — Moody’s</div>
          <ul className="list-disc ml-5">
            <li>Researched properties: taxes, bankruptcies, square footage, lot size, flood zones, HOAs.</li>
            <li>Built marketing packages; maintained data quality and documentation.</li>
          </ul>
        </div>

        {/* Add more roles here as needed */}
      </section>

      {/* SKILLS */}
      <section className="mb-5">
        <h3 className="text-lg font-semibold" style={{ color: '#D49670' }}>Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <ul className="list-disc ml-5">
            <li>Adobe Creative Suite, Figma</li>
            <li>Tailwind CSS, basic Next.js</li>
            <li>Data viz & research synthesis</li>
          </ul>
          <ul className="list-disc ml-5">
            <li>Content & SEO basics</li>
            <li>CMS/CRM tooling</li>
            <li>Documentation & QA</li>
          </ul>
        </div>
      </section>

      {/* EDUCATION */}
      <section>
        <h3 className="text-lg font-semibold" style={{ color: '#D49670' }}>Education & Certifications</h3>
        <ul className="list-disc ml-5">
          <li>Google UX Design Certificate — in progress</li>
        </ul>
      </section>
    </article>
  );
}
