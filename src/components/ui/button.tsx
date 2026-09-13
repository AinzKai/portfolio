import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

const buttonBase =
  "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent cursor-pointer";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover shadow-xs hover:shadow-md active:scale-[0.98]",
  secondary:
    "border border-border bg-surface-secondary text-foreground hover:border-accent/40 hover:bg-surface active:scale-[0.98]",
  ghost:
    "text-muted hover:bg-surface-secondary hover:text-foreground active:scale-[0.98]",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-surface-secondary active:scale-[0.98]",
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-xs",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonBase, buttonVariants[variant], buttonSizes[size], className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  external?: boolean;
}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, href, variant = "primary", size = "md", external, ...props }, ref) => {
    const classes = cn(
      buttonBase,
      buttonVariants[variant],
      buttonSizes[size],
      className,
    );

    if (external) {
      return (
        <a
          ref={ref}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...props}
        />
      );
    }

    return (
      <Link
        ref={ref}
        href={href}
        className={classes}
        {...props}
      />
    );
  },
);
ButtonLink.displayName = "ButtonLink";
