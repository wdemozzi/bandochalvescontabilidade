import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Home, Search, MessageSquare, Phone } from "lucide-react";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui/primitives";
import { solutions, site, whatsappLink } from "@/lib/site";
import { meta } from "@/lib/seo";

export const Route = createFileRoute("/404")({
  head: () => ({
    ...meta({
      title: "Página Não Encontrada (Erro 404) | Bandoch Alves Escritório Contábil",
      description: "O endereço acessado não existe ou foi alterado. Conheça as soluções contábeis e tributárias da Bandoch Alves em Umuarama – PR.",
      path: "/404",
    }),
    meta: [{ name: "robots", content: "noindex, follow" }],
  }),
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <Section tone="beige" className="py-20 sm:py-28 min-h-[75vh] flex items-center">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Erro 404 · Conteúdo Não Encontrado</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl text-graphite">
            Esta página não foi encontrada.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            O endereço digitado pode estar incorreto ou a página foi atualizada. Você pode retornar à página inicial ou navegar pelas principais especialidades do escritório:
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink to="/">
              <Home className="mr-2 h-4 w-4" />
              Página Inicial
            </ButtonLink>
            <ButtonLink to="/solucoes" variant="outline">
              Ver Soluções
            </ButtonLink>
            <ButtonLink to="/contato" variant="outline">
              Falar Conosco
            </ButtonLink>
          </div>

          {/* Links Rápidos de SEO */}
          <div className="mt-12 rounded-2xl border border-border bg-card p-6 text-left shadow-sm">
            <h2 className="eyebrow text-wine">Atalhos Mais Acessados</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {solutions.slice(0, 4).map((s) => (
                <Link
                  key={s.slug}
                  to={`/solucoes/${s.slug}`}
                  className="block rounded-lg p-2.5 text-sm text-graphite hover:bg-beige hover:text-wine transition-colors"
                >
                  <span className="font-semibold block">{s.title}</span>
                  <span className="text-xs text-muted-foreground line-clamp-1">{s.short}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 text-xs text-muted-foreground">
            Precisa de suporte urgente?{" "}
            <a
              href={whatsappLink("Olá! Não consegui encontrar uma informação no site e gostaria de ajuda.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-wine font-semibold underline underline-offset-4"
            >
              Fale pelo WhatsApp com nosso atendimento
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
