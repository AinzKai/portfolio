import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icon";
import { projectStatusConfig, type Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  className?: string;
  size?: "sm" | "default";
}

function monogram(title: string) {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

export function ProjectCard({
  project,
  className,
  size = "default",
}: ProjectCardProps) {
  const status = projectStatusConfig[project.status];
  const isSmall = size === "sm";

  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface no-underline transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl",
        className,
      )}
    >
      {/* Visual Header / Cover */}
      <div className={cn("relative overflow-hidden border-b border-border/80", isSmall ? "aspect-[16/8]" : "aspect-[16/9]")}>
        <div className={cn("absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-105", project.coverColor)}>
          {/* Subtle noise/pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.15)_0%,transparent_75%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,rgba(0,0,0,0.45)_100%)]" />
        </div>

        {/* Monogram / Brand mark representation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            aria-hidden="true"
            className="text-4xl font-extrabold tracking-tighter text-white/30 transition-transform duration-500 group-hover:scale-110 sm:text-5xl"
          >
            {monogram(project.title)}
          </span>
        </div>

        {/* Top Badges: Category & Status */}
        <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2">
          <span className="rounded-md bg-black/40 px-2 py-0.5 text-[11px] font-semibold text-white/90 backdrop-blur-md">
            {project.category.split("/")[0].trim()}
          </span>
          <span
            className={cn(
              "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold backdrop-blur-md shadow-xs",
              status.className,
            )}
          >
            {status.label}
          </span>
        </div>

        {/* Bottom Title on Image overlay for better connection */}
        <div className="absolute inset-x-3 bottom-2.5 flex items-end justify-between">
          <span className="text-base font-bold text-white drop-shadow-sm sm:text-lg">
            {project.title}
          </span>
          {project.liveUrl && (
            <span className="inline-flex items-center gap-1 rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-xs">
              Live Demo
              <Icon name="ExternalLink" className="h-2.5 w-2.5" />
            </span>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className={cn("flex flex-1 flex-col p-5 sm:p-6", isSmall && "p-4")}>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tech Badges */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border/60 bg-surface-secondary/80 px-2 py-0.5 text-[11px] font-medium text-muted"
            >
              {tag}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="rounded-md bg-surface-secondary/40 px-1.5 py-0.5 text-[11px] font-medium text-muted/70">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Action Link Footer */}
        <div className="flex items-center justify-between border-t border-border/60 pt-3.5 text-accent">
          <span className="text-xs font-semibold uppercase tracking-wider">
            Explore Case Study
          </span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-accent group-hover:text-white">
            <Icon name="ArrowRight" className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}