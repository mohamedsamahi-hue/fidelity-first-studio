import { useFadeUp } from "@/hooks/use-fade-up";
import type { ReactNode } from "react";

type Props = {
  title: string;
  bullets: string[];
  image: ReactNode;
  bgClass: string;
  reversed?: boolean;
};

export function FeatureBlock({ title, bullets, image, bgClass, reversed }: Props) {
  const ref = useFadeUp<HTMLDivElement>();
  return (
    <section className={`${bgClass} py-20 lg:py-24`}>
      <div className="container-1200">
        <div ref={ref} className={`fade-up grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div className="rounded-2xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-6 border border-border-soft">
            {image}
          </div>
          <div>
            <h3 className="text-[28px] lg:text-[34px] font-black leading-[1.15] text-brand-black">{title}</h3>
            <ul className="mt-6 space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-text-secondary">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
