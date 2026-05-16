import { MessageCircle } from "lucide-react";

export const StickyWhatsApp = () => {
  return (
    <a
      href="https://wa.me/918766910241?text=Hello!%20I'm%20interested%20in%20your%20digital%20services."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 animate-ping rounded-full bg-green-500/20" />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
        <MessageCircle className="h-7 w-7" />
        <span className="absolute right-full mr-3 hidden rounded-lg bg-paper px-3 py-1.5 text-xs font-bold text-ink shadow-card group-hover:block whitespace-nowrap border border-ink/5">
          Chat with us
        </span>
      </div>
    </a>
  );
};
