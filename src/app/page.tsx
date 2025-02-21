"use client";

import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <nav className="w-full bg-white shadow-md py-4 px-6 fixed top-0 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Ateliê Encanto</h2>
        <ul className="flex space-x-6 text-gray-700">
          <li className="hover:text-pink-600 transition"><a href="#about">Sobre</a></li>
          <li className="hover:text-pink-600 transition"><a href="#gallery">Galeria</a></li>
          <li className="hover:text-pink-600 transition"><a href="#contact">Contato</a></li>
        </ul>
      </nav>

      <header className="w-full max-w-4xl mx-auto text-center py-24 mt-16">
        <h1 className="text-5xl font-extrabold text-gray-900">Ateliê Encanto</h1>
        <p className="text-gray-600 mt-2 text-lg">Arte feita à mão com amor e dedicação</p>
      </header>

      <main className="flex flex-col items-center mt-8">
        <p className="text-lg text-gray-700 text-center max-w-2xl">
          Descubra peças únicas e artesanais, criadas com paixão e criatividade. Cada detalhe reflete o amor pela arte.
        </p>
        <button className="mt-6 px-6 py-3 bg-pink-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-pink-700 transition">
          Conheça Nossos Trabalhos
        </button>
      </main>

      <footer className="w-full bg-white shadow-md py-4 mt-12 text-center text-gray-600">
        &copy; 2025 Ateliê Encanto. Todos os direitos reservados.
      </footer>
    </div>
  );
}
