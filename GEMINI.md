# GEMINI.md — Bandoch Alves Escritório Contábil

> Documentação técnica perpétua de arquitetura, identidade visual, estratégia de SEO local e deploy contínuo do projeto **Bandoch Alves Escritório Contábil**.

---

## 1. Identificação do Cliente & Contatos Oficiais

* **Nome do Escritório:** Bandoch Alves Escritório Contábil
* **Responsável Técnica:** Simone Alves (Contadora)
* **Website Oficial:** [https://www.bandochalvescontabilidade.com.br/](https://www.bandochalvescontabilidade.com.br/)
* **E-mail:** `contato@bandochalvescontabilidade.com.br`
* **Localização Sede:** Umuarama – PR
* **Atendimento:** Noroeste do Paraná, Campo Mourão, Litoral Catarinense (Itapema) e Empresas em todo o Brasil.
* **Foco de Atuação:** Contabilidade consultiva, planejamento tributário, recuperação de créditos tributários, holding patrimonial familiar e estruturação societária.

---

## 2. Stack Tecnológica & Arquitetura

* **Framework:** TanStack Start (SSR) + React 19 + Nitro Engine
* **Roteador:** TanStack Router (`src/routes/`)
* **Estilização:** Tailwind CSS v4 + Radix UI Primitives + Lucide Icons
* **Hospedagem & CDN:** Vercel (Produção - conta `wdtestes@gmail.com`)
* **Repositório GitHub:** [https://github.com/wdemozzi/bandochalvescontabilidade.git](https://github.com/wdemozzi/bandochalvescontabilidade.git)

---

## 3. Desacoplamento do Lovable (100% Autônomo)

1. **Tratamento de Erros:** `src/lib/lovable-error-reporting.ts` desacoplado de telemetria externa, sem disparos de rede para sandboxes da Lovable.
2. **Favicons Oficiais:** Pacote completo gerado nos padrões rígidos do Google (48x48, 96x96, 192x192, apple-touch-icon 180x180 e favicon.ico na raiz).
3. **OpenGraph & Twitter:** Tags canônicas servindo `/og-image.jpg` do próprio domínio.
4. **Sitemap Dinâmico:** Atualizado com `<lastmod>2026-10-07</lastmod>` e `<changefreq>weekly</changefreq>` via `src/routes/sitemap[.]xml.ts`.

---

## 4. Identidade Visual & Design System

* **Tipografia:**
  * **Títulos & Citações:** *Playfair Display* (Serifada clássica e autoritária)
  * **Corpo & Interface:** *Karla* (Sem serifa de alta legibilidade técnica)
* **Paleta de Cores:**
  * **Vinho Nobre / Wine:** `#5E141C`
  * **Champagne / Dourado:** `#D4A359` / `#E2D1B8`
  * **Grafite Profundo:** `#1A0D10`
  * **Bege Suave / Fundo:** `#F8F6F2`
* **Favicons Oficiais (Google Compliant):**
  * `favicon-48x48.png`
  * `favicon-96x96.png`
  * `favicon-192x192.png`
  * `apple-touch-icon.png` (180x180)
  * `favicon.ico` (multi-resolução)

---

## 5. Estrutura de Rotas & SEO Hiper-Local

* **Páginas Principais:**
  * `/`: Home institucional e comercial
  * `/sobre`: História, propósito e perfil da Simone Alves
  * `/solucoes`: Catálogo geral de soluções
  * `/contato`: Formulário e canais diretos
  * `/politica-de-privacidade`: Conformidade LGPD
* **Landing Pages de Serviços Estratégicos:**
  * `/solucoes/recuperacao-de-creditos-tributarios`
  * `/solucoes/planejamento-tributario`
  * `/solucoes/holding-patrimonial-familiar`
  * `/solucoes/inteligencia-tributaria`
  * `/solucoes/estruturacao-societaria`
  * `/solucoes/planejamento-patrimonial`
  * `/contabilidade-empresarial`
* **Páginas de Cidades (SEO Local Noroeste PR e Litoral SC):**
  * `/contabilidade-umuarama-pr`
  * `/contabilidade-campo-mourao-pr`
  * `/contabilidade-goioere-pr`
  * `/contabilidade-douradina-pr`
  * `/contabilidade-itapema-sc`
  * `/areas-de-atendimento`
* **Artigos Educativos (E-E-A-T):**
  * `/conteudos`
  * `/conteudos/quando-migrar-do-simples-para-o-lucro-presumido`
  * `/conteudos/holding-familiar-o-que-considerar-antes-de-constituir`
  * `/conteudos/recuperacao-de-creditos-como-funciona-na-pratica`
  * `/conteudos/indicadores-contabeis-que-a-direcao-precisa-acompanhar`
  * `/conteudos/segregacao-de-atividades-limites-entre-planejamento-e-risco`
  * `/conteudos/pro-labore-e-distribuicao-de-lucros-como-definir`

---

## 6. Procedimento de Build & Deploy

```bash
# Instalar dependências
npm install

# Testar localmente
npm run dev

# Compilar para produção
npm run build

# Deploy contínuo via Git
git add .
git commit -m "feat/fix: descrição da alteração"
git push origin main
```
