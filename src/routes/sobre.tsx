import { createFileRoute } from "@tanstack/react-router";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { PageHero, FinalCta, StepsSection, ContactFacts } from "@/components/sections/common";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { CasesSection } from "@/components/sections/CasesSection";
import { BAMark } from "@/components/brand/Logo";
import { site } from "@/lib/site";
import { meta } from "@/lib/seo";

export const Route = createFileRoute("/sobre")({
  head: () =>
    meta({
      title: "Sobre o escritório | Bandoch Alves Escritório Contábil",
      description:
        "Escritório contábil em Umuarama – PR conduzido pela responsável técnica Simone Bandoch Alves (CRC-PR 074.178/O8). Contabilidade consultiva com rigor técnico e atendimento direto.",
      path: "/sobre",
    }),
  component: Sobre,
});

const principles = [
  {
    title: "Técnica antes do discurso",
    text: "Nenhuma recomendação é feita sem número, documento e base normativa que a sustente.",
  },
  {
    title: "Atendimento direto",
    text: "As decisões estratégicas são tratadas diretamente com a responsável técnica do escritório.",
  },
  {
    title: "Visão integrada",
    text: "Contabilidade, tributos, sociedade e patrimônio analisados como um único sistema.",
  },
  {
    title: "Prudência",
    text: "Preferimos a estrutura que resiste à fiscalização à economia que não se sustenta.",
  },
  {
    title: "Clareza",
    text: "Relatórios objetivos, linguagem compreensível e riscos explicitados desde o início.",
  },
  {
    title: "Continuidade",
    text: "Acompanhamento permanente: a legislação muda, a empresa muda, o plano acompanha.",
  },
];

function Sobre() {
  return (
    <>
      <PageHero
        eyebrow="O escritório"
        title="Contabilidade conduzida por quem responde tecnicamente por ela"
        intro="A Bandoch Alves Escritório Contábil atende empresas e famílias empresárias a partir de Umuarama – PR, com estrutura para atuar em todo o país."
      />

      <Section tone="white">
        <Container>
          <BreadcrumbNav items={[{ label: "Sobre o Escritório" }]} />

          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] mt-6">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <SectionHeading
                eyebrow="Quem somos"
                title="Rigor técnico, leitura estratégica e proximidade real"
              />
              <p className="pt-6">
                O escritório nasce de uma convicção simples: a contabilidade só cumpre seu papel
                quando influencia decisões. Entregar obrigações no prazo é pré-requisito, não
                resultado.
              </p>
              <p>
                Por isso, nosso trabalho combina a execução impecável das rotinas contábeis e
                fiscais com análise permanente de regime tributário, estrutura societária,
                política de retiradas e exposição patrimonial.
              </p>
              <p>
                Atendemos indústrias, comércio, serviços, agronegócio, saúde, construção,
                tecnologia e holdings familiares — cada segmento com a leitura tributária que lhe é
                própria.
              </p>
              <p>
                O relacionamento é direto: o cliente fala com quem analisa, entende o raciocínio por
                trás de cada recomendação e decide com informação suficiente.
              </p>
            </div>

            <aside className="border border-border bg-beige p-9">
              <BAMark className="h-16 w-auto text-wine" />
              <h2 className="mt-8 font-serif text-2xl">{site.responsible}</h2>
              <p className="mt-2 text-sm text-graphite/70">
                Contadora responsável técnica · {site.crcResponsible}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-graphite/75">
                Responde tecnicamente pelo escritório e conduz pessoalmente os trabalhos de
                planejamento tributário, estruturação societária e organização patrimonial.
              </p>
              <dl className="mt-8 space-y-3 border-t border-graphite/15 pt-6 text-sm text-graphite/75">
                <div>
                  <dt className="eyebrow text-wine">Registro do escritório</dt>
                  <dd className="mt-1">{site.crcOffice}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-wine">CNPJ</dt>
                  <dd className="mt-1">{site.cnpj}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-wine">Sede</dt>
                  <dd className="mt-1">{site.address.full}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <SectionHeading
            eyebrow="Princípios"
            title="O que orienta cada trabalho"
            tone="champagne"
          />
          <div className="mt-14 grid gap-px border border-offwhite/12 bg-offwhite/12 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="bg-ink p-8">
                <h3 className="text-lg">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-offwhite/70">{p.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <StepsSection />

      <Section tone="beige">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading eyebrow="Dados institucionais" title="Transparência de registro e contato" />
            <ContactFacts />
          </div>
        </Container>
      </Section>

      <CasesSection />

      <FinalCta />
    </>
  );
}
