'use client'
import HeroSection from "./component/public/heroSection";
import Pricing from "./component/public/pricing";
import Features from "./component/public/features";
import LayoutLandingPage from "./component/public/layoutLandingPage";
import { useAuth } from "./lib/useAuth";
export default function Home() {
  useAuth('guest')
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
