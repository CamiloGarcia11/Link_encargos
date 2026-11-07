"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, Share2, QrCode } from "lucide-react";
import Image from "next/image";
import { playTapSound, playCelebrationSound } from "@/lib/sound";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const currentUrl =
        typeof window !== "undefined"
          ? window.location.href
          : "https://encargosmiangel.lat";
      await navigator.clipboard.writeText(currentUrl);
      playCelebrationSound();
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  const handleNativeShare = async () => {
    playTapSound();
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "Encargos Mi Ángel | Boutique & Enlaces Oficiales",
          text: "¡Descubre la boutique oficial de compras por encargo en Colombia! Ropa, calzado y accesorios exclusivos. ✨",
          url: typeof window !== "undefined" ? window.location.href : "https://encargosmiangel.lat",
        });
      } catch {
        // User cancelled or share dismissed
      }
    } else {
      handleCopy();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-surface-dark/45 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-sm rounded-[32px] bg-white border-2 border-surface-dark p-6 shadow-[0_12px_0_#171717] z-10 text-surface-dark"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Cerrar ventana"
              className="absolute top-4 right-4 p-2 rounded-full border border-surface-dark/20 hover:bg-boutique-100 transition-colors"
            >
              <X className="w-5 h-5 text-surface-dark" />
            </button>

            {/* Header */}
            <div className="text-center mt-1 mb-5">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-100 border-2 border-surface-dark mb-3 shadow-[0_3px_0_#171717]">
                <QrCode className="w-7 h-7 text-gold-700" />
              </div>
              <h3 className="font-display text-2xl font-extrabold tracking-tight">
                Compartir Perfil
              </h3>
              <p className="text-xs uppercase font-display tracking-widest text-neutral-500 mt-1 font-bold">
                Encargos Mi Ángel Oficial
              </p>
            </div>

            {/* QR Code Graphic Box */}
            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-boutique-50 border border-surface-dark/20 mb-5">
              <div className="relative w-44 h-44 bg-white p-3 rounded-xl border-2 border-surface-dark flex items-center justify-center shadow-inner">
                {/* Visual SVG QR representation */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-surface-dark"
                  fill="currentColor"
                >
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

                {/* Central mini logo emblem */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-surface-dark flex items-center justify-center shadow-md overflow-hidden">
                    <Image
                      src="/logo.jpg"
                      alt="Logo A"
                      width={28}
                      height={28}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-display uppercase font-bold tracking-wider text-neutral-600 mt-2.5">
                Escanea desde tu móvil 📱
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2.5">
              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-surface-dark text-white font-display text-xs uppercase font-bold tracking-wider border-2 border-surface-dark shadow-[0_3px_0_#171717] active:translate-y-0.5 active:shadow-none transition-all hover:bg-neutral-800"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>¡Enlace Copiado al Portapapeles!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-gold-400" />
                    <span>Copiar Enlace Directo</span>
                  </>
                )}
              </button>

              <button
                onClick={handleNativeShare}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold-200 border-2 border-surface-dark text-surface-dark font-display text-xs uppercase font-bold tracking-wider hover:bg-gold-300 transition-colors shadow-[0_3px_0_#171717] active:translate-y-0.5 active:shadow-none"
              >
                <Share2 className="w-4 h-4" />
                <span>Compartir en Redes</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
