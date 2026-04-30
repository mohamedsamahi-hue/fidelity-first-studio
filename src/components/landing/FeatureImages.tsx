export function TrafficTrendImg() {
  return (
    <svg viewBox="0 0 480 280" className="w-full h-auto">
      <text x="0" y="20" fontSize="14" fontWeight="700" fill="#181E15">Traffic channel trend</text>
      <g stroke="#EAEAEA"><line x1="40" y1="60" x2="480" y2="60"/><line x1="40" y1="120" x2="480" y2="120"/><line x1="40" y1="180" x2="480" y2="180"/><line x1="40" y1="240" x2="480" y2="240"/></g>
      <g fontSize="10" fill="#9EA5B4"><text x="0" y="64">10M</text><text x="5" y="124">5M</text><text x="5" y="184">2M</text><text x="15" y="244">0</text></g>
      <path d="M40,80 C140,75 240,85 340,70 S480,55 480,55" stroke="#3B82F6" strokeWidth="2.5" fill="none"/>
      <path d="M40,150 C140,140 240,135 340,120 S480,100 480,100" stroke="#F59E0B" strokeWidth="2.5" fill="none"/>
      <path d="M40,180 C140,178 240,175 340,170 S480,168 480,170" stroke="#A78BFA" strokeWidth="2.5" fill="none"/>
      <path d="M40,200 C140,195 240,205 340,190 S480,200 480,195" stroke="#10B981" strokeWidth="2.5" fill="none"/>
      <path d="M40,230 C140,232 240,230 340,235 S480,233 480,238" stroke="#FBBF24" strokeWidth="2.5" fill="none"/>
    </svg>
  );
}

export function AiTrafficImg() {
  return (
    <div>
      <h4 className="text-sm font-bold text-brand-black mb-3">AI Traffic</h4>
      <svg viewBox="0 0 480 240" className="w-full h-auto">
        <g fontSize="11" fill="#9EA5B4">
          {["ChatGPT","Perplexity","Gemini","Claude","Copilot"].map((l,i)=>(
            <text key={l} x="0" y={30+i*42}>{l}</text>
          ))}
        </g>
        {[320, 240, 180, 130, 90].map((w,i)=>(
          <g key={i}>
            <rect x="80" y={18+i*42} width="380" height="14" rx="7" fill="#F3F0FF"/>
            <rect x="80" y={18+i*42} width={w} height="14" rx="7" fill="#A78BFA"/>
            <text x={88+w} y={29+i*42} fontSize="11" fill="#181E15" fontWeight="600">{(w*4)+"K"}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function TrendingPagesImg() {
  return (
    <div>
      <h4 className="text-sm font-bold text-brand-black mb-4">Trending Pages</h4>
      <div className="grid grid-cols-3 gap-4">
        {[
          ["13.9K","Growing","#11AA88"],
          ["20.6K","Top","#3B82F6"],
          ["1.3K","New","#FF642D"],
        ].map(([n,l,c])=>(
          <div key={l} className="rounded-xl bg-bg-blue p-4">
            <div className="text-2xl font-black text-brand-black">{n}</div>
            <div className="text-xs mt-1" style={{color:c}}>{l}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-2">
        {["/pricing","/features/ai","/blog/seo-trends","/integrations"].map((p,i)=>(
          <div key={p} className="flex items-center justify-between text-xs py-2 border-b border-border-soft">
            <span className="text-brand-black">{p}</span>
            <span className="text-positive">↑ {(12-i*2).toFixed(1)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
