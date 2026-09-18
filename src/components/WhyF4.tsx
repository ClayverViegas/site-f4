import {
  HeartPulse,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { gsap, useIsomorphicLayoutEffect } from "../hooks/useGsap";

const items = [
  {
    Icon: UsersRound,
    highlight: "Profissionais",
    title: "Especializados",
    subtitle: "",
  },
  {
    Icon: HeartPulse,
    highlight: "Atendimento",
    title: "Personalizado",
    subtitle: "sob medida para sua empresa",
  },
  {
    Icon: ShieldCheck,
    highlight: "Foco",
    title: "Na prevenção",
    subtitle: "de acidentes e doenças ocupacionais",
  },
  {
    Icon: Sparkles,
    highlight: "Mais segurança",
    title: "E produtividade",
    subtitle: "para sua empresa",
  },
];

export function WhyF4() {
  useIsomorphicLayoutEffect(() => {
    gsap.set(".why-header > *", { y: 30, opacity: 0 });
    gsap.set(".why-item", { y: 40, opacity: 0 });
    gsap.set(".why-visual", { x: -40, opacity: 0 });

    gsap.to(".why-header > *", {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: { trigger: ".why", start: "top 80%" },
    });
    gsap.to(".why-item", {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: ".why", start: "top 70%" },
    });
    gsap.to(".why-visual", {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: ".why", start: "top 85%" },
    });

    gsap.to(".why-visual img", {
      yPercent: -8,
      ease: "none",
      scrollTrigger: {
        trigger: ".why",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <section className="why relative py-20 md:py-28">
      <div className="container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="why-visual relative overflow-hidden rounded-3xl border border-line bg-green-soft shadow-card">
          <img
            src="/images/obra.jpg"
            alt="Equipe F4 em vistoria de segurança em canteiro de obras"
            className="h-full min-h-[380px] w-full object-cover"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-green-dark/25 via-transparent to-transparent" />
          <span className="stripe right-6 top-8" />
        </div>

        <div>
          <div className="why-header">
            <span className="section-eyebrow">Diferenciais</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-ink md:text-[42px]">
              Por que escolher a{" "}
              <span className="text-transparent bg-clip-text bg-green-gradient">
                F4?
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-muted">
              Nosso trabalho é ajudar sua empresa a cumprir as normas
              regulamentadoras com clareza, agilidade e cuidado real com as
              pessoas.
            </p>
          </div>

          <div className="why-grid mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map((it) => (
              <div
                key={it.title}
                className="why-item card-surface flex items-start gap-4 p-5"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-soft text-green-dark">
                  <it.Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg font-extrabold text-ink">
                    {it.highlight}
                  </p>
                  <p className="text-sm font-semibold text-ink">
                    {it.title}
                  </p>
                  {it.subtitle && (
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {it.subtitle}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
