import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  as?: "section" | "div";
};

export function Section({
  children,
  className,
  containerClassName,
  id,
  as: Comp = "section",
}: SectionProps) {
  return (
    <Comp id={id} className={cn("w-full px-6 py-16 md:py-24", className)}>
      <div className={cn("mx-auto w-full max-w-6xl", containerClassName)}>
        {children}
      </div>
    </Comp>
  );
}
