import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[72rem] px-6 md:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  spaced?: "sm" | "md" | "lg";
}

export function Section({ children, className, id, spaced = "md" }: SectionProps) {
  const spacing = {
    sm: "py-8 md:py-12",
    md: "py-12 md:py-20",
    lg: "py-16 md:py-28",
  };

  return (
    <section
      id={id}
      className={cn("w-full", spacing[spaced], className)}
    >
      {children}
    </section>
  );
}
