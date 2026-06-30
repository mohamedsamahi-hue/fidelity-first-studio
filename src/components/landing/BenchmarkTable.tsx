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
    <section className="bg-white pt-[120px] pb-[60px] text-left">
      <div className="container-1200">
        <div className="text-center mb-[90px]">
          <h2 className="font-semibold uppercase tracking-[-1.84px] text-[46px] leading-[100%] text-brand-black max-xl:text-[36px] max-xl:tracking-[-1.44px]">
            Benchmark your platform against industry leaders
          </h2>
          <p className="mt-8 text-[18px] font-medium leading-[150%] tracking-[-0.36px] text-core-dark-grey">
            Get a full breakdown for any platform.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-2 gap-y-3 mb-8">
          {tabs.map((t) => {
            const isActive = t === active;
            return (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`rounded-[30px] px-5 pt-2 pb-[6px] font-factor text-[14px] font-medium leading-[150%] transition-colors duration-300 border cursor-pointer
                  ${isActive ? "bg-lavender border-lavender text-brand-black" : "bg-white border-brand-black text-brand-black hover:bg-lavender hover:border-lavender"}`}
              >
                {t}
              </button>
            );
          })}
        </div>

        <div className="border border-border-table rounded-[6px] p-8 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-table">
                <th className="text-left text-[21px] font-semibold leading-[150%] tracking-[-0.32px] px-[10px] py-[14px] pl-0">Domain</th>
                <th className="text-right text-[21px] font-semibold leading-[150%] tracking-[-0.32px] px-[10px] py-[14px] min-w-[155px]">Visits</th>
                <th className="text-right text-[21px] font-semibold leading-[150%] tracking-[-0.32px] px-[10px] py-[14px] min-w-[218px]">Desktop Share</th>
                <th className="text-right text-[21px] font-semibold leading-[150%] tracking-[-0.32px] px-[10px] py-[14px] min-w-[155px]">MoM</th>
                <th className="text-right text-[21px] font-semibold leading-[150%] tracking-[-0.32px] px-[10px] py-[14px] min-w-[155px]">YoY</th>
                <th className="text-right text-[21px] font-semibold leading-[150%] tracking-[-0.32px] px-[10px] py-[14px] min-w-[218px] pr-0">Main Traffic Source</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.domain} className={`${i < rows.length - 1 ? "border-b border-border-table" : ""}`}>
                  <td className="text-left px-[10px] py-[14px] pl-0">
                    <span className="font-medium text-[16px] tracking-[-0.32px] text-brand-black">{r.domain}</span>
                  </td>
                  <td className="text-right px-[10px] py-[14px] text-[16px]">
                    <div className="flex flex-col items-end"><span className="text-text-disabled text-xs">{r.visits.sub}</span><span className="text-brand-black">{r.visits.main}</span></div>
                  </td>
                  <td className="text-right px-[10px] py-[14px] text-[16px]">
                    <div className="flex flex-col items-end"><span className="text-text-disabled text-xs">{r.desktop.sub}</span><span className="text-brand-black">{r.desktop.main}</span></div>
                  </td>
                  <td className="text-right px-[10px] py-[14px]"><Trend value={r.mom} /></td>
                  <td className="text-right px-[10px] py-[14px]"><Trend value={r.yoy} /></td>
                  <td className="text-right px-[10px] py-[14px] pr-0 text-brand-black text-[16px]">{r.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-8">
          <CtaButton variant="black">Get free for 7 days</CtaButton>
        </div>
      </div>
    </section>
  );
}
