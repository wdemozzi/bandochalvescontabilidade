import { createFileRoute } from "@tanstack/react-router";
import { Container, Section } from "@/components/ui/primitives";
import { PageHero } from "@/components/sections/common";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { site } from "@/lib/site";
import { meta } from "@/lib/seo";

export const Route = createFileRoute("/termos-de-uso")({
  head: () =>
    meta({
      title: "Termos de Uso | Bandoch Alves Escritório Contábil — Umuarama – PR",
      description:
        "Termos e condições gerais de uso do site da Bandoch Alves Escritório Contábil, direitos de propriedade intelectual, limites de responsabilidade e conformidade legal.",
      path: "/termos-de-uso",
    }),
  component: TermosDeUso,
});

const UPDATED = "19 de outubro de 2026";

const sections: { title: string; paragraphs: string[]; list?: string[] }[] = [
  {
    title: "1. Aceitação dos Termos",
    paragraphs: [
      `Ao acessar e navegar pelo website oficial da ${site.legalName} (${site.name}), sediada em ${site.address.full}, você concorda integralmente com estes Termos de Uso e com a nossa Política de Privacidade. Caso não concorde com qualquer disposição, recomendamos que não continue a utilização dos nossos serviços digitais.`,
    ],
  },
  {
    title: "2. Objeto e Caráter Informativo",
    paragraphs: [
      "O conteúdo disponibilizado neste site — incluindo artigos, notícias, calculadoras, guias e materiais educativos — tem finalidade exclusivamente institucional e informativa sobre legislação contábil, tributária, societária e patrimonial.",
      "As publicações não substituem consultas formais, pareceres técnicos individualizados ou diagnósticos tributários específicos. Cada situação empresarial possui particularidades que exigem a análise de documentos fiscais por profissional contábil habilitado.",
    ],
  },
  {
    title: "3. Propriedade Intelectual",
    paragraphs: [
      `Todos os textos, logotipos, monogramas, fotografias, diagramas, artigos e códigos-fonte presentes neste portal são de titularidade da ${site.legalName} ou foram devidamente licenciados, estando protegidos pela legislação de direitos autorais e propriedade industrial (Lei nº 9.610/1998).`,
      "É expressamente proibida a reprodução, cópia, distribuição comercial ou alteração de qualquer conteúdo sem prévia autorização por escrito dos titulares.",
    ],
  },
  {
    title: "4. Limitação de Responsabilidade",
    paragraphs: [
      "O escritório emprega seus melhores esforços para manter as informações fiscais e legislativas rigorosamente atualizadas. Contudo, diante da dinâmica de alterações nas normas tributárias brasileiras, a Bandoch Alves não se responsabiliza por decisões tomadas exclusivamente com base em leituras preliminares de artigos sem consulta prévia formal.",
      "Não garantimos a operação ininterrupta do site contra instabilidades de rede, ataques cibernéticos de terceiros ou falhas de servidores globais, embora apliquemos protocolos modernos de segurança e CDN de alta disponibilidade.",
    ],
  },
  {
    title: "5. Comunicações e Canais Oficiais",
    paragraphs: [
      "Os únicos canais digitais autorizados a representar o escritório são:",
    ],
    list: [
      `Website: ${site.name} (https://www.bandochalvescontabilidade.com.br)`,
      `Telefone Fixo: ${site.phone}`,
      `WhatsApp Comercial Oficial: ${site.whatsappDisplay}`,
      `E-mail Institucional: ${site.email}`,
      `Instagram Oficial: ${site.instagramHandle}`,
    ],
  },
  {
    title: "6. Foro e Legislação Aplicável",
    paragraphs: [
      "Estes Termos de Uso são regidos e interpretados em conformidade com as leis da República Federativa do Brasil, em especial o Código Civil Brasileiro, o Marco Civil da Internet (Lei nº 12.965/2014) e a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).",
      "Fica eleito o Foro da Comarca de Umuarama, Estado do Paraná, com renúncia expressa a qualquer outro, por mais privilegiado que seja, para dirimir quaisquer controvérsias decorrentes destes Termos.",
    ],
  },
];

function TermosDeUso() {
  return (
    <>
      <PageHero
        eyebrow="Transparência & Conformidade"
        title="Termos de Uso do Website"
        intro={`Condições gerais para navegação e utilização dos serviços digitais da Bandoch Alves Escritório Contábil. Última atualização em ${UPDATED}.`}
      />

      <Section tone="white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <BreadcrumbNav items={[{ label: "Termos de Uso" }]} />

            <div className="space-y-12">
              {sections.map((s) => (
                <article key={s.title} className="border-b border-border pb-10 last:border-0 last:pb-0">
                  <h2 className="font-serif text-2xl text-graphite">{s.title}</h2>
                  <div className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
                    {s.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                    {s.list && (
                      <ul className="mt-4 space-y-2 pl-5 text-sm text-graphite/80 list-disc">
                        {s.list.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
