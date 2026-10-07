import { site } from "./site";
import { absoluteUrl, SITE_URL } from "./site-url";

export const SITE_TITLE_SUFFIX = "Bandoch Alves Escritório Contábil";

const OG_IMAGE = absoluteUrl("/og-image.jpg");

export function meta({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: string;
}) {
  const url = absoluteUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE_TITLE_SUFFIX },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  addressRegion: site.address.state,
  postalCode: site.address.zip,
  addressCountry: "BR",
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["AccountingService", "ProfessionalService", "LocalBusiness"],
  name: site.legalName,
  alternateName: site.name,
  description:
    "Escritório de contabilidade em Umuarama – PR especializado em contabilidade consultiva, abertura de empresas, planejamento tributário, recuperação de créditos e holding patrimonial.",
  url: SITE_URL,
  telephone: "+55 44 3624-4599",
  email: site.email,
  taxID: site.cnpj,
  address: postalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.7661,
    longitude: -53.3206,
  },
  hasMap: "https://maps.google.com/?q=Av.+%C3%82ngelo+Moreira+da+Fonseca,+4566,+Umuarama+-+PR",
  priceRange: "$$",
  currenciesAccepted: "BRL",
  paymentAccepted: "Cash, Credit Card, Pix, Bank Transfer",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "13:30",
      closes: "18:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Umuarama", sameAs: "https://pt.wikipedia.org/wiki/Umuarama" },
    { "@type": "City", name: "Campo Mourão" },
    { "@type": "City", name: "Goioerê" },
    { "@type": "City", name: "Douradina" },
    { "@type": "City", name: "Itapema" },
    { "@type": "AdministrativeArea", name: "Paraná" },
    { "@type": "Country", name: "Brasil" },
  ],
  knowsAbout: [
    "Contabilidade em Umuarama",
    "Escritório de Contabilidade",
    "Abertura de Empresas e Legalização Societária",
    "Planejamento Tributário e Elisão Fiscal",
    "Recuperação de Créditos Tributários",
    "Holding Patrimonial e Proteção de Bens",
    "Gestão Fiscal e Folha de Pagamento"
  ],
  sameAs: [site.instagram],
  founder: {
    "@type": "Person",
    name: site.responsible,
    jobTitle: "Contadora responsável técnica",
    identifier: site.crcResponsible,
  },
};

export function localBusinessSchema(city: string, state: string, path: string) {
  const isUmuarama = city.toLowerCase() === "umuarama";
  return {
    "@context": "https://schema.org",
    "@type": ["AccountingService", "LocalBusiness"],
    name: `${site.legalName} — Contabilidade em ${city} – ${state}`,
    url: absoluteUrl(path),
    telephone: "+55 44 3624-4599",
    email: site.email,
    address: postalAddress,
    ...(isUmuarama
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: -23.7661,
            longitude: -53.3206,
          },
          hasMap: "https://maps.google.com/?q=Av.+%C3%82ngelo+Moreira+da+Fonseca,+4566,+Umuarama+-+PR",
          priceRange: "$$",
        }
      : {}),
    areaServed: { "@type": "City", name: city },
    sameAs: [site.instagram],
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    serviceType: name,
    provider: {
      "@type": "AccountingService",
      name: site.legalName,
      address: postalAddress,
      telephone: "+55 44 3624-4599",
    },
    areaServed: { "@type": "Country", name: "Brasil" },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}
