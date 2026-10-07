import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Section, SectionHeading, toPath } from "@/components/ui/primitives";
import { FinalCta, PageHero } from "@/components/sections/common";
import { cities, site } from "@/lib/site";
import { meta } from "@/lib/seo";

export const Route = createFileRoute("/areas-de-atendimento")({
  head: () =>
    meta({
      title: "Áreas de atendimento | Contabilidade em Umuarama e todo o Brasil",
      description:
        "Atendimento presencial em Umuarama – PR e região, páginas dedicadas a Campo Mourão, Goioerê, Douradina e Itapema – SC, além de atendimento digital nacional.",
      path: "/areas-de-atendimento",
    }),
  component: Areas,
});

function Areas() {
  return (
    <>
      <PageHero
        eyebrow="Áreas de atendimento"
        title="Presença local, alcance nacional"
        intro={`Nossa sede fica em ${site.address.city} – ${site.address.state}. A partir dela, atendemos presencialmente o noroeste do Paraná e, de forma digital, empresas em todo o território nacional.`}
      />

      <Section tone="white">
        <Container>
          <SectionHeading eyebrow="Cidades" title="Páginas dedicadas por localidade" />
          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((c) => (
              <Link
                key={c.slug}
                to={toPath(c.path)}
                className="flex flex-col bg-card p-8 transition-colors hover:bg-beige"
              >
                <span className="eyebrow text-wine">{c.state}</span>
                <h2 className="mt-4 font-serif text-2xl">{c.city}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{c.region}</p>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">{c.intro}</p>
                <span className="mt-6 text-[0.72rem] font-semibold tracking-[0.14em] text-wine uppercase">
                  Ver página →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Atendimento nacional"
              title="Distância não muda o padrão do trabalho"
              tone="champagne"
            />
            <div className="space-y-5 text-base leading-relaxed text-offwhite/75">
              <p>
                Documentos são recebidos eletronicamente, as obrigações são cumpridas nos portais
                oficiais e as reuniões acontecem por videoconferência com agenda definida.
              </p>
              <p>
                Clientes de outros estados recebem o mesmo acompanhamento consultivo: análise de
                regime, relatórios gerenciais e revisões periódicas com a responsável técnica.
              </p>
              <p>
                Para empresas do Paraná e do litoral catarinense, reuniões presenciais podem ser
                agendadas conforme a necessidade do projeto.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta whatsappMessage="Olá! Minha empresa fica fora de Umuarama. Como funciona o atendimento?" />
    </>
  );
}
