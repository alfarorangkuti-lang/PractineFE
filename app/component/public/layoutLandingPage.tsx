import NavbarLandingPage from "./navbarLandingPage";
import { getUser } from "@/app/lib/api";
import FooterLandingPage from "./footerLandingPage";
import { useState } from "react";

export default function LayoutLandingPage({children,} : {children: React.ReactNode;}) {
  return (
    <section>
        <NavbarLandingPage/>
            <section className="pt-13 min-h-screen bg-gray-100">
              {children}
            </section>
        <FooterLandingPage />
    </section>
  );
}