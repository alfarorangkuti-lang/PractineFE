'use client'
import HeroSection from "./component/heroSection";
import Pricing from "./component/pricing";
import Features from "./component/features";
import LayoutLandingPage from "./component/layoutLandingPage";
export default function Home() {
  return (
    <div>
      <LayoutLandingPage>
        <HeroSection />
        <Features />
        <Pricing />
      </LayoutLandingPage>
    </div>
  );
}
