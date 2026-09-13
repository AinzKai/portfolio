import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { ProjectCard } from "@/components/project-card";
import { CtaSection } from "@/components/cta-section";
import { projects, projectStatusConfig } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const siteUrl = "https://muhammaduzair.dev";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Work — Project not found" };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Case Study | Muhammad Uzair Rizwan`,
      description: project.shortDescription,
      type: "article",
      url: `${siteUrl}/work/${project.slug}`,
    },
    alternates: {
      canonical: `${siteUrl}/work/${project.slug}`,
    },
  };
}

function monogram(title: string) {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const status = projectStatusConfig[project.status];
  const relatedProjects = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <>
      {/* Header Section */}
      <Section spaced="md" className="border-b border-border/80 bg-surface/30">
        <Container className="py-10 md:py-16">
          <Link
            href="/work"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            <Icon name="ArrowLeft" className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to all projects</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              {project.category}
            </span>
            <Badge variant="secondary" size="sm" className={status.className}>
              {status.label}
            </Badge>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">
            {project.longDescription || project.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            {project.liveUrl && (
              <ButtonLink
                href={project.liveUrl}
                variant="primary"
                size="lg"
                external
              >
                Launch Live Demo
                <Icon name="ExternalLink" className="ml-2 h-4 w-4" />
              </ButtonLink>
            )}
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Discuss a Similar Project
              <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* Visual Identity Hero Card */}
      <Section spaced="sm">
        <Container>
          <div
            className={`relative aspect-[21/9] min-h-[220px] w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${project.coverColor} shadow-xl`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.15)_0%,transparent_70%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_30%,rgba(0,0,0,0.6)_100%)]" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <span
                aria-hidden="true"
                className="text-6xl font-black tracking-tight text-white/40 drop-shadow-sm sm:text-8xl"
              >
                {monogram(project.title)}
              </span>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/90 sm:text-sm">
                {project.category}
              </p>
              <p className="mt-1 text-xs text-white/60">
                Independent Design & Engineering Case Study
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Main Case Study Content */}
      <Section spaced="lg">
        <Container className="max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
            {/* Left Main Column: Narrative */}
            <div className="space-y-12">
              {/* Objective & Problem */}
              <div className="space-y-6">
                <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                  <div className="flex items-center gap-2.5 text-accent">
                    <Icon name="Globe" className="h-5 w-5" />
                    <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                      Project Objective
                    </h2>
                  </div>
                  <p className="mt-4 leading-relaxed text-muted sm:text-lg">
                    {project.objective}
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                  <div className="flex items-center gap-2.5 text-error">
                    <Icon name="X" className="h-5 w-5" />
                    <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                      The Problem It Solves
                    </h2>
                  </div>
                  <p className="mt-4 leading-relaxed text-muted sm:text-lg">
                    {project.problem}
                  </p>
                </div>
              </div>

              {/* Approach */}
              <div>
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                  Strategic Approach
                </h2>
                <p className="mt-4 leading-relaxed text-muted sm:text-lg">
                  {project.approach}
                </p>
              </div>

              {/* Key Features Built */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">
                    Key Features & Functionality
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {project.features.map((feature, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                            <Icon name="Check" className="h-4 w-4" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">
                              {feature.title}
                            </h3>
                            <p className="mt-1 text-sm text-muted">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Design Decisions & Technical Implementation */}
              <div className="space-y-8 border-t border-border pt-8">
                {project.designDecisions && (
                  <div>
                    <h2 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">
                      Design & UX Decisions
                    </h2>
                    <p className="leading-relaxed text-muted">
                      {project.designDecisions}
                    </p>
                  </div>
                )}

                {project.technicalNotes && (
                  <div>
                    <h2 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">
                      Technical Architecture & Notes
                    </h2>
                    <p className="leading-relaxed text-muted">
                      {project.technicalNotes}
                    </p>
                  </div>
                )}
              </div>

              {/* Outcome & What I Learned */}
              <div className="space-y-6 border-t border-border pt-8">
                <div>
                  <h2 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">
                    Results & Outcome
                  </h2>
                  <p className="leading-relaxed text-muted">
                    {project.outcome}
                  </p>
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">
                    Engineering Takeaways
                  </h2>
                  <p className="leading-relaxed text-muted">
                    {project.whatILearned}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Project Metadata Sidebar */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="text-base font-bold text-foreground">
                  Project Metadata
                </h3>

                <div className="mt-6 space-y-5 text-sm">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Category
                    </p>
                    <p className="mt-1 font-medium text-foreground">
                      {project.category}
                    </p>
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Build Status
                    </p>
                    <div className="mt-1.5">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${status.className}`}
                      >
                        {status.label}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Tech Stack
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border/80 bg-surface-secondary px-2 py-0.5 text-xs font-medium text-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Integrations
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.integrations.length > 0 ? (
                        project.integrations.map((item) => (
                          <span
                            key={item}
                            className="rounded-md bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent"
                          >
                            {item}
                          </span>
                        ))
                      ) : (
                        <p className="text-xs text-muted">None (Standalone Architecture)</p>
                      )}
                    </div>
                  </div>

                  {project.liveUrl && (
                    <div className="border-t border-border pt-5">
                      <ButtonLink
                        href={project.liveUrl}
                        variant="primary"
                        size="md"
                        className="w-full"
                        external
                      >
                        Visit Live Demo
                        <Icon name="ExternalLink" className="ml-2 h-4 w-4" />
                      </ButtonLink>
                    </div>
                  )}
                </div>
              </div>

              {/* Ready to build callout */}
              <div className="rounded-2xl border border-dashed border-accent/40 bg-accent/5 p-6 text-center">
                <h3 className="font-bold text-foreground">
                  Need a similar build?
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  I design and implement end-to-end digital solutions tailored to your business goals.
                </p>
                <ButtonLink
                  href="/contact"
                  variant="secondary"
                  size="sm"
                  className="mt-4 w-full"
                >
                  Request a Free Discovery Call
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <CtaSection
        title="Ready to build something impactful?"
        description="Let's turn your business goals into a high-performing digital product."
        primaryLabel="Start your project"
      />

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <Section spaced="lg" className="border-t border-border bg-surface/50">
          <Container>
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Explore More Case Studies
              </h2>
              <p className="mt-2 text-muted">
                Other production-ready concepts and client systems.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}