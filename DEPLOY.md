# Deploy na Vercel — Bandoch Alves

O projeto já está configurado para build na Vercel (SSR via Nitro, preset `vercel` em `vite.config.ts`).

## Passos

1. Suba este repositório para o GitHub.
2. Na Vercel: **Add New → Project → Import** o repositório.
3. Framework Preset: **Other** (a Vercel detecta o output automaticamente).
4. Build Command: `vite build` (ou `bun run build` / `npm run build`).
5. Output Directory: deixe em branco — o build gera `.vercel/output` (Build Output API).
6. Em **Environment Variables**, adicione:
   - `VITE_SITE_URL` = `https://SEU-PROJETO.vercel.app` (ou seu domínio próprio, sem barra no final)
7. Deploy.

## Depois do deploy

- Quando tiver o domínio definitivo, atualize `VITE_SITE_URL` na Vercel e faça redeploy.
  Isso corrige automaticamente: sitemap.xml, robots.txt, canonical, Open Graph e schemas.
- Sitemap: `https://SEU-DOMINIO/sitemap.xml` — envie no Google Search Console.
- Imagem de compartilhamento (WhatsApp/redes): `https://SEU-DOMINIO/og-image.jpg`.

## Imagens

Todas as imagens estão autocontidas em `public/images/` (formato WebP otimizado)
e `public/og-image.jpg` — nada depende de serviços externos.
