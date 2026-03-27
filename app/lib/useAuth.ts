'use client'
import useSWR from "swr";
import { useEffect, useState } from "react";
import { getUser } from "./api";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation"

interface User {
  name: string
  business_name: string
  email: string
  created_at: string
  email_verified_at:string
  is_paid:boolean
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

                    if (options?.middleware === 'auth' && !user) {
                        router.push('/auth/login')
                    }

                    if (options?.middleware === 'guest' && user) {
                        router.push('/authed/dashboard')
                    }

                    if (options?.middleware === 'auth') {
                        if (!user?.email_verified_at && pathname !== '/auth/verification' && pathname !== '/auth/userPage') {
                        router.push('/auth/verification')
                        return
                        }

                        if (!user?.is_paid && pathname !== '/auth/payment' && pathname !== '/auth/userPage' && user?.email_verified_at) {
                        router.push('/auth/payment')
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