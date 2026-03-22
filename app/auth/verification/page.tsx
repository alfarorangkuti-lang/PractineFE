'use client'

import RegistrationComponent from "@/app/component/auth/registrationComponent"
import { useAuth } from "@/app/hooks/auth"
import { useState } from "react"

export default function VerifyNotice() {
    const { logout } = useAuth({
        middleware: 'auth', // ✅ harus auth, bukan guest
        redirectIfAuthenticated: '/'
    })

    const [loading, setLoading] = useState(false)

    const handleLogout = async () => {
        setLoading(true)
        await logout()
        setLoading(false)
    }

    return (
        <RegistrationComponent>
            <div className="flex flex-col gap-3 items-center">

                <p className="text-center text-gray-600">
                    Silahkan cek email anda untuk melanjutkan
                </p>

                <button
                    onClick={handleLogout}
                    disabled={loading}
                    className="cursor-pointer p-2 bg-primary text-white rounded-lg disabled:opacity-50"
                >
                    {loading ? "Loading..." : "Logout"}
                </button>

            </div>
        </RegistrationComponent>
    )
}