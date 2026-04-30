export function DataStats() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container-1200">
        <h2 className="text-center font-black uppercase tracking-[0.04em] text-[28px] sm:text-[32px] leading-[1.15] text-brand-black max-w-3xl mx-auto">
          Data you can trust to drive results
        </h2>
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          <Stat value="190" label="regions & countries" />
          <Stat value="3B" label="events analyzed per day" />
          <Stat value="20+" label="AI assistants analyzed for traffic" />
          <Stat value="DAILY & WEEKLY" label="updates" small />
          <div className="col-span-2 lg:col-span-2">
            <Stat value="520TB" label="of raw traffic data" hero />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label, hero, small }: { value: string; label: string; hero?: boolean; small?: boolean }) {
  return (
    <div>
      <div className={`font-black text-brand-black leading-none ${hero ? "text-[80px] lg:text-[110px]" : small ? "text-[32px] lg:text-[40px]" : "text-[56px] lg:text-[72px]"}`}>
        {value}
      </div>
      <div className="mt-3 text-[15px] text-text-secondary">{label}</div>
    </div>
  );
}
