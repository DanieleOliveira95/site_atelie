import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5521987955327"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-6 right-6 bg-[var(--accent)] text-white p-3 rounded-full shadow-lg hover:bg-[var(--accent-dark)] transition duration-300 flex items-center gap-2 z-50"
    >
      <MessageCircle size={20} />
      <span className="hidden md:inline">WhatsApp</span>
    </a>
  );
}