"use client";

import Link from "next/link";
import React from "react";
import Gallery from "@/components/gallery";

export default function Page() {
  return (
    <>
      <header className="w-full max-w-4xl mx-auto text-center py-16 mt-6">
        <h1 className="text-7xl font-extrabold text-[#5A3E2B] drop-shadow-lg">Dani Ateliê</h1>
        <p className="text-[#8C5A43] mt-4 text-3xl max-w-3xl mx-auto leading-relaxed">
          Arte feita à mão com amor e dedicação
        </p>
      </header>

      <main className="flex flex-col items-center mt-6 px-4 text-center">
        <p className="text-2xl text-[#5A3E2B] max-w-3xl leading-relaxed">
          Descubra peças únicas e artesanais, criadas com paixão e criatividade. Cada detalhe reflete o amor pela arte.
        </p>
        <Link href="/galeria">
          <button className="mt-6 px-8 py-3 bg-[#8C5A43] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-[#5A3E2B] transition-transform transform hover:scale-105">
            Conheça Nossos Trabalhos
          </button>
        </Link>
      </main>

      <section className="mt-12 w-full px-4">
        <Gallery />
      </section>
    </>
  );
}
