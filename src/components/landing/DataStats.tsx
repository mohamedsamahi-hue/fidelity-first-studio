export function DataStats() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container-1200">
        <h2 className="font-black uppercase tracking-[0.04em] text-[28px] sm:text-[32px] leading-[1.15] text-brand-black max-w-3xl">
          Data you can trust to drive results
        </h2>
        <div className="mt-10 grid grid-cols-3 gap-4">
          <StatCard value="28190" label="regions & countries" />
          <StatCard value="3B" label="events analyzed per day" />
          <StatCard value="20+" label="AI assistants analyzed for traffic" />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <StatCard value="DAILY & WEEKLY" label="updates" small />
          <StatCard value="520TB" label="of raw traffic data" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, small }: { value: string; label: string; small?: boolean }) {
  return (
    <div className="bg-bg-teal rounded-2xl p-8 lg:p-10">
      <div className={`font-black text-brand-black leading-none ${small ? "text-[32px] lg:text-[44px]" : "text-[48px] lg:text-[72px]"}`}>
        {value}
      </div>
      <div className="mt-4 text-[15px] text-text-secondary">{label}</div>
    </div>
  );
}
