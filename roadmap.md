# Roadmap

## Concluído
- Site institucional completo (todas as rotas, SEO, schemas, conteúdos, cidades)
- Seção Instagram com 5 Reels reais e galeria responsiva
- Nova primeira tela comercial (foto, especialidades, prova de confiança, CTAs WhatsApp)
- Rodapé "Desenvolvido por WD Web Studio" com link WhatsApp
- Preparação para deploy Vercel:
  - Imagens autocontidas e otimizadas em public/images (WebP, 2,2 MB → 278 KB)
  - Imagem de compartilhamento social (public/og-image.jpg)
  - Domínio configurável via VITE_SITE_URL (sitemap, robots, canonical, OG e schemas absolutos)
  - sitemap.xml e robots.txt gerados dinamicamente
  - Build com preset Vercel (SSR) em vite.config.ts
  - Instruções em DEPLOY.md

## Aberto
- Definir VITE_SITE_URL na Vercel após o primeiro deploy (bloqueio: domínio/URL final ainda não existe)
