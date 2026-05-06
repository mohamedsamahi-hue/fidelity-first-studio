export function TestimonialSection() {
  return (
    <section className="bg-white py-[60px]">
      <div className="container-1200">
        <div className="grid lg:grid-cols-[2fr_3fr] rounded-2xl overflow-hidden">
          {/* Quote side */}
          <div className="bg-brand-black text-white p-10 lg:p-12 flex flex-col justify-between min-h-[320px]">
            <div>
              <div className="text-[48px] leading-none text-lavender font-semibold">"</div>
              <p className="mt-2 text-[22px] lg:text-[26px] leading-[1.35] font-semibold text-white">
                Running a $2.3B marketplace means you can't afford to guess. We need clarity across markets to make the right calls fast."
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-teal-500 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-amber-600 to-amber-800 rounded-full" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Sascha Weber</div>
                <div className="text-[13px] text-text-disabled">Head of SEO, Chrono24</div>
              </div>
            </div>
          </div>
          {/* Stats side */}
          <div className="grid grid-cols-2 grid-rows-2">
            <div className="bg-core-light-grey p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-baseline gap-1">
                <span className="text-brand-black text-2xl font-bold">↑</span>
                <span className="text-[48px] lg:text-[56px] font-semibold text-brand-black leading-none tracking-[-2px]">20%</span>
              </div>
              <p className="mt-3 text-[14px] font-medium text-core-dark-grey leading-relaxed">savings in team time and costs through tool consolidation</p>
            </div>
            <div className="bg-core-light-grey p-8 lg:p-10 flex flex-col justify-center border-l border-white">
              <div className="text-[48px] lg:text-[56px] font-semibold text-brand-black leading-none tracking-[-2px]">49</div>
              <p className="mt-3 text-[14px] font-medium text-core-dark-grey leading-relaxed">international markets monitored from a single dashboard</p>
            </div>
            <div className="bg-core-light-grey p-8 lg:p-10 flex flex-col justify-center col-span-2 border-t border-white relative overflow-hidden">
              <div className="text-[48px] lg:text-[56px] font-semibold text-brand-black leading-none tracking-[-2px]">500K+</div>
              <p className="mt-3 text-[14px] font-medium text-core-dark-grey leading-relaxed">additional monthly visits identified</p>
              <div className="absolute right-0 top-0 bottom-0 w-[200px] lg:w-[300px] flex items-center justify-end overflow-hidden">
                <svg viewBox="0 0 200 200" className="h-full w-auto" preserveAspectRatio="none">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <line key={i} x1={60 + i * 7} y1="0" x2={i * 7} y2="200" stroke="#18F0BF" strokeWidth="3" opacity="0.7" />
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
