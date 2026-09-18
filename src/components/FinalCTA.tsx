import { MessageCircle, Send } from "lucide-react";
import { gsap, useIsomorphicLayoutEffect } from "../hooks/useGsap";
import { contact } from "../data/services";

const wa = `https://wa.me/${contact.phoneRaw}?text=${encodeURIComponent(contact.whatsappMessage)}`;

export function FinalCTA() {
  useIsomorphicLayoutEffect(() => {
    gsap.set(".final-cta-inner > *", { y: 30, opacity: 0 });
    gsap.to(".final-cta-inner > *", {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: ".final-cta", start: "top 85%" },
    });
  });

  return (
    <section id="contato" className="final-cta relative py-20 md:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-4xl border border-green-primary/20 bg-mist-gradient p-8 shadow-card md:p-14">
          <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-green-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-24 h-96 w-96 rounded-full bg-green-light/25 blur-3xl" />
          <img
            src="/images/obra.jpg"
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.06]"
          />

          <div className="final-cta-inner relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-5">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-green-primary/30 bg-white text-green-dark shadow-soft">
                <MessageCircle className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-display text-2xl font-extrabold leading-tight text-ink md:text-4xl">
                  Procurando uma solução{" "}
                  <span className="text-green-primary">diferente das listadas?</span>
                </h2>
                <p className="mt-3 max-w-2xl text-muted">
                  Entre em contato conosco para conhecer outros serviços e
                  soluções em Segurança e Saúde no Trabalho.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a href={wa} target="_blank" rel="noreferrer" className="btn-primary">
                <Send className="h-4 w-4" />
                Solicitar orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
