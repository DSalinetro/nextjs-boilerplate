'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Phone, MapPin, ExternalLink, Linkedin, BookOpen } from 'lucide-react';

// If you put the UI files at /components/ui as we discussed, these relative imports will work.
// If you use "@/components/...", switch these three lines to that alias instead.
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

import { useState, useEffect } from 'react';

export default function DesignPage() {
  const [activeSection, setActiveSection] =
    useState<'home' | 'portfolio' | 'about' | 'blogs' | 'contact'>('home');

  // Smooth scroll
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'about', 'blogs', 'contact'] as const;
      const y = window.scrollY + 100;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { offsetTop, offsetHeight } = el;
        if (y >= offsetTop && y < offsetTop + offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ======= PORTFOLIO (filenames + routes match your repo) ================
  const portfolioItems = [
    {
      id: 1,
      title: 'AdorablyInkedxo Brand Ecosystem',
      description:
        'Complete sustainable fashion brand with packaging, photography, and e-commerce platform built on Shopify.',
      image: '/images/adorably-inked-xo-brand-ecosystem.png',
      category: 'Brand Design',
      link: '/work/adorably-inkedxo',
    },
    {
      id: 2,
      title: 'Creative Storytelling & Visual Narratives',
      description:
        'A poetic blend of vintage typewriter and natural beauty—empathy-driven storytelling and connection.',
      image: '/images/typewriter-roses.png',
      category: 'Conceptual Art',
      link: '/work/creative-storytelling',
    },
    {
      id: 3,
      title: 'Hearts & Minds Foundation Identity',
      description:
        'Complete identity system focused on human connection and empathy-driven principles.',
      image: '/images/hearts-and-minds-logo.png',
      category: 'Brand Design',
      link: '/work/hearts-and-minds',
    },
    {
      id: 4,
      title: 'Professional Business Card Design',
      description:
        'Clean, elegant business card design with sophisticated typography and layout.',
      image: '/images/business-card.png',
      category: 'Print Design',
      link: '/work/business-card',
    },
    {
      id: 5,
      title: 'Corporate Letterhead System',
      description:
        'Professional letterhead maintaining brand cohesion and hierarchy.',
      image: '/images/letterhead.png',
      category: 'Print Design',
      link: '/work/letterhead',
    },
    {
      id: 6,
      title: 'Brand Identity Portfolio Collection',
      description:
        'Diverse identities across music, science, sustainability, hospitality, and tech.',
      image: '/images/branding.png',
      category: 'Brand Design',
      link: '/work/brand-identity',
    },
    {
      id: 7,
      title: 'Empathy by Design — Hero Artwork',
      description: 'Photography & art direction for a warm, emotive hero visual.',
      image: '/images/moody-library.png', // primary card image (you also have /images/Flowers.png)
      category: 'Photography',
      link: '/work/empathy-by-design',
    },
  ];

  // ======= BLOGS (image mapping per your list) ===========================
  const blogPosts = [
    {
      title: "The Empathy Audit: How to Evaluate Your Design's Human Impact",
      excerpt:
        'A framework for measuring emotional outcomes in design and ensuring your work creates meaningful human connections.',
      readTime: '10 min read',
      date: 'Jan 8, 2025',
      link: 'https://www.daniellesalinetro.design/new-page-2',
      image: '/images/empathy-by-design.png', // you specified this for Empathy Audit
    },
    {
      title: 'Designing for Mental Health: Toolkit for Compassionate Creativity',
      excerpt:
        'Strategies for moving beyond surface-level design thinking to support mental wellness.',
      readTime: '6 min read',
      date: 'Dec 15, 2024',
      link: 'https://medium.com/@dsalinetro',
      image: '/images/designing-for-mental-health.png',
    },
    {
      title: "Beyond 'Why Didn't They Just Leave?'",
      excerpt:
        'Design that improves conversations around complex human experiences.',
      readTime: '8 min read',
      date: 'Nov 20, 2024',
      link: 'https://medium.com/@dsalinetro',
      image: '/images/beyond-why-didnt-they-just-leave.webp',
    },
    {
      title: 'Every Child Deserves a Fair Start',
      excerpt:
        'Turning awareness into action through empathy-driven design.',
      readTime: '7 min read',
      date: 'Oct 15, 2024',
      link: 'https://medium.com/@dsalinetro',
      image: '/images/every-child-deserves-a-fair-start.webp',
    },
    {
      title: 'Designing with Empathy: My Creative Journey',
      excerpt:
        'A reflection on empathy in design and building authentic connections.',
      readTime: '9 min read',
      date: 'Sep 28, 2024',
      link: 'https://medium.com/@dsalinetro',
      image: '/images/designing-with-empathy-red-chair.jpg',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* NAV */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10"
        style={{ background: 'rgba(0,0,0,0.5)' }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div className="text-xl font-bold text-white" whileHover={{ scale: 1.05 }}>
              Danielle Salinetro
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'portfolio', label: 'Portfolio' },
                { id: 'about', label: 'About' },
                { id: 'blogs', label: 'Blogs' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id ? 'text-[#d4967d]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <a href="https://medium.com/@dsalinetro" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <BookOpen size={20} />
              </a>
              <a href="https://linkedin.com/in/danielle-salinetro" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://daniellesalinetro.design" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* HERO (uses your field-of-flowers.png) */}
      <section
        id="home"
        className="relative isolate block w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(/images/field-of-flowers.png)` }}
        aria-label="Empathy by Design hero"
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(1000px 800px at 30% 40%, rgba(212,150,125,0.15), transparent),
              linear-gradient(135deg, rgba(0,0,0,.5) 0%, rgba(0,0,0,.7) 50%, rgba(0,0,0,.6) 100%)
            `,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />

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
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1
              className="mb-2 text-white font-extrabold tracking-wide leading-tight [text-wrap:balance]"
              style={{ fontSize: 'clamp(36px, 6vw, 64px)', textShadow: '0 6px 20px rgba(0,0,0,.6)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Empathy by Design
            </motion.h1>

            <motion.p
              className="mx-auto mb-5 max-w-3xl leading-relaxed"
              style={{ color: '#f6f2ef', fontSize: 'clamp(16px, 2.2vw, 20px)', textShadow: '0 2px 8px rgba(0,0,0,.4)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Creative Designer & Researcher · Empathy-Driven Branding, UX & Content
            </motion.p>

            <motion.div
              className="flex gap-3 justify-center flex-wrap mt-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <button
                onClick={() => scrollToSection('portfolio')}
                className="inline-flex items-center justify-center px-5 py-3 rounded-[14px] font-bold text-white no-underline transition-all duration-200 ease-out hover:transform hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #d4967d, #c47f64)',
                  boxShadow: '0 6px 20px rgba(212,150,125,.4)',
                  backdropFilter: 'saturate(120%)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(212,150,125,.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(212,150,125,.4)';
                }}
              >
                View My Work
              </button>

              <a
                href="https://daniellesalinetro.design"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-[14px] font-bold text-white no-underline transition-all duration-200 ease-out hover:transform hover:-translate-y-0.5"
                style={{
                  border: '1.5px solid rgba(255,255,255,.7)',
                  background: 'rgba(255,255,255,.12)',
                  backdropFilter: 'saturate(120%)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,.12)';
                }}
              >
                Visit Portfolio Site
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-white/70" size={32} style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} />
        </motion.div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              A collection of empathy-driven design work spanning branding, UX research, and visual storytelling
            </p>
            <a
              href="https://www.daniellesalinetro.design/branding-portfolio-collection"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#d4967d] font-semibold hover:underline"
            >
              View Complete Portfolio Collection <ExternalLink size={16} />
            </a>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => {
              const isExternal = !!item.link && /^https?:\/\//.test(item.link);
              const CardEl = (
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`transition-transform duration-300 group-hover:scale-105 ${
                        item.category === 'Print Design'
                          ? 'w-auto h-full max-h-full object-contain shadow-md'
                          : 'w-full h-full object-cover'
                      }`}
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary">{item.category}</Badge>
                      {item.link && (
                        <ExternalLink
                          size={16}
                          className="text-gray-400 group-hover:text-[#d4967d] transition-colors"
                        />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[#d4967d] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              );

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  {item.link ? (
                    isExternal ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                        {CardEl}
                      </a>
                    ) : (
                      <Link href={item.link} className="block" aria-label={item.title}>
                        {CardEl}
                      </Link>
                    )
                  ) : (
                    CardEl
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a creative professional blending design, research, and storytelling to create human-centered solutions that drive engagement and impact…
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                My approach combines research, strategy, and creative storytelling to build experiences that resonate on a human level…
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Currently pursuing my Google UX Certificate and CPTC, I’m passionate about translating complex data into compelling visuals…
              </p>
              <div className="flex flex-wrap gap-3">
                {['Empathy-Driven Design','Brand Identity','UX Research','Content Strategy','Visual Storytelling','Data Visualization']
                  .map((skill) => (
                    <Badge key={skill} variant="outline" className="px-4 py-2">{skill}</Badge>
                  ))}
              </div>
            </div>
            <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/portrait.png" alt="Danielle Salinetro" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BLOGS */}
      <section id="blogs" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Insights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Thought leadership on empathy-driven design and creating meaningful connections
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://medium.com/@dsalinetro" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#d4967d] font-semibold hover:underline">
                Read all posts on Medium <ExternalLink size={16} />
              </a>
              <a href="https://www.daniellesalinetro.design/new-page-2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#d4967d] font-semibold hover:underline">
                View Empathy Audit <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => window.open(post.link, '_blank')}
              >
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-[#d4967d] transition-colors">{post.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT + FOOTER */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to create something meaningful together? I’d love to collaborate on projects that prioritize human-centered design.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-[#d4967d]" size={20} />
                  <a href="mailto:dsalinetro@pm.me" className="hover:text-[#d4967d] transition-colors">dsalinetro@pm.me</a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-[#d4967d]" size={20} />
                  <a href="tel:636.252.5894" className="hover:text-[#d4967d] transition-colors">636.252.5894</a>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-[#d4967d]" size={20} />
                  <span>Kansas City, MO (Remote)</span>
                </div>
                <div className="flex items-center gap-4">
                  <ExternalLink className="text-[#d4967d]" size={20} />
                  <a href="https://daniellesalinetro.design" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4967d] transition-colors">
                    daniellesalinetro.design
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="https://medium.com/@dsalinetro" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-lg hover:bg-[#d4967d] transition-colors">
                    <BookOpen size={20} />
                  </a>
                  <a href="https://linkedin.com/in/danielle-salinetro" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-lg hover:bg-[#d4967d] transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://daniellesalinetro.design" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-lg hover:bg-[#d4967d] transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input id="name" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4967d] focus:border-transparent" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input id="email" type="email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4967d] focus:border-transparent" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm font-medium mb-2">Project Type</label>
                  <select id="project" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4967d] focus:border-transparent">
                    <option value="">Select project type</option>
                    <option value="branding">Brand Identity &amp; Design</option>
                    <option value="ux">UX Research &amp; Design</option>
                    <option value="web">Website Design</option>
                    <option value="content">Content Strategy</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4967d] focus:border-transparent resize-none" placeholder="Tell me about your project…" />
                </div>
                <Button type="submit" className="w-full bg-[#d4967d] hover:bg-[#c47f64] text-white py-3 rounded-lg font-semibold transition-colors">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2025 Danielle Salinetro. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="mailto:dsalinetro@pm.me" className="text-gray-400 hover:text-white transition-colors">Email</a>
              <a href="https://medium.com/@dsalinetro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Medium</a>
              <a href="https://daniellesalinetro.design" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
