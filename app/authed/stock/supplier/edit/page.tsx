    'use client'
    import LayoutAuthed from "@/app/component/authed/layoutAuthed";
    import { useState, useEffect } from "react";
    import { useRouter } from "next/navigation";
    import { addSupplier } from "@/app/lib/api";
    import { useSearchParams } from "next/navigation";
    import { getSupplierById } from "@/app/lib/api";
    import NotificationModal from "@/app/component/authed/NotificationModal";


    export default function EditSupplier(){

        // lib initialization
        const searchParams = useSearchParams()
        const router = useRouter()

        // notif props
        const [open, setOpen] = useState(false);
        const [message, setMessage] = useState('');
        const [type, setType] = useState<'success' | 'error' | 'warning'>('success');

        // input state
        const [inputSupplier, setInputSupplier] = useState<{ id: number, name: string }[]>([])

        // send api
        const postSupplier = async() => {
            // const res = await addSupplier(inputSupplier)
            // let response = res
            // if (res.message) {
            //     response = res.message
            //     setOpen(true)
            //     setMessage(response)
            //     setType('error')
            // }
            // if (response === 'berhasil!') {
            //     setOpen(true)
            //     setMessage(response)
            //     setType('success')
            // }
            console.log(inputSupplier)
        }
        
        
        useEffect(() => {
            const fetchEdit = async() => {
                const ids = searchParams.get('ids');
                const dataEdit = await getSupplierById(ids)
                const formatted = dataEdit.map((item: any) => ({
                    id: item.id,
                    name: item.name
                }));
                setInputSupplier(formatted);
                
            }

            fetchEdit()
        },[])
        return (
            <LayoutAuthed>
                <NotificationModal
                    isOpen={open}
                    onClose={() => type === 'error' ? setOpen(false) : router.back()}
                    message={message}
                    type={type}
                />
                <div className="flex gap-2 items-center  mb-2">
                    <button onClick={() => router.back()} className="rounded-xl text-center cursor-pointer py-1 px-2 "><i className="fa fa-chevron-left"></i></button>
                    <h1 className="border-l-2 border-l-gray-600 font-semibold text-lg px-2">Edit supplier</h1>
                </div>
                

                <div className="grid grid-cols-2 gap-2 mt-6">
                {inputSupplier.map((item, index) => (
                    <div key={item.id} className="mb-4 flex gap-1">
                        <input 
                            type="text" 
                            placeholder={`Supplier ${index + 1}`} 
                            className="border border-gray-400 outline-0 rounded-lg px-2 py-1 w-full"
                            value={item.name}                        
                            
                            onChange={(e) => {
                                const newData = [...inputSupplier];
                                newData[index].name = e.target.value;
                                setInputSupplier(newData);
                            }}
                        />
                    </div>
                ))}
                </div>

                <button onClick={postSupplier} className="border border-gray-400 p-2 rounded-lg flex justify-end mt-2">Submit</button>
            </LayoutAuthed>
        )
    }
