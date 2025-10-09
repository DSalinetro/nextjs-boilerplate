// app/not-found.tsx  (SERVER component – no "use client", no hooks)
export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 text-base text-gray-600">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <a href="/" className="mt-6 inline-block underline">Go back home</a>
    </main>
  );
}
