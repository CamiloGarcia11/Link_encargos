"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import confetti from "canvas-confetti";
import { playTapSound } from "@/lib/sound";

export default function FloatingWhatsApp() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    playTapSound();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 30,
      spread: 50,
      origin: { x, y },
      colors: ["#25D366", "#FFFFFF", "#F59E0B", "#171717"],
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end pointer-events-auto select-none">
      <motion.a
        href="https://wa.me/message/PEBR4FUBT2LNI1"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="w-13 h-13 sm:w-14 sm:h-14 p-3 rounded-full bg-[#25D366] border-2 border-surface-dark flex items-center justify-center text-white shadow-[0_4px_0_#171717] hover:shadow-[0_6px_0_#171717] active:shadow-[0_1.5px_0_#171717] active:translate-y-0.5 transition-all"
        aria-label="Contactar por WhatsApp Directo"
      >
        <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />
      </motion.a>
    </div>
  );
}
