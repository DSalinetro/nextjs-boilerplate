// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      {/* HERO */}
      <section className="relative pt-28 pb-24">
        {/* Background image + gradient overlay */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/images/rose-hero.jpg')] bg-cover bg-center opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/60 to-neutral-900"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl rounded-3xl border border-white/10 bg-neutral-900/60 p-8 md:p-12 shadow-2xl backdrop-blur-xl">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              Empathy by Design
            </h1>
            <p className="mt-4 text-lg md:text-xl text-neutral-200">
              Creative Designer &amp; Researcher · Empathy-Driven Branding, UX &amp; Content
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/portfolio" className="btn-primary">View My Work</a>
              <a
                href="https://daniellesalinetro.design"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Visit Portfolio Site
              </a>
            </div>
          </div>
        </div>

        {/* Subtle chevron */}
        <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 opacity-70">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>
    </main>
  );
}
