'use client'
import HeroSection from "./component/public/heroSection";
import Pricing from "./component/public/pricing";
import Features from "./component/public/features";
import LayoutLandingPage from "./component/public/layoutLandingPage";
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
