import { Container } from "@/components/container";
import { socialIcons } from "@/components/social-icons";
import Link from "next/link";
import { siteConfig, contactInfo } from "@/lib/data";
import { Icon } from "@/components/icon";

export function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { label: "GitHub Profile", href: siteConfig.social.github, icon: "github" as const },
    { label: "LinkedIn Profile", href: siteConfig.social.linkedin, icon: "linkedin" as const },
    { label: "X / Twitter", href: siteConfig.social.twitter, icon: "twitter" as const },
  ];

  return (
    <footer className="border-t border-border bg-surface/80">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_auto] md:gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-1.5 no-underline"
              aria-label="Muhammad Uzair Rizwan Homepage"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10 font-bold text-accent text-sm">
                U
              </span>
              <span className="text-lg font-bold text-foreground">
                Uzair Rizwan
              </span>
              <span className="text-xs font-mono text-muted">.dev</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              {siteConfig.position}
            </p>
            <div>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover hover:underline"
              >
                <Icon name="Mail" className="h-4 w-4" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h2>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>
                <Link href="/work" className="transition-colors hover:text-foreground">
                  Case Studies & Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-foreground">
                  Services & Capabilities
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="transition-colors hover:text-foreground">
                  Pricing & Add-ons
                </Link>
              </li>
              <li>
                <Link href="/process" className="transition-colors hover:text-foreground">
                  5-Step Process
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-foreground">
                  About & Background
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-foreground">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions / Offerings */}
          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">
              Specialized Solutions
            </h2>
            <ul className="space-y-2.5 text-sm text-muted">
              <li>
                <Link href="/work/nosh" className="transition-colors hover:text-foreground">
                  Restaurant Ordering (NOSH)
                </Link>
              </li>
              <li>
                <Link href="/work/sh-salon" className="transition-colors hover:text-foreground">
                  Salon Booking (SH Salon)
                </Link>
              </li>
              <li>
                <Link href="/work/rmc-texas" className="transition-colors hover:text-foreground">
                  Corporate Lead Gen (RMC)
                </Link>
              </li>
              <li>
                <Link href="/services#lead-capture" className="transition-colors hover:text-foreground">
                  Lead Capture Systems
                </Link>
              </li>
              <li>
                <Link href="/services#retention" className="transition-colors hover:text-foreground">
                  Retention Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials & Availability */}
          <div className="flex flex-col items-start gap-5 md:items-end">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h2>
            <div className="flex gap-2">
              {socialLinks.map((link) => {
                const IconComponent = socialIcons[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.label} (opens in new tab)`}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface-secondary text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            <div className="text-xs text-muted md:text-right">
              <p className="font-medium text-foreground">Working Hours:</p>
              <p>{contactInfo.workingHours}</p>
              <p className="mt-1 text-accent font-medium">{contactInfo.responseTime}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/80 pt-6 text-xs text-muted sm:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. Designed & built with Next.js, React & TypeScript.
          </p>
          <p>{contactInfo.location}</p>
        </div>
      </Container>
    </footer>
  );
}