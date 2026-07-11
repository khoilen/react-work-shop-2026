import type { ButtonHTMLAttributes } from "react";
import { cn } from "../utils";

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "outline";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-[#b88e2f] bg-[#b88e2f] text-white shadow-[0_12px_24px_rgba(184,142,47,0.22)] hover:border-[#a17920] hover:bg-[#a17920] focus-visible:ring-[#b88e2f]",
  secondary:
    "border border-[#b88e2f] bg-white text-[#b88e2f] hover:bg-[#fbf7ef] focus-visible:ring-[#b88e2f]",
  ghost:
    "border border-transparent bg-transparent text-[#3a3a3a] hover:bg-[#f4efe6] hover:text-[#b88e2f] focus-visible:ring-[#b88e2f]",
  danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
  outline:
    "rounded-[15px] border border-black bg-white text-black shadow-none hover:bg-[#f8f8f8] focus-visible:ring-black"
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base"
};

export function Button({
  className,
  children,
  disabled,
  isLoading = false,
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-none font-semibold tracking-[0.01em] transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        "disabled:pointer-events-none disabled:opacity-60",
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || isLoading}
      type={type}
      {...props}
    >
      {isLoading ? (
        <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      {children}
    </button>
  );
}
