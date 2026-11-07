"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { playTapSound, playCelebrationSound } from "@/lib/sound";
import { Globe, Radio, ChevronRight, Sparkles } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa6";

export interface LinkItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  badge?: string;
  highlight?: boolean;
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
      particleCount: link.highlight ? 40 : 25,
      spread: 55,
      origin: { x, y },
      colors: ["#000000", "#FFFFFF", "#737373", "#D4D4D4", "#171717"],
      ticks: 150,
      gravity: 1.1,
      scalar: 0.85,
    });
  };

  const renderIcon = () => {
    switch (link.iconType) {
      case "website":
        return (
          <Globe
            className={`w-5 h-5 group-hover:rotate-12 transition-transform duration-300 ${
              link.highlight ? "text-white" : "text-surface-dark"
            }`}
          />
        );
      case "whatsapp":
        return <FaWhatsapp className="w-5 h-5 text-surface-dark" />;
      case "channel":
        return <Radio className="w-5 h-5 text-surface-dark animate-pulse" />;
      case "instagram":
        return <FaInstagram className="w-5 h-5 text-surface-dark" />;
      case "tiktok":
        return <FaTiktok className="w-5 h-5 text-surface-dark" />;
      default:
        return <Sparkles className="w-5 h-5 text-surface-dark" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.05 + index * 0.05,
        duration: 0.35,
        type: "spring",
        stiffness: 280,
        damping: 22,
      }}
      className="w-full"
    >
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
        className={`group relative flex items-center justify-between w-full rounded-[22px] p-4 sm:p-4.5 border-2 border-surface-dark transition-all duration-200 overflow-hidden ${
          link.highlight
            ? "bg-white shadow-[0_5px_0_#171717] hover:shadow-[0_7px_0_#171717] active:shadow-[0_2px_0_#171717] active:translate-y-0.5 hover:bg-neutral-50/90"
            : "bg-white/95 backdrop-blur-sm shadow-[0_4px_0_#171717] hover:shadow-[0_6px_0_#171717] active:shadow-[0_2px_0_#171717] active:translate-y-0.5 hover:bg-white"
        }`}
      >
        {/* Desktop Dynamic Spotlight Light */}
        {isHovered && (
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100 hidden sm:block"
            style={{
              background: `radial-gradient(240px circle at ${mousePosition.x}px ${mousePosition.y}px, ${
                link.highlight ? "rgba(23, 23, 23, 0.08)" : "rgba(23, 23, 23, 0.04)"
              }, transparent 80%)`,
            }}
          />
        )}

        {/* Shimmer for Highlight Card */}
        {link.highlight && (
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-neutral-200/50 to-transparent pointer-events-none" />
        )}

        <div className="relative flex items-center gap-3.5 z-10 min-w-0">
          {/* Icon Container */}
          <div
            className={`flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center border-2 border-surface-dark shadow-[0_2px_0_#171717] transition-transform duration-300 group-hover:rotate-6 ${
              link.highlight
                ? "bg-surface-dark text-white"
                : "bg-neutral-100 text-surface-dark"
            }`}
          >
            {renderIcon()}
          </div>

          {/* Title & Clean Subtitle */}
          <div className="text-left min-w-0">
            <div className="flex items-center gap-2">
              <h2
                className={`font-display text-[15px] sm:text-base font-bold text-surface-dark leading-snug group-hover:text-neutral-700 transition-colors truncate ${
                  link.highlight ? "font-extrabold text-surface-dark" : ""
                }`}
              >
                {link.title}
              </h2>
              {link.badge && (
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-display font-extrabold uppercase tracking-wider border shadow-xs ${
                    link.highlight
                      ? "bg-surface-dark text-white border-surface-dark"
                      : "bg-neutral-100 text-surface-dark border-surface-dark/30"
                  }`}
                >
                  {link.badge}
                </span>
              )}
            </div>

            <p className="font-body text-xs text-neutral-500 font-semibold truncate mt-0.5">
              {link.subtitle}
            </p>
          </div>
        </div>

        {/* Right Arrow Action */}
        <div className="flex items-center gap-2 flex-shrink-0 z-10 ml-2">
          <div
            className={`w-8 h-8 rounded-full border border-surface-dark flex items-center justify-center shadow-[0_2px_0_#171717] transition-all group-hover:translate-x-0.5 ${
              link.highlight
                ? "bg-surface-dark text-white group-hover:bg-neutral-800"
                : "bg-neutral-100 text-surface-dark group-hover:bg-surface-dark group-hover:text-white"
            }`}
          >
            <ChevronRight className="w-4 h-4 transition-transform group-hover:scale-110" />
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}
