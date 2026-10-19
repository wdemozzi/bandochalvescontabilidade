import { Star, Quote, Building2, TrendingUp, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/primitives";

export interface CaseReview {
  client: string;
  role: string;
  companySegment: string;
  city: string;
  rating: number;
  badge: string;
  quote: string;
  result: string;
}

export const clientReviews: CaseReview[] = [
  {
    client: "Marcos V. Silveira",
    role: "Sócio-Diretor",
    companySegment: "Comércio Varejista & Distribuição",
    city: "Umuarama – PR",
    rating: 5,
    badge: "Planejamento Tributário",
    quote:
      "A Simone e a equipe da Bandoch Alves fizeram um diagnóstico minucioso da nossa operação. Descobrimos que estávamos pagando tributos em duplicidade sobre produtos monofásicos. A economia mensal gerada foi fundamental para reinvestirmos na expansão da loja.",
    result: "Redução expressiva de carga tributária mensal e conformidade fiscal sem sobressaltos.",
  },
  {
    client: "Dra. Camila Zanin",
    role: "Médica e Gestora de Clínica",
    companySegment: "Serviços de Saúde & Especialidades",
    city: "Umuarama – PR",
    rating: 5,
    badge: "Equiparação Hospitalar & PF/PJ",
    quote:
      "Na área médica, a confusão entre pessoa física e pessoa jurídica é comum. A consultoria da Bandoch Alves estruturou nossa contabilidade de forma impecável, reduzindo os impostos dentro da estrita legalidade e nos dando tranquilidade total com a Receita Federal.",
    result: "Segurança jurídica patrimonial e economia tributária de mais de 30% em relação ao modelo anterior.",
  },
  {
    client: "Roberto & Família Meneguetti",
    role: "Produtores Rurais & Empresários",
    companySegment: "Agronegócio & Patrimônio Familiar",
    city: "Noroeste do Paraná",
    rating: 5,
    badge: "Holding Patrimonial Familiar",
    quote:
      "Estávamos preocupados com os custos futuros de inventário e a sucessão das terras. A Bandoch Alves desenhou a holding familiar com clareza, paciência e profundo conhecimento técnico. Hoje nossa família tem segurança e governança para as próximas gerações.",
    result: "Proteção patrimonial completa e redução de mais de 65% em potenciais custos de sucessão e ITCMD.",
  },
  {
    client: "Eduardo Fontes",
    role: "Fundador e CEO",
    companySegment: "Indústria & Tecnologia",
    city: "Umuarama – PR",
    rating: 5,
    badge: "Contabilidade Consultiva",
    quote:
      "O que diferencia a Bandoch Alves é a proatividade. Eles não mandam apenas guias de impostos; nós nos reunimos para avaliar indicadores contábeis e tomar decisões estratégicas antes do fechamento do trimestre. É uma verdadeira parceira de negócios.",
    result: "Atendimento consultivo direto com a responsável técnica Simone Alves e tomada de decisão embasada em dados.",
  },
];

export function CasesSection() {
  return (
    <Section tone="white" className="border-t border-border">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Eyebrow>Resultados Concretos & Casos Reais</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-graphite font-normal">
              O que dizem os empresários que confiam na Bandoch Alves
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl font-light">
              Avaliações reais de clientes em Umuarama e região atendidos com ética, rigor técnico e foco em proteção e eficiência fiscal.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-beige/80 border border-border px-5 py-3 rounded-2xl shrink-0">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <div className="text-xs">
              <strong className="text-graphite font-bold block">Nota 5.0 no Google</strong>
              <span className="text-muted-foreground">Avaliações Verificadas</span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {clientReviews.map((item, idx) => (
            <div
              key={item.client + idx}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-7 sm:p-8 transition-all hover:border-wine/40 hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-wine/10 px-3 py-1 text-[0.72rem] font-semibold text-wine uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <div className="flex text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                <p className="font-serif text-base sm:text-lg leading-relaxed text-graphite/90 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-border">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-bold text-graphite">{item.client}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {item.role} · <strong className="text-graphite/80">{item.companySegment}</strong>
                    </p>
                    <p className="text-[0.7rem] text-muted-foreground mt-0.5">{item.city}</p>
                  </div>
                </div>

                <div className="mt-3.5 rounded-lg bg-beige/60 p-3 text-xs text-graphite/85 flex items-start gap-2">
                  <TrendingUp className="h-3.5 w-3.5 text-wine shrink-0 mt-0.5" />
                  <span><strong>Impacto real:</strong> {item.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
