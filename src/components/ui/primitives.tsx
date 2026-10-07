import { Link, type LinkProps } from "@tanstack/react-router";
import type { ReactNode } from "react";

/** Narrow a data-driven path string to the router's link type. */
export function toPath(path: string) {
  return path as NonNullable<LinkProps["to"]>;
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "beige" | "dark" | "wine" | "white";
}) {
  const tones: Record<string, string> = {
    default: "bg-background text-foreground",
    white: "bg-card text-foreground",
    beige: "bg-beige text-graphite",
    dark: "bg-ink text-offwhite",
    wine: "bg-wine text-offwhite",
  };
  return (
    <section id={id} className={`${tones[tone]} py-16 sm:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "wine",
}: {
  children: ReactNode;
  tone?: "wine" | "champagne" | "muted";
}) {
  const tones = {
    wine: "text-wine",
    champagne: "text-champagne",
    muted: "text-muted-foreground",
  } as const;
  return <p className={`eyebrow ${tones[tone]}`}>{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "wine",
  as = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "wine" | "champagne" | "muted";
  as?: "h1" | "h2";
}) {
  const Tag = as;
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <Tag className="mt-4 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem]">{title}</Tag>
      {intro && (
        <div className="mt-5 space-y-4 text-base leading-relaxed opacity-80">
          {typeof intro === "string" ? <p>{intro}</p> : intro}
        </div>
      )}
    </div>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-xs px-6 py-3 text-[0.8rem] font-semibold tracking-[0.12em] uppercase transition-colors duration-200";

const buttonVariants = {
  primary: "bg-wine text-offwhite hover:bg-wine-deep",
  outline: "border border-current/30 text-current hover:border-current/70",
  light: "bg-offwhite text-wine hover:bg-champagne hover:text-ink",
  ghost: "text-current underline-offset-4 hover:underline px-0",
} as const;

type Variant = keyof typeof buttonVariants;

export function ButtonLink({
  to,
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const cls = `${buttonBase} ${buttonVariants[variant]} ${className}`;
  if (to) {
    return (
      <Link to={toPath(to)} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={cls}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
