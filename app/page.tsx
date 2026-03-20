import Image from "next/image";
import NavbarLandingPage from "./component/navbarLandingPage";
import HeroSection from "./component/heroSection";
import Pricing from "./component/pricing";
import FooterLandingPage from "./component/footerLandingPage";
import Features from "./component/features";
export default function Home() {
  return (
    <div>
      <NavbarLandingPage />
      <HeroSection />
      <Features />
      <Pricing />
      <FooterLandingPage/>
    </div>
  );
}
