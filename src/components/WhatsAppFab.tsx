import { MessageCircle } from "lucide-react";
import { contact } from "../data/services";

const wa = `https://wa.me/${contact.phoneRaw}?text=${encodeURIComponent(contact.whatsappMessage)}`;

export function WhatsAppFab() {
  return (
    <a
      href={wa}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="group fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-gradient text-white shadow-glow ring-4 ring-white/50 transition-transform hover:scale-105"
    >
      <span className="pointer-events-none absolute inset-0 rounded-full bg-green-primary/40 animate-pulseRing" />
      <MessageCircle className="relative h-6 w-6" />
    </a>
  );
}
