const logos = ["amazon", "TikTok", "shopify", "Grammarly", "Microsoft", "airbnb", "NETFLIX"];

export function TrustedLogos() {
  return (
    <section className="bg-white py-[60px]">
      <div className="container-1200">
        <div className="flex items-center gap-[10px]">
          <div className="flex-1 h-px bg-core-dark-grey/30" />
          <p className="font-factor text-[16px] font-medium leading-[16px] tracking-[-0.32px] text-core-dark-grey whitespace-nowrap">
            26M marketers already use Semrush
          </p>
          <div className="flex-1 h-px bg-core-dark-grey/30" />
        </div>
        <div className="mt-8 flex justify-between items-center gap-[10px]">
          {logos.map((l) => (
            <span key={l} className="text-xl font-bold text-brand-black tracking-tight">{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
