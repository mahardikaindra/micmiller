import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", id: "home" },
    { name: "Produk", id: "#produk" },
    { name: "Keunggulan", id: "#keunggulan" },
    { name: "Testimonial", id: "#testimonial" },
    { name: "Kontak", id: "#kontak" },
  ];

  // const handleNavClick = (id: string) => {
  //   setCurrentPage(id);
  //   setIsOpen(false);
  //   window.scrollTo(0, 0);
  // };

    const handleNavClick = (id: string) => {
    setIsOpen(false);
    
    if (id.startsWith('#')) {
      const sectionId = id.substring(1);
      if (currentPage !== 'home') {
        setCurrentPage(id);
        // Delay scroll agar halaman home render dulu
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        setCurrentPage(id);
      }
    } else {
      setCurrentPage(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };


  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled || currentPage !== "home" ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <span
              className={`text-2xl font-bold ${scrolled || currentPage !== "home" ? "text-blue-900" : "text-white"}`}
            >
              RKM<span className="text-blue-500">KONVEKSI</span>
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`hover:text-blue-500 font-medium transition-colors ${
                    currentPage === item.id
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : scrolled || currentPage !== "home"
                        ? "text-gray-700"
                        : "text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <a
                href="https://wa.me/6282240072717?text=Halo%20RKM%20Konveksi%2C%20saya%20ingin%20konsultasi%20mengenai%20pemesanan%20pakaian."
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={
                scrolled || currentPage !== "home"
                  ? "text-gray-900"
                  : "text-white"
              }
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-3 rounded-lg font-medium ${
                  currentPage === item.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4">
              <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl font-bold">
                Hubungi WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
