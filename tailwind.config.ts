import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        boutique: {
          50: "#FEF9C3",
          100: "#FEF08A",
          200: "#FDE047",
          300: "#FACC15",
          400: "#EAB308",
          500: "#CA8A04",
          600: "#A16207",
          700: "#854D0E",
          800: "#713F12",
          900: "#422006",
        },
        gold: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          secondary: "#FAFAFA",
          tertiary: "#F5F5F5",
          dark: "#171717",
          border: "#E5E5E5",
          "border-subtle": "#F0F0F0",
        },
      },
      fontFamily: {
        display: ["var(--font-quicksand)", "sans-serif"],
        body: ["var(--font-nunito-sans)", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-reverse": "floatReverse 10s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 2.5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 6s ease-in-out infinite",
        "shimmer": "shimmer 3s infinite linear",
        "marquee": "marquee 24s linear infinite",
        "spin-very-slow": "spinSlow 60s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(10px) rotate(-1deg)" },
        },
        pulseSubtle: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.03)", opacity: "0.92" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.15", transform: "scale(1)" },
          "50%": { opacity: "0.28", transform: "scale(1.08)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      boxShadow: {
        "soft-card": "0 10px 30px -5px rgba(23, 23, 23, 0.06), 0 4px 12px -2px rgba(23, 23, 23, 0.03)",
        "hover-card": "0 16px 40px -8px rgba(23, 23, 23, 0.12), 0 8px 16px -4px rgba(23, 23, 23, 0.06)",
        "gold-glow": "0 4px 20px -2px rgba(197, 160, 89, 0.25)",
        "gold-glow-lg": "0 0 35px rgba(212, 175, 55, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
