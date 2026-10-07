import { useState } from "react";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span className="font-serif text-lg leading-snug">{item.q}</span>
                <span
                  className={`mt-1 shrink-0 text-wine transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </span>
              </button>
            </h3>
            {isOpen && (
              <p className="max-w-3xl pb-7 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
