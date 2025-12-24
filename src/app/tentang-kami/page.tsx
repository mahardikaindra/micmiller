import React from "react";
import { Users, Target, Rocket } from "lucide-react";
import Image from "next/image";

const TentangKamiPage = () => (
  <div className="pt-24">
    {/* Vision Section */}
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
              Tentang MicMiller Konveksi
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight text-black">
              Membangun Kredibilitas Melalui Kualitas Pakaian
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Berdiri sejak tahun 2017 di Kota Bandung, MicMiller Konveksi
              telah bertransformasi dari bengkel jahit kecil menjadi pusat
              produksi garment modern. Kami percaya bahwa setiap pakaian yang
              kami buat adalah representasi dari identitas klien kami.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-xl text-black">Visi</h4>
                <p className="text-sm text-gray-500">
                  Menjadi partner konveksi nomor satu di Indonesia dengan
                  standar kualitas global.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-xl text-black">Misi</h4>
                <p className="text-sm text-gray-500">
                  Memberikan solusi produksi tepat waktu dengan pelayanan yang
                  profesional dan jujur.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-96">
            <Image
              src={"/assets/desainer.png"}
              alt="Workshop Konveksi"
              className="w-full h-full object-cover rounded-2xl"
              fill
              priority
            />
            {/* <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-8 rounded-3xl hidden md:block">
              <div className="text-4xl font-bold">12+</div>
              <div className="text-sm opacity-80 uppercase tracking-wider">
                Tahun Pengalaman
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-16 text-black">Nilai-Nilai Perusahaan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: <Users />,
              title: "Kepuasan Pelanggan",
              desc: "Kami mendengarkan setiap detail kebutuhan Anda untuk hasil yang sempurna.",
            },
            {
              icon: <Target />,
              title: "Inovasi Berkelanjutan",
              desc: "Terus memperbarui mesin dan teknik produksi untuk hasil yang lebih efisien.",
            },
            {
              icon: <Rocket />,
              title: "Integritas & Jujur",
              desc: "Transparan dalam pemilihan bahan dan ketepatan waktu pengerjaan.",
            },
          ].map((val, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">{val.title}</h3>
              <p className="text-gray-600">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default TentangKamiPage;
