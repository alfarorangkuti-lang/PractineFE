'use client'
import RegistrationComponent from "@/app/component/auth/registrationComponent"
import { useAuth } from "@/app/lib/useAuth"
import { useRouter } from "next/navigation"
import { logout } from "@/app/lib/api"
import Link from "next/link"
export default function Verification(){
    useAuth("auth")
    const router = useRouter()
    const handleLogout = async () => {
        const res = await logout()
        if (res.success) {
            localStorage.removeItem('token')
            router.push('/auth/login')
        }
    }

    return (
        <RegistrationComponent>
            <div className="flex flex-col gap-2">
                <p className="text-center">Silahkan cek email anda untuk melanjutkan</p>
                <button className="cursor-pointer p-2 bg-primary text-white rounded-lg">Kirim Ulang Email</button>
                <button onClick={() => handleLogout()} className="cursor-pointer p-2 bg-primary text-white rounded-lg">Logout</button>
            </div>
        </RegistrationComponent>
        
    )
}