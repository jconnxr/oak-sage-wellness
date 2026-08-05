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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05, margin: "120px 0px 120px 0px" }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
