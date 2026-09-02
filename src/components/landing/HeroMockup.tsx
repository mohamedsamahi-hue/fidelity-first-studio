export function HeroMockup() {
  return (
    <div className="relative rounded-[14px] bg-white p-6 sm:p-7">

      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg font-bold text-brand-black flex-1">Channel traffic mixer</h3>
        <div className="flex items-center gap-2 rounded-full border border-border-soft px-3 py-1.5">
          <span className="w-5 h-5 rounded-full bg-brand-orange text-white text-xs flex items-center justify-center font-bold">+</span>
          <span className="text-sm text-brand-black">yourcontender.com</span>
        </div>
      </div>
      <div className="grid grid-cols-[2fr_1fr] gap-4">
        <div className="relative h-[260px]">
          <svg viewBox="0 0 400 240" className="w-full h-full">
            <g stroke="#EAEAEA" strokeWidth="1">
              {[0, 60, 120, 180, 240].map((y) => <line key={y} x1="40" y1={y + 10} x2="400" y2={y + 10} />)}
            </g>
            <g fontSize="10" fill="#9EA5B4" fontFamily="DM Sans">
              <text x="0" y="14">10M</text>
              <text x="5" y="74">5M</text>
              <text x="5" y="134">3M</text>
              <text x="5" y="174">2M</text>
              <text x="5" y="214">1M</text>
              <text x="15" y="244">0</text>
            </g>
            <path d="M40,60 C100,55 160,65 220,50 S340,40 400,45" stroke="#3B82F6" strokeWidth="2.5" fill="none"/>
            <path d="M40,140 C100,135 160,130 220,115 S340,100 400,90" stroke="#F59E0B" strokeWidth="2.5" fill="none"/>
            <path d="M40,160 C100,158 160,155 220,150 S340,148 400,150" stroke="#A78BFA" strokeWidth="2.5" fill="none"/>
            <path d="M40,180 C100,175 160,185 220,170 S340,180 400,175" stroke="#10B981" strokeWidth="2.5" fill="none"/>
            <path d="M40,210 C100,212 160,210 220,215 S340,213 400,218" stroke="#FBBF24" strokeWidth="2.5" fill="none"/>
          </svg>
          <div className="flex flex-wrap gap-3 text-xs text-brand-black mt-2">
            {[
              ["#3B82F6", "Direct"],
              ["#F59E0B", "Search"],
              ["#A78BFA", "AI traffic"],
              ["#10B981", "Social"],
              ["#FBBF24", "Paid"],
            ].map(([c, l]) => (
              <span key={l} className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{background: c}}/>{l}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="text-3xl font-black text-brand-black mb-3">19M</div>
          <div className="space-y-2">
            {[
              ["Search", "10M", "#3B82F6", "100%"],
              ["Direct", "5M", "#F59E0B", "50%"],
              ["AI traffic", "2.5M", "#A78BFA", "25%"],
              ["Social", "2M", "#10B981", "20%"],
              ["Paid", "0.5M", "#FBBF24", "5%"],
            ].map(([label, val, color, w]) => (
              <div key={label}>
                <div className="flex justify-between text-xs text-brand-black mb-1">
                  <span>{label}</span><span>{val}</span>
                </div>
                <div className="h-1.5 bg-bg-gray rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{background: color, width: w}}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
