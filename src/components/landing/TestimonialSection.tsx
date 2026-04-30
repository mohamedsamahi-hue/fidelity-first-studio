export function TestimonialSection() {
  return (
    <section className="bg-white py-12">
      <div className="container-1200">
        <div className="grid lg:grid-cols-[2fr_3fr] rounded-2xl overflow-hidden border border-border-soft">
          <div className="bg-brand-black text-white p-10 lg:p-12 relative">
            <div className="text-[64px] leading-none text-brand-orange font-serif">"</div>
            <p className="mt-2 text-[17px] leading-[1.6] text-white">
              Running a $2.3B marketplace means you can't afford to guess. We need clarity across markets to make the right calls fast.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-orange to-pink-400" />
              <div>
                <div className="text-sm font-bold text-white">Sascha Weber</div>
                <div className="text-[13px] text-text-disabled">Head of CRM, Chrono24</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 lg:p-12 grid sm:grid-cols-2 gap-8">
            <div className="sm:col-span-2">
              <div className="flex items-baseline gap-2">
                <span className="text-positive text-3xl">↑</span>
                <span className="text-[44px] font-black text-brand-black leading-none">20%</span>
              </div>
              <p className="mt-3 text-[14px] text-text-secondary">savings in team time and costs through tool consolidation</p>
            </div>
            <div>
              <div className="text-[44px] font-black text-brand-black leading-none">49</div>
              <p className="mt-3 text-[14px] text-text-secondary">international markets monitored from a single dashboard</p>
            </div>
            <div>
              <div className="text-[44px] font-black text-brand-black leading-none">500K+</div>
              <p className="mt-3 text-[14px] text-text-secondary">additional monthly visits identified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
