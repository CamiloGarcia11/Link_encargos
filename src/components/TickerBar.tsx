"use client";

import React from "react";

const tickerItems = [
  "COMPRAS POR ENCARGO",
  "ENVÍOS SEGUROS A TODA COLOMBIA 🇨🇴",
  "ROPA • CALZADO • ACCESORIOS",
  "PRODUCTOS 100% ORIGINALES",
  "MEDICAMENTOS & ARTÍCULOS EXCLUSIVOS",
  "ATENCIÓN DIRECTA POR WHATSAPP",
];

export default function TickerBar() {
  return (
    <div className="w-full bg-surface-dark text-white py-2.5 overflow-hidden border-y-2 border-surface-dark select-none shadow-sm">
      <div className="flex whitespace-nowrap animate-[marquee_26s_linear_infinite]">
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <span
            key={idx}
            className="mx-5 text-[11px] font-display font-bold tracking-[0.22em] uppercase flex items-center gap-2.5"
          >
            <span className="text-gold-400">✦</span>
            <span className="text-neutral-100">{item}</span>
            <span className="text-gold-400">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
