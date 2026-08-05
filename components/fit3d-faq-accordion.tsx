"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

import { cn } from "@/lib/utils";

type FaqItem = {
  question: string;
  answer: string;
};

type Fit3dFaqAccordionProps = {
  items: readonly FaqItem[];
};

export function Fit3dFaqAccordion({ items }: Fit3dFaqAccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-xl border border-border bg-card">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-foreground transition-colors hover:bg-muted/50 md:px-6 md:py-5"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={cn(
                    "size-4 shrink-0 text-muted-foreground transition-transform",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 md:px-6"
            >
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
