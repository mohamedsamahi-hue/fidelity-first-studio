import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "lavender" | "black" | "outline";
};

export function CtaButton({ variant = "lavender", className, children, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold text-[16px] tracking-[-0.32px]",
        "px-8 h-[56px] min-h-[56px] transition-all duration-300 ease-in-out cursor-pointer",
        "hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-12px_rgba(24,30,21,0.45)] active:translate-y-0",
        variant === "lavender" && "bg-lavender text-brand-black hover:bg-lavender-light active:bg-lavender-light",
        variant === "black" && "bg-brand-black text-white hover:bg-lavender-light hover:text-brand-black",
        variant === "outline" && "bg-transparent border border-white text-white hover:bg-lavender-light hover:border-lavender-light hover:text-brand-black",
        className
      )}
    >
      {children}
    </button>
  );
}
