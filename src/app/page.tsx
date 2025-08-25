"use client";

import Link from "next/link";
import React from "react";
import Gallery from "@/components/gallery";

export default function Page() {
  return (
    <>
      <header className="w-full bg-[var(--muted)] py-12">
        <div className="container flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="hero-title text-4xl md:text-6xl">Dani Ateliê</h1>
            <p className="hero-sub mt-4 text-lg md:text-xl max-w-2xl">Peças artesanais em crochê feitas à mão com carinho — design atemporal e acabamento cuidadoso.</p>
            <div className="mt-6">
              <Link href="/galeria" className="inline-block">
                <button className="btn-soft">Conheça a Galeria</button>
              </Link>
            </div>
          </div>

          <div className="flex-1 hidden md:block">
            <div className="w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
              <img src="/img/conjunto.jpg" alt="Conjunto artesanal Dani" className="w-full h-72 object-cover" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center mt-8 px-4 text-center container">
        <p className="text-lg text-[var(--accent-dark)] max-w-3xl leading-relaxed">
          Descubra peças únicas e artesanais, criadas com paixão e criatividade. Cada detalhe reflete o amor pela arte.
        </p>
      </main>

      <section className="mt-12 w-full px-4 container">
        <Gallery />
      </section>

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
