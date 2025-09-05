// app/design/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ChevronDown,
  Mail,
  MapPin,
  ExternalLink,
  Linkedin,
  BookOpen,
} from 'lucide-react';

import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

// centralized links
import { LINKS } from '../../lib/links';

import { useState, useEffect } from 'react';

export default function DesignPage() {
  const [activeSection, setActiveSection] =
    useState<'home' | 'portfolio' | 'about' | 'blogs' | 'contact'>('home');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const onScroll = () => {
      const ids = ['home', 'portfolio', 'about', 'blogs', 'contact'] as const;
      const y = window.scrollY + 100;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { offsetTop, offsetHeight } = el as HTMLElement;
        if (y >= offsetTop && y < offsetTop + offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ---------- PORTFOLIO CARDS ----------
  type PortfolioItem = {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    link?: string;
    imageClass?: string;
  };

  const portfolioItems: readonly PortfolioItem[] = [
    {
      id: 1,
      title: 'AdorablyInkedxo Brand Ecosystem',
      description:
        'Complete sustainable fashion brand with packaging, photography, and a Shopify e-commerce experience.',
      image: '/images/adorably-inked-xo-brand-ecosystem.png',
      category: 'Brand Design',
      link: '/work/adorably-inkedxo',
      imageClass: 'object-contain',
    },
    {
      id: 2,
      title: 'Creative Storytelling & Visual Narratives',
      description:
        'A poetic blend of vintage typewriter and natural beauty—empathy-driven storytelling and connection.',
      image: '/images/typewriter-roses.png',
      category: 'Conceptual Art',
      link: LINKS.medium,
    },
    {
      id: 3,
      title: 'Hearts & Minds — Empathy Concept',
      description:
        'Research-driven concept exploring emotion → clarity → confident action. Case study + artifacts.',
      image: '/images/hearts-minds/hero.jpg',
      category: 'UX Concept',
      link: LINKS.heartsMindsPortfolio,
    },
    {
      id: 6,
      title: 'Enhance Branding Portfolio',
      description:
        'Selected identities across music, science, sustainability, hospitality, and tech.',
      image: '/images/enhance-branding-card.png',
      category: 'Brand Design',
      link: LINKS.brandingCollection,
    },
    {
      id: 7,
      title: 'Empathy by Design — Hero Artwork',
      description:
        'Photography & art direction for a warm, emotive hero visual.',
      image: '/images/moody-library.png',
      category: 'Photography',
      link: '/work/empathy-by-design',
    },
  ] as const;

  // ---------- BLOGS ----------
  const blogPosts = [
    {
      title: 'Invisible Barriers: Designing for Users Society Forgets',
      excerpt:
        'How subtle design defaults create glass-wall barriers—and practical ways empathy-driven design can dismantle them.',
      readTime: '7 min read',
      date: 'Aug 23, 2025',
      link:
        'https://medium.com/@dsalinetro/a-surreal-glass-like-barrier-with-cracks-symbolizing-the-invisible-walls-that-separate-people-from-d2a582f6707e?sk=c35a9310f979987d96c76abae7ab8078',
      image: 'https://imgur.com/SPlMkgL.png',
    },
    {
      title: "The Empathy Audit: How to Evaluate Your Design's Human Impact",
      excerpt:
        'A framework for measuring emotional outcomes in design and ensuring your work creates meaningful human connections.',
      readTime: '10 min read',
      date: 'Jan 8, 2025',
      link:
        'https://medium.com/@dsalinetro/the-empathy-audit-how-to-evaluate-your-designs-human-impact-267dc8af1bf5',
      image: '/images/empathy-rose.png',
    },
    {
      title:
        'Designing for Mental Health: Toolkit for Compassionate Creativity',
      excerpt:
        'Strategies for moving beyond surface-level design thinking to support mental wellness.',
      readTime: '6 min read',
      date: 'Dec 15, 2024',
      link:
        'https://medium.com/@dsalinetro/designing-for-mental-health-a-toolkit-for-compassionate-creativity-5b727955a802',
      image: '/images/designing-for-mental-health.png',
    },
    {
      title: "Beyond 'Why Didn't They Just Leave?'",
      excerpt:
        'How design can change the conversation around complex human experiences.',
      readTime: '8 min read',
      date: 'Nov 20, 2024',
      link:
        'https://medium.com/@dsalinetro/beyond-why-didnt-they-just-leave-how-design-can-change-the-conversation-31ac8881fe14',
      image: '/images/beyond-why-didnt-they-just-leave.webp',
    },
    {
      title: 'Every Child Deserves a Fair Start',
      excerpt: 'Turning awareness into action through empathy-driven design.',
      readTime: '7 min read',
      date: 'Oct 15, 2024',
      link:
        'https://medium.com/@dsalinetro/every-child-deserves-a-fair-start-turning-awareness-into-action-2ac7a73f7393',
      image: '/images/every-child-deserves-a-fair-start.webp',
    },
    {
      title: 'Designing with Empathy: My Creative Journey',
      excerpt:
        'A reflection on empathy in design and building authentic connections.',
      readTime: '9 min read',
      date: 'Sep 28, 2024',
      link:
        'https://medium.com/@dsalinetro/designing-with-empathy-my-creative-journey-ebc6ad12ceb5',
      image: '/images/designing-with-empathy-red-chair.jpg',
    },
  ] as const;

  return (
    <div className="min-h-screen">
      {/* NAV */}
      {/* nav remains unchanged */}

      {/* HERO */}
      <section
        id="home"
        className="relative isolate block w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(/images/field-of-flowers.png)` }}
        aria-label="Empathy by Design hero"
      >
        {/* ...background gradients unchanged... */}

        <div className="grid place-items-center min-h-screen px-6 py-24 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto p-7 md:p-10 rounded-[20px] shadow-2xl"
            style={{
              background: 'rgba(0,0,0,0.35)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,.15)',
              boxShadow: '0 20px 60px rgba(0,0,0,.4)',
            }}
          >
            <motion.h1
              className="mb-2 text-white font-extrabold tracking-wide leading-tight [text-wrap:balance]"
              style={{
                fontSize: 'clamp(36px, 6vw, 64px)',
                textShadow: '0 6px 20px rgba(0,0,0,.6)',
              }}
            >
              Empathy by Design
            </motion.h1>

            <motion.p
              className="mx-auto mb-5 max-w-3xl leading-relaxed"
              style={{
                color: '#f6f2ef',
                fontSize: 'clamp(16px, 2.2vw, 20px)',
                textShadow: '0 2px 8px rgba(0,0,0,.4)',
              }}
            >
              Creative Designer & Researcher · Empathy-Driven Branding & UX
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* BLOGS */}
      <section id="blogs" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Latest Insights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Thought leadership on empathy-driven design and creating meaningful connections
            </p>
            <a
              href={LINKS.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D49670] font-semibold hover:underline"
            >
              Read all posts on Medium <ExternalLink size={16} />
            </a>
          </motion.div>

          {/* blog cards unchanged */}
        </div>
      </section>

      {/* CONTACT + FOOTER */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 Danielle Salinetro. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:dsalinetro@pm.me" className="text-gray-400 hover:text-white">Email</a>
            <a href={LINKS.medium} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Medium</a>
            <a href="https://linkedin.com/in/danielle-salinetro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
