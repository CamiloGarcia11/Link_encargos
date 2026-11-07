"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  Clock,
  Sparkles,
  QrCode,
  Volume2,
  VolumeX,
  PackageCheck,
  ShoppingBag,
} from "lucide-react";
import { toggleSound, isSoundEnabled, playTapSound } from "@/lib/sound";

export default function DesktopShowcase() {
  const [soundOn, setSoundOn] = useState(true);
  const [currentUrl, setCurrentUrl] = useState("https://encargosmiangel.lat");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
      setSoundOn(isSoundEnabled());
    }
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  return (
    <aside className="w-full flex flex-col gap-4 select-none sticky top-4">
      {/* Brand Hero Showcase Card */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full rounded-[26px] bg-white/90 backdrop-blur-md border-2 border-surface-dark p-5 sm:p-5 shadow-[0_6px_0_#171717] relative overflow-hidden"
      >
        {/* Ambient Top Glow in Card */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br from-neutral-200/50 to-neutral-100/30 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-dark text-white border border-surface-dark text-[10.5px] font-display font-extrabold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3 h-3 text-white fill-white" />
            <span>Experiencia Desktop Exclusiva</span>
          </div>

          {/* Sound FX Toggle Pill */}
          <button
            onClick={handleSoundToggle}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 hover:bg-neutral-200 text-surface-dark text-xs font-display font-bold border border-surface-dark transition-colors shadow-[0_2px_0_#171717]"
            title={soundOn ? "Silenciar efectos sonoros" : "Activar efectos sonoros"}
          >
            {soundOn ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-surface-dark" />
                <span className="text-[10px] tracking-wider uppercase">Audio ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
                <span className="text-[10px] tracking-wider uppercase text-neutral-500">Audio OFF</span>
              </>
            )}
          </button>
        </div>

        {/* Central Brand Identity Presentation */}
        <div className="flex items-center gap-4 mb-5 pb-5 border-b border-surface-dark/15">
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-surface-dark shadow-[0_4px_0_#171717] bg-white shrink-0">
            <Image
              src="/logo.jpg"
              alt="Logo Encargos Mi Ángel"
              fill
              sizes="80px"
              className="object-cover object-center"
              priority
            />
          </div>

          <div>
            <h2 className="font-display font-extrabold text-xl sm:text-2xl text-surface-dark leading-tight tracking-tight">
              Encargos Mi Ángel
            </h2>
            <p className="font-body text-xs text-neutral-600 font-semibold mt-0.5">
              Boutique & Compras por Encargo • Colombia
            </p>
            <div className="inline-flex items-center gap-1 mt-1 text-[11px] font-display font-bold text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Canales Oficiales Activos</span>
            </div>
          </div>
        </div>

        {/* Categories Showcase Pills */}
        <div className="mb-5">
          <p className="font-display text-[11px] font-extrabold uppercase tracking-widest text-neutral-500 mb-2.5">
            Líneas de Producto Disponibles
          </p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: "Ropa de Temporada", icon: "👗" },
              { name: "Calzado Original", icon: "👟" },
              { name: "Accesorios Boutique", icon: "💍" },
              { name: "Medicamentos & Más", icon: "💊" },
            ].map((cat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2 rounded-xl bg-neutral-100 border border-surface-dark/20 text-surface-dark text-xs font-display font-bold"
              >
                <span className="text-sm">{cat.icon}</span>
                <span className="truncate">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Value Badges Grid */}
        <div className="grid grid-cols-3 gap-2.5 pt-2">
          <div className="p-3 rounded-2xl bg-white border border-surface-dark/25 shadow-sm text-center">
            <ShieldCheck className="w-5 h-5 text-surface-dark mx-auto mb-1" />
            <p className="text-[11px] font-display font-extrabold text-surface-dark uppercase tracking-wider">
              100% Original
            </p>
            <p className="text-[10px] text-neutral-500 font-medium leading-tight">Garantizado</p>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-surface-dark/25 shadow-sm text-center">
            <Truck className="w-5 h-5 text-surface-dark mx-auto mb-1" />
            <p className="text-[11px] font-display font-extrabold text-surface-dark uppercase tracking-wider">
              Envíos Seguros
            </p>
            <p className="text-[10px] text-neutral-500 font-medium leading-tight">Toda Colombia</p>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-surface-dark/25 shadow-sm text-center">
            <Clock className="w-5 h-5 text-surface-dark mx-auto mb-1" />
            <p className="text-[11px] font-display font-extrabold text-surface-dark uppercase tracking-wider">
              Respuesta Rápida
            </p>
            <p className="text-[10px] text-neutral-500 font-medium leading-tight">Vía WhatsApp</p>
          </div>
        </div>
      </motion.div>

      {/* QR Code Quick Mobile Handoff Card */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        className="w-full rounded-[28px] bg-gradient-to-br from-neutral-50 via-white to-neutral-100 border-2 border-surface-dark p-5 shadow-[0_6px_0_#171717] flex items-center gap-4"
      >
        <div className="relative w-24 h-24 bg-white p-2 rounded-2xl border-2 border-surface-dark flex items-center justify-center shrink-0 shadow-inner">
          {/* Visual SVG QR representation */}
          <svg viewBox="0 0 100 100" className="w-full h-full text-surface-dark" fill="currentColor">
            <rect x="10" y="10" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="3" fill="none" />
            <rect x="16" y="16" width="12" height="12" rx="1.5" />
            <rect x="66" y="10" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="3" fill="none" />
            <rect x="72" y="16" width="12" height="12" rx="1.5" />
            <rect x="10" y="66" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="3" fill="none" />
            <rect x="16" y="72" width="12" height="12" rx="1.5" />
            <rect x="42" y="12" width="5" height="10" />
            <rect x="52" y="15" width="6" height="5" />
            <rect x="42" y="26" width="10" height="5" />
            <rect x="12" y="42" width="8" height="5" />
            <rect x="25" y="45" width="6" height="8" />
            <rect x="36" y="38" width="5" height="12" />
            <rect x="48" y="45" width="14" height="6" />
            <rect x="68" y="40" width="8" height="6" />
            <rect x="80" y="45" width="10" height="8" />
            <rect x="45" y="60" width="8" height="8" />
            <rect x="60" y="62" width="10" height="5" />
            <rect x="75" y="60" width="6" height="12" />
            <rect x="40" y="78" width="12" height="6" />
            <rect x="60" y="75" width="8" height="10" />
            <rect x="75" y="80" width="12" height="6" />
          </svg>

          {/* Mini logo inside QR center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-white border border-surface-dark overflow-hidden flex items-center justify-center shadow-xs">
              <Image src="/logo.jpg" alt="A" width={18} height={18} className="object-cover" />
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-1 text-surface-dark font-display text-[10.5px] font-extrabold uppercase tracking-wider">
            <QrCode className="w-3.5 h-3.5" />
            <span>Escanear con tu Celular</span>
          </div>
          <h4 className="font-display font-bold text-sm text-surface-dark leading-snug">
            Lleva nuestros enlaces a tu móvil
          </h4>
          <p className="font-body text-[11px] text-neutral-600 mt-0.5 leading-tight">
            Apunta la cámara de tu smartphone para abrir al instante y chatear por WhatsApp directo.
          </p>
        </div>
      </motion.div>
    </aside>
  );
}
