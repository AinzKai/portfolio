import { Container, Section } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { PricingCard } from "@/components/pricing-card";
import { CtaSection } from "@/components/cta-section";
import { pricingPackages, addons, retentionPackages } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Investment Packages — Muhammad Uzair Rizwan",
  description:
    "Transparent starting prices for websites, online ordering, and retention systems. Fixed quotes with zero hidden fees.",
  alternates: {
    canonical: "https://muhammaduzair.dev/pricing",
  },
};

const faqs = [
  {
    question: "What is included in each website package?",
    answer:
      "Every package includes custom responsive UI design, frontend development (Next.js/React/TypeScript), speed optimization, technical SEO setup, cross-browser/device testing, deployment to your hosting provider, and 14 days of dedicated post-launch support. Third-party platform subscriptions (custom domains, paid email services, SMS gateways) are billed directly by their respective providers.",
  },
  {
    question: "How does the payment and milestone structure work?",
    answer:
      "Projects typically follow a 50/50 model: 50% deposit upon agreement sign-off and kickoff, and the remaining 50% upon final client review and sign-off prior to live domain deployment. All quotes are fixed with no surprise invoice adjustments.",
  },
  {
    question: "Can packages be customized for unique requirements?",
    answer:
      "Yes. The packages listed here represent standard base baselines. If your project requires custom API integrations, specific booking logic, or multi-language menus, we scope the exact requirements during our initial discovery call and provide a tailored fixed-fee proposal.",
  },
  {
    question: "What is the typical turnaround timeline?",
    answer:
      "Standard Landing Pages typically ship in 1 to 2 weeks. Comprehensive Business Websites and custom ordering solutions take between 3 to 6 weeks, depending on asset availability and feedback turnaround.",
  },
  {
    question: "What happens after the website is launched?",
    answer:
      "Every build includes a 14-day post-launch warranty window where any bugs, styling refinements, or technical adjustments are addressed free of charge. I also offer monthly ongoing retention and maintenance retainers if you need continuous updates.",
  },
];

export default function Pricing() {
  return (
    <>
      {/* Header Banner */}
      <Section spaced="md" className="border-b border-border/80 bg-surface/30">
        <Container className="py-12 md:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
            Investment & Packages
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Transparent, milestone-based pricing.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Clear starting rates with defined deliverables. Every project is scoped to deliver tangible business value without surprise agency fees.
          </p>
        </Container>
      </Section>

      {/* Website Packages */}
      <Section spaced="lg">
        <Container>
          <SectionHeading
            title="Website & Landing Page Packages"
            subtitle="Engineered for speed, mobile responsiveness, and high conversion."
            align="center"
          />

          <div className="grid gap-8 lg:grid-cols-3">
            {pricingPackages.map((pkg) => (
              <PricingCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Add-ons Grid */}
      <Section spaced="lg" className="border-y border-border/80 bg-surface/40">
        <Container>
          <SectionHeading
            title="Optional Functional Add-ons"
            subtitle="Modular enhancements that can be integrated into any base package."
            align="center"
          />

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {addons.map((addon) => (
                <div
                  key={addon.id}
                  className="rounded-2xl border border-border bg-surface p-5 shadow-xs transition-colors hover:border-accent/40"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-foreground">
                      {addon.name}
                    </h3>
                    <span className="rounded-md bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                      {addon.price}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {addon.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Retention Packages */}
      <Section spaced="lg">
        <Container>
          <SectionHeading
            title="Customer Retention & Automation"
            subtitle="Automated workflows that keep your customers engaged, reduce no-shows, and drive repeat orders."
            align="center"
          />

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              {retentionPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="flex flex-col rounded-2xl border border-border bg-surface p-7 shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-foreground">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {pkg.description}
                  </p>
                  <div className="my-6 border-y border-border/80 py-4">
                    <span className="text-3xl font-extrabold text-foreground">
                      {pkg.price}
                    </span>
                  </div>
                  <ul className="space-y-3 text-sm">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                          <Icon name="Check" className="h-3 w-3" />
                        </span>
                        <span className="text-muted leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {pkg.note && (
                    <p className="mt-4 text-xs italic text-muted/80">
                      {pkg.note}
                    </p>
                  )}
                  <div className="mt-8 pt-4">
                    <ButtonLink
                      href="/contact"
                      variant="secondary"
                      size="md"
                      className="w-full"
                    >
                      Inquire About Retention Setup
                    </ButtonLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Semantic Accessible FAQ Accordion */}
      <Section spaced="lg" className="border-t border-border/80 bg-surface/30">
        <Container>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about working together, billing, and deliverables."
            align="center"
          />
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-border bg-surface transition-all duration-200 open:border-accent/50 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-base font-bold text-foreground select-none sm:text-lg">
                  <span>{faq.question}</span>
                  <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-surface-secondary text-muted transition-transform duration-200 group-open:rotate-180 group-open:text-accent">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-border/60 px-6 pb-6 pt-4 text-sm leading-relaxed text-muted sm:text-base">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CtaSection
        badge="Custom Estimates"
        title="Need a custom quote for your project?"
        description="Every project is unique. Let's discuss your exact timeline, goals, and technical requirements."
        primaryLabel="Start your project"
        primaryHref="/contact"
      />
    </>
  );
}