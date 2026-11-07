"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Truck, Sparkles, Send, ChevronDown, CheckCircle2 } from "lucide-react";
import { playTapSound } from "@/lib/sound";

export default function BrandFeatures() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    playTapSound();
    setIsExpanded(!isExpanded);
  };

  const steps = [
    {
      num: "01",
      icon: <Send className="w-4 h-4 text-surface-dark" />,
      title: "1. Envíanos tu Referencia",
      desc: "Escríbenos por WhatsApp con una captura, enlace o detalle del producto que deseas encargar.",
    },
    {
      num: "02",
      icon: <Sparkles className="w-4 h-4 text-surface-dark" />,
      title: "2. Cotización Inmediata",
      desc: "Te brindamos el precio exacto en pesos colombianos con total transparencia y asesoría personalizada.",
    },
    {
      num: "03",
      icon: <ShieldCheck className="w-4 h-4 text-surface-dark" />,
      title: "3. Compras 100% Originales",
      desc: "Gestionamos tus artículos con proveedores oficiales certificados para garantizar calidad premium.",
    },
    {
      num: "04",
      icon: <Truck className="w-4 h-4 text-surface-dark" />,
      title: "4. Despacho Seguro a tu Puerta",
      desc: "Enviamos a cualquier rincón de Colombia con número de guía en tiempo real para tu tranquilidad.",
    },
  ];

  return (
    <div className="w-full select-none">
      <motion.button
        onClick={toggleAccordion}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full flex items-center justify-between p-4 sm:p-5 rounded-[24px] bg-white/95 backdrop-blur-sm border-2 border-surface-dark text-surface-dark shadow-[0_4px_0_#171717] hover:shadow-[0_6px_0_#171717] transition-all hover:bg-neutral-100/70"
      >
        <div className="flex items-center gap-3 text-left">
          <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-surface-dark flex items-center justify-center text-sm shadow-[0_2px_0_#171717] shrink-0 text-surface-dark">
            ✦
          </div>
          <div>
            <span className="font-display text-sm font-extrabold tracking-tight text-surface-dark block">
              ¿Cómo solicitar un encargo personalizado?
            </span>
            <span className="font-body text-[11px] text-neutral-500 font-medium">
              Conoce nuestro proceso paso a paso (4 sencillos pasos)
            </span>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="w-7 h-7 rounded-full bg-neutral-100 border border-surface-dark flex items-center justify-center shrink-0 ml-2"
        >
          <ChevronDown className="w-4 h-4 text-surface-dark" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3.5">
              {steps.map((st, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-2xl bg-white border border-surface-dark/25 shadow-[0_2px_0_#171717]"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="p-1.5 rounded-lg bg-neutral-100 border border-surface-dark/20 text-surface-dark">
                      {st.icon}
                    </div>
                    <h4 className="font-display text-xs font-bold text-surface-dark">
                      {st.title}
                    </h4>
                  </div>
                  <p className="font-body text-[11px] text-neutral-600 leading-relaxed font-semibold">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Guarantee Banner */}
            <div className="mt-3 p-3 rounded-2xl bg-neutral-100 border border-surface-dark/30 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-surface-dark shrink-0" />
              <p className="font-body text-[11px] font-semibold text-neutral-900">
                Tu compra está 100% protegida. Más de 5 años llevando encargos confiables a toda Colombia.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
