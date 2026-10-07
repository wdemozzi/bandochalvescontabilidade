import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const KEY = "ba-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY);
      if (v !== "accepted" && sessionStorage.getItem(KEY) !== "declined") setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const accept = () => {
    try { localStorage.setItem(KEY, "accepted"); } catch {}
    setVisible(false);
  };
  const decline = () => {
    try { sessionStorage.setItem(KEY, "declined"); } catch {}
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-[5rem] z-[60] mx-auto max-w-3xl animate-in slide-in-from-bottom-8 fade-in duration-700 lg:bottom-6"
    >
      <div className="flex flex-col gap-4 rounded-2xl border border-champagne/30 bg-ink/80 p-5 text-offwhite shadow-2xl backdrop-blur-md sm:flex-row sm:items-center sm:gap-6">
        <p className="text-sm leading-relaxed text-offwhite/85">
          Nós utilizamos cookies essenciais e tecnologias semelhantes para garantir o funcionamento do site e melhorar sua experiência, de acordo com a nossa{" "}
          <Link to="/politica-de-privacidade" className="text-champagne underline underline-offset-4 hover:text-offwhite">
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex shrink-0 items-center gap-4">
          <button
            onClick={decline}
            className="text-xs text-offwhite/60 underline underline-offset-4 hover:text-offwhite"
          >
            Recusar
          </button>
          <button
            onClick={accept}
            className="rounded-full bg-wine px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-offwhite transition-colors hover:bg-wine-soft"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
