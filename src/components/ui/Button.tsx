import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "solid" | "outline" | "ghost";
    size?: "sm" | "md";
  }
>;

export function Button({
  children,
  className,
  variant = "solid",
  size = "md",
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-60 disabled:cursor-not-allowed";
  const variants: Record<string, string> = {
    solid: "bg-emerald-400 text-slate-950 hover:bg-emerald-300",
    outline:
      "border border-emerald-400/60 bg-transparent text-emerald-300 hover:border-emerald-300 hover:bg-emerald-500/10",
    ghost: "bg-transparent text-emerald-300 hover:bg-emerald-500/10",
  };
  const sizes: Record<string, string> = {
    sm: "px-3 py-1.5 text-[11px]",
    md: "px-4 py-2 text-xs",
  };

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}