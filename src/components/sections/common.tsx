import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ButtonLink, Container, Eyebrow, Section, SectionHeading, toPath } from "@/components/ui/primitives";
import { CarouselRow } from "@/components/ui/carousel-row";
import { site, solutions, steps, whatsappLink } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-beige">
      <Container className="py-16 sm:py-24">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-3xl leading-[1.12] sm:text-5xl">{title}</h1>
          {intro && (
            <div className="mt-6 space-y-4 text-base leading-relaxed text-graphite/75 sm:text-lg">
              {typeof intro === "string" ? <p>{intro}</p> : intro}
            </div>
          )}
          {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
        </div>
      </Container>
    </section>
  );
}

export function SolutionsGrid({ exclude, carousel }: { exclude?: string; carousel?: boolean }) {
  const list = solutions.filter((s) => s.slug !== exclude);
  const cards = list.map((s, i) => (
    <Link
      key={s.slug}
      to={toPath(s.path)}
      className="group flex h-full flex-col border border-border bg-card p-8 transition-colors hover:bg-beige"
    >
      <span className="eyebrow text-wine/70">{String(i + 1).padStart(2, "0")}</span>
      <h3 className="mt-5 text-xl leading-snug">{s.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
      <span className="mt-6 text-[0.72rem] font-semibold tracking-[0.14em] text-wine uppercase">
        Ver solução →
      </span>
    </Link>
  ));

  if (carousel) {
    return <CarouselRow label="Frentes de atuação">{cards}</CarouselRow>;
  }

  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{cards}</div>;
}

export function StepsSection({ carousel }: { carousel?: boolean }) {
  const cards = steps.map((s) => (
    <div key={s.n} className="h-full border border-border bg-card p-8">
      <span className="font-serif text-4xl text-wine/25">{s.n}</span>
      <h3 className="mt-4 text-lg">{s.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
    </div>
  ));

  return (
    <Section tone="white">
      <Container>
        <SectionHeading
          eyebrow="Como trabalhamos"
          title="Um método em seis etapas, do primeiro contato ao acompanhamento contínuo"
          intro="Cada projeto segue a mesma disciplina técnica, independentemente do porte da empresa."
        />
        <div className="mt-14">
          {carousel ? (
            <CarouselRow label="As seis etapas do primeiro contato">{cards}</CarouselRow>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{cards}</div>
          )}
        </div>
      </Container>
    </Section>
  );
}


export function FinalCta({
  title = "Vamos analisar a sua estrutura com profundidade",
  text = "Agende uma conversa técnica com a responsável técnica do escritório. Sem compromisso, sem discurso pronto.",
  whatsappMessage = "Olá! Gostaria de agendar uma conversa com a Bandoch Alves Escritório Contábil.",
}: {
  title?: string;
  text?: string;
  whatsappMessage?: string;
}) {
  return (
    <Section tone="wine">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <Eyebrow tone="champagne">Próximo passo</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl leading-[1.15] sm:text-4xl">{title}</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-offwhite/80">{text}</p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <ButtonLink href={whatsappLink(whatsappMessage)} external variant="light">
              Falar no WhatsApp
            </ButtonLink>
            <ButtonLink to="/contato" variant="outline">
              Formulário de contato
            </ButtonLink>
            <a href={site.phoneHref} className="mt-2 text-sm text-offwhite/75 hover:text-champagne">
              {site.phone}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function ContactFacts({ tone = "light" }: { tone?: "light" | "dark" }) {
  const muted = tone === "dark" ? "text-offwhite/65" : "text-muted-foreground";
  const rows = [
    { label: "Endereço", value: site.address.full },
    { label: "Telefone", value: site.phone, href: site.phoneHref },
    {
      label: "WhatsApp",
      value: site.whatsappDisplay,
      href: `https://wa.me/${site.whatsappNumber}`,
    },
    { label: "E-mail", value: site.email, href: `mailto:${site.email}` },
    { label: "Horário", value: site.hours },
    { label: "Instagram", value: site.instagramHandle, href: site.instagram },
    { label: "Responsável técnica", value: `${site.responsible} — ${site.crcResponsible}` },
    { label: "Registro do escritório", value: site.crcOffice },
    { label: "CNPJ", value: site.cnpj },
  ];
  return (
    <dl className="divide-y divide-border/60 border-y border-border/60">
      {rows.map((r) => (
        <div key={r.label} className="grid gap-1 py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6">
          <dt className="eyebrow text-wine">{r.label}</dt>
          <dd className={`text-sm leading-relaxed ${muted}`}>
            {r.href ? (
              <a
                href={r.href}
                target={r.href.startsWith("http") ? "_blank" : undefined}
                rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="hover:text-wine"
              >
                {r.value}
              </a>
            ) : (
              r.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
