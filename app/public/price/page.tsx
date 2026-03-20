'use client'

import LayoutLandingPage from "../../component/layoutLandingPage"

export default function Price() {
  return (
    <LayoutLandingPage>
      <div className="py-28 flex flex-col items-center justify-center px-4">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Harga Simple, Tanpa Ribet
        </h1>

        <p className="text-gray-500 text-center mb-10 max-w-xl">
          Nikmati semua fitur tanpa batas dengan satu harga transparan.
        </p>

        {/* Card */}
        <div className="w-full max-w-md border rounded-2xl p-6 shadow-lg">

          {/* Plan Name */}
          <h2 className="text-xl font-semibold mb-2 text-center">
            All-in-One Plan
          </h2>

          {/* Price */}
          <div className="text-center mb-4">
            <p className="text-gray-400 line-through">
              Rp99.000
            </p>
            <p className="text-4xl font-bold">
              Rp9.900
            </p>
            <p className="text-sm text-green-500">
              Diskon 90% untuk bulan pertama
            </p>
          </div>

          {/* After Price */}
          <p className="text-center text-gray-500 mb-6">
            Setelah itu Rp99.000 / bulan
          </p>

          {/* Features */}
          <ul className="space-y-3 mb-6 text-sm">
            <li>✔ Semua fitur tanpa batas</li>
            <li>✔ Update gratis</li>
            <li>✔ Support prioritas</li>
            <li>✔ Akses penuh dashboard</li>
          </ul>

          {/* CTA */}
          <button className="w-full bg-primary text-white py-3 rounded-xl hover:opacity-90 transition">
            Mulai Sekarang
          </button>

        </div>

      </div>
    </LayoutLandingPage>
  )
}