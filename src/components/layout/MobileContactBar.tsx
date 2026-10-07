import { Phone } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { site, whatsappLink, whatsappMessageForPath } from "@/lib/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02zM12.05 20.1h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.21-8.23 8.21zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.06s.89 2.39 1.01 2.56c.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29z"
      />
    </svg>
  );
}

export function MobileContactBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
      <div className="grid grid-cols-2 border-t border-champagne/30 bg-background/98 shadow-[0_-6px_24px_-8px_rgba(30,10,12,0.12)] backdrop-blur supports-[padding:max(0px)]:pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href={site.phoneHref}
          className="flex min-h-[3.75rem] items-center justify-center gap-2.5 bg-offwhite px-4 py-3.5 text-graphite transition-colors active:bg-beige"
        >
          <Phone className="h-[1.125rem] w-[1.125rem] shrink-0" strokeWidth={1.75} />
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase">Ligar</span>
        </a>
        <a
          href={whatsappLink(whatsappMessageForPath(pathname))}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Falar com a ${site.name} no WhatsApp`}
          className="flex min-h-[3.75rem] items-center justify-center gap-2.5 bg-wine px-4 py-3.5 text-offwhite transition-colors active:bg-wine-deep"
        >
          <WhatsAppIcon className="h-[1.125rem] w-[1.125rem] shrink-0" />
          <span className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
