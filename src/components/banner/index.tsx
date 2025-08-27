"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Items } from "@/components/fotos";

export default function BannerCarousel({ interval = 4000 }: { interval?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % Items.length), interval);
    return () => clearInterval(id);
  }, [interval]);

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg">
      <div className="relative w-full h-72 md:h-96">
        <Image
          key={Items[index].src}
          src={Items[index].src}
          alt={Items[index].title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover", transition: "opacity 600ms ease" }}
          className="object-cover"
          priority={index < 3}
        />
        <div className="absolute left-4 bottom-4 bg-black bg-opacity-40 text-white px-3 py-1 rounded">
          {Items[index].title}
        </div>
      </div>
    </div>
  );
}
