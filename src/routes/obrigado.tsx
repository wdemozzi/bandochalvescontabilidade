import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Clock, MessageSquare, ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { Container, Eyebrow, Section } from "@/components/ui/primitives";
import { site, whatsappLink, articles } from "@/lib/site";
import { meta } from "@/lib/seo";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    ...meta({
      title: "Mensagem Recebida com Sucesso | Bandoch Alves Escritório Contábil",
      description: "Agradecemos seu contato. Nossa equipe técnica entrará em contato em até 30 minutos em horário comercial.",
      path: "/obrigado",
    }),
    meta: [
      { name: "robots", content: "noindex, follow" },
      { title: "Mensagem Recebida com Sucesso | Bandoch Alves Escritório Contábil" },
      { name: "description", content: "Agradecemos seu contato. Nossa equipe técnica entrará em contato em até 30 minutos em horário comercial." },
    ],
  }),
  component: ObrigadoPage,
});

function ObrigadoPage() {
  return (
    <Section tone="beige" className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shadow-sm sm:h-20 sm:w-20">
            <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12" />
          </div>

          <Eyebrow>Solicitação Enviada com Sucesso</Eyebrow>
          <h1 className="mt-4 font-serif text-3xl leading-tight sm:text-5xl text-graphite">
            Recebemos a sua mensagem.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Agradecemos a confiança na <strong>Bandoch Alves Escritório Contábil</strong>. As informações da sua empresa já foram encaminhadas para a nossa equipe técnica e para a contadora responsável Simone Alves.
          </p>

          {/* Card de Promessa de Resposta */}
          <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8 text-left shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-wine/10 text-wine">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 mb-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                  Garantia de Retorno Ágil
                </span>
                <h3 className="text-lg font-semibold text-graphite">
                  Resposta em até 30 minutos em horário comercial
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Atendemos de {site.hours}. Se você enviou esta mensagem fora do horário de expediente, responderemos logo no início do próximo turno útil.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappLink("Olá! Acabei de enviar uma solicitação pelo site e gostaria de adiantar meu atendimento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-wine px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-offwhite shadow-sm transition-colors hover:bg-wine-deep"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Priorizar no WhatsApp</span>
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-graphite transition-colors hover:bg-beige"
              >
                <Phone className="h-4 w-4" />
                <span>Ligar {site.phone}</span>
              </a>
            </div>
          </div>

          {/* O que fazer agora? */}
          <div className="mt-14 text-left">
            <h2 className="eyebrow text-wine">Enquanto você aguarda</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Conheça os conteúdos educativos mais lidos pelos empresários de Umuarama e região:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {articles.slice(0, 2).map((art) => (
                <Link
                  key={art.slug}
                  to={`/conteudos/${art.slug}`}
                  className="group block rounded-xl border border-border bg-card p-5 transition-colors hover:border-wine/50 hover:bg-beige"
                >
                  <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-wine">
                    {art.category}
                  </span>
                  <h3 className="mt-2 font-serif text-base leading-snug group-hover:text-wine transition-colors">
                    {art.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-graphite group-hover:text-wine">
                    Ler artigo <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center sm:text-left">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-wine underline underline-offset-4 hover:text-wine-deep"
              >
                ← Voltar para a Página Inicial
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
