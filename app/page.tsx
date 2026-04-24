import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { HomepageNarrative } from "@/components/sections/HomepageNarrative";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { HowIWork } from "@/components/sections/HowIWork";
import { WhyMonarcMadeSection } from "@/components/sections/WhyMonarcMadeSection";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { DeliverySignalsSection } from "@/components/sections/DeliverySignalsSection";
import { CTABlock } from "@/components/sections/CTABlock";
import { getFeaturedWork } from "@/lib/work";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
};

export default async function HomePage() {
  const featuredWork = getFeaturedWork(3);

  return (
    <>
      <Hero />
      <div className="home-page">
        <HomepageNarrative />
        <TrustBar />
        <ServicesGrid />
        <FeaturedWork posts={featuredWork} />
        <HowIWork />
        <WhyMonarcMadeSection />
        <AboutTeaser />
        <DeliverySignalsSection />
        <CTABlock
          eyebrow="Next step"
          title="Scope your next build, migration, or AI rollout"
          description="Bring the constraint—stack, users, timeline, and the metric. You leave with a clear path, a sequenced first step, and what done looks like in practice."
          primaryLabel="Reach out"
          primaryHref="/contact"
          secondaryLabel="Review case studies"
          secondaryHref="/projects"
          trackingPrefix="home_final_cta"
          homeAccent
        />
      </div>
    </>
  );
}
