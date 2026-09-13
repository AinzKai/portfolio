import { Container, Section } from "@/components/container";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/icon";

export default function NotFound() {
  return (
    <Section spaced="lg" className="flex min-h-[70vh] items-center justify-center">
      <Container className="max-w-xl text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-accent/10 text-accent">
          <span className="text-3xl font-extrabold">404</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted">
          The page you are looking for doesn&apos;t exist, was moved, or has an outdated link.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          <ButtonLink href="/" variant="primary" size="lg">
            <span>Return to Homepage</span>
            <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/work" variant="secondary" size="lg">
            View Case Studies
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
