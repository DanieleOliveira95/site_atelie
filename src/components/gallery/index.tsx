"use client";

import Image from "next/image";

const galleryItems = [
  { src: "/img/conjunto.jpg", title: "Conjunto Dani", description: "Conjunto feito em Crochê, o Cropped com costas ajustável." },
  { src: "/img/Chinelo.jpg", title: "Chinelo", description: "Chinelo com aplicação feito em Crochê e enchimento." },
  { src: "/img/Cropped.jpg", title: "Cropped Flowers", description: "Cropped com aplicação de maxi flor e costas ajustável." },
];

export default function Gallery({ showDescription = true, limit }: { showDescription?: boolean; limit?: number }) {
  const items = typeof limit === 'number' ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <section className="w-full max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
      {items.map((item, index) => (
        <article key={index} className="card p-4">
          <div className="w-full relative aspect-[4/3] overflow-hidden rounded-md">
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              className="rounded-md"
              priority={index < 3}
            />
          </div>
          <h3 className={`text-lg font-semibold text-center mt-4 ${!showDescription ? 'mb-2' : ''}`}>{item.title}</h3>
          {showDescription && <p className="text-sm text-[var(--accent)] mt-2 text-center">{item.description}</p>}
        </article>
      ))}
    </section>
  );
}