"use client"
import LayoutLandingPage from "@/app/component/public/layoutLandingPage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/lib/useAuth";
import { logout } from "@/app/lib/api";
interface User{
        name: string;
        business_name: string;
        created_at: string | Date;
        email: string;
    }

export default function UserPage() {
    const {user, mutateUser} = useAuth({middleware:'auth'})
    const router = useRouter()

    let tanggal = user?.created_at

    const handleLogout = async() => {
        const res = await logout()
        if (res.message) {
            localStorage.removeItem("token")
            await mutateUser(null, false)
            router.push('/auth/login')
        }
    }
    return (
        <LayoutLandingPage>
        <div className="flex gap-2 h-full">
        <div className="w-1/6 min-h-screen my-4 border-r-[0.5px] border-gray-300 hidden md:flex flex-col p-6 gap-2">
            <h1 className="text-lg font-semibold">Informasi Akun & Langganan</h1>
            <Link href='' className="hover:bg-gray-200 text-sm text-gray-700 border-l border-r-gray-300 pl-2 py-1">Akun Anda</Link>
            <Link href='' className="hover:bg-gray-200 text-sm text-gray-700 border-l border-r-gray-300 pl-2 py-1">Paket Langganan</Link>
        </div>

        <div className="w-full md:w-5/6 flex flex-col gap-2 mx-4">
            <h1 className="mt-10 text-2xl font-semibold tracking-wide">Akun {user?.name}</h1>
            <div className=" grid md:grid-cols-2 gap-2">
            <div className=" bg-gray-200 border-[0.5px] border-gray-300 rounded-lg">
                <h1 className="text-md tracking-tight text-gray-600 w-full px-4">Profil</h1>
                <div className="h-27 space-y-2 grid grid-cols-2 px-4 rounded-lg border-gray-300 border-t pt-2 bg-white/75">
                    <div>
                        <p className="text-sm text-gray-500">Nama Lengkap</p>
                        <p className="text-sm font-medium text-gray-700">{user?.name}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Nama Bisnis</p>
                        <p className="text-sm font-medium text-gray-700">{user?.business_name}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-sm font-medium text-gray-700">{user?.email}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Tanggal Bergabung</p>
                        <p className="text-sm font-medium text-gray-700">
                            {new Date(tanggal || "").toLocaleDateString("id-ID", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                        </p>
                    </div>
                </div>
            </div>

            <div className=" bg-gray-200 border-[0.5px] border-gray-300 rounded-lg ">
                <h1 className="text-md tracking-tight text-gray-600 w-full px-4">Masa berlaku langganan</h1>
                <div className="h-27 items-center grid grid-cols-2 px-4 rounded-lg border-gray-300 border-t pt-2 bg-white/75">
                    <div>
                        <p className="text-sm text-center text-gray-500">Dibayar pada</p>
                        <p className="text-lg text-center font-medium text-gray-700">{new Date(user?.payment_history[0]?.created_at || "").toLocaleDateString("id-ID", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}</p>
                    </div>

                    <div className="border-l border-gray-300">
                        <p className="text-sm text-center text-gray-500">Berakhir pada</p>
                        <p className="text-lg text-center font-medium text-gray-700">{new Date(user?.payment_history[0]?.expired_at || "").toLocaleDateString("id-ID", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}</p>
                    </div>
                </div>
            </div>

            </div>
            <div className=" h-120 p-6 bg-white/45 border-[0.5px] border-gray-300 rounded-md">
            </div>
            <div className="w-full border-[0.5px] border-gray-300 p-3 rounded-md flex gap-2 bg-white/85 opacity-80">
                <button onClick={() => handleLogout()} className="hover:opacity-85 cursor-pointer border-[0.5px] text-white bg-red-500 text-sm px-2 py-1 rounded-md">Logout</button>                
                <button className="border-[0.5px] text-white bg-black text-sm px-2 py-1 rounded-md">Lupa Password</button>                
            </div>
        </div>
        </div>
        </LayoutLandingPage>

    )
}