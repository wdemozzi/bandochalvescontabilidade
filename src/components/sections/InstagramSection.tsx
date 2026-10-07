import { Play, Instagram } from "lucide-react";
import { ButtonLink, Container, Section, SectionHeading } from "@/components/ui/primitives";
import { site } from "@/lib/site";
const posts = [
  {
    type: "reel" as const,
    category: "Planejamento Tributário · Reel",
    title: "O Simples ainda COMPENSA?",
    href: "https://www.instagram.com/reel/DdEbUJhhQp4/",
    cover: "/images/reel-simples-compensa.webp",
  },
  {
    type: "reel" as const,
    category: "Gestão Tributária · Reel",
    title: "Você paga muitas GUIAS?",
    href: "https://www.instagram.com/reel/Da5HJ1XBCSt/",
    cover: "/images/reel-muitas-guias.webp",
  },
  {
    type: "reel" as const,
    category: "Auditoria & Riscos · Reel",
    title: "O risco está nos detalhes.",
    href: "https://www.instagram.com/reel/DaNWSGnBj7X/",
    cover: "/images/reel-risco-detalhes.webp",
  },
  {
    type: "reel" as const,
    category: "Redução de Custos & Gestão · Reel",
    title: "R$ 50 mil a menos em despesas ajudariam sua empresa?",
    href: "https://www.instagram.com/reel/Daz9onwBmZg/",
    cover: "/images/reel-50-mil-menos.webp",
  },
  {
    type: "reel" as const,
    category: "Folha de Pagamento & Custos · Reel",
    title: "Sua folha está cara demais?",
    href: "https://www.instagram.com/reel/DaKtaPaB42v/",
    cover: "/images/reel-folha-cara.webp",
  },
];

function ReelCard({
  category,
  title,
  href,
  cover,
}: {
  category: string;
  title: string;
  href: string;
  cover: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex aspect-[9/16] w-[72vw] shrink-0 snap-start flex-col justify-between overflow-hidden border border-offwhite/10 bg-ink transition-all duration-300 hover:border-champagne/30 sm:w-auto sm:p-6"
      aria-label={`Reel: ${title}`}
    >
      <img
        src={cover}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-ink/10" />

      <div className="relative z-10 flex items-start justify-between p-5 sm:p-0">
        <span className="eyebrow text-champagne/90">{category}</span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-offwhite/15 bg-ink/40 px-2.5 py-1 text-[0.65rem] font-semibold tracking-wider uppercase text-offwhite/90 backdrop-blur-sm">
          <Play className="h-3 w-3 fill-current" />
          Reel
        </span>
      </div>

      <div className="relative z-10 mt-auto p-5 sm:p-0">
        <p className="font-serif text-lg leading-snug text-offwhite group-hover:text-champagne sm:text-xl">
          {title}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-offwhite/55 transition-colors group-hover:text-champagne">
          Ver no Instagram
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </a>
  );
}

export function InstagramSection() {
  return (
    <Section tone="dark" className="border-y border-offwhite/10">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Acompanhe nossa rotina e análises"
            title="Inteligência tributária e bastidores no Instagram"
            tone="champagne"
            align="left"
          />
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-lg text-offwhite transition-colors hover:text-champagne"
            >
              {site.instagramHandle}
            </a>
            <ButtonLink href={site.instagram} external variant="light" className="gap-2">
              <Instagram className="h-4 w-4" />
              Seguir no Instagram
            </ButtonLink>
          </div>
        </div>

        <div className="mt-14 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:px-0 lg:grid-cols-5 lg:pb-0">
          {posts.map((p) => (
            <ReelCard key={p.title} {...p} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-offwhite/10 pt-10 text-center sm:flex-row">
          <p className="max-w-md text-sm leading-relaxed text-offwhite/70">
            Conteúdo técnico publicado regularmente para quem precisa decidir com base em informação.
          </p>
          <ButtonLink href={site.instagram} external variant="outline" className="border-offwhite/25 text-offwhite hover:border-offwhite/60 hover:bg-offwhite/5 hover:text-offwhite">
            Acompanhar atualizações diárias
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
