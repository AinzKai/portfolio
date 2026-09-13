import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icon";
import { projects, type Service } from "@/lib/data";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const examples = service.examples
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <Link
      href={`/services#${service.id}`}
      className={cn(
        "group block overflow-hidden rounded-xl border border-border bg-surface p-6 no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-lg",
        className,
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-soft text-accent">
        <Icon name={service.icon} className="h-6 w-6" />
      </div>

      <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
        {service.title}
      </h3>
      <p className="mb-4 flex-1 text-sm text-muted line-clamp-3">
        {service.shortDescription}
      </p>

      {examples.length > 0 && (
        <div className="mb-4">
          <p className="mb-1.5 text-xs text-muted">Recent work:</p>
          <div className="flex flex-wrap gap-1.5">
            {examples.map((ex) => (
              <span
                key={ex.slug}
                className="rounded bg-border/30 px-2 py-0.5 text-xs text-muted"
              >
                {ex.title}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 text-accent">
        <span className="text-sm font-medium">See service</span>
        <Icon
          name="ArrowRight"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}