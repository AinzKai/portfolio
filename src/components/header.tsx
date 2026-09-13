"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/data";
import { ButtonLink } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Icon } from "@/components/icon";

function NavLinks({
  mobile = false,
  onNavigate,
}: {
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  const linkClass = mobile
    ? "block w-full rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface-secondary"
    : "relative text-sm font-medium text-muted transition-colors hover:text-foreground";

  return (
    <>
      {siteConfig.nav.map((link) => {
        const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              linkClass,
              mobile && isActive && "bg-surface-secondary font-semibold text-accent",
              !mobile && isActive && "text-foreground after:absolute after:bottom-[-21px] after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-accent",
            )}
            onClick={onNavigate}
          >
            {link.label}
          </Link>
        );
      })}
      <div className={cn(mobile ? "pt-2" : "")}>
        <ButtonLink
          href="/contact"
          variant="primary"
          className={mobile ? "w-full" : "shadow-xs"}
          size={mobile ? "lg" : "md"}
          onClick={onNavigate}
        >
          <span>Get in touch</span>
          <Icon name="ArrowRight" className="ml-1.5 h-3.5 w-3.5" />
        </ButtonLink>
      </div>
    </>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:left-4 focus:top-4 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>
      <header
        className={cn(
          "sticky top-0 z-40 w-full border-b transition-all duration-200",
          scrolled
            ? "border-border/80 bg-background/85 backdrop-blur-md shadow-xs"
            : "border-border/40 bg-background/70 backdrop-blur-sm",
        )}
      >
        <div className="mx-auto max-w-[72rem] px-6 md:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-1.5 no-underline transition-opacity hover:opacity-90"
              aria-label="Muhammad Uzair Rizwan Homepage"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10 font-bold text-accent text-sm">
                U
              </span>
              <span className="text-base font-bold text-foreground sm:text-lg">
                Uzair Rizwan
              </span>
              <span className="text-xs font-mono text-muted">.dev</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-7 md:flex" aria-label="Main Navigation">
              <NavLinks />
            </nav>

            {/* Right controls: Theme toggle & Mobile menu button */}
            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <ThemeToggle />
              </div>
              <button
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
                onClick={() => setMobileOpen((open) => !open)}
                className="rounded-lg border border-border/80 p-2 text-foreground transition-colors hover:bg-surface-secondary md:hidden"
              >
                {mobileOpen ? (
                  <Icon name="X" className="h-5 w-5" />
                ) : (
                  <Icon name="Menu" className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div
          id="mobile-navigation"
          aria-hidden={!mobileOpen}
          className={cn(
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out",
            mobileOpen
              ? "max-h-[calc(100vh-4rem)] border-b border-border bg-background/95 backdrop-blur-xl opacity-100"
              : "invisible max-h-0 opacity-0",
          )}
        >
          <nav className="space-y-2 px-6 py-6" aria-label="Mobile Navigation">
            <NavLinks mobile onNavigate={() => setMobileOpen(false)} />
            <div className="flex items-center justify-between pt-4 border-t border-border mt-4">
              <span className="text-sm font-medium text-muted">Appearance</span>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}