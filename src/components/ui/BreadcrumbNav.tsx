import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "@/components/ui/primitives";
import { breadcrumbSchema } from "@/lib/seo";

export interface BreadcrumbItemData {
  label: string;
  href?: string;
}

export function BreadcrumbNav({ items }: { items: BreadcrumbItemData[] }) {
  const allItems = [{ label: "Início", href: "/" }, ...items];

  const schemaItems = allItems.map((item) => ({
    name: item.label,
    path: item.href || "/",
  }));

  return (
    <>
      <JsonLd data={breadcrumbSchema(schemaItems)} />
      <nav aria-label="Navegação estrutural (Breadcrumb)" className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
        <Link
          to="/"
          className="inline-flex items-center gap-1 transition-colors hover:text-wine focus-visible:outline-none"
        >
          <Home className="h-3.5 w-3.5 text-wine/80" />
          <span className="sr-only">Página Inicial</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <div key={item.label + index} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3 text-border" aria-hidden="true" />
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="transition-colors hover:text-wine font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-graphite" aria-current="page">
                  {item.label}
                </span>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}
