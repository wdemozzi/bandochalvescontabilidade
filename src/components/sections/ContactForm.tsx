import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { whatsappLink } from "@/lib/site";

const subjects = [
  "Contabilidade empresarial",
  "Planejamento tributário",
  "Recuperação de créditos tributários",
  "Holding patrimonial e familiar",
  "Estruturação societária",
  "Outro assunto",
];

type Errors = Partial<Record<"name" | "email" | "phone" | "message" | "consent", string>>;

export function ContactForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const fieldClass =
    tone === "dark"
      ? "w-full border-b border-offwhite/25 bg-transparent py-3 text-sm text-offwhite outline-none placeholder:text-offwhite/40 focus:border-champagne"
      : "w-full border-b border-border bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground/70 focus:border-wine";
  const labelClass =
    tone === "dark" ? "eyebrow text-champagne" : "eyebrow text-muted-foreground";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = String(data.get("subject") ?? "");
    const company = String(data.get("company") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2 || name.length > 100) next.name = "Informe seu nome completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 255)
      next.email = "Informe um e-mail válido.";
    if (phone.replace(/\D/g, "").length < 10) next.phone = "Informe um telefone com DDD.";
    if (message.length < 10 || message.length > 1000)
      next.message = "Descreva brevemente sua necessidade (mínimo 10 caracteres).";
    if (!data.get("consent")) next.consent = "É necessário aceitar a Política de Privacidade.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const text = [
      `Olá! Meu nome é ${name}.`,
      company ? `Empresa: ${company}.` : "",
      `Assunto: ${subject}.`,
      `Telefone: ${phone} | E-mail: ${email}.`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    setSent(true);
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Nome
          </label>
          <input id="name" name="name" maxLength={100} className={fieldClass} placeholder="Seu nome completo" />
          {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="company">
            Empresa (opcional)
          </label>
          <input id="company" name="company" maxLength={120} className={fieldClass} placeholder="Razão social ou nome fantasia" />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            E-mail
          </label>
          <input id="email" name="email" type="email" maxLength={255} className={fieldClass} placeholder="voce@empresa.com.br" />
          {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Telefone / WhatsApp
          </label>
          <input id="phone" name="phone" maxLength={20} className={fieldClass} placeholder="(00) 00000-0000" />
          {errors.phone && <p className="mt-2 text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="subject">
          Assunto
        </label>
        <select id="subject" name="subject" className={`${fieldClass} appearance-none`}>
          {subjects.map((s) => (
            <option key={s} value={s} className="text-graphite">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Como podemos ajudar
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={1000}
          className={`${fieldClass} resize-none`}
          placeholder="Conte brevemente o momento da sua empresa."
        />
        {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message}</p>}
      </div>

      <div>
        <label
          className={`flex items-start gap-3 text-xs leading-relaxed ${tone === "dark" ? "text-offwhite/70" : "text-muted-foreground"}`}
        >
          <input type="checkbox" name="consent" className="mt-0.5 h-4 w-4 shrink-0 accent-wine" />
          <span>
            Li e concordo com a{" "}
            <Link to="/politica-de-privacidade" target="_blank" className="underline underline-offset-2">
              Política de Privacidade
            </Link>{" "}
            e autorizo o uso dos meus dados exclusivamente para responder a este contato, conforme a
            LGPD (Lei 13.709/2018).
          </span>
        </label>
        {errors.consent && <p className="mt-2 text-xs text-destructive">{errors.consent}</p>}
      </div>

      <button
        type="submit"
        className={`inline-flex items-center justify-center px-8 py-3.5 text-[0.78rem] font-semibold tracking-[0.14em] uppercase transition-colors ${
          tone === "dark"
            ? "bg-offwhite text-wine hover:bg-champagne hover:text-ink"
            : "bg-wine text-offwhite hover:bg-wine-deep"
        }`}
      >
        Enviar mensagem
      </button>

      {sent && (
        <p className={`text-sm ${tone === "dark" ? "text-champagne" : "text-wine"}`}>
          Abrimos o WhatsApp com sua mensagem pronta. Se a janela não abrir, fale conosco pelo
          telefone ou e-mail ao lado.
        </p>
      )}
    </form>
  );
}
