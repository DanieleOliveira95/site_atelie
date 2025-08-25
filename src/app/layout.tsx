import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/whatsappButtom";
import { Navbar } from "@/components/navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dani Ateliê",
  description: "Moda artesanal em crochê",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-[var(--page-bg)] flex flex-col text-[var(--text-color)]">
          <Navbar />
          <main id="main-content" className="flex-1 flex flex-col items-center justify-start p-6 font-serif pt-28 pb-16 w-full">
            {children}
          </main>
          <footer className="w-full bg-[var(--accent-dark)] text-white shadow-inner py-4 text-center">
            &copy; 2025 Dani Ateliê. Todos os direitos reservados.
          </footer>
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
