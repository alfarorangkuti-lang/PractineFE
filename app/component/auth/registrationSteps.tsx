'use client'

import { usePathname } from "next/navigation"

export default function RegistrationSteps(){
  const pathname = usePathname()
    return (
        <div className="grid grid-cols-3 gap">
            <div className={`p-2 border-b ${pathname === '/auth/register' ? `border-black` : `border-unactive`} `}>
                <h1 className={`text-2xl semibold text-center ${pathname === '/auth/register' ? `text-black` : `text-unactive`}`}>Step 1</h1>
                <h2 className={`text-center text-sm mt-1 ${pathname === '/auth/register' ? `text-black` : `text-unactive`} `}>Registrasi</h2>
            </div>

            <div className={`p-2 border-b ${pathname === '/auth/verification' ? `border-black` : `border-unactive`} `}>
                <h1 className={`text-2xl semibold text-center ${pathname === '/auth/verification' ? `text-black` : `text-unactive`}`}>Step 2</h1>
                <h2 className={`text-center text-sm mt-1 ${pathname === '/auth/verification' ? `text-black` : `text-unactive`} `}>Verifikasi Email</h2>
            </div>

            <div className={`p-2 border-b ${pathname === '/auth/payment' ? `border-black` : `border-unactive`} `}>
                <h1 className={`text-2xl semibold text-center ${pathname === '/auth/payment' ? `text-black` : `text-unactive`}`}>Step 3</h1>
                <h2 className={`text-center text-sm mt-1 ${pathname === '/auth/payment' ? `text-black` : `text-unactive`} `}>Pembayaran</h2>
            </div>
        </div>
    )
}