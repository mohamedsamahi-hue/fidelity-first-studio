import { CtaButton } from "./CtaButton";

export function BottomCTA() {
  return (
    <section className="cta-dark-bg pt-[90px] pb-[140px] text-center">
      <div className="container-1200">
        <h2 className="text-white font-semibold uppercase tracking-[-1.84px] text-[46px] leading-[100%] max-w-3xl mx-auto max-xl:text-[36px] max-xl:tracking-[-1.44px]">
          Measure rival platform traffic now
        </h2>
        <p className="mt-6 text-[24px] font-medium leading-[120%] tracking-[-0.48px] text-white/75 max-w-[800px] mx-auto max-lg:text-[18px]">
          Reveal the channels, pages, and patterns driving their growth — and use those signals to power your own.
        </p>
        <div className="mt-6 flex justify-center">
          <CtaButton>Get free for 7 days</CtaButton>
        </div>
      </div>
    </section>
  );
}
