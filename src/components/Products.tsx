"use client";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const Products = () => {
  const categories = [
    {
      title: "Kaos Custom",
      desc: "Cotton Combed 30s/24s, Sablon DTF/Screen Printing.",
      icon: "👕",
      img: "/assets/kaos.png",
    },
    {
      title: "Seragam Kantor",
      desc: "Bahan American Drill, Nagata, hingga Wol premium.",
      icon: "👔",
      img: "/assets/kemeja.png",
    },
    {
      title: "Jaket & Hoodie",
      desc: "Fleece, Parasut, Taslan untuk komunitas & distro.",
      icon: "🧥",
      img: "/assets/hoodie.png",
    },
    {
      title: "Polo Shirt",
      desc: "Bahan Lacoste CVC dengan bordir komputer rapi.",
      icon: "👕",
      img: "/assets/polo.png",
    },
  ];

  return (
    <section id="produk" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase mb-2">
            Katalog Produk
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Produksi Konveksi Terbaik Kami
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Kami menggunakan bahan pilihan berkualitas tinggi untuk kepuasan
            klien kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-contain group-hover:scale-90 transition-transform duration-500 rounded-2xl"
                  fill
                />
                {/* <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-lg text-2xl shadow-sm">{cat.icon}</div> */}
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 text-gray-900">
                  {cat.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {cat.desc}
                </p>
                <button className="text-blue-600 font-semibold flex items-center hover:translate-x-1 transition-transform">
                  Cek Detail <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
