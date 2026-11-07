"use client";

import React, { useState } from "react";
import BackgroundWatermark from "@/components/BackgroundWatermark";
import HeaderProfile from "@/components/HeaderProfile";
import TickerBar from "@/components/TickerBar";
import DesktopShowcase from "@/components/DesktopShowcase";
import LinkCard, { LinkItem } from "@/components/LinkCard";
import Footer from "@/components/Footer";
import ShareModal from "@/components/ShareModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const LINKS_DATA: LinkItem[] = [
  {
    id: "sitio-web-oficial",
    title: "Sitio Web Oficial",
    subtitle: "Catálogo en línea • encargosmiangel.lat",
    url: "https://encargosmiangel.lat/",
    badge: "DESTACADO 🔥",
    highlight: true,
    iconType: "website",
  },
  {
    id: "whatsapp-directo",
    title: "WhatsApp Directo",
    subtitle: "Asesoría personalizada y pedidos",
    url: "https://wa.me/message/PEBR4FUBT2LNI1",
    badge: "EN LÍNEA 🟢",
    highlight: false,
    iconType: "whatsapp",
  },
  {
    id: "canal-whatsapp",
    title: "Canal de WhatsApp",
    subtitle: "Novedades, fotos reales y ofertas",
    url: "https://whatsapp.com/channel/0029Vb7JDjw59PwM2ACDrJ2k",
    badge: "VIP ✨",
    highlight: false,
    iconType: "channel",
  },
  {
    id: "instagram-oficial",
    title: "Instagram Oficial",
    subtitle: "@encargos_miangelpreferido_",
    url: "https://www.instagram.com/encargos_miangelpreferido_?mdxt=MWZpZjN4c2I4a3JicA==",
    highlight: false,
    iconType: "instagram",
  },
  {
    id: "tiktok-oficial",
    title: "TikTok Oficial",
    subtitle: "@encargos_miangel_",
    url: "https://www.tiktok.com/@encargos_miangel_?_r=1&_t=ZS-9BBy3bXWr0H",
    highlight: false,
    iconType: "tiktok",
  },
];

export default function Home() {
  const [shareOpen, setShareOpen] = useState(false);

  return (
    <main className="relative min-h-screen min-h-[100dvh] bg-boutique-50 overflow-x-hidden flex flex-col justify-between selection:bg-gold-200 selection:text-surface-dark">
      {/* Background with watermark logo, orbital rings and ambient glowing lights */}
      <BackgroundWatermark />

      <div className="relative z-10 w-full flex flex-col items-center flex-1">
        {/* Continuous Dynamic Luxury Ribbon Ticker */}
        <div className="w-full">
          <TickerBar />
        </div>

        {/* Responsive Container: Dual-pane Desktop Layout & Focused Mobile View */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Desktop Hero Showcase (Visible on lg+ screens) */}
            <div className="hidden lg:block lg:col-span-5 sticky top-6">
              <DesktopShowcase />
            </div>

            {/* Right Column (Mobile: Full Width / Desktop: Links Hub) */}
            <div className="w-full lg:col-span-7 flex flex-col items-center">
              {/* Profile Header */}
              <div className="w-full max-w-md mx-auto">
                <HeaderProfile onOpenShare={() => setShareOpen(true)} />
              </div>

              {/* 5 Official Links List - Spacious, Clean and Directly Actionable */}
              <div className="w-full max-w-md mx-auto px-1 pt-3 flex flex-col gap-4 sm:gap-4.5">
                {LINKS_DATA.map((link, idx) => (
                  <LinkCard key={link.id} link={link} index={idx} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Global Footer */}
      <div className="relative z-10 w-full mt-6">
        <Footer />
      </div>

      {/* Floating Action WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Share Profile Modal */}
      <ShareModal isOpen={shareOpen} onClose={() => setShareOpen(false)} />
    </main>
  );
}
