"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { playTapSound, playCelebrationSound } from "@/lib/sound";
import {
  Globe,
  Radio,
  ChevronRight,
  Flame,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa6";

export interface LinkItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  badge?: string;
  highlight?: boolean;
  tags?: string[];
  iconType: "website" | "whatsapp" | "channel" | "instagram" | "tiktok";
}

interface LinkCardProps {
  link: LinkItem;
  index: number;
}

export default function LinkCard({ link, index }: LinkCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (link.highlight) {
      playCelebrationSound();
    } else {
      playTapSound();
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: link.highlight ? 45 : 28,
      spread: 60,
      origin: { x, y },
      colors: link.highlight
        ? ["#D4AF37", "#FAF5EC", "#171717", "#C5A059", "#FFFFFF"]
        : ["#D4AF37", "#AF8E60", "#171717", "#FAF8F5"],
      ticks: 160,
      gravity: 1.1,
      scalar: 0.85,
    });
  };

  const renderIcon = () => {
    switch (link.iconType) {
      case "website":
        return <Globe className="w-4 h-4 text-surface-dark group-hover:rotate-12 transition-transform duration-300" />;
      case "whatsapp":
        return <FaWhatsapp className="w-4 h-4 text-emerald-600" />;
      case "channel":
        return <Radio className="w-4 h-4 text-emerald-700 animate-pulse" />;
      case "instagram":
        return <FaInstagram className="w-4 h-4 text-pink-600" />;
      case "tiktok":
        return <FaTiktok className="w-4 h-4 text-surface-dark" />;
      default:
        return <Sparkles className="w-4 h-4 text-gold-600" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.08 + index * 0.06,
        duration: 0.4,
        type: "spring",
        stiffness: 280,
        damping: 22,
      }}
      className="relative w-full pt-2 pb-0.5"
    >
      {/* Top Floating Badge with Category/Status */}
      {link.badge && (
        <div className="absolute top-0 left-4 z-20">
          <motion.div
            initial={{ scale: 0.85 }}
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-display font-extrabold tracking-widest uppercase border border-surface-dark shadow-[0_1.5px_0_#171717] ${
              link.highlight
                ? "bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 text-surface-dark"
                : link.iconType === "whatsapp" || link.iconType === "channel"
                ? "bg-emerald-400 text-surface-dark"
                : link.iconType === "instagram"
                ? "bg-rose-400 text-surface-dark"
                : "bg-surface-dark text-white"
            }`}
          >
            {link.highlight ? (
              <Flame className="w-2.5 h-2.5 text-surface-dark fill-surface-dark animate-bounce" />
            ) : link.iconType === "whatsapp" || link.iconType === "channel" ? (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-800 animate-ping inline-block" />
            ) : (
              <Sparkles className="w-2.5 h-2.5 text-gold-300 fill-gold-300" />
            )}
            <span>{link.badge}</span>
          </motion.div>
        </div>
      )}

      {/* Main Link Button Pill */}
      <motion.a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        className={`group relative block w-full rounded-[20px] p-3 sm:p-3.5 border-[1.75px] border-surface-dark transition-all duration-200 overflow-hidden ${
          link.highlight
            ? "bg-gradient-to-r from-gold-50 via-white to-gold-50/80 shadow-[0_4px_0_#171717] hover:shadow-[0_6px_0_#171717] hover:border-gold-600 active:shadow-[0_1.5px_0_#171717] active:translate-y-0.5 ring-1 ring-gold-400/50"
            : "bg-white/95 backdrop-blur-sm shadow-[0_3.5px_0_#171717] hover:shadow-[0_5px_0_#171717] active:shadow-[0_1.5px_0_#171717] active:translate-y-0.5 hover:bg-white"
        }`}
      >
        {/* Desktop Dynamic Spotlight Light tracking cursor */}
        {isHovered && (
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100 hidden sm:block"
            style={{
              background: `radial-gradient(240px circle at ${mousePosition.x}px ${mousePosition.y}px, ${
                link.highlight ? "rgba(212, 175, 55, 0.2)" : "rgba(212, 175, 55, 0.1)"
              }, transparent 80%)`,
            }}
          />
        )}

        {/* Highlight Shimmer Wave for Primary CTA */}
        {link.highlight && (
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-gold-200/40 to-transparent pointer-events-none" />
        )}

        <div className="relative flex items-center gap-3 z-10">
          {/* Left Icon Box with styled border */}
          <div
            className={`flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border-[1.5px] border-surface-dark shadow-[0_2px_0_#171717] transition-transform duration-300 group-hover:rotate-6 ${
              link.highlight
                ? "bg-gold-200"
                : link.iconType === "whatsapp" || link.iconType === "channel"
                ? "bg-emerald-100"
                : link.iconType === "instagram"
                ? "bg-rose-100"
                : "bg-boutique-100"
            }`}
          >
            {renderIcon()}
          </div>

          {/* Center Text Content */}
          <div className="flex-1 min-w-0 text-left">
            <div className="flex items-center gap-1.5">
              <h2
                className={`font-display text-[13.5px] sm:text-[15px] font-bold tracking-tight text-surface-dark leading-snug group-hover:text-gold-700 transition-colors truncate ${
                  link.highlight ? "font-extrabold text-gold-950" : ""
                }`}
              >
                {link.title}
              </h2>
              {link.highlight && (
                <Sparkles className="w-3.5 h-3.5 text-gold-500 fill-gold-400 shrink-0 hidden xs:inline-block animate-pulse" />
              )}
            </div>

            <p className="font-body text-[11px] sm:text-[11.5px] text-neutral-600 truncate mt-0.5 font-medium tracking-wide">
              {link.subtitle}
            </p>

            {/* Micro Tags */}
            {link.tags && link.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-1.5">
                {link.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`inline-block px-2 py-0.2 rounded-full text-[9px] font-display font-bold uppercase tracking-wider border border-surface-dark/20 ${
                      link.highlight
                        ? "bg-gold-100 text-surface-dark"
                        : "bg-boutique-100 text-neutral-800"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Right Action Button with Arrow / External Link */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {link.highlight ? (
              <div className="hidden xs:flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-dark text-gold-300 text-[9px] font-display font-extrabold uppercase tracking-wider border border-gold-400 shadow-xs">
                <span>ABRIR</span>
                <ExternalLink className="w-2.5 h-2.5 text-gold-400" />
              </div>
            ) : null}

            <div
              className={`w-7 h-7 rounded-full border border-surface-dark flex items-center justify-center shadow-[0_1.5px_0_#171717] transition-all group-hover:translate-x-0.5 ${
                link.highlight
                  ? "bg-gold-400 text-surface-dark group-hover:bg-surface-dark group-hover:text-gold-400"
                  : "bg-boutique-100 text-surface-dark group-hover:bg-surface-dark group-hover:text-white"
              }`}
            >
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
            </div>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}
