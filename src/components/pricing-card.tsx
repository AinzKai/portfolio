import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";
import type { PricingPackage } from "@/lib/data";

interface PricingCardProps {
  pkg: PricingPackage;
  className?: string;
}

export function PricingCard({ pkg, className }: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border bg-surface p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8",
        pkg.popular
          ? "border-accent ring-2 ring-accent/20 dark:border-accent"
          : "border-border hover:border-border/80",
        className,
      )}
    >
      {pkg.popular && (
        <div className="absolute -top-3 left-6">
          <Badge variant="accent" size="sm" className="shadow-xs font-semibold uppercase tracking-wider">
            Most Popular Choice
          </Badge>
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent">
          {pkg.subtitle}
        </p>
      </div>

      <p className="mb-6 text-sm leading-relaxed text-muted">
        {pkg.description}
      </p>

      <div className="mb-6 border-y border-border/80 py-4">
        <span className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {pkg.price}
        </span>
        <span className="block mt-1 text-xs text-muted">
          One-time investment · Fixed quote
        </span>
      </div>

      <ul className="mb-8 flex-1 space-y-3 text-sm">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
              <Icon name="Check" className="h-3 w-3" />
            </span>
            <span className="text-muted leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      <ButtonLink
        href="/contact"
        variant={pkg.popular ? "primary" : "secondary"}
        size="lg"
        className="w-full"
      >
        <span>Get Started with {pkg.name}</span>
        <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
      </ButtonLink>
    </div>
  );
}
