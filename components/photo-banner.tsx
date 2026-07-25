import type { ReactNode } from "react";

import { PlaceholderImage } from "@/components/placeholder-image";
import { Reveal } from "@/components/reveal";
import type { ImageSlot } from "@/lib/images";
import { cn } from "@/lib/utils";

type PhotoBannerProps = {
  image: ImageSlot;
  children: ReactNode;
  className?: string;
  /** Overlay tint for text contrast. */
  overlay?: "charcoal" | "sage";
  as?: "section" | "div" | "blockquote";
};

/**
 * Full-bleed photo banner with brand overlay and centered text content.
 */
export function PhotoBanner({
  image,
  children,
  className,
  overlay = "charcoal",
  as: Comp = "section",
}: PhotoBannerProps) {
  return (
    <Comp
      className={cn(
        "relative isolate flex min-h-[min(52vh,28rem)] items-center justify-center overflow-hidden px-6 py-20 md:min-h-[min(48vh,26rem)] md:py-24",
        className,
      )}
    >
      <PlaceholderImage
        slot={image}
        fill
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 -z-10",
          overlay === "sage"
            ? "bg-gradient-to-b from-sage/75 via-sage/70 to-charcoal/55"
            : "bg-gradient-to-b from-charcoal/70 via-charcoal/65 to-charcoal/75",
        )}
      />
      <Reveal className="relative z-10 mx-auto w-full max-w-3xl text-center text-cream">
        {children}
      </Reveal>
    </Comp>
  );
}
