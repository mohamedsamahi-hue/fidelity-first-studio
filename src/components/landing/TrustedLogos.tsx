const logos = ["zentro", "ClipUp", "stocket", "Wordlight", "Pixelsoft", "nestio", "STREAMR"];

export function TrustedLogos() {
  return (
    <section className="bg-white py-[60px] overflow-hidden">
      <div className="container-1200">
        <div className="flex items-center gap-[10px]">
          <div className="flex-1 h-px bg-core-dark-grey/30" />
          <p className="font-factor text-center text-[13px] sm:text-[16px] font-medium leading-[130%] tracking-[-0.32px] text-core-dark-grey">
            26M marketers already use Trafliq
          </p>
          <div className="flex-1 h-px bg-core-dark-grey/30" />
        </div>
      </div>

      <div className="mt-8 marquee-mask">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center gap-10 sm:gap-16 pr-10 sm:pr-16" aria-hidden={dup === 1}>
              {logos.map((l) => (
                <span
                  key={l}
                  className="whitespace-nowrap text-xl font-bold tracking-tight text-brand-black/70 transition-colors duration-300 hover:text-brand-black"
                >
                  {l}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
