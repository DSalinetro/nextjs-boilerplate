'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/** Central place to map filenames in /public/images */
const IMAGES = {
  // Hero
  hero: '/images/hero-rose.png', // <- make sure this exists

  // Brand / portfolio pieces
  typewriter: '/images/typewriter-roses.png',
  logo: '/images/hearts-and-minds-logo.png',
  businessCard: '/images/business-card.png',
  letterhead: '/images/letterhead.png',
  portrait: '/images/portrait.png',

  // Blog covers (adjust names if yours differ)
  mentalHealth: '/images/designing-for-mental-health.png',
  beyondLeave: '/images/beyond-why-didnt-they-just-leave.png',
  fairStart: '/images/every-child-deserves-a-fair-start.png',
  empathyJourney: '/images/designing-with-empathy-red-chair.png',
  empathyAudit: '/images/empathy-audit-typewriter.png',
};

/** Minimal card helper */
function Card({
  image,
  title,
  text,
  link,
}: {
  image: string;
  title: string;
  text: string;
  link?: string;
}) {
  const body = (
    <div
      style={{
        overflow: 'hidden',
        borderRadius: 16,
        background: '#fff',
        boxShadow:
          '0 1px 2px rgba(0,0,0,.04), 0 12px 24px -8px rgba(16,24,40,.12)',
      }}
    >
      <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform .35s',
          }}
        />
      </div>
      <div style={{ padding: 16 }}>
        <div
          style={{
            fontWeight: 700,
            fontSize: 18,
            marginBottom: 8,
            color: '#0f172a',
          }}
        >
          {title}
        </div>
        <div style={{ color: '#475569' }}>{text}</div>
      </div>
    </div>
  );

  if (!link) return body;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      {body}
    </a>
  );
}

export default function Page() {
  const [active, setActive] = useState<'home' | 'portfolio' | 'blogs' | 'figma' | 'about' | 'contact'>('home');

  /** Smooth spy-scroll for nav highlighting */
  useEffect(() => {
    const ids: Array<typeof active> = ['home', 'portfolio', 'blogs', 'figma', 'about', 'contact'];
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
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div style={{ fontFamily: 'ui-sans-serif, system-ui' }}>
      {/* NAV */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 64,
          background: 'rgba(0,0,0,.5)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 50,
        }}
      >
        <div style={{ display: 'flex', gap: 24 }}>
          {['home', 'portfolio', 'blogs', 'figma', 'about', 'contact'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                go(id);
              }}
              style={{
                color: active === id ? '#d4967d' : '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'color .2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget.style.color = '#ffd9ca'))}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = active === id ? '#d4967d' : '#fff')
              }
            >
              {id[0].toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        style={{
          minHeight: '100vh',
          backgroundImage: `url('${IMAGES.hero}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          display: 'grid',
          placeItems: 'center',
          padding: '0 24px',
        }}
        aria-label="Empathy by Design – hero"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: 'center',
            maxWidth: 900,
            padding: 24,
            background: 'rgba(0,0,0,.4)',
            border: '1px solid rgba(255,255,255,.12)',
            borderRadius: 20,
            color: '#fff',
          }}
        >
          <h1
            style={{
              margin: 0,
              fontWeight: 800,
              lineHeight: 1.1,
              fontSize: 'clamp(36px,6vw,64px)',
              textShadow: '0 4px 14px rgba(0,0,0,.45)',
            }}
          >
            Empathy by Design
          </h1>
          <p
            style={{
              margin: '12px auto 0',
              maxWidth: 640,
              color: '#f6f2ef',
              fontSize: 'clamp(16px,2.2vw,20px)',
            }}
          >
            Creative Designer & Researcher · Empathy-Driven Branding, UX & Content
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 16, flexWrap: 'wrap' }}>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                go('portfolio');
              }}
              style={{
                padding: '12px 16px',
                borderRadius: 14,
                fontWeight: 700,
                color: '#fff',
                background: 'linear-gradient(135deg,#d4967d,#c47f64)',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(212,150,125,.35)',
              }}
            >
              View My Work
            </a>
            <a
              href="https://daniellesalinetro.design"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '12px 16px',
                borderRadius: 14,
                fontWeight: 700,
                color: '#fff',
                border: '1.5px solid rgba(255,255,255,.65)',
                background: 'rgba(255,255,255,.08)',
                textDecoration: 'none',
              }}
            >
              Visit Portfolio Site
            </a>
          </div>
        </motion.div>
      </section>

      {/* PORTFOLIO – brand pieces */}
      <section id="portfolio" style={{ padding: '80px 24px', background: '#f9fafb' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Portfolio</h2>
        <div
          style={{
            display: 'grid',
            gap: 24,
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          }}
        >
          <Card
            image={IMAGES.typewriter}
            title="Creative Storytelling"
            text="Vintage typewriter + florals."
          />
          <Card
            image={IMAGES.logo}
            title="Hearts & Minds Identity"
            text="Empathy-centered identity system."
          />
          <Card
            image={IMAGES.businessCard}
            title="Business Card"
            text="Elegant typographic system."
          />
          <Card
            image={IMAGES.letterhead}
            title="Letterhead System"
            text="Cohesive corporate documents."
          />
          <Card
            image={IMAGES.portrait}
            title="Portrait"
            text="Professional headshot / profile."
          />
        </div>
      </section>

      {/* BLOGS – your five Medium posts */}
      <section id="blogs" style={{ padding: '80px 24px', background: '#fff' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Latest Insights</h2>
        <div
          style={{
            display: 'grid',
            gap: 24,
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          }}
        >
          <Card
            image={IMAGES.mentalHealth}
            title="Designing for Mental Health"
            text="Toolkit for Compassionate Creativity"
            link="https://medium.com/@dsalinetro/designing-for-mental-health-a-toolkit-for-compassionate-creativity-5b727955a802"
          />
          <Card
            image={IMAGES.beyondLeave}
            title="Beyond 'Why Didn’t They Just Leave?'"
            text="How design can change the conversation"
            link="https://medium.com/@dsalinetro/beyond-why-didnt-they-just-leave-how-design-can-change-the-conversation-31ac8881fe14"
          />
          <Card
            image={IMAGES.fairStart}
            title="Every Child Deserves a Fair Start"
            text="Turning awareness into action"
            link="https://medium.com/@dsalinetro/every-child-deserves-a-fair-start-turning-awareness-into-action-2ac7a73f7393"
          />
          <Card
            image={IMAGES.empathyJourney}
            title="Designing with Empathy"
            text="My creative journey"
            link="https://medium.com/@dsalinetro/designing-with-empathy-my-creative-journey-ebc6ad12ceb5"
          />
          <Card
            image={IMAGES.empathyAudit}
            title="The Empathy Audit"
            text="Evaluating design’s human impact"
            link="https://medium.com/@dsalinetro/the-empathy-audit-how-to-evaluate-your-designs-human-impact-267dc8af1bf5"
          />
        </div>
      </section>

      {/* OPTIONAL – Figma embed (leave if you want it) */}
      <section id="figma" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2>Figma Prototype</h2>
        <iframe
          style={{
            border: '1px solid #ccc',
            borderRadius: 12,
            width: '100%',
            maxWidth: 980,
            height: 480,
          }}
          src="https://www.figma.com/embed?embed_host=share&url=YOUR-FIGMA-LINK"
          allowFullScreen
        />
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: '80px 24px', background: '#fff' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 24 }}>About Me</h2>
        <div
          style={{
            display: 'flex',
            gap: 24,
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <p style={{ maxWidth: 640, color: '#475569', lineHeight: 1.7 }}>
            I blend design, research, and storytelling to create human-centered
            experiences with real impact. Empathy drives everything I make.
          </p>
          <div
            style={{
              width: 240,
              height: 240,
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow:
                '0 1px 2px rgba(0,0,0,.05), 0 20px 40px -12px rgba(16,24,40,.25)',
            }}
          >
            <img
              src={IMAGES.portrait}
              alt="Danielle Salinetro"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '80px 24px', background: '#0b1220', color: '#fff' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Let’s Connect</h2>
        <div style={{ textAlign: 'center' }}>
          <p style={{ opacity: .9 }}>
            Email:{' '}
            <a
              href="mailto:dsalinetro@pm.me"
              style={{ color: '#ffd9ca', textDecoration: 'none' }}
            >
              dsalinetro@pm.me
            </a>
          </p>
          <p style={{ opacity: .9 }}>
            Portfolio:{' '}
            <a
              href="https://daniellesalinetro.design"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ffd9ca', textDecoration: 'none' }}
            >
              daniellesalinetro.design
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#000', color: '#fff', padding: '24px 16px', textAlign: 'center' }}>
        © {new Date().getFullYear()} Danielle Salinetro. All rights reserved.
      </footer>
    </div>
  );
}
