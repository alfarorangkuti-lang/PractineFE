'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/app/lib/useAuth"
export default function LayoutAuthed({children,} : {children : React.ReactNode}) {
    useAuth({middleware:'auth'})
    const[isOpen, setIsOpen] = useState<boolean>(false)
    const router = useRouter()
    return (
        <section className="bg-gray-100 flex">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className={`border-r-[0.5px] ${isOpen ? 'w-1/20' : 'w-1/6'} border-r-gray-400 h-screen flex flex-col sticky top-0 left-0 justify-between`}>
                <div className="flex items-center justify-center h-18 border-b-[0.5px] border-b-gray-400 overflow-hidden">
                    <h1 className="text-center text-xl font-semibold">Practine</h1>
                </div>

                <ul className={`flex flex-col gap-2 px-3 ${isOpen ? 'items-center' : ''}`}>
                    <li onClick={() => router.push('/authed/dashboard')} className="py-2 px-3 text-gray-800 mt-4 tracking-wide rounded-y rounded-r hover:bg-gray-200 transition duration-200 cursor-pointer flex gap-2 items-center"> <i className={`text-center text-gray-600 ${isOpen ? 'px-4 py-2' : 'w-6'} fa fa-area-chart`} aria-hidden="true"></i> <p hidden={isOpen}>Dashboard</p></li>
                    <li onClick={() => router.push('/authed/dashboard')} className="py-2 px-3 text-gray-600 tracking-wide rounded-y rounded-r hover:bg-gray-200 transition duration-200 cursor-pointer flex gap-2 items-center"> <i className={`text-center text-gray-600 ${isOpen ? 'px-4 py-2' : 'w-6'} fa fa-cubes`} aria-hidden="true"></i> <p hidden={isOpen}>Stok</p></li>
                    <li onClick={() => router.push('/authed/financial')} className="py-2 px-3 text-gray-600 tracking-wide rounded-y rounded-r hover:bg-gray-200 transition duration-200 cursor-pointer flex gap-2 items-center"> <i className={`text-center text-gray-600 ${isOpen ? 'px-4 py-2' : 'w-6'} fa fa-dollar   `} aria-hidden="true"></i> <p hidden={isOpen}>Finansial</p></li>
                    <li onClick={() => router.push('/authed/dashboard')} className="py-2 px-3 text-gray-600 tracking-wide rounded-y rounded-r hover:bg-gray-200 transition duration-200 cursor-pointer flex gap-2 items-center"> <i className={`text-center text-gray-600 ${isOpen ? 'px-4 py-2' : 'w-6'} fa fa-info `} aria-hidden="true"></i> <p hidden={isOpen}>Informasi Harga</p></li>
                </ul>

                <div onClick={() => setIsOpen(!isOpen)} className={`border-t-[0.5px] border-t-gray-400 flex ${isOpen ? 'justify-center' : 'justify-end'} items-center h-16 p-2`}>
                    <i className={`fa fa-th-list text-gray-600 bg-gray-300 p-3 ${isOpen ? 'w-full text-center' : ''} rounded cursor-pointer aria-hidden="true`}></i>
                </div>
            </div>

            <div className="w-full">
                <div className=" sticky top-0 z-50 bg-gray-100 h-18 border-b-[0.5px] border-b-gray-400 w-full flex justify-end p-4">
                    <i onClick={() => router.push('/auth/userPage')} className="cursor-pointer fa fa-user text-gray-600 bg-gray-300 p-3 rounded" aria-hidden="true"></i>
                </div>

                <div className="p-4">
                    {children}
                </div>
            </div>
            
        </section>
    )
}