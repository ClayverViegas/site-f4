import { GraduationCap, Settings2, ShieldCheck } from "lucide-react";
import { gsap, useIsomorphicLayoutEffect } from "../hooks/useGsap";

const features = [
  {
    Icon: GraduationCap,
    title: "Treinamentos SST",
    text: "Capacitação que gera mais segurança no dia a dia.",
  },
  {
    Icon: ShieldCheck,
    title: "Conformidade com NRs",
    text: "Sua empresa em dia com a legislação vigente.",
  },
  {
    Icon: Settings2,
    title: "Soluções personalizadas",
    text: "Atendimento sob medida para a realidade da sua empresa.",
  },
];

export function FeatureBar() {
  useIsomorphicLayoutEffect(() => {
    gsap.set(".feature-item", { y: 30, opacity: 0 });
    gsap.to(".feature-item", {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: ".feature-bar", start: "top 90%" },
    });
  });

  return (
    <section className="feature-bar relative -mt-4 pb-8">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-6 rounded-3xl border border-line/70 bg-white/80 p-6 shadow-soft backdrop-blur md:grid-cols-3 md:gap-0 md:divide-x md:divide-line/70 md:p-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="feature-item flex items-start gap-4 md:px-8"
            >
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-green-primary/25 bg-green-soft text-green-dark">
                <f.Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {f.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
