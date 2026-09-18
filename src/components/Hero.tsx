import { useRef } from "react";
import { ArrowRight, Send, ShieldCheck } from "lucide-react";
import { gsap, useIsomorphicLayoutEffect } from "../hooks/useGsap";

export function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ease = "power3.out";
    gsap.fromTo(
      ".hero-badge",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 0.15, ease, immediateRender: true },
    );
    gsap.fromTo(
      ".hero-title span",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        delay: 0.35,
        ease,
        immediateRender: true,
      },
    );
    gsap.fromTo(
      ".hero-copy",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 0.7, ease, immediateRender: true },
    );
    gsap.fromTo(
      ".hero-cta",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.95,
        ease,
        immediateRender: true,
      },
    );
    gsap.fromTo(
      ".hero-video",
      { scale: 0.94, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.9, delay: 0.3, ease, immediateRender: true },
    );
    gsap.fromTo(
      ".hero-decor",
      { opacity: 0 },
      { opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.1, ease, immediateRender: true },
    );

    // gentle drift on decorative shapes
    gsap.to(".hero-decor-float", {
      y: -20,
      ease: "none",
      scrollTrigger: {
        trigger: root.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <section
      id="inicio"
      ref={root}
      className="relative overflow-hidden bg-mist-gradient pt-32 pb-16 lg:pt-40 lg:pb-24"
    >
      {/* decorative shapes */}
      <div className="hero-decor hero-decor-float pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-green-primary/10 blur-3xl" />
      <div className="hero-decor pointer-events-none absolute right-[-160px] top-[-80px] h-[520px] w-[520px] rounded-full bg-green-light/20 blur-3xl" />
      <div className="hero-decor stripe right-[8%] top-[18%]" />
      <div className="hero-decor stripe right-[14%] top-[26%]" style={{ width: 140 }} />
      <div className="hero-decor stripe left-[6%] bottom-[8%]" />
      <div className="hero-decor gearline hero-decor-float -left-24 bottom-6" />

      <div className="container-page relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span className="hero-badge inline-flex items-center gap-2 rounded-full border border-green-primary/25 bg-white/70 px-4 py-2 text-xs font-semibold text-green-dark backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-green-primary" />
            Segurança e Saúde no Trabalho
          </span>

          <h1 className="hero-title mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-[68px]">
            <span className="block">Segurança que</span>
            <span className="block">protege.</span>
            <span className="block text-transparent bg-clip-text bg-green-gradient">
              Trabalho que evolui.
            </span>
          </h1>

          <p className="hero-copy mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Consultoria e treinamentos em SST para empresas que valorizam
            pessoas, reduzem riscos e constroem ambientes de trabalho mais
            seguros e produtivos.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contato" className="hero-cta btn-primary">
              <Send className="h-4 w-4" />
              Solicitar orçamento
            </a>
            <a href="#servicos" className="hero-cta btn-ghost">
              Conheça nossos serviços
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="hero-video video-frame relative aspect-[4/5] w-full max-w-[560px] justify-self-center md:aspect-[9/10] lg:justify-self-end">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/videos/epi.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
