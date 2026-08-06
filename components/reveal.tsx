"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
} & Omit<HTMLMotionProps<"div">, "children" | "className">;

/**
 * Fade/slide-in on enter. Uses Framer Motion whileInView so visibility
 * tracks the viewport reliably (including with Lenis smooth scroll).
 *
 * Resting / pre-animate opacity stays ≥ 0.92 so copy remains readable
 * even before the animation fires (and with prefers-reduced-motion).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  ...props
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0.92, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0, margin: "200px 0px 200px 0px" }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
