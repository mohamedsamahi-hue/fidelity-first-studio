const logos = ["amazon", "TikTok", "shopify", "Grammarly", "Microsoft", "airbnb", "NETFLIX"];

export function TrustedLogos() {
  return (
    <section className="bg-white py-10">
      <div className="container-1200">
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-border-soft" />
          <p className="text-[13px] text-text-muted whitespace-nowrap">28M marketers already use Semrush</p>
          <div className="flex-1 h-px bg-border-soft" />
        </div>
        <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {logos.map((l) => (
            <span key={l} className="text-xl font-bold text-brand-black/70 tracking-tight">{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
