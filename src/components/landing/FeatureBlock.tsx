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
    <section className="bg-white py-[60px]">
      <div className="container-1200">
        <div ref={ref} className={`fade-up grid lg:grid-cols-2 gap-0 items-stretch ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div className={`${bgClass} rounded-[16px] p-5 sm:p-8 lg:p-10`}>
            <div className="bg-white rounded-[12px] shadow-[0_2px_12px_0_rgba(0,0,0,0.05)] border border-grey-stroke h-full p-5 sm:p-6 lg:p-7">
              {image}
            </div>
          </div>

          <div className="flex flex-col justify-center px-6 lg:px-14 py-10 lg:py-0">
            <h3 className="text-[40px] font-semibold leading-[120%] tracking-[-0.8px] text-brand-black max-xl:text-[32px] max-xl:tracking-[-1.28px]">
              {title}
            </h3>
            <ul className="mt-6 space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[18px] font-medium leading-[150%] tracking-[-0.36px] text-core-dark-grey max-lg:text-[16px]">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-black shrink-0" />
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
