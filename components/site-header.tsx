"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SiteLogo } from "@/components/site-logo";
import { mainNavLinks, serviceLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isServicesActive(pathname: string) {
  return pathname.startsWith("/services");
}

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-6 lg:h-[4.5rem]">
        <SiteLogo
          height={44}
          priority
          onNavigate={() => setMobileOpen(false)}
        />

        <nav
          className="ml-auto hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          <NavLink href="/" label="Home" active={isActive(pathname, "/")} />
          <NavLink
            href="/about"
            label="About Us"
            active={isActive(pathname, "/about")}
          />

          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "inline-flex h-9 items-center gap-1 rounded-lg px-3 text-sm font-medium outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50",
                isServicesActive(pathname)
                  ? "text-primary"
                  : "text-foreground/80",
              )}
            >
              Services
              <ChevronDown className="size-3.5 opacity-70" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-52">
              {serviceLinks.map((link) => (
                <DropdownMenuItem
                  key={link.href}
                  onSelect={() => {
                    router.push(link.href);
                  }}
                >
                  {link.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink
            href="/products"
            label="Products"
            active={isActive(pathname, "/products")}
          />
          <NavLink
            href="/contact"
            label="Contact Us"
            active={isActive(pathname, "/contact")}
          />
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <Button asChild size="lg" className="hidden px-4 sm:inline-flex">
            <Link href="/contact">Book Appointment</Link>
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-cream px-6 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {mainNavLinks.slice(0, 2).map((link) => (
              <MobileLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={isActive(pathname, link.href)}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}

            <p className="mt-2 px-3 text-xs font-medium tracking-wider text-muted-foreground uppercase">
              Services
            </p>
            {serviceLinks.map((link) => (
              <MobileLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={isActive(pathname, link.href)}
                onNavigate={() => setMobileOpen(false)}
                indented
              />
            ))}

            {mainNavLinks.slice(2).map((link) => (
              <MobileLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={isActive(pathname, link.href)}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}

            <Button asChild className="mt-3 w-full sm:hidden">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Book Appointment
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-9 items-center rounded-lg px-3 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
        active ? "text-primary" : "text-foreground/80",
      )}
    >
      {label}
    </Link>
  );
}

function MobileLink({
  href,
  label,
  active,
  onNavigate,
  indented,
}: {
  href: string;
  label: string;
  active: boolean;
  onNavigate: () => void;
  indented?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted",
        indented && "pl-5",
        active ? "text-primary" : "text-foreground",
      )}
    >
      {label}
    </Link>
  );
}
