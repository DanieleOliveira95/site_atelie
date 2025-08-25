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
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-[#F5E7D3] flex flex-col">
          <Navbar /> {/* Agora a Navbar é um componente separado */}
          <main className="flex-1 flex flex-col items-center justify-center p-6 font-serif pt-20 pb-16">
            {children}
          </main>
          <footer className="w-full bg-[#8C5A43] text-white shadow-md py-2 text-center fixed bottom-0 left-0">
            &copy; 2025 Dani Ateliê. Todos os direitos reservados.
          </footer>
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
