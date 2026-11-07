"use client";

import React, { useState } from "react";
import BackgroundWatermark from "@/components/BackgroundWatermark";
import HeaderProfile from "@/components/HeaderProfile";
import TickerBar from "@/components/TickerBar";
import DesktopShowcase from "@/components/DesktopShowcase";
import LinkCard, { LinkItem } from "@/components/LinkCard";
import BrandFeatures from "@/components/BrandFeatures";
import Footer from "@/components/Footer";
import ShareModal from "@/components/ShareModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const LINKS_DATA: LinkItem[] = [
  {
    id: "sitio-web-oficial",
    title: "Sitio Web Oficial — Encargos Mi Ángel",
    subtitle: "Explora nuestro catálogo en vivo, ropa, calzado y accesorios",
    url: "https://encargosmiangel.lat/",
    badge: "CATÁLOGO PRINCIPAL 🔥",
    highlight: true,
    tags: ["Catálogo En Vivo", "Compras Seguras", "Novedades"],
    iconType: "website",
  },
  {
    id: "whatsapp-directo",
    title: "Escríbenos por WhatsApp (Atención Directa)",
    subtitle: "Cotizaciones personalizadas y pedidos al instante",
    url: "https://wa.me/message/PEBR4FUBT2LNI1",
    badge: "ASESOR EN LÍNEA 🟢",
    highlight: false,
    tags: ["Atención Inmediata", "Despachos"],
    iconType: "whatsapp",
  },
  {
    id: "canal-whatsapp",
    title: "Únete a nuestro Canal de WhatsApp (Novedades y Ofertas)",
    subtitle: "Lanzamientos exclusivos, prendas reales y promociones",
    url: "https://whatsapp.com/channel/0029Vb7JDjw59PwM2ACDrJ2k",
    badge: "COMUNIDAD VIP ✨",
    highlight: false,
    tags: ["Fotos Reales", "Ofertas Semanales"],
    iconType: "channel",
  },
  {
    id: "instagram-oficial",
    title: "Síguenos en Instagram (@encargos_miangelpreferido_)",
    subtitle: "Tendencias, outfits, reseñas reales y catálogo diario",
    url: "https://www.instagram.com/encargos_miangelpreferido_?mdxt=MWZpZjN4c2I4a3JicA==",
    badge: "INSTAGRAM OFICIAL 📸",
    highlight: false,
    tags: ["@encargos_miangelpreferido_", "Outfit Ideas"],
    iconType: "instagram",
  },
  {
    id: "tiktok-oficial",
    title: "Síguenos en TikTok (@encargos_miangel_)",
    subtitle: "Videos diarios, unboxing y pedidos de nuestros clientes",
    url: "https://www.tiktok.com/@encargos_miangel_?_r=1&_t=ZS-9BBy3bXWr0H",
    badge: "TRENDING EN TIKTOK 🎵",
    highlight: false,
    tags: ["@encargos_miangel_", "Videos & Hauls"],
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
        <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            
            {/* Left Column: Desktop Hero Showcase (Visible on lg+ screens) */}
            <div className="hidden lg:block lg:col-span-5 sticky top-4">
              <DesktopShowcase />
            </div>

            {/* Right Column (Mobile: Full Width / Desktop: Links Hub) */}
            <div className="w-full lg:col-span-7 flex flex-col items-center">
              {/* Profile Header */}
              <div className="w-full max-w-md mx-auto">
                <HeaderProfile onOpenShare={() => setShareOpen(true)} />
              </div>

              {/* Main Content Area */}
              <div className="w-full max-w-md mx-auto px-1 sm:px-2 pt-1 flex flex-col gap-3.5">
                
                {/* Attention Grabber / Trust Banner - Sleek and compact */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.08 }}
                  className="w-full rounded-xl bg-white/90 backdrop-blur-sm border border-surface-dark/25 py-2 px-3 flex items-center justify-between shadow-[0_1.5px_0_#171717]"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
                    </span>
                    <p className="text-[10.5px] font-display font-extrabold uppercase tracking-wider text-surface-dark">
                      ¡Colección Exclusiva de Temporada! ✨
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-gold-500">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                </motion.div>

                {/* 5 Official Links List - Immediately visible above the fold */}
                <div className="flex flex-col gap-2.5 sm:gap-3 pt-0.5">
                  {LINKS_DATA.map((link, idx) => (
                    <LinkCard key={link.id} link={link} index={idx} />
                  ))}
                </div>

                {/* Service Process Accordion */}
                <div className="pt-1">
                  <BrandFeatures />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Global Footer */}
      <div className="relative z-10 w-full mt-4">
        <Footer />
      </div>

      {/* Floating Action WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Share Profile Modal */}
      <ShareModal isOpen={shareOpen} onClose={() => setShareOpen(false)} />
    </main>
  );
}
