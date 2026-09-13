import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/container";
import { Icon } from "@/components/icon";
import { projects } from "@/lib/data";

const featuredProjects = projects.filter((p) => p.featured);

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-border/60 bg-gradient-to-b from-background via-background to-surface/30">
      {/* Subtle background ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-full max-w-4xl -translate-x-1/2 opacity-30 blur-3xl dark:opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container className="max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="space-y-8">
            <div className="animate-hero-up space-y-4">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-muted shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                <span className="text-foreground font-semibold">Available for new client projects</span>
                <span className="text-border">|</span>
                <span>Direct 1-on-1 collaboration</span>
              </div>

              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                I build websites that{" "}
                <span className="text-accent">bring you customers.</span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                For restaurants, salons, and service businesses that want more than a brochure —
                fast, mobile-first websites with ordering, booking, and lead capture engineered to convert.
              </p>
            </div>

            {/* CTAs */}
            <div
              className="animate-hero-up flex flex-col gap-3.5 sm:flex-row sm:items-center"
              style={{ animationDelay: "80ms" }}
            >
              <ButtonLink href="/contact" variant="primary" size="lg">
                Start your project
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/work" variant="secondary" size="lg">
                View case studies
              </ButtonLink>
            </div>

            {/* Key Guarantees / Trust Badges */}
            <div
              className="animate-hero-up border-t border-border/80 pt-6"
              style={{ animationDelay: "140ms" }}
            >
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
                <div>
                  <p className="text-sm font-semibold text-foreground">Zero Agency Overhead</p>
                  <p className="text-xs text-muted">Work directly with the builder</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Fixed-Price Quotes</p>
                  <p className="text-xs text-muted">Transparent starting rates</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-sm font-semibold text-foreground">14-Day Post-Launch</p>
                  <p className="text-xs text-muted">Included warranty & support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Featured Case Study Spotlight */}
          <div
            className="animate-hero-up space-y-4"
            style={{ animationDelay: "120ms" }}
          >
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-xl sm:p-7">
              <div className="mb-4 flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    Featured Systems
                  </p>
                  <h2 className="text-base font-bold text-foreground sm:text-lg">
                    Proven Solutions in Action
                  </h2>
                </div>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-1 text-xs font-medium text-muted transition-colors hover:text-accent"
                >
                  All projects ({projects.length})
                  <Icon name="ArrowRight" className="h-3 w-3" />
                </Link>
              </div>

              <div className="space-y-3.5">
                {featuredProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/work/${project.slug}`}
                    className="group flex flex-col gap-2.5 rounded-xl border border-border/70 bg-surface-secondary/60 p-4 transition-all duration-200 hover:border-accent hover:bg-surface-secondary hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-bold text-foreground transition-colors group-hover:text-accent">
                            {project.title}
                          </h3>
                          <span className="rounded bg-accent/10 px-1.5 py-0.5 text-[10px] font-semibold text-accent uppercase tracking-wider">
                            {project.category.split("/")[0].trim()}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-muted line-clamp-1">
                          {project.shortDescription}
                        </p>
                      </div>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors group-hover:border-accent group-hover:text-accent">
                        <Icon name="ArrowRight" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-background px-1.5 py-0.5 text-[10px] font-medium text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-5 rounded-lg border border-dashed border-border/80 bg-background/50 p-3.5 text-center">
                <p className="text-xs text-muted">
                  Looking for custom workflows?{" "}
                  <Link
                    href="/contact"
                    className="font-semibold text-accent hover:underline"
                  >
                    Request a tailored proposal &rarr;
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}