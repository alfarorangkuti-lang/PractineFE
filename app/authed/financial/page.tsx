'use client'
import LayoutAuthed from "@/app/component/authed/layoutAuthed";
import { useAuth } from "@/app/lib/useAuth";
export default function Financial() {
  useAuth({middleware:'auth'})
  return (
    <LayoutAuthed>
      <h1 className="text-gray-800 text-2xl font-semibold">Finansial</h1>
      <p className="">Laporan dan analisis keuangan</p>
    </LayoutAuthed>
  );
}
