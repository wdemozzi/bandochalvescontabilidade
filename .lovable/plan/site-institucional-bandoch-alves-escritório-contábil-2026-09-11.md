# Site institucional Bandoch Alves — Escritório Contábil

Site premium, editorial e minimalista, em português, com todas as páginas pedidas, dados reais e SEO completo.

## Identidade visual

- Paleta: vinho/bordô profundo (institucional), grafite, preto suave, off-white, bege suave, toques discretos de champagne. Sem dourado excessivo, sem gradientes chamativos, sem ícones clichê de contabilidade.
- Tipografia: serifada editorial nos títulos, sans-serif refinada no corpo e navegação.
- Logotipo "BA" + "BANDOCH ALVES / ESCRITÓRIO CONTÁBIL" redesenhado em vetor a partir do PDF enviado, em versões para fundo claro, fundo escuro, rodapé e favicon.

## Páginas

- Home: hero dividido, soluções principais, seção de posicionamento "Uma atuação que começa onde a contabilidade tradicional termina", sobre institucional, como trabalhamos em 6 etapas numeradas, segmentos, área de atendimento, FAQ interativa, central de conteúdos, formulário e CTA final em vinho.
- /sobre, /solucoes e as 6 páginas de solução (recuperação de créditos tributários, planejamento tributário, holding patrimonial familiar, inteligência tributária, estruturação societária, planejamento patrimonial).
- /contabilidade-empresarial, /segmentos, /areas-de-atendimento.
- Páginas locais: Umuarama-PR, Campo Mourão-PR, Goioerê-PR, Douradina-PR, Itapema-SC.
- /conteudos com artigos e categorias, /contato com formulário, mapa e dados completos, /politica-de-privacidade (LGPD) e página 404 personalizada.

## Elementos globais

- Cabeçalho fixo elegante com menu de soluções, rodapé institucional completo.
- Botão flutuante discreto de WhatsApp, com mensagem personalizada por serviço/página.
- Todos os dados institucionais exatamente como informados (CRCs, CNPJ, telefone, WhatsApp, e-mail, endereço, horário, Instagram).

## Detalhes técnicos

- O projeto usa TanStack Start com rotas por arquivo (não React Router); cada rota vira um arquivo em `src/routes/`, com deep links e refresh funcionando sem `vercel.json`. Exportação para GitHub continua possível.
- Meta tags exclusivas por rota (title, description, canonical, Open Graph, Twitter Cards) via `head()`.
- Schema.org JSON-LD: AccountingService/ProfessionalService/LocalBusiness com áreas atendidas e `sameAs` do Instagram.
- `robots.txt` atualizado; `sitemap.xml` gerado a partir das rotas.
- Tokens de cor e tipografia definidos em `src/styles.css`; componentes reutilizáveis (hero, cards de solução, etapas, FAQ, CTA) para manter o código modular.
- Mobile-first, verificado de 375px a 1440px, sem bibliotecas pesadas.
- O formulário de contato será visual e validado, sem envio real por enquanto (isso exige backend). Posso ativar o envio depois.
