import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export function CarouselRow({
  children,
  label,
  itemClassName = "basis-[85%] sm:basis-[48%] lg:basis-[32%]",
}: {
  children: ReactNode[];
  label: string;
  itemClassName?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        role="region"
        aria-label={label}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children.map((child, i) => (
          <div key={i} className={`shrink-0 snap-start ${itemClassName}`}>
            {child}
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center gap-2">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          disabled={atStart}
          aria-label="Anterior"
          className="flex h-10 w-10 items-center justify-center border border-border text-graphite transition-colors hover:border-wine hover:text-wine disabled:opacity-30 disabled:hover:border-border disabled:hover:text-graphite"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          disabled={atEnd}
          aria-label="Próximo"
          className="flex h-10 w-10 items-center justify-center border border-border text-graphite transition-colors hover:border-wine hover:text-wine disabled:opacity-30 disabled:hover:border-border disabled:hover:text-graphite"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
