'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const IMAGES = {
  hero: '/images/designing-for-mental-health.png',
  typewriter: '/images/typewriter-roses.png',
  logo: '/images/hearts-and-minds-logo.png',
  businessCard: '/images/business-card.png',
  letterhead: '/images/letterhead.png',
  portrait: '/images/portrait.png',
};

export default function Page() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const ids = ['home', 'portfolio', 'about', 'contact'];
    const onScroll = () => {
      const y = window.scrollY + 100;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { offsetTop: t, offsetHeight: h } = el;
        if (y >= t && y < t + h) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div style={{ fontFamily: 'ui-sans-serif, system-ui' }}>
      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: 64,
        background: 'rgba(0,0,0,.5)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50
      }}>
        <div style={{ display: 'flex', gap: 24 }}>
          {['home', 'portfolio', 'about', 'contact'].map(id => (
            <a key={id} href={`#${id}`} onClick={e => { e.preventDefault(); go(id); }}
              style={{
                color: active === id ? '#d4967d' : '#fff',
                textDecoration: 'none', fontWeight: 600
              }}>
              {id[0].toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{
        minHeight: '100vh',
        background: `url(${IMAGES.hero}) center/cover no-repeat`,
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        color: '#fff', padding: 24, textAlign: 'center'
      }}>
        <div>
          <h1 style={{ fontSize: 'clamp(36px,6vw,64px)' }}>Empathy by Design</h1>
          <p style={{ maxWidth: 600, margin: '12px auto' }}>
            Creative Designer & Researcher · Empathy-Driven Branding, UX & Content
          </p>
          <a href="#portfolio" onClick={e => { e.preventDefault(); go('portfolio'); }}
            style={{
              background: 'linear-gradient(135deg,#d4967d,#c47f64)',
              padding: '12px 18px', borderRadius: 12, fontWeight: 700,
              color: '#fff', textDecoration: 'none'
            }}>
            View My Work
          </a>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" style={{ padding: '80px 24px', background: '#f9fafb' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Portfolio</h2>
        <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
          <Card image={IMAGES.typewriter} title="Creative Storytelling" text="Vintage typewriter + florals." />
          <Card image={IMAGES.logo} title="Hearts & Minds Identity" text="Empathy-centered identity system." />
          <Card image={IMAGES.businessCard} title="Business Card" text="Elegant typographic system." />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: '80px 24px', background: '#fff' }}>
        <h2 style={{ marginBottom: 24 }}>About Me</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
          <p style={{ maxWidth: 600, textAlign: 'center' }}>
            I blend design, research, and storytelling to create human-centered experiences with real impact.
          </p>
          <img src={IMAGES.portrait} alt="Danielle Salinetro"
            style={{ width: 240, height: 240, borderRadius: '50%', objectFit: 'cover' }} />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '80px 24px', background: '#0f172a', color: '#fff', textAlign: 'center' }}>
        <h2>Let’s Connect</h2>
        <p>Email <a href="mailto:dsalinetro@pm.me" style={{ color: '#d4967d' }}>dsalinetro@pm.me</a></p>
      </section>

      <footer style={{ background: '#000', color: '#9ca3af', padding: 24, textAlign: 'center' }}>
        © 2025 Danielle Salinetro
      </footer>
    </div>
  );
}

function Card({ image, title, text }: { image: string; title: string; text: string }) {
  return (
    <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: .5 }}
      style={{ borderRadius: 12, overflow: 'hidden', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,.1)' }}>
      <img src={image} alt={title} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
      <div style={{ padding: 16 }}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </motion.article>
  );
}
