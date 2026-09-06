import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg" | "sm";

const base =
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<Variant, string> = {
  primary: "bg-accent-strong text-white hover:bg-accent-hover",
  secondary: "border border-line bg-surface text-ink hover:bg-elevated",
  ghost: "text-sub hover:bg-elevated hover:text-ink",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  type?: "button" | "submit";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
