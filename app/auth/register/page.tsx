'use client'

import RegistrationComponent from "@/app/component/auth/registrationComponent"
import Link from "next/link"
import { useState } from "react"
import { useAuth } from "@/app/hooks/auth"

interface AuthErrors {
    name?: string[]
    email?: string[]
    password?: string[]
}

export default function Register() {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/auth/verification'
    })

    const [form, setForm] = useState({
        name: "",
        bisnis: "",
        email: "",
        password: "",
        password_confirmation: ""
    })

    const [errors, setErrors] = useState<AuthErrors>({})
    const [loading, setLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        await register({
            name: form.name,
            email: form.email,
            password: form.password,
            password_confirmation: form.password_confirmation,
            setErrors
        })

        setLoading(false)
    }

    return (
        <RegistrationComponent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-1">

                {/* Nama Lengkap */}
                <label className="text-sm">Nama Lengkap</label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="rounded w-full border-[0.5px] border-gray-400 px-2 py-1"
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name[0]}</span>}

                {/* Nama Bisnis (optional) */}
                <label className="text-sm">Nama Bisnis Anda</label>
                <input
                    type="text"
                    name="bisnis"
                    value={form.bisnis}
                    onChange={handleChange}
                    className="rounded w-full border-[0.5px] border-gray-400 px-2 py-1"
                />

                {/* Email */}
                <label className="text-sm">Email</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="rounded w-full border-[0.5px] border-gray-400 px-2 py-1"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email[0]}</span>}

                {/* Password */}
                <label className="text-sm">Password</label>
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="rounded w-full border-[0.5px] border-gray-400 px-2 py-1"
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password[0]}</span>}

                {/* Confirm Password */}
                <label className="text-sm">Konfirmasi Password</label>
                <input
                    type="password"
                    name="password_confirmation"
                    value={form.password_confirmation}
                    onChange={handleChange}
                    className="rounded w-full border-[0.5px] border-gray-400 px-2 py-1"
                />

                {/* Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="p-1 bg-primary text-white rounded mt-2 disabled:opacity-50"
                >
                    {loading ? "Loading..." : "Daftar"}
                </button>

                <Link
                    href="/auth/login"
                    className="underline text-gray-500 hover:text-gray-700 text-sm mt-1"
                >
                    Sudah punya akun?
                </Link>
            </form>
        </RegistrationComponent>
    )
}