"use client"
import LayoutAuthed from "@/app/component/authed/layoutAuthed";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/lib/useAuth";
import { logout } from "@/app/lib/api";
import { useEffect, useState } from "react";
import { getTokenSubscription } from "@/app/lib/api";
import Script from "next/script";

export default function UserPage() {
    const { user, mutateUser } = useAuth({ middleware: 'auth' })
    const router = useRouter()
    const [mounted, setMounted] = useState(false)
    const handlePayment = async(monthAmount: number) => {
        const token = await getTokenSubscription(monthAmount)
        window.snap.pay(token, {
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

    useEffect(() => {
        setMounted(true)
    }, [])

    const formatDate = (date?: string | Date) => {
        if (!date) return "-"
        return new Date(date).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
        })
    }

    const handleLogout = async () => {
        const res = await logout()
        if (res.message) {
            localStorage.removeItem("token")
            await mutateUser(null, false)
            router.push('/auth/login')
        }
    }

    if (!mounted) return null // 🔥 fix hydration

    return (
        <LayoutAuthed>
            <Script
                src="https://app.sandbox.midtrans.com/snap/snap.js"
                data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
                strategy="afterInteractive"
            />
            <div className="space-y-10">

                {/* Header */}
                <div className="pl-2 border-l border-l-gray-800">
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Manajemen Akun | {user?.tenant.business_name}
                    </h1>
                    <p className="text-gray-600 text-sm">
                        Kelola informasi akun dan langganan Anda
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-4">

                    {/* Profil */}
                    <div className="bg-gray-100 border border-gray-400 rounded-xl">
                        <div className="px-4 py-3">
                            <h2 className="text-gray-600 text-sm font-medium">Profil</h2>
                        </div>

                        <div className="grid grid-cols-2 gap-4 p-4 text-sm border-t rounded-xl border-gray-400">
                            <div>
                                <p className="text-gray-600">Nama Lengkap</p>
                                <p className="text-gray-800 font-medium">{user?.name}</p>
                            </div>

                            <div>
                                <p className="text-gray-600">Nama Bisnis</p>
                                <p className="text-gray-800 font-medium">{user?.tenant.business_name}</p>
                            </div>

                            <div>
                                <p className="text-gray-600">Email</p>
                                <p className="text-gray-800 font-medium">{user?.email}</p>
                            </div>

                            <div>
                                <p className="text-gray-600">Tanggal Bergabung</p>
                                <p className="text-gray-800 font-medium">
                                    {formatDate(user?.created_at)}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Subscription */}
                    <div className="bg-gray-100 border border-gray-400 rounded-xl">
                        <div className="px-4 py-3">
                            <h2 className="text-gray-600 text-sm font-medium">
                                Langganan
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 divide-x divide-gray-400 p-4 text-sm border-t rounded-xl border-gray-400">
                            <div className="text-center">
                                <p className="text-gray-600">Dibayar pada</p>
                                <p className="text-gray-800 font-medium">
                                    {formatDate(user?.payment_history?.[0]?.created_at)}
                                </p>
                            </div>

                            <div className="text-center">
                                <p className="text-gray-600">Berakhir pada</p>
                                <p className="text-gray-800 font-medium">
                                    {formatDate(user?.tenant.expired_at)}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="pl-2 border-l border-l-gray-800">
                    <p className="text-2xl font-semibold">Transaksi</p>
                    <p className="text-sm text-gray-600">riwayat pembayaran langganan</p>
                </div>
                <div className="border border-gray-400 rounded-xl h-max-100 overflow-auto">
                    <table className="w-full bg-gray-100">
                        <thead className="border-b border-b-gray-400 bg-gray-200">
                            <tr>
                                <th className="font-medium py-2 text-gray-800">no</th>
                                <th className="font-medium py-2 text-gray-800">paket</th>
                                <th className="font-medium py-2 text-gray-800">jumlah bayar</th>
                                <th className="font-medium py-2 text-gray-800">status</th>
                                <th className="font-medium py-2 text-gray-800">tanggal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b-gray-400 border-b">
                                <td className="text-center py-2">1</td>
                                <td className="text-center py-2">1 bulan</td>
                                <td className="text-center py-2">129.000</td>
                                <td className="text-center py-2">paid</td>
                                <td className="text-center py-2">1 Maret 2026</td>
                            </tr>

                            <tr className="border-b-gray-400 border-b">
                                <td className="text-center py-2">2</td>
                                <td className="text-center py-2">1 bulan</td>
                                <td className="text-center py-2">129.000</td>
                                <td className="text-center py-2">paid</td>
                                <td className="text-center py-2">1 Maret 2026</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>



                <div className="pl-2 border-l border-l-gray-800">
                    <h1 className="text-2xl font-semibold text-gray-800">Langganan</h1>
                    <p className="text-gray-600 text-sm">Perpanjang masa berlangganan anda</p>
                </div>
                <div className="grid grid-cols-4 gap-2">

                    <div className="border border-gray-400 rounded-xl pt-4 bg-gray-100 h-fit">
                        <p className="text-2xl text-gray-800 font-semibold text-center">+1 Bulan</p>
                        <p className="text-center text-gray-600 text-sm mb-2">perpanjang akun anda 1 bulan</p>
                        <div className="px-5 py-4 rounded-xl border-t border-t-gray-400 flex justify-between items-center">
                            <div>
                                <p className="text-xl">Rp.129.000</p>
                                <p className="text-sm">Rp.129.000/bulan</p>
                            </div>
                            <button onClick={() => handlePayment(1)} className="bg-gray-600 px-3 cursor-pointer hover:opacity-80 py-1 rounded-xl text-gray-300"><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                        </div>
                    </div>

                    <div className="border border-gray-400 rounded-xl pt-4 bg-gray-100 h-fit">
                        <p className="text-2xl text-gray-800 font-semibold text-center">+3 Bulan</p>
                        <p className="text-center text-gray-600 text-sm mb-2">perpanjang akun anda 3 bulan</p>
                        <div className="px-5 py-4 rounded-xl border-t border-t-gray-400 flex justify-between items-center">
                            <div>
                                <p className="text-xl">Rp.339.000</p>
                                <p className="text-sm">Rp.113.000/bulan</p>
                            </div>
                            <button onClick={() => handlePayment(3)} className="bg-gray-600 px-3 cursor-pointer hover:opacity-80 py-1 rounded-xl text-gray-300"><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                        </div>
                    </div>

                    <div className="border border-gray-400 rounded-xl pt-4 bg-gray-100 h-fit">
                        <p className="text-2xl text-gray-800 font-semibold text-center">+6 Bulan</p>
                        <p className="text-center text-gray-600 text-sm mb-2">perpanjang akun anda 6 bulan</p>
                        <div className="px-5 py-4 rounded-xl border-t border-t-gray-400 flex justify-between items-center">
                            <div>
                                <p className="text-xl">Rp.600.000</p>
                                <p className="text-sm">Rp.100.000/bulan</p>
                            </div>
                            <button onClick={() => handlePayment(6)} className="bg-gray-600 px-3 cursor-pointer hover:opacity-80 py-1 rounded-xl text-gray-300"><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                        </div>
                    </div>

                    <div className="border border-gray-400 rounded-xl pt-4 bg-gray-100 h-fit">
                        <p className="text-2xl text-gray-800 font-semibold text-center">+12 Bulan</p>
                        <p className="text-center text-gray-600 text-sm mb-2">perpanjang akun anda 12 bulan</p>
                        <div className="px-5 py-4 rounded-xl border-t border-t-gray-400 flex justify-between items-center">
                            <div>
                                <p className="text-xl">Rp.1.080.000</p>
                                <p className="text-sm">Rp.90.000/bulan</p>
                            </div>
                            <button onClick={() => handlePayment(12)} className="bg-gray-600 px-3 cursor-pointer hover:opacity-80 py-1 rounded-xl text-gray-300"><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                        </div>
                    </div>

                </div>
                

                {/* Actions */}
                <div className="flex gap-2">
                    <button
                        onClick={async() => {
                            await handleLogout()
                            router.push('/auth/login')}}
                        className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:opacity-80 cursor-pointer"
                    >
                        Logout
                    </button>

                    <button className="px-4 py-2 text-sm bg-gray-800 text-white rounded-lg hover:opacity-90">
                        Lupa Password
                    </button>
                </div>
            
            </div>
        </LayoutAuthed>
    )
}