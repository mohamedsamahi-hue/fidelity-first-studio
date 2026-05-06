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
      className={`fixed left-0 right-0 z-[1000] bg-core-mint py-[10px] transition-all duration-300
        ${active ? "top-0" : "top-[-90px]"}`}
    >
      <div className="container-1200 flex items-center justify-between">
        <SemrushLogo />
        <CtaButton variant="black" className="!h-[53px] !min-h-[53px] !text-[14px] !tracking-[-0.28px]">
          Try free for 7 days
        </CtaButton>
      </div>
    </header>
  );
}
