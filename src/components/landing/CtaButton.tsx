import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "orange" | "black";
};

export function CtaButton({ variant = "orange", className, children, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-bold text-white text-base",
        "px-8 py-[14px] transition-[filter,transform] duration-200 cursor-pointer",
        "hover:brightness-90 active:scale-[0.98]",
        variant === "orange" ? "bg-brand-orange" : "bg-brand-black",
        className
      )}
    >
      {children}
    </button>
  );
}
