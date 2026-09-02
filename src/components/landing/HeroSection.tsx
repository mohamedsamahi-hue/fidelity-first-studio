import { SemrushLogo } from "./SemrushLogo";
import { CtaButton } from "./CtaButton";
import { HeroMockup } from "./HeroMockup";

export function HeroSection() {
  return (
    <section className="hero-gradient pt-0 pb-[96px] relative">
      <div className="container-1200 relative z-[1]">
        <div className="py-[26px]">
          <SemrushLogo />
        </div>
        <div className="mt-[87px] flex items-center justify-between gap-3 max-lg:flex-col max-lg:mt-10 max-lg:gap-[50px] max-lg:text-center">
          <div className="w-full max-w-[580px]">
            <h1 className="text-[64px] font-semibold leading-[110%] tracking-[-2.56px] text-brand-black max-xl:text-[56px] max-xl:tracking-[-1.6px] max-sm:text-[40px]">
              Measure your rivals' inbound website traffic
            </h1>
            <p className="mt-6 text-[24px] font-medium leading-[120%] tracking-[-0.48px] text-core-dark-grey max-w-[460px] max-lg:mx-auto max-lg:text-[18px]">
              Decode any platform's performance across channels, pages, and regions — then top them at their own arena.
            </p>
            <div className="mt-8">
              <CtaButton>Get free for 7 days</CtaButton>
              <p className="mt-4 text-[14px] font-medium leading-[150%] tracking-[-0.28px] text-core-dark-grey">
                Unlimited access to all Insight &amp; Market suites
              </p>
            </div>
          </div>
          <div className="w-full max-w-[680px] max-xl:max-w-[600px] max-lg:max-w-[710px]">
            <div className="rounded-[20px] border-[1.3px] border-white bg-[linear-gradient(0deg,rgba(108,110,121,0.1)_0%,rgba(209,210,213,0.1)_100%)] backdrop-blur-[26px] p-3">
              <div className="bg-white rounded-[14px]">
                <HeroMockup />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
