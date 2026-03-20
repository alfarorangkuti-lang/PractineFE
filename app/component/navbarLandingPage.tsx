export default function NavbarLandingPage() {
  return (
    <nav className="bg-primary px-6 md:px-12 py-2 flex items-center justify-between fixed w-full z-20">
      

      {/* Menu */}
      <ul className="items-center gap-8 text-sm flex">
        <li className="text-white text-xl font-bold italic">
          Practine
        </li>
        <li className="hidden md:flex text-unactive hover:text-white cursor-pointer transition">
          Fitur
        </li>
        <li className="hidden md:flex text-unactive hover:text-white cursor-pointer transition">
          Harga
        </li>
        <li className="hidden md:flex text-unactive hover:text-white cursor-pointer transition">
          Tentang Kami
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