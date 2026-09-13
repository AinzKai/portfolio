import { Container, Section } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { projects } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Work — Muhammad Uzair Rizwan",
  description:
    "Production-grade web apps, restaurant ordering systems, salon booking flows, and corporate lead capture platforms built with Next.js, React, and TypeScript.",
  alternates: {
    canonical: "https://muhammaduzair.dev/work",
  },
};

export default function Work() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      {/* Header Banner */}
      <Section spaced="md" className="border-b border-border/80 bg-surface/30">
        <Container className="py-12 md:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
            Selected Works & Systems
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Case studies that solve real business bottlenecks.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            From online restaurant menus with WhatsApp order generation to high-converting service booking
            and corporate lead capture platforms — every build focuses on friction removal and tangible results.
          </p>
        </Container>
      </Section>

      {/* Featured Projects */}
      <Section spaced="lg">
        <Container>
          <Reveal>
            <SectionHeading
              title="Featured Implementations"
              subtitle="Comprehensive case studies demonstrating architectural decisions, UX strategy, and business outcomes."
              align="left"
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <Reveal key={project.id} delay={i * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          {/* Additional Projects */}
          {rest.length > 0 && (
            <div className="mt-20 border-t border-border/80 pt-16">
              <Reveal>
                <SectionHeading
                  title="More Industry Builds"
                  subtitle="Focused landing pages, menus, and booking concepts across F&B, hospitality, and service sectors."
                  align="left"
                />
              </Reveal>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((project, i) => (
                  <Reveal key={project.id} delay={i * 80}>
                    <ProjectCard project={project} />
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>

      {/* Conversion CTA */}
      <CtaSection
        badge="Have a project in mind?"
        title="Want a tailored digital system for your business?"
        description="Whether you need a full online ordering overhaul, a booking flow, or a modern business website, let's discuss your timeline and scope."
        primaryLabel="Start your project"
        primaryHref="/contact"
        secondaryLabel="View pricing & packages"
        secondaryHref="/pricing"
      />
    </>
  );
}