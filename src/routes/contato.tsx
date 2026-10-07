import { createFileRoute } from "@tanstack/react-router";
import { ButtonLink, Container, Section, SectionHeading } from "@/components/ui/primitives";
import { ContactFacts, PageHero } from "@/components/sections/common";
import { ContactForm } from "@/components/sections/ContactForm";
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
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <SectionHeading
                eyebrow="Formulário"
                title="Conte o momento da sua empresa"
                intro="Preencha os campos abaixo. Ao enviar, sua mensagem é preparada no WhatsApp do escritório."
              />
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
            <div>
              <ContactFacts />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block text-[0.72rem] font-semibold tracking-[0.14em] text-wine uppercase"
              >
                Abrir no Google Maps →
              </a>
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
