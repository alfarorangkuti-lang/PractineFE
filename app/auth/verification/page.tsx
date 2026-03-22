import RegistrationComponent from "@/app/component/auth/registrationComponent"

import Link from "next/link"
export default function Register(){
    return (
        <RegistrationComponent>
            <div className="flex flex-col gap-2">
                <p className="text-center">Silahkan cek email anda untuk melanjutkan</p>
                <button className="cursor-pointer p-2 bg-primary text-white rounded-lg">Logout</button>
            </div>
        </RegistrationComponent>
        
    )
}