'use client'
import LayoutAuthed from "@/app/component/authed/layoutAuthed";
import { useAuth } from "@/app/lib/useAuth";

export default function Dashboard() {
  useAuth({ middleware: 'auth' })

  return (
    <LayoutAuthed>
      <div className="space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Dashboard
          </h1>
          <p className="text-gray-400">
            Ringkasan bisnis Anda hari ini
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="bg-gray-100 p-5 rounded-xl border border-gray-300">
            <p className="text-sm text-gray-400">Omzet Hari Ini</p>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">
              Rp 1.250.000
            </h2>
          </div>

          <div className="bg-gray-100 p-5 rounded-xl border border-gray-300">
            <p className="text-sm text-gray-400">Transaksi</p>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">
              32
            </h2>
          </div>

          <div className="bg-gray-100 p-5 rounded-xl border border-gray-300">
            <p className="text-sm text-gray-400">Total Stok</p>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">
              540 item
            </h2>
          </div>

          <div className="bg-gray-100 p-5 rounded-xl border border-gray-300">
            <p className="text-sm text-gray-400">Stok Menipis</p>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">
              12 item
            </h2>
          </div>

        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Transaksi Terbaru */}
          <div className="lg:col-span-2 bg-gray-100 p-5 rounded-xl border border-gray-300">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Transaksi Terbaru
            </h3>

            <div className="space-y-3">
              {[
                { name: "Pulsa 50K", price: "Rp 50.000" },
                { name: "Voucher Data", price: "Rp 25.000" },
                { name: "Pulsa 100K", price: "Rp 100.000" },
                { name: "Starter Pack", price: "Rp 15.000" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-300 pb-2">
                  <p className="text-gray-600 text-sm">{item.name}</p>
                  <span className="text-gray-800 text-sm font-medium">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Alert / Insight */}
          <div className="bg-gray-100 p-5 rounded-xl border border-gray-300">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Perhatian
            </h3>

            <div className="space-y-3 text-sm text-gray-600">
              <p>⚠️ 5 produk stok hampir habis</p>
              <p>📈 Penjualan naik 12% dari kemarin</p>
              <p>🕒 Transaksi terakhir 10 menit lalu</p>
            </div>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="bg-gray-100 p-5 rounded-xl border border-gray-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Aksi Cepat
          </h3>

          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:opacity-90">
              + Tambah Transaksi
            </button>

            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
              + Tambah Stok
            </button>

            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
              Lihat Laporan
            </button>
          </div>
        </div>

      </div>
    </LayoutAuthed>
  );
}