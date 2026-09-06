import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { CompareSlider } from "@/components/compare-slider";
import { PracticeModes } from "@/components/practice-modes";
import { ChallengesPreview } from "@/components/challenges-preview";
import { Community } from "@/components/community";
import { FinalCta } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <HowItWorks />
        <CompareSlider />
        <PracticeModes />
        <ChallengesPreview />
        <Community />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
