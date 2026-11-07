"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Share2, CheckCircle, Truck, ShieldCheck, Sparkles } from "lucide-react";
import { playTapSound } from "@/lib/sound";

interface HeaderProfileProps {
  onOpenShare: () => void;
}

export default function HeaderProfile({ onOpenShare }: HeaderProfileProps) {
  const handleShareClick = () => {
    playTapSound();
    onOpenShare();
  };

  return (
    <header className="relative w-full flex flex-col items-center text-center pt-2 pb-1 px-2 select-none">
      {/* Top action bar: Share button */}
      <div className="w-full flex justify-end mb-1">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShareClick}
          aria-label="Compartir perfil oficial"
          className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border-[1.5px] border-surface-dark text-surface-dark text-[10.5px] font-display font-bold uppercase tracking-wider shadow-[0_2px_0_#171717] hover:shadow-[0_3px_0_#171717] transition-all hover:bg-gold-50"
        >
          <Share2 className="w-3 h-3 text-gold-600" />
          <span>Compartir</span>
        </motion.button>
      </div>

      {/* Compact Profile Avatar with Luxury Golden Halo */}
      <div className="relative mb-2">
        {/* Pulsing ambient halo ring */}
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-gold-300/40 via-boutique-200/50 to-gold-400/40 opacity-75 blur-md animate-pulse-subtle" />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 18, stiffness: 220 }}
          whileHover={{ scale: 1.04, rotate: 1 }}
          className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-[2.5px] border-surface-dark shadow-[0_4px_0_#171717] p-1 flex items-center justify-center overflow-hidden"
        >
          <div className="relative w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
            <Image
              src="/logo.jpg"
              alt="Logo Oficial Encargos Mi Ángel"
              fill
              sizes="(max-width: 768px) 96px, 96px"
              className="object-cover object-center scale-105"
              priority
            />
          </div>
        </motion.div>

        {/* Verified Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.25, type: "spring", stiffness: 400 }}
          className="absolute -bottom-0.5 right-0 bg-surface-dark text-white p-1 rounded-full border border-white shadow-xs flex items-center justify-center"
          title="Marca Verificada y Oficial"
        >
          <CheckCircle className="w-3 h-3 text-emerald-400 fill-emerald-400" />
        </motion.div>

        {/* Floating Sparkle Badge */}
        <motion.div
          animate={{
            y: [-2, 2, -2],
            rotate: [-4, 4, -4],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1 -left-1 bg-white text-gold-500 p-1 rounded-full border border-surface-dark shadow-[0_1.5px_0_#171717] text-xs flex items-center justify-center"
        >
          ✨
        </motion.div>
      </div>

      {/* Main Title & Brand Tagline */}
      <motion.div
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.35 }}
      >
        <h1 className="font-display text-2xl sm:text-[26px] font-extrabold tracking-tight text-surface-dark leading-tight mb-0.5">
          Encargos Mi Ángel
        </h1>

        <p className="font-body text-[11px] sm:text-xs text-neutral-600 font-semibold tracking-wide mb-2 max-w-sm mx-auto">
          Boutique & Compras bajo pedido en Colombia 🇨🇴
        </p>
      </motion.div>

      {/* Trust & Category Pills - Concise single row */}
      <motion.div
        initial={{ y: 6, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.18, duration: 0.35 }}
        className="flex items-center justify-center gap-1.5 flex-wrap max-w-md w-full mb-1"
      >
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-surface-dark text-[10px] font-display font-bold tracking-wider uppercase shadow-[0_1.5px_0_#171717]">
          <ShieldCheck className="w-3 h-3 text-gold-600" />
          <span>100% Original</span>
        </span>

        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-dark text-white border border-surface-dark text-[10px] font-display font-bold tracking-wider uppercase shadow-[0_1.5px_0_#171717]">
          <Truck className="w-3 h-3 text-gold-400" />
          <span>Envíos Seguros</span>
        </span>

        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-boutique-100 border border-surface-dark text-[10px] font-display font-bold tracking-wider uppercase shadow-[0_1.5px_0_#171717]">
          <Sparkles className="w-3 h-3 text-gold-500" />
          <span>Ropa • Calzado • Accesorios</span>
        </span>
      </motion.div>
    </header>
  );
}
