'use client'
import RegistrationComponent from "@/app/component/auth/registrationComponent"
import { logout } from "@/app/lib/api"
import { useAuth } from "@/app/lib/useAuth"
import { useRouter } from "next/navigation"



export default function Payment(){
    useAuth('auth')
    const router = useRouter()
    const handleLogout = async () =>{
        const data = await logout()
        if(data.success){
            localStorage.removeItem('token')
            return router.push('/auth/login')
        }
    }
    return (
        <RegistrationComponent>
            <div className="flex flex-col gap-2">
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="text-start pl-4">Paket</th>
                            <th className="text-end pr-4">Harga</th>  
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-4">Paket 1 bulan pertama</td>
                            <td className="text-end p-4">Rp . 9.900</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-3xl text-end w-full mt-6 font-medium">Total : Rp . 9.900</p>
                <button className="cursor-pointer p-2 bg-primary text-white rounded-lg mt-4">Bayar Sekarang</button>
                <button onClick={() => handleLogout()} className="cursor-pointer p-2 border-[0.5px] border-primary rounded-lg">Logout</button>
            </div>
        </RegistrationComponent>
        
    )
}