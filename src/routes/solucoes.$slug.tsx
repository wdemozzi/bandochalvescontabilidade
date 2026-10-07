import { createFileRoute, notFound } from "@tanstack/react-router";
import { Container, JsonLd, Section, SectionHeading } from "@/components/ui/primitives";
import { FinalCta, PageHero, SolutionsGrid } from "@/components/sections/common";
import { ButtonLink } from "@/components/ui/primitives";
import { solutions, whatsappLink } from "@/lib/site";
import { meta, serviceSchema } from "@/lib/seo";

export const Route = createFileRoute("/solucoes/$slug")({
  loader: ({ params }) => {
    const solution = solutions.find((s) => s.slug === params.slug);
    if (!solution) throw notFound();
    return solution;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Solução não encontrada" }, { name: "robots", content: "noindex" }] };
    }
    return meta({
      title: loaderData.metaTitle,
      description: loaderData.metaDescription,
      path: loaderData.path,
      type: "article",
    });
  },
  component: SolutionPage,
});

function SolutionPage() {
  const s = Route.useLoaderData();

  return (
    <>
      <JsonLd data={serviceSchema(s.title, s.summary, s.path)} />

      <PageHero eyebrow="Solução" title={s.title} intro={s.summary}>
        <ButtonLink
          href={whatsappLink(`Olá! Tenho interesse em ${s.title}. Podemos conversar?`)}
          external
        >
          Falar sobre esta solução
        </ButtonLink>
        <ButtonLink to="/contato" variant="outline">
          Formulário de contato
        </ButtonLink>
      </PageHero>

      <Section tone="white">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <SectionHeading eyebrow="Contexto" title="Por que este trabalho existe" />
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
                {s.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <h2 className="mt-14 font-serif text-2xl">Como conduzimos</h2>
              <ol className="mt-8 space-y-px border border-border bg-border">
                {s.process.map((p, i) => (
                  <li key={p.title} className="flex gap-5 bg-card p-7">
                    <span className="font-serif text-2xl text-wine/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="space-y-10">
              <div className="border border-border bg-beige p-8">
                <h2 className="eyebrow text-wine">O que você recebe</h2>
                <ul className="mt-6 space-y-4">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex gap-3 text-sm leading-relaxed text-graphite/80">
                      <span className="mt-2 h-px w-4 shrink-0 bg-wine" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-border p-8">
                <h2 className="eyebrow text-wine">Para quem é indicado</h2>
                <ul className="mt-6 space-y-4">
                  {s.forWhom.map((d) => (
                    <li key={d} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-px w-4 shrink-0 bg-wine" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="beige">
        <Container>
          <SectionHeading eyebrow="Outras soluções" title="Trabalhos relacionados" />
          <div className="mt-12">
            <SolutionsGrid exclude={s.slug} />
          </div>
        </Container>
      </Section>

      <FinalCta
        title={`Vamos avaliar ${s.title.toLowerCase()} no seu caso`}
        whatsappMessage={`Olá! Gostaria de avaliar ${s.title} para a minha empresa.`}
      />
    </>
  );
}
