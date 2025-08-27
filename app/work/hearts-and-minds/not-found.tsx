// app/work/hearts-and-minds/not-found.tsx
import Link from 'next/link';

export default function HeartsAndMindsNotFound() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-center">
      <h1 className="text-3xl font-bold mb-3">This case study is being updated</h1>
      <p className="text-muted-foreground mb-6">
        The Hearts &amp; Minds project is under revision. In the meantime, you can view other work.
      </p>
      <Link href="/design" className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-accent">
        Back to Design
      </Link>
    </main>
  );
}
