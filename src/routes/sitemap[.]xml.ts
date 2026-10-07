import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site-url";

const routes: { path: string; priority: string }[] = [
  { path: "/", priority: "1.0" },
  { path: "/sobre", priority: "0.8" },
  { path: "/solucoes", priority: "0.9" },
  { path: "/solucoes/recuperacao-de-creditos-tributarios", priority: "0.8" },
  { path: "/solucoes/planejamento-tributario", priority: "0.8" },
  { path: "/solucoes/holding-patrimonial-familiar", priority: "0.8" },
  { path: "/solucoes/inteligencia-tributaria", priority: "0.8" },
  { path: "/solucoes/estruturacao-societaria", priority: "0.8" },
  { path: "/solucoes/planejamento-patrimonial", priority: "0.8" },
  { path: "/contabilidade-empresarial", priority: "0.8" },
  { path: "/segmentos", priority: "0.7" },
  { path: "/areas-de-atendimento", priority: "0.7" },
  { path: "/contabilidade-umuarama-pr", priority: "0.9" },
  { path: "/contabilidade-campo-mourao-pr", priority: "0.7" },
  { path: "/contabilidade-goioere-pr", priority: "0.7" },
  { path: "/contabilidade-douradina-pr", priority: "0.7" },
  { path: "/contabilidade-itapema-sc", priority: "0.7" },
  { path: "/conteudos", priority: "0.8" },
  { path: "/conteudos/como-abrir-empresa-em-umuarama-passo-a-passo", priority: "0.8" },
  { path: "/conteudos/quando-migrar-do-simples-para-o-lucro-presumido", priority: "0.6" },
  { path: "/conteudos/holding-familiar-o-que-considerar-antes-de-constituir", priority: "0.6" },
  { path: "/conteudos/recuperacao-de-creditos-como-funciona-na-pratica", priority: "0.6" },
  { path: "/conteudos/indicadores-contabeis-que-a-direcao-precisa-acompanhar", priority: "0.6" },
  { path: "/conteudos/segregacao-de-atividades-limites-entre-planejamento-e-risco", priority: "0.6" },
  { path: "/conteudos/pro-labore-e-distribuicao-de-lucros-como-definir", priority: "0.6" },
  { path: "/contato", priority: "0.9" },
  { path: "/politica-de-privacidade", priority: "0.3" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = routes
          .map(
            (r) =>
              `  <url><loc>${SITE_URL}${r.path}</loc><lastmod>2026-10-07</lastmod><changefreq>weekly</changefreq><priority>${r.priority}</priority></url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
