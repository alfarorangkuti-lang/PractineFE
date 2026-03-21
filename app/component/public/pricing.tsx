export default function Pricing() {
  return (
    <section className="px-6 md:px-20 py-35 grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center">
      
      {/* Card / Preview */}
      <div className="w-full h-64 md:h-72 rounded-xl bg-white/5 backdrop-blur flex items-center justify-center border-[0.5px] border-slate-300">
        <span className="text-unactive text-sm ">Preview / Image</span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6 max-w-xl">
        
        {/* Title */}
        <h2 className="font-bold text-3xl md:text-4xl leading-tight">
          Hanya dengan Rp. 9.900 
          <br />
          di 30 hari pertama
        </h2>

        {/* Description */}
        <p className=" leading-relaxed text-sm md:text-base">
          Hanya dengan harga yang tidak lebih mahal dari nasi padang anda sudah bisa menggunakan tools ini untuk mengelola bisnis anda.
        </p>

        {/* CTA */}
        <button className="px-6 py-2 rounded-lg bg-primary text-white border border-unactive hover:opacity-80 transition w-fit">
          Berlangganan Sekarang
        </button>

      </div>

    </section>
  );
}