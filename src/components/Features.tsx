import { Clock, ShieldCheck, Award } from "lucide-react";

const Features = () => (
  <section id="keunggulan" className="py-24 bg-blue-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-blue-400 font-bold uppercase tracking-widest mb-4">
            Kenapa Kami?
          </h2>
          <h3 className="text-4xl font-bold mb-8 leading-tight">
            Produksi Seragam & Apparel Custom – Rapi, Tepat Waktu, Terpercaya
          </h3>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-blue-800 p-3 rounded-lg h-fit text-blue-300">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">
                  Pengerjaan Tepat Waktu
                </h4>
                <p className="text-blue-100/70">
                  Kami menjamin jadwal pengiriman sesuai kesepakatan awal untuk
                  mendukung operasional Anda.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-800 p-3 rounded-lg h-fit text-blue-300">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">
                  Quality Control Ketat
                </h4>
                <p className="text-blue-100/70">
                  Setiap produk melalui 3 tahap pengecekan: jahitan, kebersihan,
                  dan finishing sablon/bordir.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-800 p-3 rounded-lg h-fit text-blue-300">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Harga Kompetitif</h4>
                <p className="text-blue-100/70">
                  Mendapatkan kualitas terbaik langsung dari produsen pertama
                  tanpa perantara vendor lain.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="bg-blue-800/50 p-8 rounded-3xl text-center">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-300 text-sm">Klien Perusahaan</div>
            </div>
            <div className="bg-white p-8 rounded-3xl text-center text-blue-900">
              <div className="text-4xl font-bold mb-2">5k+</div>
              <div className="text-blue-900/60 text-sm">Produk/Bulan</div>
            </div>
          </div>
          <div className="pt-8 space-y-4">
            <div className="bg-blue-500 p-8 rounded-3xl text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100 text-sm">Puas</div>
            </div>
            <div className="bg-blue-800/50 p-8 rounded-3xl text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-300 text-sm">Review</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Features;
