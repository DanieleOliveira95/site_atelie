"use client";

import { useState } from "react";
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
          <div key={index} className="relative cursor-pointer" onClick={() => openModal(index)}>
            <Image
              src={item.src}
              alt={item.title}
              width={300}
              height={300}
              className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center p-4">
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-2xl w-full">
            <button onClick={closeModal} className="absolute top-2 right-2 text-black bg-gray-200 p-2 rounded-full">
              <X size={24} />
            </button>

            <div className="flex items-center justify-center">
              <button onClick={prevImage} className="text-black bg-gray-200 p-2 rounded-full mr-2">
                <ChevronLeft size={32} />
              </button>

              <Image
                src={Items[selectedImage].src}
                alt={Items[selectedImage].title}
                width={400}
                height={400}
                className="w-200 h-200 object-cover rounded-lg"
              />

              <button onClick={nextImage} className="text-black bg-gray-200 p-2 rounded-full ml-2">
                <ChevronRight size={32} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
