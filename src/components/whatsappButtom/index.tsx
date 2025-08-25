import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/5521987955327" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center gap-2"
    >
      <MessageCircle size={24} />
      <span className="hidden md:inline">WhatsApp</span>
    </a>
  );
}