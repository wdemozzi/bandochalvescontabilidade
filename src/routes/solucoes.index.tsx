import { createFileRoute } from "@tanstack/react-router";
import { Container, Section } from "@/components/ui/primitives";
import { FinalCta, PageHero, SolutionsGrid, StepsSection } from "@/components/sections/common";
import { meta } from "@/lib/seo";

export const Route = createFileRoute("/solucoes/")({
  head: () =>
    meta({
      title: "Soluções contábeis, tributárias e patrimoniais | Bandoch Alves",
      description:
        "Recuperação de créditos, planejamento tributário, holding patrimonial e familiar, inteligência tributária, estruturação societária e planejamento patrimonial.",
      path: "/solucoes",
    }),
  component: Solucoes,
});

function Solucoes() {
  return (
    <>
      <PageHero
        eyebrow="Soluções"
        title="Seis frentes de atuação, um mesmo padrão técnico"
        intro="Cada solução pode ser contratada isoladamente ou como parte de um plano integrado de contabilidade, tributos e patrimônio."
      />
      <Section tone="white">
        <Container>
          <SolutionsGrid />
        </Container>
      </Section>
      <StepsSection />
      <FinalCta />
    </>
  );
}
