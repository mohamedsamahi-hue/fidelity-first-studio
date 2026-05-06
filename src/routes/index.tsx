import { createFileRoute } from "@tanstack/react-router";
import { StickyHeader } from "@/components/landing/StickyHeader";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustedLogos } from "@/components/landing/TrustedLogos";
import { BenchmarkTable } from "@/components/landing/BenchmarkTable";
import { FeatureBlock } from "@/components/landing/FeatureBlock";
import { TrafficTrendImg, AiTrafficImg, TrendingPagesImg } from "@/components/landing/FeatureImages";
import { DataStats } from "@/components/landing/DataStats";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { BottomCTA } from "@/components/landing/BottomCTA";
import { AwardsBar } from "@/components/landing/AwardsBar";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Analyze your competitors' website traffic | Semrush Traffic Analytics" },
      { name: "description", content: "Break down any website's performance across channels, pages, and regions — then beat them at their own game." },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-white text-brand-black">
      <StickyHeader />
      <HeroSection />
      <TrustedLogos />
      <BenchmarkTable />
      <FeatureBlock
        title="Monitor any website's traffic"
        bullets={[
          "Track traffic shifts, growth spikes, and performance patterns over time",
          "Compare domains side by side across any market or vertical",
          "Spot time-critical shifts before your competitors react",
        ]}
        image={<TrafficTrendImg />}
        bgClass="bg-core-mint"
      />
      <FeatureBlock
        title="Uncover where competitors win their traffic"
        bullets={[
          "Track performance across AI assistants, organic search, paid search, social, referral, email, and display ads",
          "Reveal where users come from and where they go next",
          "Use competitor insights to strengthen your own channel mix",
        ]}
        image={<AiTrafficImg />}
        bgClass="bg-lavender-light"
        reversed
      />
      <FeatureBlock
        title="Reveal your competitors' best-performing pages"
        bullets={[
          "Spot growing, declining, and newly detected pages across any domain",
          "Analyze top pages with key engagement metrics like visits, time on page, and bounce rate",
          "Track which competitor pages lead in AI traffic and organic visibility",
        ]}
        image={<TrendingPagesImg />}
        bgClass="bg-bg-blue"
      />
      <DataStats />
      <TestimonialSection />
      <BottomCTA />
      <AwardsBar />
      <Footer />
    </main>
  );
}
