import { createFileRoute } from "@tanstack/react-router";
import { Container, JsonLd, Section, SectionHeading } from "@/components/ui/primitives";
import { FinalCta, PageHero, SolutionsGrid } from "@/components/sections/common";
import { ButtonLink } from "@/components/ui/primitives";
import { whatsappLink } from "@/lib/site";
import { meta, serviceSchema } from "@/lib/seo";

export const Route = createFileRoute("/contabilidade-empresarial")({
  head: () =>
    meta({
      title: "Contabilidade Empresarial Completa | Bandoch Alves Escritório Contábil",
      description:
        "Escrituração contábil e fiscal, folha de pagamento, obrigações acessórias, balanços e relatórios gerenciais com acompanhamento consultivo. Umuarama – PR e todo o Brasil.",
      path: "/contabilidade-empresarial",
    }),
  component: Page,
});

const blocks = [
  {
    title: "Contábil",
    items: [
      "Escrituração contábil completa e conciliações",
      "Balancetes mensais e demonstrações anuais",
      "Balanço patrimonial e DRE com análise",
      "Relatórios gerenciais para a direção",
    ],
  },
  {
    title: "Fiscal",
    items: [
      "Apuração de tributos federais, estaduais e municipais",
      "Escrituração fiscal e obrigações acessórias",
      "SPED, EFD, DCTF, EFD-Reinf e declarações anuais",
      "Acompanhamento de regime e revisão de classificações",
    ],
  },
  {
    title: "Pessoal",
    items: [
      "Folha de pagamento e encargos",
      "Admissões, rescisões e férias",
      "eSocial e obrigações trabalhistas",
      "Pró-labore e política de retiradas",
    ],
  },
  {
    title: "Societário e legalização",
    items: [
      "Abertura, alteração e encerramento de empresas",
      "Certidões, alvarás e regularizações cadastrais",
      "Procurações eletrônicas e acessos aos portais",
      "Transição de escritório contábil sem ruptura",
    ],
  },
];

function Page() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          "Contabilidade empresarial",
          "Escrituração contábil e fiscal, folha de pagamento, obrigações acessórias e relatórios gerenciais com acompanhamento consultivo.",
          "/contabilidade-empresarial",
        )}
      />

      <PageHero
        eyebrow="Contabilidade empresarial"
        title="A base bem feita — e a leitura estratégica que vem depois"
        intro="Rotina contábil, fiscal e trabalhista executada com precisão, integrada à análise permanente de tributos, sociedade e patrimônio."
      >
        <ButtonLink
          href={whatsappLink(
            "Olá! Gostaria de um orçamento de contabilidade empresarial para a minha empresa.",
          )}
          external
        >
          Solicitar proposta
        </ButtonLink>
        <ButtonLink to="/contato" variant="outline">
          Falar com o escritório
        </ButtonLink>
      </PageHero>

      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="Escopo"
            title="O que está incluído"
            intro="Um único escritório responde por todas as frentes, com um interlocutor técnico para a empresa."
          />
          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2">
            {blocks.map((b) => (
              <div key={b.title} className="bg-card p-9">
                <h3 className="font-serif text-2xl">{b.title}</h3>
                <ul className="mt-6 space-y-4">
                  {b.items.map((i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-px w-4 shrink-0 bg-wine" aria-hidden="true" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Troca de escritório"
              title="A transição é conduzida por nós, do início ao fim"
              tone="champagne"
            />
            <div className="space-y-5 text-base leading-relaxed text-offwhite/75">
              <p>
                Solicitamos os arquivos e balancetes ao escritório anterior, conferimos saldos,
                identificamos obrigações pendentes e transferimos procurações eletrônicas.
              </p>
              <p>
                O cliente recebe um cronograma com prazos e responsáveis, e acompanha cada etapa
                até a operação estar plenamente estabilizada na nossa estrutura.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="beige">
        <Container>
          <SectionHeading eyebrow="Além da rotina" title="Soluções que complementam a contabilidade" />
          <div className="mt-12">
            <SolutionsGrid />
          </div>
        </Container>
      </Section>

      <FinalCta
        title="Peça uma proposta de contabilidade empresarial"
        whatsappMessage="Olá! Quero receber uma proposta de contabilidade empresarial."
      />
    </>
  );
}
