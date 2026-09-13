import { cn } from "@/lib/utils";

export type BadgeVariant = "default" | "secondary" | "outline" | "accent";
export type BadgeSize = "sm" | "md";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

const badgeVariants: Record<BadgeVariant, string> = {
  default: "border-transparent bg-surface-secondary text-foreground",
  secondary: "border-transparent bg-surface-secondary text-muted",
  outline: "border border-border text-muted",
  accent: "border-transparent bg-accent-soft text-accent",
};

const badgeSizes: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
};

export function Badge({
  className,
  variant = "default",
  size = "md",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        badgeVariants[variant],
        badgeSizes[size],
        className,
      )}
      {...props}
    />
  );
}
