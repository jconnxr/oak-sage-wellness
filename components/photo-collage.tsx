import { PlaceholderImage } from "@/components/placeholder-image";
import type { ImageSlot } from "@/lib/images";
import { cn } from "@/lib/utils";

type PhotoCollageProps = {
  primary: ImageSlot;
  secondary: ImageSlot;
  className?: string;
  /** Prioritize the primary image for LCP when above the fold. */
  priority?: boolean;
  /** Which corner the smaller photo overlaps. */
  overlap?: "bottom-right" | "bottom-left";
};

/**
 * Decorative collage: soft organic blob behind two offset overlapping photos.
 */
export function PhotoCollage({
  primary,
  secondary,
  className,
  priority = false,
  overlap = "bottom-right",
}: PhotoCollageProps) {
  const isLeft = overlap === "bottom-left";

  return (
    <div className={cn("relative mx-auto w-full max-w-xl", className)}>
      {/* Soft organic blob */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -z-10 rounded-[42%_58%_55%_45%/48%_42%_58%_52%] bg-sage/25",
          "h-[78%] w-[82%] blur-[1px]",
          isLeft ? "-top-4 -left-6 md:-left-10" : "-top-4 -right-6 md:-right-10",
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -z-10 rounded-[55%_45%_48%_52%/42%_58%_42%_58%] bg-oak/20",
          "h-[55%] w-[60%]",
          isLeft
            ? "right-0 bottom-8 md:-right-4"
            : "bottom-8 left-0 md:-left-4",
        )}
      />

      {/* Primary (larger) photo */}
      <div className="relative overflow-hidden rounded-2xl shadow-sm">
        <PlaceholderImage
          slot={primary}
          priority={priority}
          className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
        />
      </div>

      {/* Secondary (smaller) overlapping photo */}
      <div
        className={cn(
          "absolute z-10 w-[48%] max-w-[220px] rounded-xl border-4 border-cream bg-cream shadow-lg sm:w-[42%] sm:max-w-[260px]",
          "bottom-[-4%] sm:bottom-[-6%]",
          isLeft
            ? "left-[-2%] sm:left-[-6%]"
            : "right-[-2%] sm:right-[-6%]",
        )}
      >
        <PlaceholderImage
          slot={secondary}
          className="aspect-square w-full rounded-lg object-cover"
        />
      </div>

      {/* Spacer so overlapping secondary doesn't collide with following content on mobile */}
      <div className="h-10 sm:h-14" aria-hidden />
    </div>
  );
}
