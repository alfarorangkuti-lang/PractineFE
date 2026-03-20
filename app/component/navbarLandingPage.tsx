import Link from "next/link";
import { usePathname } from 'next/navigation'
export default function NavbarLandingPage() {
  const pathname = usePathname()
  return (
    <nav className="bg-primary px-6 md:px-12 py-2 flex items-center justify-between fixed w-full z-20">
      

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
        <button className="text-white text-sm hover:opacity-80 transition">
          Login
        </button>
        <button className="bg-black text-white text-sm px-4 py-2 rounded-lg hover:opacity-80 transition">
          Daftar
        </button>
      </div>

    </nav>
  );
}