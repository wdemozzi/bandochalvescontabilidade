import { BA_MARK_PATH, BA_MARK_VIEWBOX } from "./ba-mark";

export function BAMark({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox={BA_MARK_VIEWBOX}
      className={className}
      fill="currentColor"
      role="img"
      aria-label="Monograma BA — Bandoch Alves"
    >
      <g transform="translate(0,700) scale(0.1,-0.1)">
        <path d={BA_MARK_PATH} />
      </g>
    </svg>
  );
}

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  showWordmark?: boolean;
  compact?: boolean;
};

/**
 * Lockup completo do logotipo: monograma BA + tipografia
 * BANDOCH ALVES / ESCRITÓRIO CONTÁBIL.
 * variant="light"  -> uso sobre fundos claros
 * variant="dark"   -> uso sobre fundos escuros (header escuro / rodapé)
 */
export function Logo({
  variant = "light",
  className = "",
  showWordmark = true,
  compact = false,
}: LogoProps) {
  const markColor = variant === "dark" ? "text-[oklch(0.55_0.15_21)]" : "text-wine";
  const nameColor = variant === "dark" ? "text-offwhite" : "text-graphite";
  const subColor = variant === "dark" ? "text-champagne" : "text-muted-foreground";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <BAMark className={`${compact ? "h-7" : "h-9"} w-auto shrink-0 ${markColor}`} />
      {showWordmark && (
        <span className="flex min-w-0 flex-col justify-center leading-none">
          <span
            className={`font-serif ${compact ? "text-[0.95rem]" : "text-[1.05rem]"} tracking-[0.18em] ${nameColor}`}
          >
            BANDOCH ALVES
          </span>
          <span className={`mt-1 text-[0.5rem] tracking-[0.34em] ${subColor}`}>
            ESCRITÓRIO CONTÁBIL
          </span>
        </span>
      )}
    </span>
  );
}
