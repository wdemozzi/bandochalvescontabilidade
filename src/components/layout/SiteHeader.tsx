import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Container, toPath } from "@/components/ui/primitives";
import { site, solutions, whatsappLink, whatsappMessageForPath } from "@/lib/site";

const nav = [
  { label: "Sobre", to: "/sobre" },
  { label: "Soluções", to: "/solucoes" },
  { label: "Segmentos", to: "/segmentos" },
  { label: "Conteúdos", to: "/conteudos" },
  { label: "Contato", to: "/contato" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <Container className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4">
        <Link to="/" aria-label="Bandoch Alves — Escritório Contábil" className="min-w-0">
          <Logo compact />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) =>
            item.to === "/solucoes" ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <Link
                  to={toPath(item.to)}
                  className="text-[0.8rem] tracking-wide text-foreground/75 transition-colors hover:text-wine"
                  activeProps={{ className: "text-wine" }}
                >
                  {item.label}
                </Link>
                {solutionsOpen && (
                  <div className="absolute top-full left-1/2 w-80 -translate-x-1/2 pt-4">
                    <ul className="border border-border bg-card p-2 shadow-lg">
                      {solutions.map((s) => (
                        <li key={s.slug}>
                          <Link
                            to={toPath(s.path)}
                            className="block px-4 py-3 text-[0.82rem] text-foreground/80 transition-colors hover:bg-beige hover:text-wine"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.to}
                to={toPath(item.to)}
                className="text-[0.8rem] tracking-wide text-foreground/75 transition-colors hover:text-wine"
                activeProps={{ className: "text-wine" }}
              >
                {item.label}
              </Link>
            ),
          )}
          <a
            href={whatsappLink("Olá, conheci a Bandoch Alves pelo site e gostaria de falar com uma especialista.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-wine px-4 py-2.5 text-[0.7rem] font-semibold tracking-[0.1em] text-offwhite uppercase transition-colors hover:bg-wine-deep"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
            Fale com uma especialista
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Abrir menu"
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] border border-border lg:hidden"
        >
          <span className="block h-px w-5 bg-foreground" />
          <span className="block h-px w-5 bg-foreground" />
          <span className="block h-px w-5 bg-foreground" />
        </button>
      </Container>

      {open && (
        <div className="border-t border-border bg-card lg:hidden">
          <Container className="py-4">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={toPath(item.to)} className="block border-b border-border/60 py-3 text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={toPath(s.path)}
                    className="block border-b border-border/40 py-2.5 pl-4 text-[0.8rem] text-muted-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 border border-border bg-background px-3 py-3 text-center text-[0.72rem] font-semibold tracking-[0.08em] text-foreground uppercase transition-colors active:bg-beige"
              >
                <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                Ligar
              </a>
              <a
                href={whatsappLink(whatsappMessageForPath(pathname))}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-wine px-3 py-3 text-center text-[0.72rem] font-semibold tracking-[0.08em] text-offwhite uppercase transition-colors active:bg-wine-deep"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current" aria-hidden="true">
                  <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02zM12.05 20.1h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.21-8.23 8.21zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.06s.89 2.39 1.01 2.56c.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
