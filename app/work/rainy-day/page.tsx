import Image from "next/image";

export const metadata = {
  title: "Rainy Day — Empathy by Design",
  description: "Artwork: Rainy Day",
};

export default function RainyDay() {
  return (
    <article className="mx-auto max-w-3xl p-6 space-y-6">
      <header>
        <h1 className="text-3xl font-semibold">Rainy Day</h1>
        <p className="text-gray-600">Artwork</p>
      </header>

      <div className="overflow-hidden rounded-2xl border">
        <Image
          src="/images/rainy-day.png"
          alt="Rainy Day artwork"
          width={1600}
          height={1200}   // adjust if your image has a different aspect ratio
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      <p className="text-gray-700">
        A short description of the piece—materials, concept, and the feeling you want the viewer to sit with.
      </p>
    </article>
  );
}
