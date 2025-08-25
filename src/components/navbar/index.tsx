"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[var(--surface)] text-[var(--text-color)] shadow-sm py-3 px-6 fixed top-0 left-0 z-50">
      <div className="container flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          <Link href="/" className="inline-block">Dani Ateliê</Link>
        </h2>

        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6 text-base">
            <li className="hover:text-[var(--accent)] transition"><Link href="/sobre">Sobre</Link></li>
            <li className="hover:text-[var(--accent)] transition"><Link href="/galeria">Galeria</Link></li>
            <li className="hover:text-[var(--accent)] transition"><Link href="/contato">Contato</Link></li>
          </ul>
        </div>

        <div className="md:hidden">
          <button
            className="text-[var(--accent-dark)] bg-[var(--muted)] p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div id="mobile-menu" className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-start justify-center p-6">
          <div className="w-full max-w-md bg-[var(--surface)] rounded-xl mt-20 p-6 shadow-xl">
            <button className="ml-auto mb-4" onClick={() => setIsOpen(false)} aria-label="Fechar menu"><X size={20} /></button>
            <ul className="flex flex-col gap-4 text-lg">
              <li><Link href="/sobre" onClick={() => setIsOpen(false)}>Sobre</Link></li>
              <li><Link href="/galeria" onClick={() => setIsOpen(false)}>Galeria</Link></li>
              <li><Link href="/contato" onClick={() => setIsOpen(false)}>Contato</Link></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
