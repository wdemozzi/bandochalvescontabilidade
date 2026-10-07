import { Container, JsonLd, Section, SectionHeading, ButtonLink } from "@/components/ui/primitives";
import { ContactFacts, FinalCta, PageHero, SolutionsGrid } from "@/components/sections/common";
import { localBusinessSchema } from "@/lib/seo";
import { site, whatsappLink, type City } from "@/lib/site";

export function CityPage({ city }: { city: City }) {
  return (
    <>
      <JsonLd data={localBusinessSchema(city.city, city.state, city.path)} />

      <PageHero
        eyebrow={`Contabilidade em ${city.city} – ${city.state}`}
        title={`Escritório contábil para empresas de ${city.city}`}
        intro={city.intro}
      >
        <ButtonLink
          href={whatsappLink(
            `Olá! Sou de ${city.city} – ${city.state} e gostaria de falar com a Bandoch Alves.`,
          )}
          external
        >
          Falar no WhatsApp
        </ButtonLink>
        <ButtonLink to="/contato" variant="outline">
          Formulário de contato
        </ButtonLink>
      </PageHero>

      <Section tone="white">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <SectionHeading eyebrow="Contexto local" title={`Como atendemos ${city.city}`} />
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
                {city.context.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <p>
                  A sede do escritório fica em {site.address.city} – {site.address.state}, {" "}
                  {site.address.street}, e o atendimento segue o horário de {site.hours.toLowerCase()}.
                </p>
              </div>
            </div>
            <aside className="border border-border bg-beige p-8">
              <h2 className="eyebrow text-wine">Destaques do atendimento</h2>
              <ul className="mt-6 space-y-4">
                {city.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed text-graphite/80">
                    <span className="mt-2 h-px w-4 shrink-0 bg-wine" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="beige">
        <Container>
          <SectionHeading eyebrow="Soluções" title={`Serviços disponíveis para ${city.city}`} />
          <div className="mt-12">
            <SolutionsGrid />
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading eyebrow="Contato" title="Dados do escritório" />
            <ContactFacts />
          </div>
        </Container>
      </Section>

      <FinalCta
        title={`Vamos conversar sobre a sua empresa em ${city.city}`}
        whatsappMessage={`Olá! Gostaria de uma proposta contábil para minha empresa em ${city.city} – ${city.state}.`}
      />
    </>
  );
}
