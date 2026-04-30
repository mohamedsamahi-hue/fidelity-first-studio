import { SemrushLogo } from "./SemrushLogo";
import { CtaButton } from "./CtaButton";
import { HeroMockup } from "./HeroMockup";

export function HeroSection() {
  return (
    <section className="hero-gradient pt-10 pb-20 lg:pb-24">
      <div className="container-1200">
        <div className="pt-2 pb-12">
          <SemrushLogo />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-[44px] sm:text-[52px] lg:text-[60px] leading-[1.05] font-black tracking-tight text-brand-black">
              Analyze your competitors' website traffic
            </h1>
            <p className="mt-6 text-[18px] leading-relaxed text-text-secondary max-w-[460px]">
              Break down any website's performance across channels, pages, and regions — then beat them at their own game.
            </p>
            <div className="mt-8">
              <CtaButton>Try free for 7 days</CtaButton>
              <p className="mt-3 text-[13px] text-text-secondary">Unlimited access to all Traffic &amp; Market tools</p>
            </div>
          </div>
          <div className="lg:pl-8"><HeroMockup /></div>
        </div>
      </div>
    </section>
  );
}
