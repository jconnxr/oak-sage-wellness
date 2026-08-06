"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

import { PlaceholderImage } from "@/components/placeholder-image";
import type { FeaturedProduct } from "@/lib/products";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: FeaturedProduct;
};

export function ProductCard({ product }: ProductCardProps) {
  const baseId = useId();
  const [open, setOpen] = useState(false);
  const panelId = `${baseId}-panel`;
  const buttonId = `${baseId}-button`;

  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card p-5 shadow-sm md:p-6">
      <div className="flex aspect-square items-center justify-center rounded-lg bg-muted/40 p-6">
        <PlaceholderImage
          slot={product.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="aspect-square max-h-full w-full object-contain"
        />
      </div>

      <h3 className="font-display mt-5 text-xl font-semibold tracking-tight text-foreground">
        {product.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
        {product.teaser}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {product.benefits.map((benefit) => (
          <li
            key={benefit}
            className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
          >
            {benefit}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-4">
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
          onClick={() => setOpen((value) => !value)}
        >
          Learn more
          <ChevronDown
            className={cn(
              "size-4 transition-transform",
              open && "rotate-180",
            )}
            aria-hidden
          />
        </button>

        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          hidden={!open}
          className="mt-3 border-t border-border pt-3"
        >
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {product.description}
          </p>
        </div>
      </div>
    </article>
  );
}
