import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Instagram, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Container, toPath } from "@/components/ui/primitives";
import { cities, site, solutions } from "@/lib/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02zM12.05 20.1h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.21-8.23 8.21zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.06s.89 2.39 1.01 2.56c.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-champagne/15 bg-ink text-offwhite relative">
      <Container className="pt-16 pb-12 lg:pt-20 lg:pb-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr] lg:gap-10">
          
          {/* Coluna 1: Identidade e Dados Oficiais */}
          <div>
            <Logo variant="dark" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-offwhite/70">
              Contabilidade consultiva, planejamento tributário e organização patrimonial para
              empresas e famílias empresárias com rigor técnico e proximidade.
            </p>

            <div className="mt-6 rounded-xl border border-offwhite/10 bg-offwhite/[0.03] p-4 text-xs text-offwhite/60 space-y-1.5">
              <div>
                <span className="text-champagne/80 font-medium">Responsável Técnica: </span>
                <span className="text-offwhite/85">{site.responsible} — {site.crcResponsible}</span>
              </div>
              <div>
                <span className="text-champagne/80 font-medium">Registro CRC: </span>
                <span className="text-offwhite/85">{site.crcOffice}</span>
              </div>
              <div>
                <span className="text-champagne/80 font-medium">CNPJ: </span>
                <span className="text-offwhite/85">{site.cnpj}</span>
              </div>
            </div>
          </div>

          {/* Coluna 2: Soluções */}
          <nav aria-label="Soluções Contábeis">
            <h2 className="eyebrow text-champagne tracking-wider">Soluções</h2>
            <ul className="mt-5 space-y-2.5 text-sm text-offwhite/75">
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={toPath(s.path)}
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-champagne"
                  >
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contabilidade-empresarial"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-champagne"
                >
                  <span>Contabilidade Empresarial</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Coluna 3: Onde Atendemos (Cidades limpas sem repetição de texto) */}
          <nav aria-label="Áreas de Atendimento">
            <h2 className="eyebrow text-champagne tracking-wider">Onde Atendemos</h2>
            <ul className="mt-5 space-y-2.5 text-sm text-offwhite/75">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={toPath(c.path)}
                    title={`Contabilidade em ${c.city} – ${c.state}`}
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-champagne"
                  >
                    <span>{c.city} – {c.state}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/areas-de-atendimento"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-champagne hover:underline underline-offset-4"
                >
                  <span>Atendimento Nacional</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Coluna 4: Contato & Localização com Ícones */}
          <div>
            <h2 className="eyebrow text-champagne tracking-wider">Canais de Atendimento</h2>
            <ul className="mt-5 space-y-3.5 text-sm text-offwhite/80">
              <li>
                <a
                  href={`https://wa.me/${site.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-offwhite hover:text-champagne transition-colors font-medium"
                >
                  <WhatsAppIcon className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp {site.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2.5 hover:text-champagne transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-champagne/80 shrink-0" />
                  <span>{site.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 break-all hover:text-champagne transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-champagne/80 shrink-0" />
                  <span>{site.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1 text-xs text-offwhite/70 leading-relaxed">
                <MapPin className="h-4 w-4 text-champagne/80 shrink-0 mt-0.5" />
                <span>{site.address.full}</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-offwhite/70 leading-relaxed">
                <Clock className="h-3.5 w-3.5 text-champagne/80 shrink-0 mt-0.5" />
                <span>{site.hours}</span>
              </li>
              <li className="pt-1">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-offwhite/70 hover:text-champagne transition-colors"
                >
                  <Instagram className="h-3.5 w-3.5 text-champagne/80 shrink-0" />
                  <span>Instagram {site.instagramHandle}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-rodapé refinado com margem de segurança para o botão flutuante */}
        <div className="mt-14 pt-8 border-t border-offwhite/10 flex flex-col gap-4 text-xs text-offwhite/50 sm:flex-row sm:items-center sm:justify-between lg:pr-24">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link to="/politica-de-privacidade" className="hover:text-champagne transition-colors">
              Política de Privacidade (LGPD)
            </Link>
            <span className="text-offwhite/20 hidden sm:inline" aria-hidden="true">•</span>
            <Link to="/termos-de-uso" className="hover:text-champagne transition-colors">
              Termos de Uso
            </Link>
            <span className="text-offwhite/20 hidden sm:inline" aria-hidden="true">•</span>
            <a
              href="https://wa.me/5544997357463"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-champagne transition-colors text-offwhite/60"
            >
              Desenvolvido por WD Web Studio
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
