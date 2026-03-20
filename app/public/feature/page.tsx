'use client'

import LayoutLandingPage from "../../component/layoutLandingPage";

export default function Features() {
  return (
    <LayoutLandingPage>
      <div className="px-4 py-16">

        {/* HERO */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Semua Fitur yang Kamu Butuhkan
          </h1>
          <p className="text-gray-500">
            Kelola bisnis lebih cepat, lebih rapi, dan tanpa ribet dengan sistem all-in-one.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 transition">
              Tonton Demo
            </button>
            <button className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              Coba Sekarang
            </button>
          </div>
        </div>

        {/* FEATURE GRID */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">

          <div className="border rounded-xl p-5 hover:shadow-lg transition">
            <h2 className="font-semibold mb-2">Manajemen Stok</h2>
            <p className="text-sm text-gray-500">
              Pantau stok secara real-time dan hindari kehabisan barang.
            </p>
          </div>

          <div className="border rounded-xl p-5 hover:shadow-lg transition">
            <h2 className="font-semibold mb-2">Pencatatan Penjualan</h2>
            <p className="text-sm text-gray-500">
              Semua transaksi tercatat otomatis dan rapi.
            </p>
          </div>

          <div className="border rounded-xl p-5 hover:shadow-lg transition">
            <h2 className="font-semibold mb-2">Laporan Otomatis</h2>
            <p className="text-sm text-gray-500">
              Lihat keuntungan dan performa bisnis secara instan.
            </p>
          </div>

          <div className="border rounded-xl p-5 hover:shadow-lg transition">
            <h2 className="font-semibold mb-2">Multi Toko</h2>
            <p className="text-sm text-gray-500">
              Kelola banyak toko dalam satu dashboard.
            </p>
          </div>

          <div className="border rounded-xl p-5 hover:shadow-lg transition">
            <h2 className="font-semibold mb-2">Import Data</h2>
            <p className="text-sm text-gray-500">
              Upload data dengan cepat menggunakan Excel / CSV.
            </p>
          </div>

          <div className="border rounded-xl p-5 hover:shadow-lg transition">
            <h2 className="font-semibold mb-2">Keamanan Data</h2>
            <p className="text-sm text-gray-500">
              Data aman dan tersimpan dengan sistem terpercaya.
            </p>
          </div>

        </div>

        {/* BENEFIT SECTION */}
        <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto mb-20 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Kenapa Pilih Sistem Ini?
          </h2>
          <p className="text-gray-500 mb-6">
            Dibuat untuk membantu bisnis kecil hingga menengah berkembang lebih cepat.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-semibold">🚀 Cepat</p>
              <p className="text-gray-500">Akses data dalam hitungan detik</p>
            </div>
            <div>
              <p className="font-semibold">📊 Akurat</p>
              <p className="text-gray-500">Minim kesalahan pencatatan</p>
            </div>
            <div>
              <p className="font-semibold">💡 Mudah</p>
              <p className="text-gray-500">UI simpel dan mudah digunakan</p>
            </div>
          </div>
        </div>

        {/* CTA BOTTOM */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            Siap Meningkatkan Bisnis Kamu?
          </h2>
          <p className="text-gray-500 mb-6">
            Coba sekarang dan rasakan kemudahannya.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 transition">
              Tonton Demo
            </button>
            <button className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              Mulai Sekarang
            </button>
          </div>
        </div>

      </div>
    </LayoutLandingPage>
  )
}