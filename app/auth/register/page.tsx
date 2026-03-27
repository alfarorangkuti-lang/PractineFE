'use client'
import axiosClient from "@/app/lib/axios"
import RegistrationComponent from "@/app/component/auth/registrationComponent"
import { register } from "@/app/lib/api";
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import { useAuth } from "@/app/lib/useAuth"

export default function Register(){
    const [fieldNamaLengkap, setFieldNamaLengkap] = useState<string>('')
    const [fieldNamaBisnis, setFieldNamaBisnis] = useState<string>('')
    const [fieldEmail, setFieldEmail] = useState<string>('')
    const [fieldPassword, setFieldPassword] = useState<string>('')
    const [fieldPasswordConfirmation, setFieldPasswordConfirmation] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    const {mutateUser} = useAuth({middleware:'guest'})
    const handleRegister = async() => {
        setLoading(true)
        try {
            const data = await register(fieldEmail, fieldPassword, fieldPasswordConfirmation, fieldNamaBisnis, fieldNamaLengkap)
            if (data.token){
                mutateUser()
                router.push('/auth/verification')
            }
        } catch (err:any) {
            setMessage(err.response.data.message)
        }
        setLoading(false)
    }

    
    return (
        <RegistrationComponent>
            <form onSubmit={(e) => {
                            e.preventDefault()
                            handleRegister()
                        }} className="flex flex-col gap-1">
                        <label className="text-sm" htmlFor="namaLengkap">Nama Lengkap</label>
                        <input value={fieldNamaLengkap} onChange={(event) => setFieldNamaLengkap(event.target.value)} type="text" name="namaLengkap" id="namaLengkap" className="rounded w-full border-[0.5px] border-gray-400 focus:outline-none px-2 py-1" />
                        
                        <label className="text-sm" htmlFor="namaBisnis">Nama Bisnis Anda</label>
                        <input value={fieldNamaBisnis} onChange={(event) => setFieldNamaBisnis(event.target.value)} type="text" name="namaBisnis" id="namaBisnis" className="rounded w-full border-[0.5px] border-gray-400 focus:outline-none px-2 py-1" />

                        <label className="text-sm" htmlFor="email">Email</label>
                        <input value={fieldEmail} onChange={(event) => setFieldEmail(event.target.value)} type="email" name="email" id="email" className="rounded w-full border-[0.5px] border-gray-400 focus:outline-none px-2 py-1" />

                        <label className="text-sm" htmlFor="password">Password</label>
                        <input value={fieldPassword} onChange={(event) => setFieldPassword(event.target.value)} type="password" name="password" id="password" className="rounded w-full border-[0.5px] border-gray-400 focus:outline-none px-2 py-1" />

                        <label className="text-sm" htmlFor="confirmPassword">Konfirmasi Password</label>
                        <input value={fieldPasswordConfirmation} onChange={(event) => setFieldPasswordConfirmation(event.target.value)} type="password" name="confirmPassword" id="confirmPassword" className="rounded w-full border-[0.5px] border-gray-400 focus:outline-none px-2 py-1" />
                        <p className={`${message ? 'text-center my-4 text-red-600 text-sm' : 'hidden'}`}>{message}</p>
                        <button disabled={loading} className=" cursor-pointer hover:opacity-80 p-1 bg-primary text-white text-center rounded mt-2">{loading ? 'Loading...' : 'Daftar'}</button>
                        <Link href="/auth/login" className="underline text-gray-500 hover:text-gray-700 text-sm mt-1">Sudah punya akun?</Link>
                </form>
        </RegistrationComponent>
        
    )
}