"use client";

import Link from "next/link";
import React from "react";
import Gallery from "@/components/gallery";
import dynamic from "next/dynamic";

// dynamic import do componente client-side (cast para o tipo de componente esperado)
const BannerCarousel = dynamic(() => import("@/components/banner"), { ssr: false }) as React.ComponentType<{ interval?: number }>;

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
            <div className="w-full max-w-md mx-auto">
              {/* Banner carousel usando imagens da galeria */}
              {/* Componente client-side */}
              <BannerCarousel />
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center mt-8 px-4 text-center container">
        <p className="text-lg text-[var(--accent-dark)] max-w-3xl leading-relaxed">
          Descubra peças únicas e artesanais, criadas com paixão e criatividade. Cada detalhe reflete o amor pela arte.
        </p>
      </main>

      <section className="mt-6 w-full px-4 container">
        <Gallery limit={3} showDescription={false} />
      </section>

    
    </>
  );
}
