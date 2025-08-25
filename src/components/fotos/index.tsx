"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Items = [
  { src: "/img/conjunto.jpg", title: "Conjunto" },
  { src: "/img/chinelo.jpg", title: "Chinelo" },
  { src: "/img/cropped_flor.jpg", title: "Cropped Flor" },
  { src: "/img/bolsa_lais.jpg", title: "Bolsa Laís"},
  { src: "/img/bolsa_luxo.jpg", title: "Bolsa Luxo"},
  

];

export default function Fotos() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (selectedImage === null) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") setSelectedImage((prev) => (prev !== null ? (prev + 1) % Items.length : 0));
      if (e.key === "ArrowLeft") setSelectedImage((prev) => (prev !== null ? (prev - 1 + Items.length) % Items.length : Items.length - 1));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedImage]);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev !== null ? (prev + 1) % Items.length : 0));
  };
  
  const prevImage = () => {
    setSelectedImage((prev) => (prev !== null ? (prev - 1 + Items.length) % Items.length : Items.length - 1));
  };

  return (
    <>
      {/* Galeria */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {Items.map((item, index) => (
          <button
            key={index}
            onClick={() => openModal(index)}
            className="relative cursor-pointer rounded-lg overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-200"
            aria-label={`Abrir foto: ${item.title}`}
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="relative bg-[var(--surface)] p-4 rounded-lg shadow-lg max-w-3xl w-full">
            <button onClick={closeModal} className="absolute top-3 right-3 text-[var(--text-color)] bg-[var(--muted)] p-2 rounded-full" aria-label="Fechar">
              <X size={20} />
            </button>

            <div className="flex items-center justify-center gap-4">
              <button onClick={prevImage} className="text-[var(--text-color)] bg-[var(--muted)] p-2 rounded-full mr-2" aria-label="Imagem anterior">
                <ChevronLeft size={28} />
              </button>

              <div className="relative w-full max-w-2xl h-[60vh] md:h-96">
                <Image
                  src={Items[selectedImage].src}
                  alt={Items[selectedImage].title}
                  fill
                  sizes="(max-width: 640px) 100vw, 800px"
                  style={{ objectFit: "contain" }}
                  className="rounded-md"
                />
              </div>

              <button onClick={nextImage} className="text-[var(--text-color)] bg-[var(--muted)] p-2 rounded-full ml-2" aria-label="Próxima imagem">
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
