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
    <section className="bg-white py-20 lg:py-24">
      <div className="container-1200">
        <div ref={ref} className={`fade-up grid lg:grid-cols-2 gap-0 items-stretch ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div className={`${bgClass} rounded-2xl p-8 lg:p-10`}>
            <div className="bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-6 border border-border-soft h-full">
              {image}
            </div>
          </div>
          <div className="flex flex-col justify-center px-6 lg:px-14 py-10 lg:py-0">
            <h3 className="text-[26px] lg:text-[32px] font-black leading-[1.2] text-brand-black">{title}</h3>
            <ul className="mt-6 space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[15px] lg:text-[16px] leading-relaxed text-text-secondary">
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
