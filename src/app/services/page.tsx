import { Container, Section } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { CtaSection } from "@/components/cta-section";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { services, projects } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Capabilities — Muhammad Uzair Rizwan",
  description:
    "Modern websites, high-conversion lead capture systems, and customer retention automations built specifically for small businesses, restaurants, and salons.",
  alternates: {
    canonical: "https://muhammaduzair.dev/services",
  },
};

const serviceDetails: Record<
  string,
  {
    description: string;
    deliverables: string;
    features: { title: string; description: string }[];
  }
> = {
  websites: {
    description:
      "I design and engineer custom, high-speed websites tailored to your business goals. From single-purpose promotional landing pages to multi-page business platforms, every build emphasizes responsiveness, sub-second speed, and clear conversion paths.",
    deliverables: "Includes responsive design, CMS/code handover, SEO setup, and 14 days warranty.",
    features: [
      {
        title: "Sub-Second Performance",
        description: "Built with Next.js and static site generation for lightning-fast mobile loads.",
      },
      {
        title: "Mobile-First UX",
        description: "Engineered specifically for smartphone visitors who demand instant scannability.",
      },
      {
        title: "Technical SEO & Schema",
        description: "Proper semantic hierarchy, OpenGraph social cards, and sitemaps from launch.",
      },
      {
        title: "Accessibility Standards",
        description: "WCAG-compliant keyboard navigation, color contrast, and screen-reader readiness.",
      },
    ],
  },
  "lead-capture": {
    description:
      "I build specialized data collection and quote capture flows that turn passive visitors into qualified sales inquiries. Every submission triggers instant notifications, eliminates spam, and syncs directly into your preferred CRM or spreadsheet.",
    deliverables: "Includes form validation, honeypot spam protection, email/SMS alerts, and Google Sheets sync.",
    features: [
      {
        title: "Instant Multi-Channel Alerts",
        description: "Real-time email or SMS notifications the second a new prospect submits.",
      },
      {
        title: "CRM & Sheets Integrations",
        description: "Automated routing into Google Sheets, Airtable, or your customer database.",
      },
      {
        title: "Zero-Captcha Spam Defense",
        description: "Honeypot fields and smart validation that block bots without annoying real clients.",
      },
      {
        title: "Custom Form Logic",
        description: "Conditional fields, service selectors, and automated follow-up triggers.",
      },
    ],
  },
  retention: {
    description:
      "I implement automated customer retention and re-engagement workflows. From automated appointment reminders to review request sequences, these systems operate in the background to maximize customer lifetime value and eliminate no-shows.",
    deliverables: "Includes workflow design, email/WhatsApp integration, copy templates, and testing.",
    features: [
      {
        title: "Appointment Reminders",
        description: "Automated SMS/WhatsApp reminders to reduce costly client no-shows.",
      },
      {
        title: "Review Request Sequences",
        description: "Automated follow-ups that collect positive reviews on Google and TripAdvisor.",
      },
      {
        title: "Lapsed Customer Re-Engagement",
        description: "Targeted outreach to reactivate clients who haven't booked in 60+ days.",
      },
      {
        title: "VIP & Loyalty Workflows",
        description: "Automated reward messages and milestone greetings for repeat customers.",
      },
    ],
  },
};

function ExampleProjects({ slugs }: { slugs: string[] }) {
  const examples = slugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
        Case Study References
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {examples.map((project) => (
          <ProjectCard key={project.id} project={project} size="sm" />
        ))}
      </div>
    </div>
  );
}

function ScopingCallout() {
  return (
    <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-border bg-surface-secondary/40 p-6 sm:p-8">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <Icon name="BarChart3" className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-foreground">
        Custom Workflow Scoping
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Every business has distinct customer touchpoints. Whether you need automated WhatsApp booking
        reminders, Google Review generators, or custom email onboarding sequences, I map the exact solution
        to your existing tools.
      </p>
      <div className="mt-6">
        <ButtonLink href="/contact" variant="secondary" size="md">
          <span>Discuss retention requirements</span>
          <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
        </ButtonLink>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      {/* Header Banner */}
      <Section spaced="md" className="border-b border-border/80 bg-surface/30">
        <Container className="py-12 md:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
            Core Service Offerings
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Digital systems built to acquire, convert, and retain.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">
            I don&apos;t just write code — I build the foundational digital assets that modern businesses need to
            attract qualified traffic, capture inquiries, and generate repeat revenue.
          </p>
        </Container>
      </Section>

      {/* Services List */}
      <Section spaced="lg">
        <Container>
          <div className="space-y-12">
            {services.map((service, index) => {
              const detail = serviceDetails[service.id];
              const hasExamples = service.examples.length > 0;

              return (
                <section
                  key={service.id}
                  id={service.id}
                  className="scroll-pt-nav rounded-2xl border border-border bg-surface p-6 sm:p-10 shadow-lg"
                >
                  <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
                    <div>
                      <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                          <Icon name={service.icon} className="h-6 w-6" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                          Pillar 0{index + 1}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 leading-relaxed text-muted sm:text-lg">
                        {detail.description}
                      </p>

                      <div className="mt-8 space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                          Key Capabilities
                        </p>
                        <div className="grid gap-3.5 sm:grid-cols-2">
                          {detail.features.map((feature) => (
                            <div
                              key={feature.title}
                              className="rounded-xl border border-border/70 bg-surface-secondary/40 p-3.5"
                            >
                              <div className="flex items-start gap-2.5">
                                <Icon
                                  name="Check"
                                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                                />
                                <div>
                                  <h3 className="text-sm font-semibold text-foreground">
                                    {feature.title}
                                  </h3>
                                  <p className="mt-0.5 text-xs leading-relaxed text-muted">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 flex flex-wrap items-center gap-3 pt-4 border-t border-border/60">
                        <ButtonLink href="/contact" variant="primary" size="md">
                          Request a proposal
                          <Icon name="ArrowRight" className="ml-1.5 h-4 w-4" />
                        </ButtonLink>
                        <ButtonLink href="/pricing" variant="ghost" size="md">
                          View pricing packages
                        </ButtonLink>
                      </div>
                    </div>

                    <div>
                      {hasExamples ? (
                        <ExampleProjects slugs={service.examples} />
                      ) : (
                        <ScopingCallout />
                      )}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Process & Transparency Callout */}
      <Section spaced="lg" className="border-t border-border/80 bg-surface/30">
        <Container>
          <div className="rounded-2xl border border-border bg-surface p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              How We Turn Ideas Into Shipped Code
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted">
              From our initial 30-minute discovery call to launch and the 14-day warranty, my 5-step process ensures clarity at every milestone.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/process" variant="secondary" size="lg">
                Explore The 5-Step Process
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/pricing" variant="ghost" size="lg">
                See Pricing & Add-ons
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <CtaSection
        badge="Ready to start?"
        title="Tell me what your business needs"
        description="Book a free 30-minute discovery call. No pressure, no obligations — just a direct conversation about your project."
        primaryLabel="Schedule discovery call"
        primaryHref="/contact"
      />
    </>
  );
}