'use client'

import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation'
export default function NavbarLandingPage() {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
    <nav className="bg-primary px-6 md:px-12 py-2 items-center justify-between fixed w-full z-20 flex">

      {/* Menu */}
      <ul className="items-center gap-8 text-sm flex">
        <li className="text-white text-xl font-bold italic mr-6">
          <Link href="/">Practine</Link>
        </li>

        <li className={`hidden md:flex ${pathname === '/' ? 'font-bold text-white' : 'text-unactive hover:text-white'}  cursor-pointer transition`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`hidden md:flex ${pathname === '/public/feature' ? 'font-bold text-white' : 'text-unactive hover:text-white'}  cursor-pointer transition`}>
          <Link href="/public/feature">Fitur</Link>
        </li>
        <li className={`hidden md:flex ${pathname === '/public/price' ? 'font-bold text-white' : 'text-unactive hover:text-white'}  cursor-pointer transition`}>
          <Link href="/public/price">Harga</Link>
        </li>
        <li className={`hidden md:flex ${pathname === '/public/about' ? 'font-bold text-white' : 'text-unactive hover:text-white'}  cursor-pointer transition`}>
          <Link href="/public/about">Tentang Kami</Link>
        </li>
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <Link href="/auth/login" className="hidden md:flex text-white text-sm hover:opacity-80 transition">
          Login
        </Link>
        <Link href="/auth/register" className="hidden md:flex bg-black text-white text-sm px-4 py-2 rounded-lg hover:opacity-80 transition">
          Daftar
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="flex md:hidden bg-black text-white text-sm px-4 py-2 rounded-lg hover:opacity-80 transition">
          🔷
        </button>
      </div>
      
    </nav>


    {/* mobile */}
    <nav className={`${isOpen ? 'flex' : 'hidden'} z-30 w-screen h-screen fixed py-2 px-6 bg-primary flex-col md:hidden justify-between`}>

    {/* header */}
      <div className="flex justify-between"> 
        <h1 className="text-white text-xl font-bold italic  py-1" >Practine</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="flex md:hidden border-[0.5px] border-gray-300 text-white text-sm px-4 py-2 rounded-lg hover:opacity-80 transition">
          🔷
        </button>
      </div>

    {/* navigation */}
      <ul className=" mt-10 gap-8 flex flex-col">

        <li className={`${pathname === '/' ? 'font-bold text-white' : 'text-unactive hover:text-white'}  cursor-pointer transition`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`${pathname === '/public/feature' ? 'font-bold text-white' : 'text-unactive hover:text-white'}  cursor-pointer transition`}>
          <Link href="/public/feature">Fitur</Link>
        </li>
        <li className={`${pathname === '/public/price' ? 'font-bold text-white' : 'text-unactive hover:text-white'}  cursor-pointer transition`}>
          <Link href="/public/price">Harga</Link>
        </li>
        <li className={`${pathname === '/public/about' ? 'font-bold text-white' : 'text-unactive hover:text-white'}  cursor-pointer transition`}>
          <Link href="/public/about">Tentang Kami</Link>
        </li>
      </ul>
    
    {/* action */}
    <div className="flex gap-4">
        <Link href="/auth/register" className=" bg-black text-white text-sm px-4 py-2 rounded-lg hover:opacity-80 transition w-full text-center">
          Daftar
        </Link>
        <Link href="/auth/login" className=" bg-white rounded-lg px-4 py-2 text-sm hover:opacity-80 transition w-full text-center">
          Login
        </Link>
      </div>
    </nav>

    </section>

  );
}