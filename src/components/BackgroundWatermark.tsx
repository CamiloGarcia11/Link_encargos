"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function BackgroundWatermark() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate soft floating luxury gold sparkles on client mount
    const generated: Particle[] = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2.5,
      duration: Math.random() * 9 + 6,
      delay: Math.random() * 5,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Base warm boutique radial ambient glow orbs */}
      <div className="absolute -top-36 -left-36 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-yellow-300/25 via-boutique-100/30 to-transparent opacity-70 blur-3xl" />
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-yellow-200/30 via-boutique-100/20 to-transparent opacity-60 blur-3xl" />
      <div className="absolute -bottom-40 left-1/3 w-[550px] h-[550px] rounded-full bg-gradient-to-t from-boutique-100/30 via-yellow-200/20 to-transparent opacity-60 blur-3xl" />

      {/* Rotating Subtle Celestial Rings for Luxury Aesthetics */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[420px] h-[420px] sm:w-[620px] sm:h-[620px] lg:w-[840px] lg:h-[840px] rounded-full border border-dashed border-gold-400/20 animate-spin-very-slow" />
        <div className="w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] lg:w-[680px] lg:h-[680px] rounded-full border border-gold-300/15 animate-spin-very-slow [animation-direction:reverse]" />
      </div>

      {/* Corner Luxury Flourish Icons (Wing / Angel Feather hints) */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 opacity-25 text-gold-600 transform rotate-12">
        <svg
          width="110"
          height="110"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 80C35 70 50 50 80 20C65 45 45 65 20 80Z"
            fill="currentColor"
          />
          <path
            d="M30 85C45 75 60 55 90 25C75 50 55 70 30 85Z"
            fill="#F59E0B"
          />
          <path
            d="M10 75C25 65 40 45 70 15C55 40 35 60 10 75Z"
            fill="#D97706"
          />
        </svg>
      </div>

      <div className="absolute bottom-6 left-4 md:bottom-10 md:left-8 opacity-20 text-gold-600 transform -rotate-45">
        <svg
          width="110"
          height="110"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 80C35 70 50 50 80 20C65 45 45 65 20 80Z"
            fill="currentColor"
          />
          <path
            d="M30 85C45 75 60 55 90 25C75 50 55 70 30 85Z"
            fill="#F59E0B"
          />
        </svg>
      </div>

      {/* Main Brand Logo Watermark (Layered in Background with Soft Ambient Breathing) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: [0.03, 0.07, 0.03],
            scale: [0.97, 1.03, 0.97],
            rotate: [0, 1.2, -1.2, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] rounded-full overflow-hidden select-none filter blur-[2px] sm:blur-[3px] mix-blend-multiply pointer-events-none"
        >
          <Image
            src="/logo.jpg"
            alt="Watermark Encargos Mi Ángel"
            fill
            sizes="(max-width: 768px) 380px, 700px"
            className="object-cover object-center scale-105"
            priority
          />
        </motion.div>
      </div>

      {/* Floating Sparkle Particles (Golden & Ambient White) */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor:
              p.id % 3 === 0
                ? "rgba(245, 158, 11, 0.6)"
                : p.id % 3 === 1
                ? "rgba(255, 255, 255, 0.85)"
                : "rgba(251, 191, 36, 0.45)",
            boxShadow:
              p.id % 2 === 0 ? "0 0 10px rgba(245, 158, 11, 0.7)" : "none",
          }}
          animate={{
            y: [0, -32, 0],
            x: [0, p.id % 2 === 0 ? 12 : -12, 0],
            opacity: [0.25, 0.8, 0.25],
            scale: [0.85, 1.3, 0.85],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
