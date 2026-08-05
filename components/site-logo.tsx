import Link from "next/link";

import { PlaceholderImage } from "@/components/placeholder-image";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  /** Image height in CSS pixels; width scales from the logo aspect ratio. */
  height?: number;
  priority?: boolean;
  onNavigate?: () => void;
};

export function SiteLogo({
  className,
  height = 48,
  priority = false,
  onNavigate,
}: SiteLogoProps) {
  const width = Math.round((height * 703) / 451);

  return (
    <Link
      href="/"
      onClick={onNavigate}
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label="Oak and Sage Wellness Center — Home"
    >
      <PlaceholderImage
        slot="logo"
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-auto"
      />
    </Link>
  );
}
