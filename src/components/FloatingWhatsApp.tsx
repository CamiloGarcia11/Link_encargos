"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import confetti from "canvas-confetti";
import { playTapSound } from "@/lib/sound";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show inviting message after 2.5s
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    playTapSound();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 30,
      spread: 50,
      origin: { x, y },
      colors: ["#25D366", "#FFFFFF", "#D4AF37", "#171717"],
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end pointer-events-auto select-none">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            className="mb-2 relative bg-white border-2 border-surface-dark py-1.5 px-3 rounded-2xl shadow-[0_4px_0_#171717] flex items-center gap-2 max-w-[220px]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
            <p className="text-[11px] font-display font-extrabold text-surface-dark uppercase tracking-wider leading-tight">
              ¿Deseas cotizar? ¡Escríbenos!
            </p>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-neutral-400 hover:text-surface-dark p-0.5 shrink-0"
              aria-label="Cerrar sugerencia"
            >
              <X className="w-3 h-3" />
            </button>
            {/* Small triangle arrow pointer */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b-2 border-r-2 border-surface-dark rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/message/PEBR4FUBT2LNI1"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="w-14 h-14 rounded-full bg-[#25D366] border-2 border-surface-dark flex items-center justify-center text-white shadow-[0_5px_0_#171717] hover:shadow-[0_7px_0_#171717] active:shadow-[0_2px_0_#171717] active:translate-y-1 transition-all"
        aria-label="Contactar por WhatsApp Directo"
      >
        <FaWhatsapp className="w-7 h-7 fill-white" />
      </motion.a>
    </div>
  );
}
