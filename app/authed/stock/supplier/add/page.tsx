'use client'
import LayoutAuthed from "@/app/component/authed/layoutAuthed";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { addSupplier } from "@/app/lib/api";
import NotificationModal from "@/app/component/authed/NotificationModal";

export default function AddSupplier(){
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState<'success' | 'error' | 'warning'>('success');

    const router = useRouter()
    const [inputCountForm, setInputCountForm] = useState<string>('1')
    const [forms, setForms] = useState<number[]>([]);
    const [inputSupplier, setInputSupplier] = useState<string[]>([])
    const postSupplier = async() => {
        const res = await addSupplier(inputSupplier)
        let response = res
        if (res.message) {
            response = res.message
            setOpen(true)
            setMessage(response)
            setType('error')
        }
        if (response === 'berhasil!') {
            setOpen(true)
            setMessage(response)
            setType('success')
        }
    }
    const applyFormCount = (count: number) => {
        const newForms = Array.from({ length: count }, (_, i) => i);
        const newInputs = Array.from({ length: count }, () => '');
        setInputSupplier(newInputs);
        setForms(newForms);
    };

    useEffect(() => {
        applyFormCount(Number(inputCountForm))
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
                <button onClick={() => router.back()} className="border border-gray-400 rounded-xl text-center cursor-pointer py-1 px-2 "><i className="fa fa-chevron-left"></i></button>
                <h1 className="border-l-2 border-l-gray-600 font-semibold text-lg px-2">Tambah supplier</h1>
            </div>
            
            <div className="flex rounded-lg px-4 py-2 border-[0.5px] border-gray-400 justify-between">
                <div className="flex gap-2 items-center">
                    <label htmlFor="formCount">Jumlah form: </label>
                    <input value={inputCountForm} onChange={(e) => setInputCountForm(e.target.value)} placeholder="masukan angka..." className="px-2 py-1 outline-0 rounded-lg border-[0.5px] border-gray-400" type="number" name="formCount" id="" />
                    <button onClick={() => applyFormCount(Number(inputCountForm))} className="px-3 py-1 rounded-lg border-[0.5px] border-gray-400 cursor-pointer active:scale-90 transition duration-100">apply</button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-2">
            {forms.map((item, index) => (
                <div key={index} className="mb-4 flex gap-1">
                    <input 
                        type="text" 
                        placeholder={`Supplier ${index + 1}`} 
                        className="border border-gray-400 outline-0 rounded-lg px-2 py-1 w-full"
                        onChange={(e) => {
                            const newData = [...inputSupplier];
                            newData[index] = e.target.value;
                            setInputSupplier(newData);
                        }}
                    />
                </div>
            ))}
            </div>

            <button onClick={() => postSupplier()} className="border border-gray-400 p-2 rounded-lg flex justify-end mt-2">Submit</button>
        </LayoutAuthed>
    )
}
