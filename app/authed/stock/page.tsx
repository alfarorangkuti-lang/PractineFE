'use client'
import LayoutAuthed from "@/app/component/authed/layoutAuthed";
import { useRouter } from "next/navigation";

export default function Stock(){
    const router = useRouter()
    return (
        <LayoutAuthed>
            <div className="border-[0.5px] border-gray-300 h-20 rounded-xl relative bg-[radial-gradient(#a19f9f_1px,transparent_1px)] 
            bg-size-[20px_20px]">

                <div className="grid grid-cols-4 gap-2 absolute w-full top-10 px-6 ">
                    <div className="py-2 px-4 border-[0.5px] border-gray-300 rounded-xl bg-gray-100 grid gap-2">
                        <h1 className="text-lg font-semibold">Jumlah Stok</h1>
                        <p className="text-sm text-gray-800">768</p>
                    </div>

                    <div className="py-2 px-4 border-[0.5px] border-gray-300 rounded-xl bg-gray-100 grid gap-2">
                        <h1 className="text-lg font-semibold">Jumlah Stok</h1>
                        <p className="text-sm text-gray-800">768</p>
                    </div>

                    <div className="py-2 px-4 border-[0.5px] border-gray-300 rounded-xl bg-gray-100 grid gap-2">
                        <h1 className="text-lg font-semibold">Jumlah Stok</h1>
                        <p className="text-sm text-gray-800">768</p>
                    </div>

                    <div className="py-2 px-4 border-[0.5px] border-gray-300 rounded-xl bg-gray-100 grid gap-2">
                        <h1 className="text-lg font-semibold">Jumlah Stok</h1>
                        <p className="text-sm text-gray-800">768</p>
                    </div>
                </div>
            </div>

        <div className="flex justify-between gap-2 mt-13 px-4 py-2 border-[0.5px] border-gray-300 rounded-t-xl">
            

            <div className="flex items-center gap-2">
                <button onClick={() => router.push('/authed/stock/stockParent')} className="px-2 py-1 border-[0.5px] border-gray-300 text-sm rounded-lg cursor-pointer text-gray-800">Tipe stok</button>
                <button onClick={() => router.push('/authed/stock/supplier')} className="px-2 py-1 border-[0.5px] border-gray-300 text-sm rounded-lg cursor-pointer text-gray-800 active:scale-90 transition duration-150">Supplier</button>
                <button className="px-2 py-1 border-[0.5px] border-gray-300 text-sm rounded-lg cursor-pointer">Tambah+</button>
            </div>
            
            <div className="flex gap-2 items-center"> 
                <label htmlFor="from">dari:</label>
                <input type="date" name="from" className="px-2 py-1 text-sm rounded-xl border-[0.5px] border-gray-300" id="" />
                <label htmlFor="to">sampai:</label>
                <input type="date" name="to" className="px-2 py-1 text-sm rounded-xl border-[0.5px] border-gray-300" id="" />

                <select name="" id="" className="px-2 py-1 rounded-xl border-[0.5px] border-gray-300 outline-0">
                    <option className="text-sm" value="">A›Z</option>
                    <option className="text-sm" value="">Z›A</option>
                    <option className="text-sm" value="">Terbaru</option>
                    <option className="text-sm" value="">Terlama</option>
                </select>

                <input type="search" name="cari" placeholder="cari" id="" className="px-2 py-1 text-sm rounded-xl border-[0.5px] border-gray-300 outline-0"/>

                <button className="px-2 py-1 rounded-xl border-[0.5px] border-gray-300 outline-0 cursor-pointer active:scale-90 transition duration-100 hover:border-gray-400"><i className="fa fa-search px-2"></i></button>
            </div>
        </div>

        <div className="mt-0 ">
            <div className="overflow-x-auto rounded-b-xl border-x-[0.5px] border-b-[0.5px] border-gray-300">
                <table className="min-w-full text-sm text-left">
                    <thead className="bg-gray-200 text-gray-800">
                        <tr>
                            <th className="px-4 py-3">No</th>
                            <th className="px-4 py-3">Nama Barang</th>
                            <th className="px-4 py-3">Kategori</th>
                            <th className="px-4 py-3">Stok</th>
                            <th className="px-4 py-3">Harga</th>
                            <th className="px-4 py-3">Tanggal Masuk</th>
                            <th className="px-4 py-3 text-center">Aksi</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-300">
                        {[1,2,3,4,5,6,7,8,9,10.11,12,13,14,15,16,17,18].map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition">
                                <td className="px-4 py-3">{index + 1}</td>
                                <td className="px-4 py-3 font-medium">iPhone {index + 11}</td>
                                <td className="px-4 py-3">Smartphone</td>
                                <td className="px-4 py-3">{Math.floor(Math.random()*100)}</td>
                                <td className="px-4 py-3">Rp {((index+1)*1000000).toLocaleString()}</td>
                                <td className="px-4 py-3">2026-04-10</td>
                                <td className="px-4 py-3 flex gap-2 justify-center">
                                    <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded-lg hover:bg-blue-600">Edit</button>
                                    <button className="px-3 py-1 text-xs bg-red-500 text-white rounded-lg hover:bg-red-600">Hapus</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        </LayoutAuthed>
    )
}