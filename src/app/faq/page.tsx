"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FaqPage = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const faqs = [
    {
      q: "Berapa minimal order di RKM Konveksi?",
      a: "Minimal pemesanan kami adalah 24 pcs per desain. Untuk pesanan dalam jumlah besar (di atas 100 pcs), kami memberikan harga khusus yang lebih kompetitif.",
    },
    {
      q: "Berapa lama waktu pengerjaan?",
      a: "Normalnya berkisar antara 10-14 hari kerja setelah desain dan DP kami terima. Namun, durasi dapat menyesuaikan dengan kerumitan desain dan antrian produksi.",
    },
    {
      q: "Bisa minta sampel (sample) sebelum produksi massal?",
      a: "Ya, kami melayani pembuatan sampel fisik untuk pesanan di atas 100 pcs. Untuk pesanan di bawah itu, kami menyediakan mockup digital secara gratis.",
    },
    {
      q: "Apakah ada garansi jika hasil tidak sesuai?",
      a: "Tentu. Kami memberikan garansi perbaikan atau produksi ulang jika ditemukan cacat produksi atau hasil yang tidak sesuai dengan spesifikasi di invoice/SPK.",
    },
    {
      q: "Apakah bisa kirim ke luar kota?",
      a: "Sangat bisa. Kami bekerja sama dengan berbagai ekspedisi cargo darat, laut, dan udara untuk pengiriman ke seluruh wilayah Indonesia.",
    },
  ];

    const handlePesanWA = (paket: string) => {
    const nomorWA = "6282240072717";
    let pesan = "";

    if (paket === "Tanya-tanya" || paket === "Umum") {
      pesan = "Halo Admin, saya mau tanya produk RKM Konveksi?";
    } else {
      pesan = `Halo Admin, saya tertarik dengan paket ${paket} dan ingin memesan. Bisa bantu saya?`;
    }

    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">Pertanyaan Populer</h2>
          <p className="text-gray-600">
            Temukan jawaban cepat untuk pertanyaan yang sering diajukan
            pelanggan kami.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setActiveIdx(activeIdx === i ? -1 : i)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg text-gray-800">{faq.q}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${activeIdx === i ? "rotate-180" : ""}`}
                />
              </button>
              {activeIdx === i && (
                <div className="p-6 bg-blue-50/50 text-gray-600 border-t border-gray-100 animate-in fade-in duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gray-50 p-10 rounded-3xl border border-dashed border-gray-300">
          <h3 className="font-bold mb-2 text-black">Punya pertanyaan lain?</h3>
          <p className="text-gray-500 mb-6">
            Jangan ragu untuk bertanya langsung kepada tim CS kami.
          </p>
          <button className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1" onClick={() => handlePesanWA("Tanya-tanya")}>
            Hubungi Kami Melalui Kontak
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
