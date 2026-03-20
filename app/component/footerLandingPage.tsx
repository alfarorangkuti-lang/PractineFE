export default function FooterLandingPage(){
    return (
        
        <footer className="bg-primary text-white px-6 py-12">
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Brand */}
            <div>
            <h2 className="text-2xl font-bold italic mb-4">Practine</h2>
            <p className="text-unactive text-sm leading-relaxed">
                Platform modern untuk membantu bisnis mengelola data, transaksi,
                dan operasional dengan lebih efisien.
            </p>
            </div>

            {/* CTA */}
            <div>
            <h3 className="font-semibold mb-4">Mulai Sekarang</h3>
            <p className="text-unactive text-sm mb-4">
                Daftar sekarang dan mulai kelola bisnis Anda dengan lebih mudah.
            </p>
            <div className="flex gap-3">
                <button className="bg-black px-4 py-2 rounded text-sm hover:opacity-80 transition">
                Login
                </button>
                <button className="bg-white text-black px-4 py-2 rounded text-sm hover:bg-gray-200 transition">
                Daftar
                </button>
            </div>
            </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-unactive">
            © {new Date().getFullYear()} Practine. All rights reserved.
        </div>

        </footer>
    )
}