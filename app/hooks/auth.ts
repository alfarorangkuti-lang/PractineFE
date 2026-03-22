'use client'

import useSWR from "swr";
import axiosClient from "../lib/axios";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface UseAuthProps {
    middleware?: 'auth' | 'guest';
    redirectIfAuthenticated?: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string | null;
}

interface AuthErrors {
    [key: string]: string[];
}

export const useAuth = ({ middleware, redirectIfAuthenticated }: UseAuthProps = {}) => {
    const router = useRouter()

    const { data: user, error, mutate } = useSWR<User>(
        '/api/user',
        async () => {
            try {
                const res = await axiosClient.get('/api/user')
                return res.data
            } catch (error: any) {
                if (error.response?.status !== 401) throw error
                return undefined
            }
        }
    )

    const csrf = async (): Promise<void> => {
        await axiosClient.get('/sanctum/csrf-cookie')
    }

    const register = async ({
        setErrors,
        ...props
    }: {
        setErrors: (errors: AuthErrors) => void;
        name: string;
        email: string;
        password: string;
        password_confirmation: string;
    }) => {
        await csrf()
        setErrors({})

        try {
            await axiosClient.post('/register', props)
            await mutate()
        } catch (error: any) {
            if (![422, 401].includes(error.response?.status)) throw error
            setErrors(error.response.data.errors)
        }
    }

    const getToken = async (): Promise<string> => {
        await csrf()
        const res = await axiosClient.get('/api/MidtransToken')
        return res.data.snap_token
    }

    const login = async ({
        setErrors,
        setStatus,
        ...props
    }: {
        setErrors: (errors: AuthErrors) => void;
        setStatus: (status: string | null) => void;
        email: string;
        password: string;
    }): Promise<boolean> => {
        await csrf()

        setErrors({})
        setStatus(null)

        try {
            await axiosClient.post('/auth/login', props)
            await mutate()
            return true
        } catch (error: any) {
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors)
                return false
            }
            throw error
        }
    }

    const resendEmailVerification = async ({
        setStatus,
    }: {
        setStatus: (status: string) => void;
    }) => {
        const response = await axiosClient.post('/email/verification-notification')
        setStatus(response.data.status)
    }

    const logout = async (): Promise<void> => {
        await csrf()

        try {
            await axiosClient.post('/logout')
            await mutate()
            window.location.pathname = '/auth/login'
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user) {
            router.push(redirectIfAuthenticated)
        }

        if (middleware === 'auth' && user && !user.email_verified_at) {
            router.push('/auth/verification')
        }

        if (window.location.pathname === '/auth/verification' && user?.email_verified_at) {
            router.push(redirectIfAuthenticated || '/')
        }

        if (middleware === 'auth' && error) {
            router.push('/auth/login')
        }
    }, [user, error, middleware, redirectIfAuthenticated, router])

    return {
        user,
        register,
        getToken,
        login,
        resendEmailVerification,
        logout,
    }
}