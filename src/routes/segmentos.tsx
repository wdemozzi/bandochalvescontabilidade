import { createFileRoute } from "@tanstack/react-router";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { FinalCta, PageHero } from "@/components/sections/common";
import { segments } from "@/lib/site";
import { meta } from "@/lib/seo";

export const Route = createFileRoute("/segmentos")({
  head: () =>
    meta({
      title: "Segmentos atendidos | Bandoch Alves Escritório Contábil",
      description:
        "Indústria, comércio, serviços, agronegócio, saúde, construção, tecnologia e holdings familiares: contabilidade e tributação com leitura específica por segmento.",
      path: "/segmentos",
    }),
  component: Segmentos,
});

const detail: Record<string, string[]> = {
  Indústria: [
    "Apropriação de créditos de insumos e energia",
    "Formação de custo e controle de estoques",
    "Bloco K, SPED Fiscal e obrigações de alto volume",
  ],
  "Comércio e distribuição": [
    "Substituição tributária e produtos monofásicos",
    "Revisão de classificação fiscal e NCM",
    "Recuperação de PIS/COFINS sobre itens já tributados",
  ],
  Serviços: [
    "ISS, local de incidência e retenções",
    "Fator R e escolha entre anexos do Simples",
    "Comparativo permanente com o Lucro Presumido",
  ],
  Agronegócio: [
    "Produtor rural pessoa física e jurídica",
    "Livro Caixa Digital, Funrural e crédito rural",
    "Sucessão de terras e organização patrimonial",
  ],
  "Saúde e profissionais liberais": [
    "Sociedades uniprofissionais e equiparação hospitalar",
    "Pró-labore, distribuição de lucros e previdência",
    "Estrutura societária para clínicas e consultórios",
  ],
  "Construção e imobiliário": [
    "RET, patrimônio de afetação e incorporações",
    "Obras próprias e de terceiros",
    "Tributação de locações e ganho de capital",
  ],
  "Tecnologia e serviços digitais": [
    "Receita recorrente e reconhecimento contábil",
    "Contratos internacionais e retenções",
    "Entrada de investidores e vesting societário",
  ],
  "Holdings e famílias empresárias": [
    "Gestão de participações e governança familiar",
    "Doação de quotas, usufruto e sucessão",
    "Contabilidade e obrigações permanentes da holding",
  ],
};

function Segmentos() {
  return (
    <>
      <PageHero
        eyebrow="Segmentos"
        title="Cada setor tem uma lógica tributária própria"
        intro="Conhecer essa lógica é o que separa a contabilidade correta da contabilidade cara — em impostos pagos a mais e em créditos não aproveitados."
      />

      <Section tone="white">
        <Container>
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {segments.map((s) => (
              <article key={s.title} className="bg-card p-9">
                <h2 className="font-serif text-2xl">{s.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <ul className="mt-6 space-y-3 border-t border-border pt-6">
                  {(detail[s.title] ?? []).map((d) => (
                    <li key={d} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-px w-4 shrink-0 bg-wine" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="beige">
        <Container>
          <SectionHeading
            eyebrow="Seu setor não está na lista?"
            title="A análise é sempre individual"
            intro="Atendemos também associações, entidades sem fins lucrativos, transportes, educação e negócios em formação. Fale conosco e avaliamos o caso concreto."
          />
        </Container>
      </Section>

      <FinalCta whatsappMessage="Olá! Gostaria de saber como vocês atendem o meu segmento." />
    </>
  );
}
