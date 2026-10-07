import { createFileRoute, Link } from "@tanstack/react-router";
import { ButtonLink, Container, Eyebrow, JsonLd, Section, SectionHeading, toPath } from "@/components/ui/primitives";
import { CarouselRow } from "@/components/ui/carousel-row";
import { BAMark } from "@/components/brand/Logo";
import { ContactFacts, FinalCta, SolutionsGrid, StepsSection } from "@/components/sections/common";
import { Faq } from "@/components/sections/Faq";
import { ContactForm } from "@/components/sections/ContactForm";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { articles, cities, faq, segments, site, whatsappLink } from "@/lib/site";
import { faqSchema, meta } from "@/lib/seo";
const teamPortrait = "/images/simone-equipe.webp";

export const Route = createFileRoute("/")({
  head: () =>
    meta({
      title: "Bandoch Alves Escritório Contábil | Contabilidade Consultiva em Umuarama – PR",
      description:
        "Contabilidade consultiva, planejamento tributário, recuperação de créditos, holding patrimonial e estruturação societária para empresas e famílias empresárias. Umuarama – PR e atendimento nacional.",
      path: "/",
    }),
  component: Home,
});

function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faq)} />

      {/* Hero comercial */}
      <section className="border-b border-border bg-background">
        <div className="grid lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[1.08fr_0.92fr] lg:grid-rows-[1fr_auto]">
          <div className="order-2 flex items-center px-5 py-14 sm:px-8 sm:py-20 lg:order-1 lg:pl-[max(2rem,calc((100vw-72rem)/2))] lg:pr-12">
            <div className="max-w-[42rem]">
              <Eyebrow>Escritório de Contabilidade · Sede em Umuarama–PR</Eyebrow>
              <h1 className="mt-6 text-4xl leading-[1.04] sm:text-5xl lg:text-[3.55rem]">
                Decisões tributárias inteligentes constroem empresas mais fortes.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Contabilidade consultiva e empresarial em <strong>Umuarama e todo o Brasil</strong> para empresários que desejam reduzir riscos, identificar
                oportunidades tributárias e proteger seu patrimônio com segurança e estratégia.
              </p>

              <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-3" aria-label="Principais especialidades">
                {["Contabilidade em Umuarama", "Recuperação tributária", "Planejamento tributário", "Holdings e proteção patrimonial"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.1em] text-graphite uppercase">
                      <span className="h-1.5 w-1.5 shrink-0 bg-wine" aria-hidden="true" />
                      {item}
                    </li>
                  ),
                )}
              </ul>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink
                  href={whatsappLink(
                    "Olá, conheci a Bandoch Alves pelo site e gostaria de conversar sobre uma análise tributária para minha empresa em Umuarama.",
                  )}
                  external
                  className="w-full sm:w-auto"
                >
                  Falar com uma especialista
                </ButtonLink>
                <ButtonLink to="/contabilidade-umuarama-pr" variant="outline" className="w-full sm:w-auto">
                  Atendimento em Umuarama
                </ButtonLink>
              </div>

              <p className="mt-8 border-l-2 border-wine pl-4 text-sm leading-relaxed text-graphite/75">
                Atendimento presencial na sede em Umuarama ({site.address.street}) e conduzido diretamente pela responsável técnica, {site.responsible} · {site.crcResponsible}.
              </p>
            </div>
          </div>

          <div className="relative order-1 min-h-[26rem] overflow-hidden bg-ink sm:min-h-[38rem] lg:order-2 lg:min-h-0">
            <img
              src={teamPortrait}
              alt="Simone Bandoch Alves e integrante da equipe Bandoch Alves"
              className="absolute inset-0 h-full w-full object-cover object-[center_28%]"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-x-0 bottom-0 bg-ink/90 px-6 py-5 text-offwhite sm:px-8">
              <p className="eyebrow text-champagne">Confiança técnica, atendimento próximo</p>
              <p className="mt-2 font-serif text-lg leading-snug sm:text-xl">
                Estratégia tributária com acompanhamento direto em cada decisão.
              </p>
            </div>
          </div>

          <div className="order-3 border-t border-border bg-card px-5 py-5 sm:px-8 lg:col-span-2 lg:px-[max(2rem,calc((100vw-72rem)/2))]">
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              {["Atendimento pela responsável técnica", "Atuação contábil, tributária e patrimonial", "Umuarama–PR · Atendimento nacional", "Especialistas em recuperação tributária"].map(
                (item, index) => (
                  <div key={item} className={`flex items-center gap-3 lg:px-6 ${index === 0 ? "lg:pl-0" : "lg:border-l lg:border-border"}`}>
                    <span className="font-serif text-xl text-wine">0{index + 1}</span>
                    <dt className="text-[0.7rem] font-semibold leading-relaxed tracking-[0.08em] text-graphite uppercase">{item}</dt>
                  </div>
                ),
              )}
            </dl>
          </div>
        </div>
      </section>

      {/* Soluções principais */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="Soluções"
            title="Frentes de atuação"
            intro="Serviços desenhados para empresas que já superaram a fase da contabilidade meramente declaratória."
          />
          <div className="mt-14">
            <SolutionsGrid exclude="inteligencia-tributaria" carousel />
          </div>
          <div className="mt-10">
            <ButtonLink to="/contabilidade-empresarial" variant="outline">
              Contabilidade empresarial completa
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* Instagram */}
      <InstagramSection />

      {/* Posicionamento */}
      <Section tone="dark">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Eyebrow tone="champagne">Posicionamento</Eyebrow>
              <h2 className="mt-6 text-3xl leading-[1.15] sm:text-[2.6rem]">
                Uma atuação que começa onde a contabilidade tradicional termina
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-offwhite/75">
              <p>
                Entregar guias e demonstrações no prazo é o mínimo — não é o serviço. O que
                distingue uma assessoria contábil é o que ela faz com a informação depois de
                produzi-la.
              </p>
              <p>
                Analisamos regime tributário, estrutura societária, política de retiradas,
                exposição patrimonial e riscos fiscais como partes de um mesmo sistema. Cada
                recomendação vem acompanhada de números, prazos e das implicações de não agir.
              </p>
              <p>
                O resultado é previsibilidade: a direção da empresa passa a decidir com base em
                cenários, não em impressões.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Sobre institucional */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="border border-border bg-card p-10">
              <BAMark className="h-20 w-auto text-wine" />
              <p className="mt-8 font-serif text-2xl leading-snug">{site.responsible}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Contadora responsável técnica · {site.crcResponsible}
              </p>
              <div className="mt-8 space-y-2 border-t border-border pt-6 text-sm text-muted-foreground">
                <p>Registro do escritório: {site.crcOffice}</p>
                <p>CNPJ: {site.cnpj}</p>
                <p>{site.address.full}</p>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="O escritório"
                title="Rigor técnico com atendimento direto"
                intro={
                  <>
                    <p>
                      A Bandoch Alves Escritório Contábil atua em Umuarama – PR e atende empresas
                      em todo o país. O trabalho é conduzido diretamente pela responsável técnica,
                      sem camadas de intermediação entre quem decide e quem analisa.
                    </p>
                    <p>
                      Reunimos contabilidade, planejamento tributário e organização patrimonial na
                      mesma mesa, porque essas decisões são inseparáveis na prática.
                    </p>
                  </>
                }
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink to="/sobre" variant="outline">
                  Conhecer o escritório
                </ButtonLink>
                <ButtonLink to="/segmentos" variant="outline">
                  Segmentos atendidos
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <StepsSection carousel />

      {/* Segmentos */}
      <Section tone="beige">
        <Container>
          <SectionHeading
            eyebrow="Segmentos"
            title="Setores que atendemos"
            intro="Cada segmento tem uma lógica tributária própria. Conhecer essa lógica é o que evita erro de classificação e perda de crédito."
          />
          <div className="mt-12">
            <CarouselRow label="Setores que atendemos" itemClassName="basis-[85%] sm:basis-[48%] lg:basis-[31%]">
              {segments.map((s) => (
                <div key={s.title} className="h-full border border-graphite/12 bg-beige p-7">
                  <h3 className="text-lg">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-graphite/70">{s.text}</p>
                </div>
              ))}
            </CarouselRow>
          </div>
          <div className="mt-10">
            <ButtonLink to="/segmentos" variant="outline">
              Ver detalhes por segmento
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* Área de atendimento */}
      <Section tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <SectionHeading
              eyebrow="Área de atendimento"
              title="Presença local, alcance nacional"
              intro="Atendimento presencial em Umuarama e região, e estrutura digital completa para empresas de qualquer estado."
            />
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {cities.map((c) => (
                <Link key={c.slug} to={toPath(c.path)} className="bg-card p-7 transition-colors hover:bg-beige">
                  <span className="eyebrow text-wine">{c.state}</span>
                  <h3 className="mt-3 text-lg">{c.city}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.region}</p>
                </Link>
              ))}
              <Link to="/areas-de-atendimento" className="bg-card p-7 transition-colors hover:bg-beige">
                <span className="eyebrow text-wine">Brasil</span>
                <h3 className="mt-3 text-lg">Atendimento nacional</h3>
                <p className="mt-2 text-sm text-muted-foreground">Estrutura 100% digital</p>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading eyebrow="Dúvidas frequentes" title="Perguntas que recebemos com frequência" />
            <Faq items={faq} />
          </div>
        </Container>
      </Section>

      {/* Central de conteúdos */}
      <Section tone="beige">
        <Container>
          <SectionHeading
            eyebrow="Central de conteúdos"
            title="Análises técnicas, sem simplificação excessiva"
            intro="Publicações sobre tributação, patrimônio, sucessão e gestão, escritas para quem decide."
          />
          <div className="mt-12 grid gap-px border border-graphite/12 bg-graphite/12 lg:grid-cols-3">
            {articles.slice(0, 3).map((a) => (
              <Link
                key={a.slug}
                to="/conteudos/$slug"
                params={{ slug: a.slug }}
                className="flex flex-col bg-beige p-8 transition-colors hover:bg-offwhite"
              >
                <span className="eyebrow text-wine">{a.category}</span>
                <h3 className="mt-4 text-xl leading-snug">{a.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-graphite/70">{a.excerpt}</p>
                <span className="mt-6 text-xs text-graphite/55">{a.readingTime}</span>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink to="/conteudos" variant="outline">
              Ver todos os conteúdos
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* Formulário */}
      <Section tone="white" id="contato">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionHeading
                eyebrow="Fale com o escritório"
                title="Envie sua mensagem"
                intro="Retornamos em horário comercial. Se preferir, fale diretamente pelo WhatsApp ou telefone."
              />
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
            <div>
              <ContactFacts />
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
