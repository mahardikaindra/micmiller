"use client";
import { useState } from "react";
import Navbar from "@components/Navbar";
import KatalogPage from "./katalog/page";
import CaraPemesananPage from "./cara-pemesanan/page";
import TentangKamiPage from "./tentang-kami/page";
import FaqPage from "./faq/page";
import Footer from "@components/Footer";
import HomePage from "./home/page";

import { useRouter } from "next/navigation";

// --- Root App ---
export default function App() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "catalog":
        return <KatalogPage />;
      case "order":
        return <CaraPemesananPage />;
      case "about":
        return <TentangKamiPage />;
      case "faq":
        return <FaqPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="animate-in fade-in duration-500">{renderPage()}</main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
