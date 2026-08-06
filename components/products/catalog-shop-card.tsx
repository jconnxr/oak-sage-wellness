import { Button } from "@/components/ui/button";
import { CATALOG_COMPOUND_COUNT } from "@/lib/products";
import { shopOnlineUrl } from "@/lib/site";

/** Grid tile that points visitors to the full online compound catalog. */
export function CatalogShopCard() {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card p-5 shadow-sm md:p-6">
      <div className="flex aspect-square flex-col items-center justify-center rounded-lg bg-primary/5 p-6 text-center">
        <p className="font-display text-5xl font-medium tracking-tight text-primary md:text-6xl">
          {CATALOG_COMPOUND_COUNT}
        </p>
        <p className="mt-3 text-sm font-medium tracking-wide text-foreground uppercase">
          Compounds online
        </p>
      </div>

      <h3 className="font-display mt-5 text-xl font-semibold tracking-tight text-foreground">
        Full Online Catalog
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
        Our products include {CATALOG_COMPOUND_COUNT} compounds — research
        peptides and support formulas with third-party certificates of analysis,
        sourced and shipped from the USA.
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {["Batch Documentation", "USA Sourced", "Shop Anytime"].map((label) => (
          <li
            key={label}
            className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
          >
            {label}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5">
        <Button asChild className="min-h-11 w-full">
          <a href={shopOnlineUrl} target="_blank" rel="noopener noreferrer">
            Shop Online →
          </a>
        </Button>
      </div>
    </article>
  );
}
