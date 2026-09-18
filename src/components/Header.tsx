import { useEffect, useState } from "react";
import { Menu, Send, X } from "lucide-react";
import { Logo } from "./Logo";
import { gsap } from "../hooks/useGsap";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#treinamentos", label: "Treinamentos" },
  { href: "#sobre", label: "Sobre nós" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = links
        .map((l) => document.querySelector<HTMLElement>(l.href))
        .filter(Boolean) as HTMLElement[];
      const pos = window.scrollY + 140;
      for (const section of sections) {
        if (pos >= section.offsetTop && pos < section.offsetTop + section.offsetHeight) {
          setActive("#" + section.id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const overlay = document.querySelector(".mobile-menu");
    if (!overlay) return;
    gsap.from(overlay.querySelectorAll("a, .mobile-cta"), {
      y: 20,
      opacity: 0,
      duration: 0.4,
      stagger: 0.06,
      ease: "power2.out",
    });
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "header-scrolled py-2" : "py-4"
      }`}
    >
      <div className="container-page flex items-center justify-between">
        <a href="#inicio" onClick={(e) => { e.preventDefault(); handleNav("#inicio"); }} aria-label="F4 — Início">
          <Logo variant="full" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(l.href);
              }}
              className={`nav-link ${active === l.href ? "active" : ""}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#contato");
            }}
            className="btn-primary hidden md:inline-flex"
          >
            <Send className="h-4 w-4" />
            Solicitar orçamento
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex flex-col items-start gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(l.href);
                }}
                className="text-3xl font-bold text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#contato");
              }}
              className="btn-primary mobile-cta mt-4"
            >
              <Send className="h-4 w-4" />
              Solicitar orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
