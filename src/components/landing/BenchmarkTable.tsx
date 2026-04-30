import { useState } from "react";
import { CtaButton } from "./CtaButton";

const tabs = ["Education", "Telecom", "Retail", "Entertainment", "Software & Development"];

type Row = {
  domain: string;
  visits: { sub: string; main: string };
  desktop: { sub: string; main: string };
  mom: number | null;
  yoy: number | null;
  source: string;
};

const data: Record<string, Row[]> = {
  Education: [
    { domain: "coursera.org", visits: { sub: "0.7%", main: "78.2M" }, desktop: { sub: "62%", main: "48.5M" }, mom: 4.2, yoy: 12.8, source: "Organic Search" },
    { domain: "khanacademy.org", visits: { sub: "0.5%", main: "62.4M" }, desktop: { sub: "55%", main: "34.3M" }, mom: -1.1, yoy: 5.6, source: "Direct" },
    { domain: "duolingo.com", visits: { sub: "1.1%", main: "120.8M" }, desktop: { sub: "30%", main: "36.2M" }, mom: 2.8, yoy: 18.4, source: "Direct" },
    { domain: "udemy.com", visits: { sub: "0.4%", main: "55.1M" }, desktop: { sub: "70%", main: "38.6M" }, mom: -0.9, yoy: -3.2, source: "Organic Search" },
    { domain: "edx.org", visits: { sub: "0.2%", main: "21.7M" }, desktop: { sub: "65%", main: "14.1M" }, mom: 1.4, yoy: null, source: "Referral" },
  ],
  Telecom: [
    { domain: "verizon.com", visits: { sub: "0.6%", main: "94.2M" }, desktop: { sub: "58%", main: "54.6M" }, mom: 1.8, yoy: 6.2, source: "Direct" },
    { domain: "att.com", visits: { sub: "0.5%", main: "82.5M" }, desktop: { sub: "60%", main: "49.5M" }, mom: -0.4, yoy: 3.1, source: "Direct" },
    { domain: "t-mobile.com", visits: { sub: "0.4%", main: "68.9M" }, desktop: { sub: "52%", main: "35.8M" }, mom: 3.2, yoy: 9.6, source: "Organic Search" },
  ],
  Retail: [
    { domain: "amazon.com", visits: { sub: "5.2%", main: "2.4B" }, desktop: { sub: "55%", main: "1.3B" }, mom: 2.1, yoy: 8.4, source: "Direct" },
    { domain: "walmart.com", visits: { sub: "1.4%", main: "640M" }, desktop: { sub: "48%", main: "307M" }, mom: 1.2, yoy: 5.8, source: "Organic Search" },
    { domain: "target.com", visits: { sub: "0.5%", main: "210M" }, desktop: { sub: "52%", main: "109M" }, mom: -1.6, yoy: 2.4, source: "Direct" },
  ],
  Entertainment: [
    { domain: "netflix.com", visits: { sub: "1.0%", main: "420M" }, desktop: { sub: "65%", main: "273M" }, mom: 0.8, yoy: 4.5, source: "Direct" },
    { domain: "disneyplus.com", visits: { sub: "0.3%", main: "118M" }, desktop: { sub: "58%", main: "68M" }, mom: -2.1, yoy: -5.2, source: "Direct" },
    { domain: "hulu.com", visits: { sub: "0.2%", main: "82M" }, desktop: { sub: "60%", main: "49M" }, mom: 1.5, yoy: null, source: "Direct" },
  ],
  "Software & Development": [
    { domain: "github.com", visits: { sub: "1.2%", main: "510M" }, desktop: { sub: "78%", main: "397M" }, mom: 3.4, yoy: 14.2, source: "Direct" },
    { domain: "stackoverflow.com", visits: { sub: "0.8%", main: "318M" }, desktop: { sub: "82%", main: "260M" }, mom: -2.4, yoy: -8.6, source: "Organic Search" },
    { domain: "gitlab.com", visits: { sub: "0.2%", main: "62M" }, desktop: { sub: "75%", main: "46M" }, mom: 1.1, yoy: 4.2, source: "Direct" },
  ],
};

function Trend({ value }: { value: number | null }) {
  if (value === null) return <span className="text-text-disabled">—</span>;
  const positive = value >= 0;
  return (
    <span className={`inline-flex items-center gap-1 ${positive ? "text-positive" : "text-negative"}`}>
      <svg width="10" height="12" viewBox="0 0 10 12" className={positive ? "" : "rotate-180"}>
        <path d="M5 0L10 10H0L5 0Z" fill="currentColor" />
      </svg>
      {Math.abs(value).toFixed(1)}%
    </span>
  );
}

export function BenchmarkTable() {
  const [active, setActive] = useState("Education");
  const rows = data[active];
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container-1200">
        <h2 className="text-center font-black uppercase tracking-[0.04em] text-[28px] sm:text-[34px] leading-[1.15] text-brand-black max-w-3xl mx-auto">
          Benchmark your website against industry leaders
        </h2>
        <p className="text-center mt-3 text-[16px] text-text-secondary">Get a full analysis for any website.</p>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => {
            const isActive = t === active;
            return (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`rounded-full px-[18px] py-[7px] text-sm font-medium transition-colors border-[1.5px]
                  ${isActive ? "bg-white border-brand-black text-brand-black" : "bg-transparent border-tab-border text-text-muted hover:text-brand-black"}`}
              >
                {t}
              </button>
            );
          })}
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-bg-gray text-text-muted uppercase text-[12px] tracking-[0.08em]">
                <th className="px-4 py-3 font-medium">Domain</th>
                <th className="px-4 py-3 font-medium">Visits</th>
                <th className="px-4 py-3 font-medium">Desktop Share</th>
                <th className="px-4 py-3 font-medium">MoM</th>
                <th className="px-4 py-3 font-medium">YoY</th>
                <th className="px-4 py-3 font-medium">Main Traffic Source</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.domain} className="border-b border-border-soft h-[52px] text-sm">
                  <td className="px-4 py-3">
                    <a href="#" className="text-brand-black hover:text-brand-orange hover:underline font-medium">{r.domain}</a>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col"><span className="text-text-muted text-xs">{r.visits.sub}</span><span className="text-brand-black">{r.visits.main}</span></div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col"><span className="text-text-muted text-xs">{r.desktop.sub}</span><span className="text-brand-black">{r.desktop.main}</span></div>
                  </td>
                  <td className="px-4 py-3"><Trend value={r.mom} /></td>
                  <td className="px-4 py-3"><Trend value={r.yoy} /></td>
                  <td className="px-4 py-3 text-brand-black">{r.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton variant="black">Try free for 7 days</CtaButton>
        </div>
      </div>
    </section>
  );
}
