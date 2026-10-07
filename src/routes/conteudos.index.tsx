import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { FinalCta, PageHero } from "@/components/sections/common";
import { articleCategories, articles } from "@/lib/site";
import { meta } from "@/lib/seo";

export const Route = createFileRoute("/conteudos/")({
  head: () =>
    meta({
      title: "Central de conteúdos | Bandoch Alves Escritório Contábil",
      description:
        "Artigos técnicos sobre tributação, patrimônio, sucessão, gestão empresarial e direito societário aplicados ao dia a dia das empresas.",
      path: "/conteudos",
    }),
  component: Conteudos,
});

function Conteudos() {
  const [active, setActive] = useState<string>("Todos");
  const list =
    active === "Todos" ? articles : articles.filter((a) => a.category === active);

  return (
    <>
      <PageHero
        eyebrow="Central de conteúdos"
        title="Análises técnicas para quem decide"
        intro="Publicações sobre regime tributário, créditos, holding, sucessão e gestão — escritas sem simplificação excessiva."
      />

      <Section tone="white">
        <Container>
          <div className="flex flex-wrap gap-2">
            {["Todos", ...articleCategories].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className={`px-4 py-2 text-[0.72rem] font-semibold tracking-[0.14em] uppercase transition-colors ${
                  active === c
                    ? "bg-wine text-offwhite"
                    : "border border-border text-muted-foreground hover:border-wine hover:text-wine"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {list.map((a) => (
              <Link
                key={a.slug}
                to="/conteudos/$slug"
                params={{ slug: a.slug }}
                className="flex flex-col bg-card p-8 transition-colors hover:bg-beige"
              >
                <span className="eyebrow text-wine">{a.category}</span>
                <h2 className="mt-4 text-xl leading-snug">{a.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {a.excerpt}
                </p>
                <p className="mt-6 text-xs text-muted-foreground">
                  {a.dateLabel} · {a.readingTime}
                </p>
              </Link>
            ))}
          </div>

          {list.length === 0 && (
            <p className="mt-12 text-sm text-muted-foreground">
              Nenhum conteúdo publicado nesta categoria por enquanto.
            </p>
          )}
        </Container>
      </Section>

      <Section tone="beige">
        <Container>
          <SectionHeading
            eyebrow="Aviso"
            title="Conteúdo informativo, não substitui análise individual"
            intro="Os textos tratam de regras gerais. Antes de qualquer decisão, avalie o caso concreto com a responsável técnica."
          />
        </Container>
      </Section>

      <FinalCta whatsappMessage="Olá! Li um conteúdo no site e gostaria de conversar sobre o assunto." />
    </>
  );
}
