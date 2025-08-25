'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Search, ChevronLeft } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags?: string[];
  link?: string; // internal link like /work/...
};

export default function PortfolioCollection() {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<string>('All');

  // ---- Data ---------------------------------------------------------------
  const projects: Project[] = [
    {
      id: 1,
      title: 'AdorablyInkedxo Brand Ecosystem',
      description:
        'Sustainable fashion brand with packaging, photography, and a Shopify e-commerce experience.',
      image: '/images/adorably-inked-xo-brand-ecosystem.png',
      category: 'Brand Design',
      tags: ['branding', 'ecommerce'],
      link: '/work/adorably-inkedxo',
    },
    {
      id: 2,
      title: 'Creative Storytelling & Visual Narratives',
      description:
        'A poetic blend of vintage typewriter and natural beauty—conceptual visual storytelling.',
      image: '/images/typewriter-roses.png',
      category: 'Conceptual Art',
      tags: ['art', 'concept'],
      link: '/work/creative-storytelling',
    },
    {
      id: 3,
      title: 'Hearts & Minds Foundation Identity',
      description:
        'Complete identity system focused on human connection and empathy-driven principles.',
      image: '/images/hearts-and-minds-logo.png',
      category: 'Brand Design',
      tags: ['nonprofit', 'identity'],
      link: '/work/hearts-and-minds',
    },
    {
      id: 4,
      title: 'Professional Business Card',
      description:
        'Clean, elegant business card design with sophisticated typography and layout.',
      image: '/images/business-card.png',
      category: 'Print Design',
      tags: ['print', 'identity'],
      link: '/work/business-card',
    },
    {
      id: 5,
      title: 'Corporate Letterhead System',
      description:
        'Cohesive letterhead system maintaining brand standards, hierarchy, and clarity.',
      image: '/images/letterhead.png',
      category: 'Print Design',
      tags: ['print', 'stationery'],
      link: '/work/letterhead',
    },
    {
      id: 6,
      title: 'Brand Identity Portfolio Collection',
      description:
        'A collection across music, science, sustainability, hospitality, and tech.',
      image: '/images/branding.png',
      category: 'Brand Design',
      tags: ['grid', 'collection'],
      link: '/work/brand-identity',
    },
    {
      id: 7,
      title: 'Empathy by Design — Hero Artwork',
      description: 'Photography & art direction for a warm, emotive hero visual.',
      image: '/images/field-of-flowers.png',
      category: 'Photography',
      tags: ['art direction', 'photo'],
      link: '/work/empathy-by-design', // create this page when ready
    },
  ];

  // ---- Derived values -----------------------------------------------------
  const categories = useMemo(() => {
    const set = new Set<string>(['All']);
    projects.forEach((p) => set.add(p.category));
    return Array.from(set);
  }, [projects]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesCategory = active === 'All' || p.category === active;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.tags ?? []).some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [projects, active, query]);

  // ---- UI ----------------------------------------------------------------
  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ChevronLeft size={18} />
            Back to Home
          </Link>

        <div className="relative w-full max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tags, descriptions…"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d4967d] focus:border-transparent"
            />
          </div>
        </div>

        {/* Category pills */}
        <div className="max-w-6xl mx-auto px-6 pb-4 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-3 py-1.5 rounded-full text-sm border transition ${
                active === c
                  ? 'bg-[#d4967d] text-white border-[#d4967d]'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </header>

      {/* Title */}
      <div className="max-w-6xl mx-auto px-6 mt-8 mb-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Portfolio Collection
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl">
          A curated selection of branding, print, photography, and conceptual work.
          Filter by category or search to jump to a project quickly.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((p, idx) => {
          const Card = (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                    {p.category}
                  </span>
                  {p.link && (
                    <ExternalLink
                      size={16}
                      className="text-gray-400 group-hover:text-[#d4967d] transition-colors"
                    />
                  )}
                </div>
                <h3 className="text-lg font-semibold leading-snug group-hover:text-[#d4967d] transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                {(p.tags?.length ?? 0) > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags!.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-full border border-gray-200 text-gray-600"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          );

          // Wrap with <Link> when we have an internal link
          return p.link ? (
            <Link key={p.id} href={p.link} aria-label={p.title}>
              {Card}
            </Link>
          ) : (
            Card
          );
        })}
      </div>
    </div>
  );
}
