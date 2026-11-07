"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Share2, CheckCircle } from "lucide-react";
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
    <header className="relative w-full flex flex-col items-center text-center pt-3 pb-2 px-4 select-none">
      {/* Top action bar: Share button */}
      <div className="w-full flex justify-end mb-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShareClick}
          aria-label="Compartir perfil oficial"
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border-[1.5px] border-surface-dark text-surface-dark text-xs font-display font-bold uppercase tracking-wider shadow-[0_2px_0_#171717] hover:shadow-[0_3px_0_#171717] transition-all hover:bg-neutral-100"
        >
          <Share2 className="w-3.5 h-3.5 text-surface-dark" />
          <span>Compartir</span>
        </motion.button>
      </div>

      {/* Profile Avatar */}
      <div className="relative mb-2.5">
        <div className="absolute -inset-2.5 rounded-full bg-gradient-to-r from-neutral-300/40 via-neutral-100/50 to-neutral-400/40 opacity-75 blur-md animate-pulse-subtle" />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 18, stiffness: 220 }}
          whileHover={{ scale: 1.04 }}
          className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border-[2.5px] border-surface-dark shadow-[0_4px_0_#171717] p-1 flex items-center justify-center overflow-hidden"
        >
          <div className="relative w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
            <Image
              src="/logo.jpg"
              alt="Logo Oficial Encargos Mi Ángel"
              fill
              sizes="(max-width: 768px) 112px, 112px"
              className="object-cover object-center scale-105"
              priority
            />
          </div>
        </motion.div>

        {/* Verified Badge */}
        <div
          className="absolute bottom-0 right-0 bg-surface-dark text-white p-1 rounded-full border-2 border-white shadow-xs flex items-center justify-center"
          title="Marca Verificada"
        >
          <CheckCircle className="w-3.5 h-3.5 text-white fill-surface-dark" />
        </div>

        {/* Floating Sparkle Badge */}
        <div className="absolute -top-1 -left-1 bg-surface-dark text-white p-1 rounded-full border border-surface-dark shadow-[0_1.5px_0_#171717] text-xs flex items-center justify-center">
          ✦
        </div>
      </div>

      {/* Title & Concise Subtitle */}
      <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-surface-dark leading-tight mb-1">
        Encargos Mi Ángel
      </h1>

      <p className="font-body text-xs sm:text-sm text-neutral-600 font-semibold tracking-wide">
        Boutique & Compras por Encargo • Colombia 🇨🇴
      </p>
    </header>
  );
}
