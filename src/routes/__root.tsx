import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { MobileContactBar } from "@/components/layout/MobileContactBar";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { ButtonLink, Container, Eyebrow } from "@/components/ui/primitives";
import { organizationSchema } from "@/lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center bg-beige">
      <Container className="py-20">
        <div className="max-w-2xl">
          <Eyebrow>Erro 404</Eyebrow>
          <h1 className="mt-5 text-4xl leading-tight sm:text-5xl">
            Esta página não foi encontrada
          </h1>
          <p className="mt-5 text-base leading-relaxed text-graphite/75">
            O endereço acessado não existe ou foi movido. Você pode voltar à página inicial,
            conhecer nossas soluções ou falar diretamente com o escritório.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink to="/">Página inicial</ButtonLink>
            <ButtonLink to="/solucoes" variant="outline">
              Ver soluções
            </ButtonLink>
            <ButtonLink to="/contato" variant="outline">
              Falar com o escritório
            </ButtonLink>
          </div>
          <p className="mt-10 text-sm text-graphite/60">
            Prefere navegar? <Link to="/conteudos" className="text-wine underline underline-offset-4">Central de conteúdos</Link>
          </p>
        </div>
      </Container>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado do nosso lado. Você pode tentar novamente ou voltar ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Ir para o início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#5E141C" },
      { name: "author", content: "Bandoch Alves Escritório Contábil" },
      { property: "og:site_name", content: "Bandoch Alves Escritório Contábil" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      
      /* OpenGraph & Compartilhamento WhatsApp */
      { property: "og:image", content: "https://www.bandochalvescontabilidade.com.br/og-image.jpg" },
      { property: "og:image:secure_url", content: "https://www.bandochalvescontabilidade.com.br/og-image.jpg" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Bandoch Alves Escritório Contábil em Umuarama – PR" },
      { name: "twitter:image", content: "https://www.bandochalvescontabilidade.com.br/og-image.jpg" },

      /* Georreferenciamento Local SEO (Umuarama - Noroeste do PR) */
      { name: "geo.region", content: "BR-PR" },
      { name: "geo.placename", content: "Umuarama, Paraná, Brasil" },
      { name: "geo.position", content: "-23.7661;-53.3206" },
      { name: "ICBM", content: "-23.7661, -53.3206" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Karla:wght@300;400;500;600&display=swap",
      },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48x48.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon-192x192.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema),
      },
      /* Google Analytics (GA4) - Base Tag */
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-B7Y0278Q9X",
        async: true,
      },
      {
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B7Y0278Q9X');
        `,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 pb-[4.25rem] lg:pb-0">
          {/* Required: nested routes render here. */}
          <Outlet />
        </main>
        <SiteFooter />
        <WhatsAppFloat />
        <MobileContactBar />
        <CookieConsent />
      </div>
    </QueryClientProvider>
  );
}
