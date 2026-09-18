import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { gsap, useIsomorphicLayoutEffect } from "../hooks/useGsap";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  Icon: LucideIcon;
  align?: "left" | "right";
};

export function ProgramSection({
  id,
  eyebrow,
  title,
  description,
  items,
  Icon,
  align = "left",
}: Props) {
  useIsomorphicLayoutEffect(() => {
    gsap.set(`#${id} .prog-copy > *`, { y: 30, opacity: 0 });
    gsap.set(`#${id} .prog-item`, { y: 20, opacity: 0 });
    gsap.set(`#${id} .prog-visual`, { scale: 0.94, opacity: 0 });

    gsap.to(`#${id} .prog-copy > *`, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: { trigger: `#${id}`, start: "top 80%" },
    });
    gsap.to(`#${id} .prog-item`, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.06,
      ease: "power3.out",
      scrollTrigger: { trigger: `#${id}`, start: "top 70%" },
    });
    gsap.to(`#${id} .prog-visual`, {
      scale: 1,
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: `#${id}`, start: "top 85%" },
    });
  });

  return (
    <section id={id} className="relative py-16 md:py-24">
      <div
        className={`container-page grid grid-cols-1 items-center gap-10 lg:grid-cols-2 ${
          align === "right" ? "" : ""
        }`}
      >
        <div className={`prog-copy ${align === "right" ? "lg:order-2" : ""}`}>
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-ink md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-lg text-muted">{description}</p>

          <ul className="prog-list mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {items.map((it) => (
              <li
                key={it}
                className="prog-item flex items-start gap-3 rounded-2xl border border-line bg-white p-3 pr-4 text-sm text-ink shadow-soft"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-primary" />
                <span className="leading-snug">{it}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`prog-visual relative overflow-hidden rounded-3xl border border-line bg-white p-10 shadow-card ${
            align === "right" ? "lg:order-1" : ""
          }`}
        >
          <div className="pointer-events-none absolute inset-0 bg-mist-gradient opacity-70" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-green-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-green-light/20 blur-3xl" />

          <div className="relative flex flex-col items-start">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-green-primary/25 bg-white text-green-dark shadow-soft">
              <Icon className="h-7 w-7" />
            </span>
            <p className="mt-6 max-w-md font-display text-2xl font-bold leading-snug text-ink md:text-[26px]">
              {title}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              {description}
            </p>

            <div className="mt-8 flex gap-3">
              <span className="stripe relative left-auto top-auto" style={{ position: "relative", width: 60 }} />
              <span className="stripe relative left-auto top-auto" style={{ position: "relative", width: 120 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
