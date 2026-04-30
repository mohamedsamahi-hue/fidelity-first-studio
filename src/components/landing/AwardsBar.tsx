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
    <section className="bg-brand-black py-10">
      <div className="container-1200">
        <div className="flex flex-wrap justify-center items-start gap-x-12 gap-y-6">
          {awards.map((label) => (
            <div key={label} className="flex flex-col items-center gap-2 max-w-[140px]">
              <Badge />
              <span className="text-[11px] text-white text-center leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
