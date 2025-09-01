// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-[80vh] grid place-items-center bg-white">
      <div className="mx-auto w-full max-w-3xl px-6 text-center">
        <h1 className="text-4xl font-semibold">Danielle Salinetro</h1>
        <p className="mt-3 text-neutral-700">
          Creative Designer & Researcher — explore my work below.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/design"
            className="rounded-2xl px-5 py-3 text-white shadow transition hover:opacity-90"
            style={{ backgroundColor: '#D49670' }} // brand accent
          >
            Open Portfolio
          </Link>
          <a
            href="https://linktr.ee/daniellesalinetro"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border px-5 py-3 transition hover:bg-neutral-50"
          >
            Linktree
          </a>
        </div>
      </div>
    </main>
  );
}
