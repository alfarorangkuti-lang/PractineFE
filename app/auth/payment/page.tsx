'use client'
import RegistrationComponent from "@/app/component/auth/registrationComponent"
import { handleFirstSubscription, logout, testPayment } from "@/app/lib/api"
import { useAuth } from "@/app/lib/useAuth"
import Script from "next/script"
import { useRouter } from "next/navigation"
import { useState } from "react"



export default function Payment(){
    const router = useRouter()
    const {mutateUser} = useAuth({middleware:'auth'})
    const [token, setToken] = useState<string>('')
    
    
    // payment dummy
    const test = async() => {
        const status = await testPayment()
        console.log(status)
    }

    const getToken = async() => {
            const snapToken = await handleFirstSubscription()
            setToken(snapToken)
            
            window.snap.pay(snapToken, {
                onSuccess: function(result:any) {
                console.log('success', result)
                router.push('/authed/dashboard')
                },
                onPending: function(result:any) {
                console.log('pending', result)
                },
                onError: function(result:any) {
                console.log('error', result)
                },
                onClose: function() {
                console.log('user closed popup')
                }
            })
    }


    const handleLogout = async () =>{
        const data = await logout()
        if(data.success){
            localStorage.removeItem('token')
            await mutateUser(null, false)
            router.push('/auth/login')
        }
    }
    return (
        <RegistrationComponent>
            <Script
                src="https://app.sandbox.midtrans.com/snap/snap.js"
                data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
                strategy="afterInteractive"
            />
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
                <button onClick={() => getToken()} className="cursor-pointer p-2 bg-primary text-white rounded-lg mt-4">Bayar Sekarang</button>
                <button onClick={() => handleLogout()} className="cursor-pointer p-2 border-[0.5px] border-primary rounded-lg">Logout</button>
            </div>
        </RegistrationComponent>
        
    )
}