export function DataStats() {
  return (
    <section className="bg-white pt-[60px] pb-[120px]">
      <div className="container-1200">
        <h2 className="text-left font-semibold uppercase tracking-[-1.84px] text-[46px] leading-[100%] text-brand-black mb-[60px] max-xl:text-[36px] max-xl:tracking-[-1.44px]">
          Data you can trust to drive results
        </h2>
        <div className="grid grid-cols-6 gap-3 max-lg:grid-cols-1">
          <StatCard value="28190" label="regions & countries" className="col-span-2 max-lg:col-span-1" bg="lavender" />
          <StatCard value="3B" label="events analyzed per day" className="col-span-2 max-lg:col-span-1" bg="mint" />
          <StatCard value="20+" label="AI assistants analyzed for traffic" className="col-span-2 max-lg:col-span-1" bg="lavender" />
          <StatCard value="DAILY & WEEKLY" label="updates" className="col-span-3 max-lg:col-span-1" bg="mint" small />
          <StatCard value="520TB" label="of raw traffic data" className="col-span-3 max-lg:col-span-1" bg="lavender" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, small, className, bg }: { value: string; label: string; small?: boolean; className?: string; bg: "lavender" | "mint" }) {
  return (
    <div className={`rounded-[8px] p-6 text-left flex flex-col justify-between gap-4 ${bg === "lavender" ? "bg-lavender-light" : "bg-core-mint"} ${className}`}>
      <div className={`font-semibold text-brand-black leading-[100%] ${small ? "text-[50px] tracking-[-2px] uppercase max-md:text-[64px] max-md:tracking-[-2.56px]" : "text-[110px] tracking-[-4.4px] max-xl:text-[90px] max-lg:text-[110px] max-md:text-[64px] max-md:tracking-[-2.56px]"}`}>
        {value}
      </div>
      <div className="text-[18px] font-medium leading-[150%] tracking-[-0.36px] text-core-dark-grey">{label}</div>
    </div>
  );
}
