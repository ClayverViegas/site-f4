import { services } from "../data/services";
import { ServiceCard } from "./ServiceCard";
import { gsap, useIsomorphicLayoutEffect } from "../hooks/useGsap";

export function Services() {
  useIsomorphicLayoutEffect(() => {
    gsap.set(".services-header > *", { y: 30, opacity: 0 });
    gsap.set(".services-grid .service-card", { y: 50, opacity: 0 });
    gsap.set(".services-highlight", { opacity: 0, scale: 0.97 });

    gsap.to(".services-header > *", {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: { trigger: ".services", start: "top 85%" },
    });
    gsap.to(".services-grid .service-card", {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: ".services", start: "top 75%" },
    });
    gsap.to(".services-highlight", {
      opacity: 1,
      scale: 1,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: ".services", start: "top 60%" },
    });

    gsap.to(".services-highlight img", {
      yPercent: -8,
      ease: "none",
      scrollTrigger: {
        trigger: ".services-highlight",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  const first = services.slice(0, 4);
  const last = services[4];

  return (
    <section
      id="servicos"
      className="services relative bg-mist-gradient py-20 md:py-28"
    >
      <div className="container-page">
        <div className="services-header">
          <span className="section-eyebrow">Nossos serviços</span>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-tight text-ink md:text-[42px]">
            Conheça nossos serviços,{" "}
            <span className="text-transparent bg-clip-text bg-green-gradient">
              categorizados por área de interesse
            </span>
          </h2>
        </div>

        <div className="services-grid mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {first.map((s) => (
            <ServiceCard key={s.number} service={s} />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_2fr]">
          <ServiceCard service={last} />
          <div className="services-highlight relative overflow-hidden rounded-3xl border border-line bg-white shadow-card">
            <div className="grid h-full grid-cols-1 md:grid-cols-[1.1fr_0.9fr]">
              <div className="relative h-56 overflow-hidden md:h-auto">
                <img
                  src="/images/trabalhador-f4.jpg"
                  alt="Trabalhador utilizando EPI com colete da F4"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-green-dark/20 via-transparent to-white/30" />
                <span className="stripe left-6 top-6" />
              </div>
              <div className="flex items-center p-8 md:p-10">
                <div>
                  <span className="section-eyebrow">Destaque</span>
                  <p className="mt-4 font-display text-2xl font-bold leading-snug text-ink md:text-3xl">
                    Soluções completas para um ambiente de trabalho{" "}
                    <span className="text-green-primary">mais seguro.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
