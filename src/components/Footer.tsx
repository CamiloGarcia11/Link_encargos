"use client";

import React from "react";
import { Sparkles, Heart } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa6";
import { playTapSound } from "@/lib/sound";

export default function Footer() {
  const handleLinkClick = () => {
    playTapSound();
  };

  return (
    <footer className="w-full max-w-md mx-auto pt-8 pb-12 px-4 text-center select-none">
      {/* Social quick pills */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <a
          href="https://wa.me/message/PEBR4FUBT2LNI1"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className="p-2.5 rounded-full bg-white border border-surface-dark text-surface-dark shadow-[0_2px_0_#171717] hover:bg-surface-dark hover:text-white transition-all hover:scale-110"
          aria-label="WhatsApp Directo"
        >
          <FaWhatsapp className="w-4 h-4" />
        </a>

        <a
          href="https://www.instagram.com/encargos_miangelpreferido_?mdxt=MWZpZjN4c2I4a3JicA=="
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className="p-2.5 rounded-full bg-white border border-surface-dark text-surface-dark shadow-[0_2px_0_#171717] hover:bg-surface-dark hover:text-white transition-all hover:scale-110"
          aria-label="Instagram Oficial"
        >
          <FaInstagram className="w-4 h-4" />
        </a>

        <a
          href="https://www.tiktok.com/@encargos_miangel_?_r=1&_t=ZS-9BBy3bXWr0H"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className="p-2.5 rounded-full bg-white border border-surface-dark text-surface-dark shadow-[0_2px_0_#171717] hover:bg-surface-dark hover:text-white transition-all hover:scale-110"
          aria-label="TikTok Oficial"
        >
          <FaTiktok className="w-4 h-4" />
        </a>

        <a
          href="https://whatsapp.com/channel/0029Vb7JDjw59PwM2ACDrJ2k"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className="p-2.5 rounded-full bg-white border border-surface-dark text-surface-dark shadow-[0_2px_0_#171717] hover:bg-surface-dark hover:text-white transition-all hover:scale-110"
          aria-label="Canal de Promociones y Descuentos WhatsApp"
        >
          <Sparkles className="w-4 h-4" />
        </a>
      </div>

      {/* Brand Rights */}
      <div className="flex items-center justify-center gap-1.5 text-xs font-display uppercase font-bold tracking-widest text-neutral-700 mb-1">
        <span>Boutique de Confianza</span>
        <Heart className="w-3.5 h-3.5 text-surface-dark fill-surface-dark inline-block" />
        <span>Encargos Mi Ángel</span>
      </div>

      <p className="font-body text-[10.5px] uppercase tracking-wider text-neutral-500 font-semibold mb-4">
        © {new Date().getFullYear()} Todos los derechos reservados. Colombia 🇨🇴
      </p>

      {/* VisionWeb Agency Signature Badge */}
      <div className="pt-3 border-t border-surface-dark/15 flex flex-col items-center justify-center gap-1.5">
        <span className="text-[9px] font-display font-bold uppercase tracking-[0.25em] text-neutral-400">
          Diseño & Desarrollo por
        </span>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border-[1.5px] border-surface-dark shadow-[0_3px_0_#171717] hover:shadow-[0_4px_0_#171717] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_0_#171717] transition-all cursor-default">
          <div className="w-2 h-2 rounded-full bg-surface-dark animate-pulse" />
          <span className="font-serif font-black text-xs tracking-wider text-surface-dark">
            VisionWeb
          </span>
          <span className="text-[8px] font-display font-extrabold uppercase px-1.5 py-0.5 rounded bg-neutral-100 border border-surface-dark/30 text-surface-dark tracking-wider">
            STUDIO
          </span>
        </div>
      </div>
    </footer>
  );
}
