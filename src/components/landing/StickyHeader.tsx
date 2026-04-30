import { useEffect, useState } from "react";
import { SemrushLogo } from "./SemrushLogo";
import { CtaButton } from "./CtaButton";

export function StickyHeader() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const onScroll = () => setActive(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-border-soft transition-all duration-300
        ${active ? "translate-y-0 opacity-100 shadow-[0_2px_12px_rgba(0,0,0,0.08)]" : "-translate-y-full opacity-0"}`}
    >
      <div className="container-1200 flex items-center justify-between h-[60px]">
        <SemrushLogo />
        <CtaButton className="!py-2 !px-6 text-sm">Try free for 7 days</CtaButton>
      </div>
    </header>
  );
}
