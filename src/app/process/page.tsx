import { Container, Section } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Icon } from "@/components/icon";
import { ButtonLink } from "@/components/ui/button";
import { processSteps } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process & Delivery Timeline — Muhammad Uzair Rizwan",
  description:
    "A transparent 5-step development process from initial discovery call to launch and 14-day warranty. Clear milestones, weekly progress reviews, and zero surprises.",
  alternates: {
    canonical: "https://muhammaduzair.dev/process",
  },
};

export default function Process() {
  return (
    <>
      {/* Header Banner */}
      <Section spaced="md" className="border-b border-border/80 bg-surface/30">
        <Container className="py-12 md:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
            Methodology & Milestones
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            A transparent, predictable process.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            No agency jargon, no endless review loops. Every stage has defined objectives, clear review check-ins, and tangible milestone deliverables.
          </p>
        </Container>
      </Section>

      {/* 5-Step Process */}
      <Section spaced="lg">
        <Container>
          <SectionHeading
            title="The 5-Stage Delivery Pipeline"
            subtitle="Designed to keep you informed and in full control from day one to launch."
            align="center"
          />

          <div className="mx-auto max-w-3xl space-y-6">
            {processSteps.map((step, index) => {
              const isLast = index === processSteps.length - 1;

              return (
                <div
                  key={step.step}
                  className="rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-sm transition-colors hover:border-accent/40"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 font-bold text-accent text-lg">
                      0{step.step}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                          {step.title}
                        </h2>
                        {isLast ? (
                          <span className="rounded-full bg-success/15 px-2.5 py-0.5 text-xs font-semibold text-success">
                            Deployment & Warranty
                          </span>
                        ) : (
                          <span className="text-xs font-medium uppercase tracking-wider text-muted">
                            Stage 0{step.step}
                          </span>
                        )}
                      </div>

                      <p className="mt-2.5 text-base leading-relaxed text-muted">
                        {step.description}
                      </p>

                      {step.details && (
                        <div className="mt-5 rounded-xl border border-border/80 bg-surface-secondary/40 p-4">
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground">
                            Key Deliverables & Activities:
                          </p>
                          <ul className="space-y-2 text-sm text-muted">
                            {step.details.map((item) => (
                              <li key={item} className="flex items-start gap-2.5">
                                <Icon
                                  name="Check"
                                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                                />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Timeline Roadmap */}
      <Section spaced="lg" className="border-y border-border/80 bg-surface/40">
        <Container>
          <SectionHeading
            title="Estimated Project Timeline"
            subtitle="Most projects ship within 3 to 6 weeks from initial agreement sign-off."
            align="center"
          />

          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface p-8 shadow-md sm:p-10">
            <div className="space-y-6">
              <div>
                <div className="mb-2 flex justify-between text-sm font-semibold">
                  <span className="text-foreground">Phase 1: Discovery & Strategy</span>
                  <span className="text-accent">Week 1</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-secondary">
                  <div className="h-full w-1/4 rounded-full bg-accent" />
                </div>
                <p className="mt-1.5 text-xs text-muted">Goal alignment, scope definition, and technical architecture.</p>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm font-semibold">
                  <span className="text-foreground">Phase 2: UI Design & Sprints</span>
                  <span className="text-accent">Weeks 2–4</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-secondary">
                  <div className="h-full w-3/4 rounded-full bg-accent" />
                </div>
                <p className="mt-1.5 text-xs text-muted">Interactive components, ordering/booking logic, and weekly progress previews.</p>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-sm font-semibold">
                  <span className="text-foreground">Phase 3: QA, Launch & 14-Day Warranty</span>
                  <span className="text-accent">Weeks 5–6</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-secondary">
                  <div className="h-full w-full rounded-full bg-success" />
                </div>
                <p className="mt-1.5 text-xs text-muted">Cross-browser validation, SEO inspection, live deployment, and handover documentation.</p>
              </div>
            </div>

            <div className="mt-8 flex justify-center border-t border-border/80 pt-6">
              <ButtonLink href="/pricing" variant="secondary" size="md">
                <span>View package pricing</span>
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CtaSection
        badge="Direct Booking"
        title="Ready to begin your project?"
        description="Schedule a 30-minute discovery call to discuss your goals and review your current bottlenecks."
        primaryLabel="Schedule discovery call"
        primaryHref="/contact"
      />
    </>
  );
}