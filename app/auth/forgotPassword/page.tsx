import Link from "next/link";
import LayoutLandingPage from "@/app/component/public/layoutLandingPage";
export default function Login(){
    return (
        <LayoutLandingPage>
            <section className="h-screen w-full flex items-center justify-center bg-slate-100">
                <div className="px-8 py-12 rounded-lg shadow-lg border-[0.5px] border-gray-300 bg-white flex flex-col gap-1 w-full max-w-lg">

                        <h1 className="italic text-primary font-bold text-4xl text-center mb-2">Practine</h1>
                        <label className="text-sm" htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder="Masukan email akun anda" className="rounded w-full border-[0.5px] border-gray-400 focus:outline-none px-2 py-1" />
                        <button className="p-1 bg-primary text-white text-center rounded mt-2">Kirim Link</button>
                        <div className="flex justify-between  mt-1">
                            <Link href="/auth/login" className="underline text-gray-500 hover:text-gray-700 text-sm">Kembali Ke Login</Link>
                        </div>
                </div>
            </section>
        </LayoutLandingPage>
    )
}