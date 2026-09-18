import { Instagram, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { Logo } from "./Logo";
import { contact } from "../data/services";

const wa = `https://wa.me/${contact.phoneRaw}?text=${encodeURIComponent(contact.whatsappMessage)}`;

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#treinamentos", label: "Treinamentos" },
  { href: "#sobre", label: "Sobre nós" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-white py-16">
      <div className="container-page grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Logo variant="full" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            Segurança do trabalho é o nosso trabalho.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-green-dark">
            Contato
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-ink/85">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-green-primary" />
              <a href={`mailto:${contact.email}`} className="hover:text-green-dark">
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-green-primary" />
              <a href={`tel:+${contact.phoneRaw}`} className="hover:text-green-dark">
                {contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Instagram className="mt-0.5 h-4 w-4 text-green-primary" />
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-dark"
              >
                {contact.instagram}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-green-dark">
            Navegação
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-ink/85">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-green-dark">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-green-dark">
            Fale com a gente
          </h4>
          <p className="mt-4 text-sm text-muted">
            Solicite um orçamento personalizado ou tire dúvidas sobre nossos
            treinamentos.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="#contato" className="btn-primary">
              <Send className="h-4 w-4" />
              Orçamento
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container-page mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center">
        <span>
          F4 Consultoria e Treinamentos © {new Date().getFullYear()}. Todos os
          direitos reservados.
        </span>
        <div className="flex items-center gap-4">
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-green-dark hover:bg-green-soft"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-green-dark hover:bg-green-soft"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-green-dark hover:bg-green-soft"
            aria-label="E-mail"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
