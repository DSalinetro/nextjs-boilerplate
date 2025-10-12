"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { BLOGS } from "@/lib/blogs";

export default function BlogsSection() {
  return (
    <section id="blogs" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold mb-8">Latest Blogs</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOGS.map((b, i) => (
            <Card key={i} className="overflow-hidden rounded-2xl">
              <div className="relative aspect-[16/9]">
                <Image src={b.image} alt={b.title} fill className="object-cover" />
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold leading-snug">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.excerpt}</p>
                <div className="mt-3 text-xs text-muted-foreground">
                  {b.readTime} • {b.date}
                </div>
                <Link
                  href={b.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm underline"
                >
                  Read on Medium →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
