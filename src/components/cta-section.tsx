import { Container, Section } from "@/components/container";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { Badge } from "@/components/ui/badge";

interface CtaSectionProps {
  badge?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
}

export function CtaSection({
  badge,
  title,
  description,
  primaryLabel = "Start your project",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  className,
}: CtaSectionProps) {
  return (
    <Section spaced="lg" className={className}>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          {badge && (
            <Badge variant="outline" size="sm">
              {badge}
            </Badge>
          )}
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-muted">{description}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={primaryHref} size="lg">
              {primaryLabel}
              <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
            </ButtonLink>
            {secondaryLabel && secondaryHref && (
              <ButtonLink href={secondaryHref} variant="secondary" size="lg">
                {secondaryLabel}
              </ButtonLink>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}