import { PlaceholderImage } from "@/components/placeholder-image";
import { siteContact } from "@/lib/site";

export default function FreeScanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-full flex-col bg-background">
      <header className="border-b border-border/80 bg-cream/90">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-center px-6 sm:justify-start">
          {/* Logo only — no link to the main site (keeps focus on booking). */}
          <PlaceholderImage
            slot="logo"
            width={77}
            height={44}
            priority
            className="h-11 w-auto"
          />
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-[color-mix(in_oklch,var(--sage),var(--cream)_90%)]">
        <div className="mx-auto flex max-w-3xl flex-col gap-3 px-6 py-8 text-center text-sm text-muted-foreground sm:text-left">
          <p>
            {siteContact.addressLines.join(", ")}
          </p>
          <p>
            <a
              href={`tel:${siteContact.phones[0].replace(/\D/g, "")}`}
              className="transition-colors hover:text-primary"
            >
              {siteContact.phones[0]}
            </a>
          </p>
          <p>{siteContact.hours.join(" · ")}</p>
        </div>
      </footer>
    </div>
  );
}
