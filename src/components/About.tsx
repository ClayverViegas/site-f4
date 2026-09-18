import { ArrowRight, Quote } from "lucide-react";
import { gsap, useIsomorphicLayoutEffect } from "../hooks/useGsap";

export function About() {
  useIsomorphicLayoutEffect(() => {
    gsap.set(".about-left > *", { y: 30, opacity: 0 });
    gsap.set(".about-image", { scale: 0.95, opacity: 0 });
    gsap.set(".about-quote", { x: 40, opacity: 0 });

    gsap.to(".about-left > *", {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: ".about", start: "top 85%" },
    });
    gsap.to(".about-image", {
      scale: 1,
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: ".about", start: "top 85%" },
    });
    gsap.to(".about-quote", {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: ".about", start: "top 85%" },
    });

    gsap.to(".about-image img", {
      yPercent: -6,
      ease: "none",
      scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <section id="sobre" className="about relative py-20 md:py-28">
      <div className="container-page grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_1.15fr_0.8fr]">
        <div className="about-left">
          <span className="section-eyebrow">Sobre nós</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-ink md:text-4xl">
            Olá, somos a{" "}
            <span className="text-transparent bg-clip-text bg-green-gradient">
              F4 Consultoria e Treinamentos!
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Empresa especializada em Segurança do Trabalho, criada por quatro
            Técnicas em Segurança formadas pelo Instituto Federal do Maranhão
            (IFMA).
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Nosso compromisso é auxiliar empresas no cumprimento das normas
            regulamentadoras, garantindo ambientes de trabalho mais seguros e
            prevenindo multas, acidentes e doenças ocupacionais.
          </p>

          <a href="#contato" className="btn-ghost mt-8">
            Saiba mais sobre nós
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="about-image relative overflow-hidden rounded-3xl border border-line bg-green-soft shadow-card">
          <img
            src="/images/capacete-f4.jpg"
            alt="Capacete de segurança com a logo da F4"
            className="h-full min-h-[380px] w-full object-cover"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-green-dark/10 via-transparent to-white/10" />
          <span className="stripe left-6 top-6" />
          <span className="stripe right-6 bottom-10" style={{ width: 140 }} />
        </div>

        <div className="about-quote quote-card p-7 md:p-8">
          <Quote className="h-8 w-8 text-green-primary" />
          <p className="mt-4 font-display text-xl font-semibold leading-snug text-ink md:text-[22px]">
            Mais do que consultoria, trabalhamos com pessoas, porque por trás de
            cada função existe uma vida.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-green-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-dark">
              F4 Consultoria
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
