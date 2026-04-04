'use client'
import useSWR from "swr";
import { useEffect, useState } from "react";
import { getUser } from "./api";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation"


interface Tenant {
    id:number
    business_name:string
    expired_at:string
}

interface User {
  name: string
  email: string
  created_at: string
  email_verified_at:string
  tenant:Tenant
}


export const useAuth = (options? : {middleware?: 'auth' | 'guest'}) => {
    const {data:user, error, isLoading, mutate} = useSWR<User | null>("user", getUser, {
      shouldRetryOnError: false,
      revalidateOnFocus: false,
    }
)
    const pathname = usePathname()
    const router = useRouter()
    useEffect(() => {
            const fetchUser = async () => {
                try {
                    if (isLoading) return

                    if (options?.middleware === 'guest' && user) {
                    router.push('/authed/dashboard')
                    return
                    }

                    // ===== AUTH =====
                    if (options?.middleware === 'auth') {

                    // belum login
                    if (!user) {
                        router.push('/auth/login')
                        return
                    }

                    const isVerified = !!user.email_verified_at
                    const hasPayment = user.tenant.expired_at ?? false

                    const isVerificationPage = pathname === '/auth/verification'
                    const isPaymentPage = pathname === '/auth/payment'
                    const isUserPage = pathname === '/auth/userPage'

                    // ❌ belum verifikasi
                    if (!isVerified && !isVerificationPage && !isUserPage) {
                        router.push('/auth/verification')
                        return
                    }

                    // ❌ belum bayar
                    if (isVerified && !hasPayment && !isPaymentPage && !isUserPage) {
                        router.push('/auth/payment')
                        return
                    }

                    // ✅ sudah bayar & verified → jangan balik ke auth pages
                    if (isVerified && hasPayment && (isVerificationPage || isPaymentPage)) {
                        router.push('/authed/dashboard')
                        return
                    }
                    }
                    
                    
                } catch(err: any) {
                    if (options?.middleware === "auth") {
                        router.push('/auth/login')
                    }
                } finally {
                }
            }

            fetchUser()
        }, [user, isLoading, options])
    return {
        user,
        isLoading,
        isError:error,
        mutateUser:mutate,
    }

}