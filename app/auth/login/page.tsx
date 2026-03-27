'use client'

import Link from "next/link";
import { useState } from "react";
import { login } from "@/app/lib/api";
import { useAuth } from "@/app/lib/useAuth";
import { useRouter } from "next/navigation";
import LayoutLandingPage from "@/app/component/public/layoutLandingPage";
export default function Login(){
    const router = useRouter()
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false)
    const {mutateUser} = useAuth({middleware:'guest'})
    // handle login
    const handleLogin = async() => {
        setLoading(true)
        try{
            const data = await login(email, password)
            mutateUser()
        } catch(err: any){
            setMessage(err.response.data.message || 'login gagal')
        }
        setLoading(false)
    }
    // 


    return (
        <LayoutLandingPage>
            <section className="h-screen w-full flex items-center justify-center bg-slate-100">
                <form onSubmit={(e) => {e.preventDefault()
                                        handleLogin()}} className="px-8 py-12 rounded-lg shadow-lg border-[0.5px] border-gray-300 bg-white flex flex-col gap-1 w-full max-w-lg">

                        <h1 className="italic text-primary font-bold text-4xl text-center mb-2">Practine</h1>
                        <label className="text-sm" htmlFor="email">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="" className="rounded w-full border-[0.5px] border-gray-400 focus:outline-none px-2 py-1" />

                        <label className="text-sm" htmlFor="password">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}name="password" id="" className="rounded w-full border-[0.5px] border-gray-400 focus:outline-none px-2 py-1" />
                        <p className={`${message ?'text-center text-red-600 text-sm my-1' : 'hidden'}`}>{message}</p>
                        <button type="submit" disabled={loading} className={`${loading ? 'opacity-80' : 'cursor-pointer'} p-1 active:scale-95 hover:opacity-80 transition duration-75 bg-primary text-white text-center rounded mt-2`}>{loading ? 'loading...' : 'Login'}</button>
                        <div className="flex justify-between  mt-1">
                            <Link href="/auth/forgotPassword" className="underline text-gray-500 hover:text-gray-700 text-sm">Lupa password?</Link>
                            <Link href="/auth/register" className="underline text-gray-500 hover:text-gray-700 text-sm">Belum Punya Akun?</Link>
                        </div>
                </form>
            </section>
        </LayoutLandingPage>
    )
}