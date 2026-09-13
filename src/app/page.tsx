import { Hero } from "@/components/hero";
import { Container, Section } from "@/components/container";
import { ServiceCard } from "@/components/service-card";
import { ProjectCard } from "@/components/project-card";
import { PricingCard } from "@/components/pricing-card";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import {
  services,
  projects,
  pricingPackages,
} from "@/lib/data";

const whyWorkWithMe = [
  {
    title: "1-on-1 Direct Collaboration",
    description:
      "Zero agency layers or account manager telephone games. You communicate directly with the engineer building your product.",
  },
  {
    title: "Speed & Performance Engineered",
    description:
      "Clean semantic architecture with sub-second page loads to maximize search ranking and visitor conversion.",
  },
  {
    title: "Mobile-First Conversion UX",
    description:
      "Designed specifically for the 70%+ of restaurant, salon, and service customers who browse and order from phones.",
  },
  {
    title: "Transparent Fixed Quotes",
    description:
      "Clear milestone deliverables and upfront pricing. No hidden fees or unexpected scope bloat.",
  },
];

const deliverables = [
  "Custom responsive UI tailored to your business",
  "Sub-second load speeds on cellular connections",
  "Frictionless ordering, booking, or lead capture",
  "Semantic SEO and accessibility compliance (WCAG)",
  "14 days of dedicated post-launch support included",
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Featured Case Studies */}
      <Section spaced="lg">
        <Container>
          <Reveal>
            <SectionHeading
              title="Featured Case Studies"
              subtitle="Selected builds demonstrating how strategic design and modern frontend engineering drive business results."
              align="center"
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.id} delay={i * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <ButtonLink href="/work" variant="secondary" size="lg">
              <span>View all {projects.length} projects</span>
              <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* 3. What I Build (Services) */}
      <Section spaced="lg" className="border-y border-border/80 bg-surface/50">
        <Container>
          <Reveal>
            <SectionHeading
              title="What I Build"
              subtitle="Websites, ordering flows, and automated retention — the three pillars of modern customer acquisition."
              align="center"
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Why Work With Me & Deliverables */}
      <Section spaced="lg">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
                  The Direct Advantage
                </p>
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Engineered for real business results, not just aesthetic flair.
                </h2>
                <p className="mb-8 text-base leading-relaxed text-muted sm:text-lg">
                  Most small business websites fail because they are built like digital brochures.
                  I design focused conversion systems with seamless booking, ordering, and data collection.
                </p>
                <ul className="space-y-4">
                  {whyWorkWithMe.map((item) => (
                    <li key={item.title} className="flex items-start gap-3.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <Icon name="Check" className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 text-sm leading-relaxed text-muted">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-2xl border border-border bg-surface p-8 shadow-xl lg:p-10">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  Standard Standards
                </p>
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Included in every single engagement
                </h3>
                <ul className="mb-8 space-y-3.5">
                  {deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <Icon
                        name="Check"
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <ButtonLink href="/process" variant="primary" size="md">
                    Explore 5-Step Process
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </ButtonLink>
                  <ButtonLink href="/about" variant="ghost" size="md">
                    About my background
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 5. Clear Starting Investment */}
      <Section spaced="lg" className="border-t border-border/80 bg-surface/30">
        <Container>
          <Reveal>
            <SectionHeading
              title="Transparent Starting Rates"
              subtitle="Clear starting scopes so you know what to expect before we speak. Custom quotes tailored to exact requirements."
              align="center"
            />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPackages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 80}>
                <PricingCard pkg={pkg} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/pricing" variant="ghost">
              <span>View all packages, add-ons & FAQs</span>
              <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* 6. High-Impact Conversion CTA */}
      <CtaSection
        badge="Direct Booking & Inquiries"
        title="Ready to build a website that delivers results?"
        description="Share what you're trying to build. I'll review your requirements and provide a clear proposal with timeline and fixed pricing."
        primaryLabel="Start your project"
        primaryHref="/contact"
        secondaryLabel="Explore full services"
        secondaryHref="/services"
      />
    </>
  );
}