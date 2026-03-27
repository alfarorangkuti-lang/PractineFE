'use client'
import RegistrationComponent from "@/app/component/auth/registrationComponent"
import { useAuth } from "@/app/lib/useAuth"
import { resendEmailVerification } from "@/app/lib/api"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { logout } from "@/app/lib/api"
import Link from "next/link"
export default function Verification(){
    const [message, setMessage] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [loadingEmail, setLoadingEmail] = useState<boolean>(false)
    const router = useRouter()
    const {mutateUser} = useAuth({middleware:'auth'})

    const handleResendEmail = async() => {
        setLoadingEmail(true)
        try {
            const data = await resendEmailVerification()
            const res = await data.message
            if (res) {
                setMessage(res)                
            }
        } catch (err:any) {
            setMessage(err.response.data.error)
        }
        setLoadingEmail(false)

    }

    const handleLogout = async () => {
        setLoading(true)
        const res = await logout()
        if (res.success) {
            localStorage.removeItem('token')
            await mutateUser(null, false)
            router.push('/auth/login')
        }
        setLoading(false)
    }

    return (
        <RegistrationComponent>
            <div className="flex flex-col gap-2">
                <p className="text-center">Silahkan cek email anda untuk melanjutkan</p>
                <p className={`${message ? 'text-center text-green-500' :'hidden'}`}>{message}</p>
                <button onClick={() => handleResendEmail()} disabled={loadingEmail} className={`${loadingEmail ? 'disabled text-gray-400 opacity-80' : 'cursor-pointer'} hover:opacity-80 p-2 bg-primary text-white rounded-lg`}>{loadingEmail ? 'Loading...' : 'Kirim Ulang Email'}</button>
                <button onClick={() => handleLogout()} disabled={loading} className={`${loading ? 'disabled text-gray-400 opacity-80' : 'cursor-pointer'} hover:opacity-80 p-2 bg-primary text-white rounded-lg`}>{loading ? 'Loading...' : 'Logout'}</button>
            </div>
        </RegistrationComponent>
        
    )
}