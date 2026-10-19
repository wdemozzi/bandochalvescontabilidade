import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink, Container, Section, SectionHeading } from "@/components/ui/primitives";
import { ContactFacts, PageHero } from "@/components/sections/common";
import { ContactForm } from "@/components/sections/ContactForm";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { site, whatsappLink } from "@/lib/site";
import { meta } from "@/lib/seo";

export const Route = createFileRoute("/contato")({
  head: () =>
    meta({
      title: "Contato | Bandoch Alves Escritório Contábil — Umuarama – PR",
      description:
        "Fale com a Bandoch Alves Escritório Contábil: Av. Ângelo Moreira da Fonseca, 4566, Umuarama – PR. Telefone (44) 3624-4599, WhatsApp e e-mail.",
      path: "/contato",
    }),
  component: Contato,
});

const mapQuery = encodeURIComponent(
  "Av. Ângelo Moreira da Fonseca, 4566, Zona I-A, Umuarama - PR, 87504-050",
);

function Contato() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale diretamente com o escritório"
        intro={`Atendimento de ${site.hours.toLowerCase()}. Responderemos no próximo horário útil.`}
      >
        <ButtonLink
          href={whatsappLink("Olá! Gostaria de falar com a Bandoch Alves Escritório Contábil.")}
          external
        >
          WhatsApp {site.whatsappDisplay}
        </ButtonLink>
        <ButtonLink href={site.phoneHref} variant="outline">
          {site.phone}
        </ButtonLink>
      </PageHero>

      <Section tone="white">
        <Container>
          <BreadcrumbNav items={[{ label: "Contato" }]} />

          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] mt-4">
            <div>
              <SectionHeading
                eyebrow="Formulário de Atendimento"
                title="Conte o momento da sua empresa"
                intro="Preencha os campos abaixo para um retorno consultivo. Garantimos sigilo e retorno rápido."
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
            <div>
              <ContactFacts />
              
              {/* Botões de rotas e GPS */}
              <div className="mt-8 rounded-2xl border border-border bg-beige/60 p-6">
                <h3 className="eyebrow text-wine">Rotas & Como Chegar</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Sede com estacionamento próprio na {site.address.street}, {site.address.city} – {site.address.state}.
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-wine px-4 py-2 text-xs font-semibold uppercase tracking-wider text-offwhite transition-colors hover:bg-wine-deep"
                  >
                    <span>Rota Google Maps</span>
                  </a>
                  <a
                    href={`https://waze.com/ul?q=${mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-wider text-graphite transition-colors hover:bg-beige"
                  >
                    <span>Navegar no Waze</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <section aria-label="Localização do escritório" className="border-t border-border">
        <iframe
          title="Mapa da localização da Bandoch Alves Escritório Contábil"
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[380px] w-full border-0 grayscale-[35%]"
        />
      </section>
    </>
  );
}
