import { Star } from "lucide-react";
import Hero from "@/src/components/Hero";
import Features from "@/src/components/Features";
import Products from "@/src/components/Products";

const HomePage = ({
  setCurrentPage,
}: {
  setCurrentPage: (page: string) => void;
}) => (
  <>
    {/* Section Hero */}
    <Hero />
    {/* Client Logobar */}
    {/* <div className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-8">
          Telah Dipercaya Oleh
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="text-2xl font-bold text-gray-400">UNIVESITAS WIDYATAMA</div>
          <div className="text-2xl font-bold text-gray-400">NUESTO</div>
          <div className="text-2xl font-bold text-gray-400">IDSTAR</div>
          <div className="text-2xl font-bold text-gray-400">CASHUP</div>
          <div className="text-2xl font-bold text-gray-400">QAREER HARAPAN ASIA</div>
        </div>
      </div>
    </div> */}
    {/* Section Products */}
    <Products />
    {/* Section Features */}
    <Features />
    {/* Testimonial Section */}
    <section id="testimonial" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900">Apa Kata Mereka?</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="p-8 border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">
                {
                  "Sangat puas dengan hasil seragam kantor kami. Jahitannya rapi dan bahannya sangat adem dipakai seharian. Recomended!"
                }
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                  B
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">
                    Budi Santoso
                  </div>
                  <div className="text-gray-500 text-xs">
                    HRD PT. Qareer Harapan Asia
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* Final CTA */}
    <section id="kontak" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-blue-600 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Siap Memulai Produksi Anda?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Dapatkan penawaran harga terbaik sekarang juga. Hubungi tim
              marketing kami untuk konsultasi gratis mengenai desain dan bahan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/628123456789"
                className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
              >
                Hubungi Admin WhatsApp
              </a>
              <a
                href="mailto:rakamahardika22@gmail.com"
                className="bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-colors"
              >
                Kirim Email
              </a>
            </div>
          </div>
          {/* Background pattern decoration */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-400 rounded-full opacity-30 blur-3xl"></div>
        </div>
      </div>
    </section>
  </>
);

export default HomePage;
