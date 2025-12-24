"use client";
import {
  MessageSquare,
  Search,
  CreditCard,
  ShoppingBag,
  Truck,
  MessageCircle,
} from "lucide-react";

const CaraPemesananPage = () => {
  const steps = [
    {
      icon: <MessageSquare size={32} />,
      title: "Konsultasi Desain",
      desc: "Diskusikan konsep, jenis bahan, dan detail sablon/bordir dengan admin kami via WhatsApp.",
    },
    {
      icon: <Search size={32} />,
      title: "Penawaran & Invoice",
      desc: "Kami akan memberikan penawaran harga terbaik sesuai spesifikasi yang disepakati.",
    },
    {
      icon: <CreditCard size={32} />,
      title: "Down Payment (DP)",
      desc: "Pembayaran uang muka sebesar 50% untuk memulai proses antrian produksi.",
    },
    {
      icon: <ShoppingBag size={32} />,
      title: "Proses Produksi",
      desc: "Tim kami mulai memproduksi pesanan Anda dengan pengecekan kualitas di setiap tahap.",
    },
    {
      icon: <Truck size={32} />,
      title: "Pelunasan & Kirim",
      desc: "Setelah barang selesai, Anda melakukan pelunasan dan barang segera kami kirim.",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-blue-50/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">Cara Pemesanan</h2>
          <p className="text-gray-600">
            Proses pemesanan mudah dan transparan di MicMiller Konveksi.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-3xl shadow-sm border border-blue-100 relative"
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                {step.icon}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-blue-600 font-bold">
                    Langkah {i + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-black">{step.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 p-8 rounded-3xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Butuh Bantuan Segera?</h3>
          <p className="mb-8 text-blue-100">
            Tim kami siap membantu Anda menghitung biaya dan memilih bahan yang
            tepat.
          </p>
          <a
            href="https://wa.me/6285771024619?text=Halo%20Admin%2C%20saya%20mau%20konsultasi%20desain%20untuk%20pemesanan%20pakaian."
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-gray-100 transition-all"
          >
            <MessageCircle size={20} /> Chat Admin Sekarang
          </a>
        </div>
      </div>
    </div>
  );
};

export default CaraPemesananPage;
