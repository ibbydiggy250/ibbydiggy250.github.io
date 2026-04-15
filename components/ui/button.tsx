import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm";
};

const buttonStyles = {
  base: "inline-flex items-center justify-center rounded-md border text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    primary:
      "border-sky-300 bg-sky-300 text-zinc-950 shadow-[0_0_30px_rgba(125,211,252,0.16)] hover:border-cyan-200 hover:bg-gradient-to-r hover:from-sky-300 hover:to-cyan-200 hover:shadow-[0_0_44px_rgba(125,211,252,0.24)]",
    secondary:
      "border-zinc-700/80 bg-zinc-950/70 text-zinc-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:border-sky-300/50 hover:bg-gradient-to-r hover:from-zinc-900 hover:to-zinc-800",
    ghost:
      "border-transparent bg-transparent text-zinc-300 hover:border-zinc-800 hover:bg-zinc-900/80 hover:text-zinc-50",
  },
  sizes: {
    default: "h-10 px-4",
    sm: "h-9 px-3",
  },
};

export function Button({
  className,
  variant = "primary",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonStyles.base,
        buttonStyles.variants[variant],
        buttonStyles.sizes[size],
        className,
      )}
      {...props}
    />
  );
}

type ButtonLinkProps = React.ComponentProps<typeof Link> & {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  external?: boolean;
};

export function ButtonLink({
  className,
  variant = "primary",
  size = "default",
  external,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        buttonStyles.base,
        buttonStyles.variants[variant],
        buttonStyles.sizes[size],
        className,
      )}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      {...props}
    />
  );
}
