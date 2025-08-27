"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export const Items = [
  { src: "/img/conjunto.jpg", title: "Conjunto" },
  { src: "/img/chinelo.jpg", title: "Chinelo" },
  { src: "/img/cropped_flor.jpg", title: "Cropped Flor" },
  { src: "/img/bolsa_lais.jpg", title: "Bolsa Laís"},
  { src: "/img/bolsa_luxo.jpg", title: "Bolsa Luxo"},
  

];

export default function Fotos() {
  const INITIAL_VISIBLE = 6;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [transitioning, setTransitioning] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goToIndex = useCallback((newIndex: number) => {
    if (selectedImage === null) {
      setSelectedImage(newIndex);
      return;
    }
    setTransitioning(true);
    // small delay to allow fade-out
    setTimeout(() => {
      setSelectedImage(newIndex);
      // fade-in
      setTimeout(() => setTransitioning(false), 50);
    }, 180);
  }, [selectedImage]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (selectedImage === null) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") goToIndex((selectedImage + 1) % Items.length);
      if (e.key === "ArrowLeft") goToIndex((selectedImage - 1 + Items.length) % Items.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goToIndex, selectedImage]);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage === null) return;
    goToIndex((selectedImage + 1) % Items.length);
  };

  const prevImage = () => {
    if (selectedImage === null) return;
    goToIndex((selectedImage - 1 + Items.length) % Items.length);
  };

  const handleLoadMore = () => {
    setVisibleCount(Items.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const delta = touchStartX.current - touchEndX.current;
    const threshold = 100; // px
    if (delta > threshold) {
      // swipe left -> next
      nextImage();
    } else if (delta < -threshold) {
      // swipe right -> prev
      prevImage();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <>
      {/* Galeria: menos colunas em telas grandes para miniaturas maiores */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {Items.slice(0, visibleCount).map((item, index) => (
          <button
            key={index}
            onClick={() => openModal(index)}
            className="relative cursor-pointer rounded-lg overflow-hidden shadow-md transform hover:scale-[1.02] transition-all duration-200"
            aria-label={`Abrir foto: ${item.title}`}
          >
      <div className="relative w-full aspect-[4/3] bg-[var(--muted)]">
              <Image
                src={item.src}
                alt={item.title}
                fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                style={{ objectFit: "cover" }}
                loading="lazy"
                className="rounded-md"
              />
              {/* Overlay de título no hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 text-white flex items-end p-4 transition-colors duration-200">
                <span className="opacity-0 hover:opacity-100 transition-opacity duration-200 text-base font-semibold">{item.title}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Carregar mais */}
      {visibleCount < Items.length && (
        <div className="flex justify-center mt-6">
          <button onClick={handleLoadMore} className="btn-soft px-6 py-2">Carregar mais</button>
        </div>
      )}

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4" role="dialog" aria-modal="true" onClick={closeModal}>
          <div onClick={(e) => e.stopPropagation()} className="relative bg-[var(--surface)] p-4 rounded-lg shadow-lg max-w-3xl w-full">
            <button onClick={closeModal} className="absolute top-3 right-3 text-[var(--text-color)] bg-[var(--muted)] p-2 rounded-full" aria-label="Fechar">
              <X size={20} />
            </button>

            <div className="flex items-center justify-center">
              <button onClick={prevImage} className="absolute left-4 z-20 text-white bg-black bg-opacity-30 hover:bg-opacity-50 p-3 rounded-full" aria-label="Imagem anterior">
                <ChevronLeft size={36} />
              </button>

              <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} className="relative w-full max-w-3xl h-[70vh] md:h-[80vh] flex items-center justify-center">
                <div className={`w-full h-full flex items-center justify-center transition-opacity duration-200 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
                  <Image
                    src={Items[selectedImage].src}
                    alt={Items[selectedImage].title}
                    fill
                    sizes="(max-width: 640px) 100vw, 800px"
                    style={{ objectFit: "contain" }}
                    className="rounded-md"
                  />
                </div>
                {/* indicadores (dots) */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {Items.map((_, i) => (
                    <button key={i} onClick={() => goToIndex(i)} className={`w-2 h-2 rounded-full ${i === selectedImage ? 'bg-white' : 'bg-white/50'}`} aria-label={`Ir para imagem ${i + 1}`} />
                  ))}
                </div>
              </div>

              <button onClick={nextImage} className="absolute right-4 z-20 text-white bg-black bg-opacity-30 hover:bg-opacity-50 p-3 rounded-full" aria-label="Próxima imagem">
                <ChevronRight size={36} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
