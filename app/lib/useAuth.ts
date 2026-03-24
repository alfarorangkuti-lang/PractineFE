'use client'
import { useEffect, useState } from "react";
import { getUser } from "./api";
import { useRouter } from "next/navigation";

export const useAuth = (middleware?: "auth" | "guest") => {
    const router = useRouter()
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getUser()
                setUser(data)
                if (!data.email_verified_at) {
                    router.push('/auth/verification')
                } 
                
                if (data.email_verified_at && !data.is_paid){
                    router.push('/auth/payment')
                }
                if (data.email_verified_at && data.is_paid){
                    router.push('/authed/dashboard')
                }
            } catch(err: any) {
                if (middleware === "auth") {
                    router.push('/auth/login')
                }
            } finally {
                setLoading(false)
            }
        }

        fetchUser()
    }, [])

    return {user, loading}
}