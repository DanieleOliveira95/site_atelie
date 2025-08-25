export default function Page() {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <h1 className="text-5xl font-bold text-[#5A3E2B] auto top-10">Contato</h1>
      <p className="text-xl text-[#8C5A43] w-full whitespace-nowrap overflow-hidden text-ellipsis mb-6">
    Entre em contato através dos canais de atendimento para dúvidas e sugestões.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-md">
        <a 
          href="https://www.instagram.com/daniatelierj" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-2xl text-[#8C5A43] font-semibold underline hover:text-[#5A3E2B] transition"
        >
          Instagram
        </a>
        <a 
          href="https://wa.me/5521987955327" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-2xl text-[#8C5A43] font-semibold underline hover:text-[#5A3E2B] transition"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
