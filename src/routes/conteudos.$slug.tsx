import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Container, JsonLd, Section } from "@/components/ui/primitives";
import { FinalCta } from "@/components/sections/common";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { articleBySlug, articles, site } from "@/lib/site";
import { meta } from "@/lib/seo";

export const Route = createFileRoute("/conteudos/$slug")({
  loader: ({ params }) => {
    const article = articleBySlug(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Conteúdo não encontrado" }, { name: "robots", content: "noindex" }] };
    }
    return meta({
      title: `${loaderData.title} | Bandoch Alves Contabilidade`,
      description: loaderData.excerpt,
      path: `/conteudos/${loaderData.slug}`,
      type: "article",
    });
  },
  component: ArticlePage,
});

function ArticlePage() {
  const a = Route.useLoaderData();
  const related = articles.filter((x) => x.slug !== a.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.excerpt,
          datePublished: a.date,
          articleSection: a.category,
          author: { "@type": "Person", name: site.responsible },
          publisher: { "@type": "Organization", name: site.legalName },
          mainEntityOfPage: `/conteudos/${a.slug}`,
        }}
      />

      <article>
        <header className="border-b border-border bg-beige">
          <Container className="py-16 sm:py-20">
            <div className="max-w-3xl">
              <BreadcrumbNav
                items={[
                  { label: "Conteúdos", href: "/conteudos" },
                  { label: a.category, href: "/conteudos" },
                  { label: a.title },
                ]}
              />
              <p className="eyebrow text-wine mt-4">{a.category}</p>
              <h1 className="mt-5 text-3xl leading-[1.14] sm:text-[2.75rem]">{a.title}</h1>
              <p className="mt-6 text-base leading-relaxed text-graphite/75 sm:text-lg">
                {a.excerpt}
              </p>
              <p className="mt-8 text-xs tracking-[0.14em] text-graphite/55 uppercase">
                {a.dateLabel} · {a.readingTime} · {site.responsible}
              </p>
            </div>
          </Container>
        </header>

        <Section tone="white">
          <Container>
            <div className="max-w-3xl">
              {a.body.map((block, i) => (
                <section key={i} className={i === 0 ? "" : "mt-12"}>
                  {block.heading && (
                    <h2 className="font-serif text-2xl leading-snug">{block.heading}</h2>
                  )}
                  <div className="mt-5 space-y-5 text-base leading-relaxed text-muted-foreground">
                    {block.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </section>
              ))}

              <p className="mt-14 border-t border-border pt-8 text-sm leading-relaxed text-muted-foreground">
                Conteúdo informativo elaborado pela {site.legalName} ({site.crcOffice}). Não
                substitui a análise individual do caso concreto.
              </p>
            </div>
          </Container>
        </Section>

        <Section tone="beige">
          <Container>
            <p className="eyebrow text-wine">Continue lendo</p>
            <div className="mt-8 grid gap-px border border-graphite/12 bg-graphite/12 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/conteudos/$slug"
                  params={{ slug: r.slug }}
                  className="bg-beige p-8 transition-colors hover:bg-offwhite"
                >
                  <span className="eyebrow text-wine">{r.category}</span>
                  <h2 className="mt-4 text-xl leading-snug">{r.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-graphite/70">{r.excerpt}</p>
                </Link>
              ))}
            </div>
            <p className="mt-8">
              <Link
                to="/conteudos"
                className="text-[0.72rem] font-semibold tracking-[0.14em] text-wine uppercase"
              >
                ← Todos os conteúdos
              </Link>
            </p>
          </Container>
        </Section>
      </article>

      <FinalCta whatsappMessage={`Olá! Li o artigo "${a.title}" e gostaria de conversar sobre o tema.`} />
    </>
  );
}
