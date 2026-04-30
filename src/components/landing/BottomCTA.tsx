import { CtaButton } from "./CtaButton";

export function BottomCTA() {
  return (
    <section className="cta-dark-bg py-24 lg:py-28 text-center">
      <div className="container-1200">
        <h2 className="text-white font-black uppercase tracking-[0.04em] text-[28px] sm:text-[36px] leading-[1.15] max-w-3xl mx-auto">
          Analyze competitor traffic now
        </h2>
        <p className="mt-5 text-[16px] text-white/75 max-w-[560px] mx-auto leading-relaxed">
          Uncover the channels, pages, and patterns driving their growth — and use those insights to fuel your own.
        </p>
        <div className="mt-8 flex justify-center">
          <CtaButton>Try free for 7 days</CtaButton>
        </div>
      </div>
    </section>
  );
}
