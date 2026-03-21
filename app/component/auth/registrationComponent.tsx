import Link from "next/link";
import LayoutLandingPage from "@/app/component/public/layoutLandingPage";
import RegistrationSteps from "@/app/component/auth/registrationSteps";
export default function RegistrationComponent({children,} : {children : React.ReactNode}){
    return (
        <LayoutLandingPage>
            <section className="h-screen w-full flex items-center justify-center bg-slate-100">
                
                <div className="px-8 py-8 rounded-lg shadow-lg border-[0.5px] border-gray-300 bg-white flex flex-col gap-6 w-full max-w-xl my-4">
                <h1 className="italic text-primary font-bold text-4xl text-center mb-2">Practine</h1>
                <RegistrationSteps/>
                    {children}
                </div>
            </section>
        </LayoutLandingPage>
    )
}