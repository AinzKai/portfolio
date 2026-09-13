import { Container, Section } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { CtaSection } from "@/components/cta-section";
import { Icon } from "@/components/icon";
import { contactInfo } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Muhammad Uzair Rizwan",
  description:
    "Independent frontend engineer and digital systems builder based in Islamabad, working with international clients across US, UK, EU, and Australia.",
  alternates: {
    canonical: "https://muhammaduzair.dev/about",
  },
};

const technicalSkills = [
  {
    category: "Core Frontend & Frameworks",
    items: ["Next.js (App Router)", "React 19", "TypeScript", "HTML5 Semantics", "Modern JavaScript (ESNext)"],
  },
  {
    category: "UI/UX & Styling",
    items: ["Tailwind CSS", "Responsive Design", "WCAG 2.1 Accessibility", "Figma to Code", "Micro-Interactions"],
  },
  {
    category: "Integrations & APIs",
    items: ["WhatsApp Business API", "Google Sheets Sync", "Calendly Embeds", "Formspree", "Resend API", "Stripe Checkout"],
  },
  {
    category: "Backend & Tooling",
    items: ["Node.js", "Serverless Routes", "Git / GitHub", "Vitest", "Vercel / Netlify Deployment"],
  },
];

const corePrinciples = [
  {
    title: "Performance is a Feature",
    description: "Every unnecessary script slows down mobile visitors and harms SEO. I write clean, lightweight, optimized code.",
  },
  {
    title: "Accessibility by Default",
    description: "Keyboard navigation, proper semantic elements, and strong color contrast ensure the web works for everyone.",
  },
  {
    title: "Business-First Engineering",
    description: "Code and design are tools to solve business friction — whether that's capturing leads or reducing phone order chaos.",
  },
  {
    title: "Direct Accountability",
    description: "No agency bureaucracy or layers of junior delegators. You work directly with the developer building your system.",
  },
];

export default function About() {
  return (
    <>
      {/* Header Banner */}
      <Section spaced="md" className="border-b border-border/80 bg-surface/30">
        <Container className="max-w-4xl py-12 md:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
            Background & Philosophy
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            A developer who thinks in business outcomes.
          </h1>
          <p className="text-lg leading-relaxed text-muted sm:text-xl">
            I&apos;m Muhammad Uzair Rizwan — an independent frontend developer based in Islamabad, Pakistan.
            I design and engineer conversion-focused websites, ordering flows, and digital tools for businesses worldwide.
          </p>
        </Container>
      </Section>

      {/* Story & Background */}
      <Section spaced="lg">
        <Container className="max-w-4xl">
          <div className="rounded-2xl border border-border bg-surface p-8 shadow-md sm:p-12">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Why I Focus on Conversion & Utility
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                Too many small business websites are treated like static brochures. They look acceptable,
                but they do nothing to capture leads, streamline orders, reduce customer friction, or bring patrons back.
              </p>
              <p>
                My work centers on solving practical bottlenecks: replacing busy phone lines with instant WhatsApp ordering,
                building zero-friction booking flows that reduce no-shows, and crafting lead forms that automatically sync
                with your customer tools.
              </p>
              <p>
                By working independently without agency overhead, I can deliver top-tier polish, fast turnaround times,
                and direct, honest communication at fixed, transparent pricing.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Principles Grid */}
      <Section spaced="lg" className="border-y border-border/80 bg-surface/40">
        <Container className="max-w-5xl">
          <SectionHeading
            title="Engineering Standards & Values"
            subtitle="The non-negotiables that guide every project I design and deploy."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {corePrinciples.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-surface p-6 shadow-xs sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon name="Check" className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Technical Skills */}
      <Section spaced="lg">
        <Container className="max-w-5xl">
          <SectionHeading
            title="Technical Arsenal"
            subtitle="Modern frontend and full-stack technologies used to deliver fast, reliable, and scalable products."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {technicalSkills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="rounded-2xl border border-border bg-surface p-6 sm:p-7"
              >
                <h3 className="text-base font-bold text-foreground">
                  {skillGroup.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      size="sm"
                      className="border border-border/80 bg-surface-secondary text-foreground"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Collaboration & Remote Workflow */}
      <Section spaced="lg" className="border-t border-border/80 bg-surface/30">
        <Container className="max-w-4xl">
          <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Working Together Remotely
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Global Availability
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {contactInfo.location}
                </p>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  Active overlap with European, UK, US, and Australian business timezones.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Response SLA
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {contactInfo.responseTime}
                </p>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  Working hours: {contactInfo.workingHours}.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CtaSection
        badge="Ready to connect?"
        title="Let&apos;s build something great together."
        description="Book a free 30-minute discovery call to discuss your project goals, timeline, and deliverables."
        primaryLabel="Start your project"
        primaryHref="/contact"
      />
    </>
  );
}