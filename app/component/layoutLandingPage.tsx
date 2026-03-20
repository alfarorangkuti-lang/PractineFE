import NavbarLandingPage from "./navbarLandingPage";
import FooterLandingPage from "./footerLandingPage";

export default function LayoutLandingPage({children,} : {children: React.ReactNode;}) {
  return (
    <section>
        <NavbarLandingPage/>
            <section className="pt-13">
              {children}
            </section>
        <FooterLandingPage />
    </section>
  );
}