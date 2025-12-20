"use client";
import Image from "next/image";
import { ChevronRight, CheckCircle2 } from "lucide-react";
  const Hero = () => {
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
    <section
      id="beranda"
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/assets/banner.png"}
          alt="Workshop Konveksi"
          className="w-full h-full object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white pt-20">
        <div className="max-w-4l">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Solusi <span className="text-blue-400">Produksi Pakaian Berkualitas</span> untuk Kebutuhan Bisnis & Komunitas Anda
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
            Melayani pembuatan kaos, kemeja, jaket, hoodie, seragam kerja, hingga kebutuhan event dengan kualitas jahitan rapi dan harga bersaing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center transition-all shadow-xl" onClick={() => handlePesanWA("Tanya-tanya")}>
              Konsultasi Gratis <ChevronRight className="ml-2" />
            </button>
            {/* <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg transition-all">
              Lihat Portofolio
            </button> */}
          </div>
          <div className="mt-12 flex items-center space-x-6 text-sm text-gray-300">
            <div className="flex items-center">
              <CheckCircle2 className="text-green-400 mr-2" size={18} /> Minimal
              Order 24 Pcs
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="text-green-400 mr-2" size={18} /> Free
              Desain
            </div>
          </div>
        </div>
      </div>
    </section>
  );};

export default Hero;
