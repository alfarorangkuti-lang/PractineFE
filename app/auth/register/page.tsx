'use client'
import axiosClient from "@/app/lib/axios"
import RegistrationComponent from "@/app/component/auth/registrationComponent"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useState } from "react"

export default function Register(){
    const [fieldNamaLengkap, setFieldNamaLengkap] = useState<string>('')
    const [fieldNamaBisnis, setFieldNamaBisnis] = useState<string>('')
    const [fieldEmail, setFieldEmail] = useState<string>('')
    const [fieldPassword, setFieldPassword] = useState<string>('')
    const [fieldPasswordConfirmation, setFieldPasswordConfirmation] = useState<string>('')
    const router = useRouter()

    const submitRegister = async (name:string, business_name:string, email:string, password:string, password_confirmation:string) =>{
        const res = await axiosClient.post("/register", {
            name,
            business_name,
            email,
            password,
            password_confirmation,
        })

        const token = res.data.token
        localStorage.setItem("token", token)
        if (localStorage.getItem("token") === token) {
            return router.push('/auth/verification')
        }
        return res.data.token
    }
    return (
        <RegistrationComponent>
            <form onSubmit={(e) => {
                            e.preventDefault()
                            submitRegister(
                                fieldNamaLengkap,
                                fieldNamaBisnis,
                                fieldEmail,
                                fieldPassword,
                                fieldPasswordConfirmation
                            )
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

                        <button className="p-1 bg-primary text-white text-center rounded mt-2">Daftar</button>
                        <Link href="/auth/login" className="underline text-gray-500 hover:text-gray-700 text-sm mt-1">Sudah punya akun?</Link>
                </form>
        </RegistrationComponent>
        
    )
}