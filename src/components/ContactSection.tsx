import { FormEvent, useState } from "react";
import {
  CheckCircle2,
  Instagram,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { contact, services } from "../data/services";
import { gsap, useIsomorphicLayoutEffect } from "../hooks/useGsap";

const wa = `https://wa.me/${contact.phoneRaw}?text=${encodeURIComponent(contact.whatsappMessage)}`;
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

type Status = "idle" | "sending" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.set(".contact-left > *", { y: 30, opacity: 0 });
    gsap.set(".contact-form", { y: 40, opacity: 0 });

    gsap.to(".contact-left > *", {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: "#contato", start: "top 80%" },
    });
    gsap.to(".contact-form", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: "#contato", start: "top 80%" },
    });
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!WEB3FORMS_KEY) {
      setStatus("error");
      setErrorMsg(
        "Configuração de envio pendente. Fale conosco pelo WhatsApp enquanto isso.",
      );
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    // honeypot — if filled, silently pretend it worked
    if ((data.get("botcheck") as string)?.length) {
      setStatus("success");
      form.reset();
      return;
    }

    data.set("access_key", WEB3FORMS_KEY);
    data.set(
      "subject",
      `Novo contato pelo site — ${data.get("nome") ?? "sem nome"}`,
    );
    data.set("from_name", "Site F4 Consultoria");

    setStatus("sending");
    setErrorMsg(null);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(
          json.message ||
            "Não conseguimos enviar sua mensagem. Tente novamente ou fale pelo WhatsApp.",
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "Sem conexão com o servidor de envio. Tente novamente em instantes.",
      );
    }
  };

  return (
    <section
      id="contato"
      className="relative bg-mist-gradient py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-green-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-green-light/15 blur-3xl" />

      <div className="container-page relative grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="contact-left">
          <span className="section-eyebrow">Fale com a gente</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-ink md:text-[42px]">
            Solicite seu{" "}
            <span className="text-transparent bg-clip-text bg-green-gradient">
              orçamento
            </span>
          </h2>
          <p className="mt-5 max-w-md text-muted">
            Conte pra gente sobre sua empresa e qual serviço você precisa.
            Retornamos com uma proposta personalizada para a sua realidade.
          </p>

          <ul className="mt-10 space-y-4">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-green-soft text-green-dark">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  E-mail
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm font-semibold text-ink hover:text-green-dark"
                >
                  {contact.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-green-soft text-green-dark">
                <Phone className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Telefone / WhatsApp
                </p>
                <a
                  href={`tel:+${contact.phoneRaw}`}
                  className="text-sm font-semibold text-ink hover:text-green-dark"
                >
                  {contact.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-green-soft text-green-dark">
                <Instagram className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Instagram
                </p>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-ink hover:text-green-dark"
                >
                  {contact.instagram}
                </a>
              </div>
            </li>
          </ul>

          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost mt-10"
          >
            <MessageCircle className="h-4 w-4" />
            Prefiro conversar pelo WhatsApp
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="contact-form relative rounded-3xl border border-line bg-white p-6 shadow-card md:p-10"
          noValidate
        >
          {/* honeypot */}
          <input
            type="text"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
            aria-hidden
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Nome completo" name="nome" required autoComplete="name" />
            <Field label="Empresa" name="empresa" autoComplete="organization" />
            <Field
              label="Telefone / WhatsApp"
              name="telefone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="(98) 9 8117-5991"
            />
            <Field
              label="E-mail"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="voce@empresa.com.br"
            />
          </div>

          <label className="mt-4 block">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Serviço de interesse
            </span>
            <select
              name="servico"
              defaultValue=""
              className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-green-primary focus:ring-4 focus:ring-green-primary/15"
            >
              <option value="" disabled>
                Selecione uma opção…
              </option>
              {services.map((s) => (
                <option key={s.number} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Outro">Outro / não sei ainda</option>
            </select>
          </label>

          <label className="mt-4 block">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Mensagem
            </span>
            <textarea
              name="mensagem"
              required
              rows={5}
              placeholder="Conte um pouco sobre a sua necessidade, número de funcionários, prazo, cidade…"
              className="mt-2 w-full resize-none rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-green-primary focus:ring-4 focus:ring-green-primary/15"
            />
          </label>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted">
              Ao enviar, você concorda em receber contato da equipe F4 sobre
              sua solicitação.
            </p>
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary shrink-0 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enviando…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Solicitar orçamento
                </>
              )}
            </button>
          </div>

          {status === "success" && (
            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-green-primary/30 bg-green-soft p-4 text-sm text-green-dark">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
              <div>
                <p className="font-semibold">Mensagem enviada!</p>
                <p className="mt-1 text-green-dark/80">
                  Recebemos sua solicitação e retornamos em breve pelo canal
                  que você preferir.
                </p>
              </div>
            </div>
          )}
          {status === "error" && errorMsg && (
            <div className="mt-5 rounded-2xl border border-red-300 bg-red-50 p-4 text-sm text-red-800">
              {errorMsg}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
};

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: FieldProps) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
        {label}
        {required && <span className="ml-1 text-green-primary">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted/60 focus:border-green-primary focus:ring-4 focus:ring-green-primary/15"
      />
    </label>
  );
}
