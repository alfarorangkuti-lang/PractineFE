'use client'

import LayoutLandingPage from "../../component/public/layoutLandingPage";

export default function AboutUs() {
  return (
    <LayoutLandingPage>
      <div className="px-4 py-16 max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Tentang Kami
        </h1>

        <p className="text-gray-500 text-center mb-12">
          Dibuat dari kebutuhan nyata, bukan sekadar ide.
        </p>

        {/* Story */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Aplikasi ini berawal dari masalah sederhana: mencatat stok, penjualan,
            dan keuntungan secara manual itu ribet, rawan salah, dan memakan waktu.
          </p>

          <p>
            Dari situ, sistem ini dibangun sebagai solusi praktis yang benar-benar
            dipakai sehari-hari, bukan sekadar konsep.
          </p>

          <p>
            Fokus kami sederhana: membuat sistem yang cepat, mudah digunakan,
            dan langsung membantu operasional bisnis tanpa ribet.
          </p>
        </div>

        {/* Divider */}
        <div className="my-12 border-t"></div>

        {/* Philosophy */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-xl font-semibold">
            Cara Kami Membangun
          </h2>

          <p>
            Kami percaya software yang baik bukan yang paling kompleks,
            tapi yang paling berguna.
          </p>

          <p>
            Setiap fitur dibuat dengan satu pertanyaan:
            apakah ini benar-benar membantu pengguna?
          </p>
        </div>

        {/* Divider */}
        <div className="my-12 border-t"></div>

        {/* Limitation */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-sm text-gray-700">
          <h2 className="font-semibold mb-2">
            ⚠️ Status Saat Ini
          </h2>

          <p>
            Saat ini aplikasi masih dalam tahap awal dan hanya tersedia
            untuk maksimal <span className="font-semibold">10 pengguna</span>.
          </p>

          <p className="mt-2">
            Ini karena keterbatasan server, dan kami ingin memastikan
            performa tetap stabil untuk pengguna yang sudah ada.
          </p>

          <p className="mt-2">
            Kami akan membuka lebih banyak slot seiring perkembangan sistem.
          </p>
        </div>

        {/* Divider */}
        <div className="my-12 border-t"></div>

        {/* CONTACT SECTION */}
        <div className="text-center">

          <h2 className="text-2xl font-bold mb-4">
            Hubungi Kami
          </h2>

          <p className="text-gray-500 mb-6">
            Punya pertanyaan atau ingin mencoba? Hubungi kami langsung.
          </p>

          {/* WhatsApp */}
          <a
            href="https://wa.me/628XXXXXXXXXX"
            target="_blank"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-xl hover:opacity-90 transition mb-6"
          >
            Chat via WhatsApp
          </a>

          {/* Social Media */}
          <div className="flex justify-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-black">
              Instagram
            </a>
            <a href="#" className="hover:text-black">
              TikTok
            </a>
            <a href="#" className="hover:text-black">
              Email
            </a>
          </div>

        </div>

        {/* Closing */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Terima kasih sudah menjadi bagian dari perjalanan awal ini.
          </p>
        </div>

      </div>
    </LayoutLandingPage>
  )
}