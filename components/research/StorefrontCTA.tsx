"use client";

import { RESEARCH_STOREFRONT_URL } from "@/lib/research";
import { cn } from "@/lib/utils";

import { trackResearchPixel } from "./meta-pixel";

type StorefrontCTAProps = {
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function StorefrontCTA({
  label,
  variant = "primary",
  className,
}: StorefrontCTAProps) {
  return (
    <a
      href={RESEARCH_STOREFRONT_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackResearchPixel("CatalogClick")}
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-md px-6 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
        variant === "primary" &&
          "bg-sky-400 text-neutral-950 hover:bg-sky-300",
        variant === "secondary" &&
          "border border-neutral-600 bg-transparent text-neutral-100 hover:border-sky-400/60 hover:text-sky-300",
        className,
      )}
    >
      {label}
    </a>
  );
}
