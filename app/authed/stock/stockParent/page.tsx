'use client'
import LayoutAuthed from "@/app/component/authed/layoutAuthed";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getCustomField, getStockParent } from "@/app/lib/api";



export default function Stock(){
    const [search, setSearch] = useState<string>('')
    const [orderBy, setOrderBy] = useState<string>('')
    const [sortBy, setSortBy] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(true)
    const [isSearch, setIsSearch] = useState<boolean>(true)
    const [value, setValue] = useState<string>('urutkan')
    const [dataStock, setDataStock] = useState<any[]>([])
    const [customFields, setCustomFields] = useState<any[]>([])

    useEffect(() => {
        const fetchData = async() => {
            const stock = await getStockParent(orderBy, sortBy, search);
            setDataStock(stock)
        }

        fetchData()
    }, [value, isSearch])

    useEffect(()=> {
        const fetchData = async() => {
            const customField = await getCustomField()
            setCustomFields(customField)
        }

        fetchData()
    }, [])

    const router = useRouter()
    
    return (
        <LayoutAuthed>
        <div className="flex justify-between items-center">
        <h1 className="border-l border-l-gray-400 px-2 text-xl font-semibold tracking-tight">Tipe stok</h1>
        <button className="p-2 rounded-lg border-[0.5px] border-gray-300 text-sm bg-gray-800 text-gray-100">Tambah baru+</button>
        </div>
        <div className="flex justify-between gap-2 mt-4 px-4 py-2 border-[0.5px] border-gray-300 rounded-t-xl">
            

            <div className="flex gap-2">
                <button onClick={() => router.push('/authed/stock')} className="px-2 border-[0.5px] border-gray-300 text-sm rounded-lg cursor-pointer active:scale-90 transition duration-150 flex gap-2 items-center"> <i className="fa fa-chevron-left"></i> <p>Stok</p></button>
            </div>
            
            <div className="flex gap-2 items-center"> 

                <div className="relative w-25">
                    <button onClick={() => setIsOpen(!isOpen)} className="w-25 cursor-pointer active:scale-90 hover:bg-gray-200 transition duration-100 border-[0.5px] border-gray-300 px-2 py-1 rounded-lg gap-2 items-center text-sm flex justify-between">{value} <i className="fa fa-chevron-down"></i></button>
                    <div hidden={isOpen} className="w-full bg-gray-100 mt-1 divide-y divide-gray-400 rounded-lg border border-gray-300 absolute flex flex-col">
                        <button onClick={() => {setOrderBy('name') 
                                setSortBy('asc')
                                setValue('A > Z')
                                }
                            } className="hover:bg-gray-200 cursor-pointer active:scale-90 transition duration-100 text-sm">A &raquo; Z</button>

                        <button onClick={() => {setOrderBy('name') 
                                setSortBy('desc')
                                setValue('Z > A')
                                }
                            } className="hover:bg-gray-200 cursor-pointer active:scale-90 transition duration-100 text-sm">Z &raquo; A</button>

                        <button onClick={() => {setOrderBy('created_at') 
                                setSortBy('desc')
                                setValue('terbaru')
                                }
                            } className="hover:bg-gray-200 cursor-pointer active:scale-90 transition duration-100 text-sm">Terbaru</button>

                        <button onClick={() => {setOrderBy('created_at') 
                                setSortBy('asc')
                                setValue('terlama')
                                }
                            } className="hover:bg-gray-200 cursor-pointer active:scale-90 transition duration-100 text-sm">Terlama</button>

                        <button onClick={() => {setOrderBy('inventory_count') 
                                setSortBy('desc')
                                setValue('ter-banyak')
                                }
                            } className="hover:bg-gray-200 cursor-pointer active:scale-90 transition duration-100 text-sm">Ter-banyak</button>
                            
                        <button onClick={() => {setOrderBy('inventory_count') 
                                setSortBy('asc')
                                setValue('ter-sedikit')
                                }
                            } className="hover:bg-gray-200 cursor-pointer active:scale-90 transition duration-100 text-sm">Ter-sedikit</button>
                    </div>
                </div>

                <input onChange={(e) => setSearch(e.target.value)} value={search} type="search" name="cari" placeholder="cari" id="" className="px-2 py-1 text-sm rounded-lg border-[0.5px] border-gray-300 outline-0"/> 

                <button onClick={() => setIsSearch(!isSearch)} className="px-2 py-1 rounded-lg border-[0.5px] border-gray-300 outline-0 cursor-pointer active:scale-90 transition duration-100 hover:border-gray-400"><i className="text-sm fa fa-search px-2"></i></button>
            </div>
        </div>

        <div className="mt-0 ">
            <div className="overflow-x-auto rounded-b-xl border-x-[0.5px] border-b-[0.5px] border-gray-300">
                <table className="min-w-full text-sm text-left">
                    <thead className="bg-gray-200 text-gray-800">
                        <tr>
                            <th className="px-4 py-3"></th>
                            <th className="px-4 py-3">No</th>
                            <th className="px-4 py-3">Nama</th>
                            <th className="px-4 py-3">Jumlah stok masuk</th>
                            <th className="px-4 py-3">Tanggal Dibuat</th>
                            {customFields.map((items, index) => (
                                <th key={index}>{items.name} <i className="fa fa-edit text-gray-600 cursor-pointer"></i></th>
                            ))}
                            <th className="px-4 py-3 text-center">Aksi</th>
                            <th className="w-3 px-4 py-3 text-center flex items-center"><p className="px-2 bg-gray-400 text-gray-800 rounded-lg text-lg border-gray-300 border">+</p></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-300">
                        {dataStock.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition">
                                <td className="px-4 py-3"><input type="checkbox" name="" id="" /></td>
                                <td className="px-4 py-3">{index + 1}</td>
                                <td className="px-4 py-3 font-medium">{item.name}</td>
                                <td className="px-4 py-3">{item.inventory_count}</td>
                                <td className="px-4 py-3">{new Date(item.created_at).toLocaleDateString('id-ID')}</td>
                                {customFields.map((items, index) => (
                                    <td key={index} className="px-4 py-3">{item.custom_fields[items.name] ?? '-'}</td>                                            
                                ))}
                                <td className="px-4 py-3 flex gap-2 justify-center">
                                    <button className="px-3 py-1 text-xs  text-blue-600 border border-gray-300 cursor-pointer rounded-lg "><i className="fa fa-edit"></i></button>
                                    <button className="px-3 py-1 text-xs text-red-600 border border-gray-300 cursor-pointer rounded-lg "><i className="fa fa-trash-o"></i></button>
                                </td>
                                <td className="w-fit"></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        </LayoutAuthed>
    )
}