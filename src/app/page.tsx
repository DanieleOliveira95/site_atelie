"use client";

import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F5E7D3] flex flex-col items-center justify-center p-6 font-serif">
      <nav className="w-full bg-[#8C5A43] text-white shadow-md py-4 px-6 fixed top-0 flex justify-between items-center">
        <h2 className="text-3xl font-bold">Dani Ateliê</h2>
        <ul className="flex space-x-6 text-lg">
          <li className="hover:text-[#E3B887] transition"><a href="#about">Sobre</a></li>
          <li className="hover:text-[#E3B887] transition"><a href="#gallery">Galeria</a></li>
          <li className="hover:text-[#E3B887] transition"><a href="#contact">Contato</a></li>
        </ul>
      </nav>

      <header className="w-full max-w-4xl mx-auto text-center py-32 mt-16">
        <h1 className="text-6xl font-extrabold text-[#5A3E2B]">Dani Ateliê</h1>
        <p className="text-[#8C5A43] mt-4 text-xl">Arte feita à mão com amor e dedicação</p>
      </header>

      <main className="flex flex-col items-center mt-8">
        <p className="text-xl text-[#5A3E2B] text-center max-w-2xl leading-relaxed">
          Descubra peças únicas e artesanais, criadas com paixão e criatividade. Cada detalhe reflete o amor pela arte.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#8C5A43] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#5A3E2B] transition">
          Conheça Nossos Trabalhos
        </button>
      </main>

      <section id="gallery" className="w-full max-w-6xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <img src="/produto1.jpg" alt="Produto 1" className="rounded-lg" />
          <h3 className="text-xl font-bold text-[#5A3E2B] mt-4">Produto Artesanal 1</h3>
          <p className="text-[#8C5A43] mt-2">Descrição breve do produto.</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <img src="/produto2.jpg" alt="Produto 2" className="rounded-lg" />
          <h3 className="text-xl font-bold text-[#5A3E2B] mt-4">Produto Artesanal 2</h3>
          <p className="text-[#8C5A43] mt-2">Descrição breve do produto.</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <img src="/produto3.jpg" alt="Produto 3" className="rounded-lg" />
          <h3 className="text-xl font-bold text-[#5A3E2B] mt-4">Produto Artesanal 3</h3>
          <p className="text-[#8C5A43] mt-2">Descrição breve do produto.</p>
        </div>
      </section>

      <footer className="w-full bg-[#8C5A43] text-white shadow-md py-6 mt-12 text-center">
        &copy; 2025 Dani Ateliê. Todos os direitos reservados.
      </footer>
    </div>
  );
}
