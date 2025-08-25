"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#8C5A43] text-white shadow-md py-4 px-6 fixed top-0 left-0 z-50 flex justify-between items-center">
      <h2 className="text-3xl font-bold">
        <Link href="/">Dani Ateliê</Link>
      </h2>

      {/* Ícone do menu hambúrguer */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Menu normal para desktop */}
      <ul className="hidden md:flex space-x-6 text-lg">
        <li className="hover:text-[#E3B887] transition"><Link href="/sobre">Sobre</Link></li>
        <li className="hover:text-[#E3B887] transition"><Link href="/galeria">Galeria</Link></li>
        <li className="hover:text-[#E3B887] transition"><Link href="/contato">Contato</Link></li>
      </ul>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#8C5A43] flex flex-col items-center justify-center gap-6 text-xl">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>
          
          <h2 className="text-4xl font-bold mb-4">Dani Ateliê</h2>

          <ul className="flex flex-col items-center gap-6 text-2xl font-semibold">
            <li><Link href="/sobre" onClick={() => setIsOpen(false)}>Sobre</Link></li>
            <li><Link href="/galeria" onClick={() => setIsOpen(false)}>Galeria</Link></li>
            <li><Link href="/contato" onClick={() => setIsOpen(false)}>Contato</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
