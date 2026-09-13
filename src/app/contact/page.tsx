import { Container, Section } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icon";
import { contactInfo } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Discovery Call — Muhammad Uzair Rizwan",
  description:
    "Get in touch directly to discuss your web development, online ordering, or customer retention project. Direct developer communication with a 2-hour response SLA.",
  alternates: {
    canonical: "https://muhammaduzair.dev/contact",
  },
};

const contactMethods = [
  {
    label: "Direct Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    description: "Best for sharing project specs, RFPs, wireframes, and design links.",
    icon: "Mail",
  },
  {
    label: "Discovery Call",
    value: "Google Meet or Zoom",
    href: undefined,
    description: "Free 30-minute scoping session scheduled upon initial inquiry.",
    icon: "Globe",
  },
];

const atAGlance = [
  { label: "Base Location", value: contactInfo.location },
  { label: "Working Hours", value: contactInfo.workingHours },
  { label: "Response SLA", value: contactInfo.responseTime },
  { label: "Client Timezones", value: contactInfo.timezone },
];

export default function Contact() {
  return (
    <>
      {/* Header Banner */}
      <Section spaced="md" className="border-b border-border/80 bg-surface/30">
        <Container className="py-12 md:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
            Get in Touch
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Let&apos;s build something exceptional for your business.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            I&apos;m currently taking on new projects. Submit the inquiry form below or email me directly.
            Every message receives a direct reply from me within 2 hours during business hours.
          </p>
        </Container>
      </Section>

      {/* Main Grid */}
      <Section spaced="lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            {/* Left Side: Contact Info & Expectations */}
            <div className="space-y-10">
              <div>
                <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                  Direct Contact Channels
                </h2>
                <ul className="mt-6 space-y-4">
                  {contactMethods.map((method) => (
                    <li
                      key={method.label}
                      className="rounded-2xl border border-border bg-surface p-5 shadow-xs"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                          <Icon name={method.icon} className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                            {method.label}
                          </p>
                          {method.href ? (
                            <a
                              href={method.href}
                              className="mt-0.5 text-base font-semibold text-foreground transition-colors hover:text-accent hover:underline"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <p className="mt-0.5 text-base font-semibold text-foreground">
                              {method.value}
                            </p>
                          )}
                          <p className="mt-1 text-xs text-muted leading-relaxed">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Working Hours & Service Details */}
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h2 className="text-base font-bold text-foreground">
                  Availability & Operating Hours
                </h2>
                <ul className="mt-4 divide-y divide-border/60 text-sm">
                  {atAGlance.map((item) => (
                    <li
                      key={item.label}
                      className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {item.label}
                      </span>
                      <span className="font-medium text-foreground sm:text-right">
                        {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What Happens Next Guarantee */}
              <div className="rounded-2xl border border-dashed border-border bg-surface-secondary/40 p-6">
                <h2 className="text-base font-bold text-foreground">
                  What Happens Next?
                </h2>
                <div className="mt-3 space-y-2 text-xs leading-relaxed text-muted">
                  <p>
                    1. <strong>Direct Review:</strong> I will personally inspect your requirements and existing links.
                  </p>
                  <p>
                    2. <strong>Scoping & Fit:</strong> I&apos;ll reply with clarifying questions or invite you to a 30-minute discovery call.
                  </p>
                  <p>
                    3. <strong>Fixed-Price Quote:</strong> You receive a clear, milestone-based proposal with no surprise add-ons.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: High Polish Form Card */}
            <div className="rounded-2xl border border-border bg-surface p-7 shadow-xl sm:p-10">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                  Send a Project Inquiry
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Fill out the details below to receive a personalized proposal.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}