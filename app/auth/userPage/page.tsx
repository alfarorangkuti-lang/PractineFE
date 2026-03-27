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
        <div className="w-1/6 min-h-screen my-4 border-r-[0.5px] border-gray-300 flex flex-col p-6 gap-2">
            <Link href='' className="hover:underline text-sm text-gray-700">Akun Anda</Link>
            <Link href='' className="hover:underline text-sm text-gray-700">Paket Langganan</Link>
        </div>
        <div className="w-5/6 flex flex-col gap-2 mx-4">
            <div className=" mt-10 h-fit p-6 bg-white/45 border-[0.5px] border-gray-300 rounded-md">
                <h1 className="text-2xl font-bold mb-6">Profil</h1>

                <div className="space-y-4">
                    <div>
                        <p className="text-sm text-gray-500">Nama Lengkap</p>
                        <p className="text-sm font-medium">{user?.name}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Nama Bisnis</p>
                        <p className="text-sm font-medium">{user?.business_name}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-sm font-medium">{user?.email}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Tanggal Bergabung</p>
                        <p className="text-sm font-medium">
                            {new Date(tanggal || "").toLocaleDateString("id-ID", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                        </p>
                    </div>
                </div>
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