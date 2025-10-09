// app/not-found.tsx
export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-4 text-gray-600">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>
      <a
        href="/"
        className="mt-6 inline-block rounded bg-black px-4 py-2 text-white hover:bg-gray-800"
      >
        Go back home
      </a>
    </main>
  );
}
