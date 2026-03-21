export default function Features() {
  const features = [
    {
      icon: "📦",
      title: "Manajemen Stok",
      desc: "Pantau dan kelola stok barang secara real-time tanpa takut kehabisan atau kelebihan."
    },
    {
      icon: "💰",
      title: "Pencatatan Keuangan",
      desc: "Catat pemasukan dan pengeluaran bisnis dengan rapi dan otomatis."
    },
    {
      icon: "📊",
      title: "Laporan Otomatis",
      desc: "Dapatkan laporan penjualan dan keuangan secara instan dan akurat."
    },
    {
      icon: "🔄",
      title: "Tracking Transaksi",
      desc: "Pantau semua transaksi masuk dan keluar dengan detail lengkap."
    },
    {
      icon: "🏪",
      title: "Multi Toko",
      desc: "Kelola lebih dari satu toko dalam satu dashboard yang terintegrasi."
    },
    {
      icon: "⚡",
      title: "Cepat & Ringan",
      desc: "Aplikasi dirancang ringan dan cepat untuk menunjang operasional bisnis."
    },
    {
      icon: "🔐",
      title: "Keamanan Data",
      desc: "Data bisnis Anda aman dengan sistem keamanan yang terpercaya."
    },
    {
      icon: "📱",
      title: "Akses Dimana Saja",
      desc: "Kelola bisnis Anda kapan saja dan dimana saja melalui berbagai perangkat."
    }
  ];

  return (
    <section className="px-6 md:px-20 py-16">
      
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-bold text-3xl md:text-4xl mb-4">
          Fitur Lengkap untuk Bisnis Anda
        </h2>
        <p className="text-sm md:text-base leading-relaxed">
          Semua yang Anda butuhkan untuk mengelola inventaris dan keuangan bisnis 
          dalam satu platform yang mudah digunakan.
        </p>
      </div>

      {/* Grid Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {features.map((item, index) => (
          <div
            key={index}
            className="
              border-[0.5px] border-slate-300
              rounded-xl
              p-18
              bg-white/5
              backdrop-blur
              hover:scale-105
              transition
            "
          >
            <div className="text-3xl mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-12">
        <button className="px-6 py-2 rounded-lg bg-primary text-white border border-unactive hover:opacity-90 transition">
          Tonton Demo
        </button>
      </div>

    </section>
  );
}