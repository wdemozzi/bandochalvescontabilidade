import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { Container, toPath } from "@/components/ui/primitives";
import { cities, site, solutions } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-offwhite">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr]">
          <div>
            <Logo variant="dark" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-offwhite/65">
              Contabilidade consultiva, planejamento tributário e organização patrimonial para
              empresas e famílias empresárias.
            </p>
            <dl className="mt-6 space-y-1 text-xs text-offwhite/55">
              <div>
                <dt className="inline">Responsável técnica: </dt>
                <dd className="inline">
                  {site.responsible} — {site.crcResponsible}
                </dd>
              </div>
              <div>
                <dt className="inline">Registro do escritório: </dt>
                <dd className="inline">{site.crcOffice}</dd>
              </div>
              <div>
                <dt className="inline">CNPJ: </dt>
                <dd className="inline">{site.cnpj}</dd>
              </div>
            </dl>
          </div>

          <nav aria-label="Soluções">
            <h2 className="eyebrow text-champagne">Soluções</h2>
            <ul className="mt-5 space-y-3 text-sm text-offwhite/70">
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link to={toPath(s.path)} className="transition-colors hover:text-champagne">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contabilidade-empresarial" className="transition-colors hover:text-champagne">
                  Contabilidade Empresarial
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Atendimento">
            <h2 className="eyebrow text-champagne">Onde atendemos</h2>
            <ul className="mt-5 space-y-3 text-sm text-offwhite/70">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link to={toPath(c.path)} className="transition-colors hover:text-champagne">
                    Contabilidade em {c.city} – {c.state}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/areas-de-atendimento" className="transition-colors hover:text-champagne">
                  Atendimento nacional
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-champagne">Contato</h2>
            <ul className="mt-5 space-y-3 text-sm text-offwhite/70">
              <li>
                <a href={site.phoneHref} className="hover:text-champagne">
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${site.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-champagne"
                >
                  WhatsApp {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="break-words hover:text-champagne">
                  {site.email}
                </a>
              </li>
              <li className="pt-2 leading-relaxed">{site.address.full}</li>
              <li className="leading-relaxed">{site.hours}</li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-champagne"
                >
                  Instagram {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-offwhite/10 pt-6 text-xs text-offwhite/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/politica-de-privacidade" className="hover:text-champagne">
              Política de Privacidade (LGPD)
            </Link>
            <a
              href="https://wa.me/5544997357463"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-champagne"
            >
              Desenvolvido por WD Web Studio
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
