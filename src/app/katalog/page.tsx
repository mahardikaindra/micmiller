import Image from "next/image";
import { Search } from "lucide-react";

const KatalogPage = () => {
  const products = [
    {
      name: "Kaos Cotton Combed",
      price: "Mulai Rp 45k",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400",
      tag: "Best Seller",
    },
    {
      name: "Polo Shirt Lacoste",
      price: "Mulai Rp 65k",
      img: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=400",
      tag: "Populer",
    },
    {
      name: "Jaket Bomber / Parka",
      price: "Mulai Rp 125k",
      img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400",
      tag: "Custom",
    },
    {
      name: "Hoodie & Sweater",
      price: "Mulai Rp 90k",
      img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=400",
      tag: "Distro",
    },
    {
      name: "Almamater / Jas",
      price: "Mulai Rp 135k",
      img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=400",
      tag: "Akademik",
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Katalog Produk</h2>
          <p className="text-gray-600">
            Pilih kategori produk yang sesuai dengan kebutuhan komunitas atau
            instansi Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-500"
                  fill
                />
                <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-black">{p.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{p.price}</p>
                <button className="w-full py-3 bg-gray-200 hover:bg-blue-600 hover:text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-black">
                  Lihat Detail <Search size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KatalogPage;
