import Link from "next/link";

import { ServiceCrossSell } from "@/components/sections/service-cross-sell";
import { shopOnlineUrl } from "@/lib/site";

/** Home-page wrapper around the shared service card grid. */
export function ServiceOfferingsSection() {
  return (
    <ServiceCrossSell
      title="What We Offer"
      description="Four focused pathways to restore vitality, track progress, and feel stronger in your body."
      footer={
        <p className="text-base text-foreground/85">
          Looking to order peptides online instead?{" "}
          <Link
            href={shopOnlineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-4 transition-colors hover:underline"
          >
            Visit our shop →
          </Link>
        </p>
      }
    />
  );
}
