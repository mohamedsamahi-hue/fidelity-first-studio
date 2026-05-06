const awards = [
  "#1 SEO TOOL",
  "#1 AEO TOOL",
  "#1 COMPETITIVE INTELLIGENCE TOOL",
  "Best Software Products 2026",
  "Best Global Software Companies 2026",
];

function Badge() {
  return (
    <svg width="50" height="54" viewBox="0 0 50 54" fill="none">
      <path d="M5 0H45C47.7614 0 50 2.23858 50 5V54L25 42L0 54V5C0 2.23858 2.23858 0 5 0Z" fill="#C0C4AC"/>
      <text x="25" y="22" textAnchor="middle" fontSize="10" fontWeight="800" fill="#181E15">G2</text>
      <text x="25" y="34" textAnchor="middle" fontSize="7" fontWeight="600" fill="#181E15">LEADER</text>
    </svg>
  );
}

export function AwardsBar() {
  return (
    <section className="bg-brand-black py-12">
      <div className="container-1200">
        <div className="grid grid-cols-5 gap-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {awards.map((label) => (
            <div key={label} className="flex items-start gap-3 py-[22px] pr-[14px] text-left">
              <Badge />
              <span className="text-[14px] font-semibold leading-[100%] uppercase text-white">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
