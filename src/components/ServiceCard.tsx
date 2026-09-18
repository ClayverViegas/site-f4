import { ArrowRight } from "lucide-react";
import type { Service } from "../data/services";

type Props = {
  service: Service;
  className?: string;
};

export function ServiceCard({ service, className = "" }: Props) {
  const Icon = service.icon;
  return (
    <article
      className={`service-card card-surface flex h-full flex-col ${className}`}
    >
      <div className="flex items-center gap-4">
        <span className="service-card__icon inline-flex h-11 w-11 items-center justify-center rounded-xl border border-green-primary/25 bg-white text-green-dark transition-all duration-300">
          <Icon className="h-5 w-5" />
        </span>
        <span className="text-xs font-semibold tracking-[0.16em] text-green-primary">
          {service.number}
        </span>
        <span className="text-base font-semibold text-ink">
          {service.title}
        </span>
      </div>

      <ul className="mt-5 space-y-2.5 text-sm text-muted">
        {service.items.map((it) => (
          <li key={it} className="flex gap-2 leading-snug">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-green-primary" />
            <span>{it}</span>
          </li>
        ))}
      </ul>

      {service.note && (
        <p className="mt-4 rounded-xl bg-green-soft px-3 py-2 text-xs italic text-green-dark">
          {service.note}
        </p>
      )}

      <div className="mt-auto flex items-center justify-end pt-6">
        <span className="service-card__cta inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-green-dark transition-all duration-300">
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
}
