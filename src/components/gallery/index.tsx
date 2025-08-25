"use client";

import Image from "next/image";

const galleryItems = [
  { src: "/img/conjunto.jpg", title: "Conjunto Dani", description: "Conjunto feito em Crochê, o Cropped com costas ajustável." },
  { src: "/img/Chinelo.jpg", title: "Chinelo", description: "Chinelo com aplicação feito em Crochê e enchimento." },
  { src: "/img/Cropped.jpg", title: "Cropped Flowers", description: "Cropped com aplicação de maxi flor e costas ajustável." },
];

export default function Gallery() {
  return (
    <section className="w-full max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {galleryItems.map((item, index) => (
        <div key={index} className="bg-white p-4 shadow-lg rounded-lg">
          <div className="w-full h-[400px] relative">
            <Image 
              src={item.src} 
              alt={item.title} 
              layout="fill" 
              objectFit="cover" 
              className="rounded-md"
            />
          </div>
          <h3 className="text-xl font-bold text-center text-[#5A3E2B] mt-4">{item.title}</h3>
          <p className="text-[#8C5A43] mt-2">{item.description}</p>
        </div>
      ))}
    </section>
  );
}