import RegistrationComponent from "@/app/component/auth/registrationComponent"
import Link from "next/link"
export default function Register(){
    return (
        <RegistrationComponent>
            <div className="flex flex-col gap-1">
                        <label className="text-sm" htmlFor="namaLengkap">Nama Lengkap</label>
                        <input type="text" name="namaLengkap" id="namaLengkap" className="rounded w-full border-[0.5px] border-gray-400 focus:outline-none px-2 py-1" />
                        
                        <label className="text-sm" htmlFor="namaBisnis">Nama Bisnis Anda</label>
                        <input type="text" name="namaBisnis" id="namaBisnis" className="rounded w-full border-[0.5px] border-gray-400 focus:outline-none px-2 py-1" />

                        <label className="text-sm" htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="rounded w-full border-[0.5px] border-gray-400 focus:outline-none px-2 py-1" />

                        <label className="text-sm" htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className="rounded w-full border-[0.5px] border-gray-400 focus:outline-none px-2 py-1" />

                        <label className="text-sm" htmlFor="confirmPassword">Konfirmasi Password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" className="rounded w-full border-[0.5px] border-gray-400 focus:outline-none px-2 py-1" />

                        <button className="p-1 bg-primary text-white text-center rounded mt-2">Daftar</button>
                        <Link href="/auth/login" className="underline text-gray-500 hover:text-gray-700 text-sm mt-1">Sudah punya akun?</Link>
                </div>
        </RegistrationComponent>
        
    )
}