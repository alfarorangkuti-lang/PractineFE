export default function HeroSection() {
  return (
    <section className="bg-animated-gradient flex flex-col items-center justify-center text-center py-28 px-6">
      
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight text-animated-gradient max-w-4xl">
        Kelola Inventaris & Keuangan
        <br className="hidden md:block" />
        Bisnis Anda dalam Satu Platform
      </h1>

      {/* Description */}
      <p className="mt-6 text-sm md:text-base text-animated-gradient max-w-2xl leading-relaxed">
        Pantau stok, catat transaksi, dan kelola keuangan bisnis Anda dengan mudah.
        Solusi lengkap untuk membantu operasional lebih rapi, cepat, dan efisien.
      </p>

      {/* Primary Actions */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <button className="px-5 py-2 rounded-lg bg-black text-white border border-unactive hover:opacity-80 transition">
          Mulai Sekarang
        </button>
        <button className="px-5 py-2 rounded-lg bg-primary text-white border border-unactive hover:opacity-90 transition">
          Lihat Demo
        </button>
      </div>

      {/* Secondary Action */}
      <div className="mt-4">
        <button className="px-5 py-2 rounded-lg bg-white text-black border border-unactive hover:bg-gray-100 transition">
          Login
        </button>
      </div>

    </section>
  );
}