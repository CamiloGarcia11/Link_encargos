import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://encargosmiangel.lat"),
  authors: [{ name: "VisionWeb" }, { name: "Encargos Mi Ángel" }],
  creator: "VisionWeb",
  title: "Encargos Mi Ángel | Boutique Exclusiva & Enlaces Oficiales",
  description:
    "Tu tienda de confianza para compras por encargo en Colombia. Ropa de temporada, calzado original, accesorios y medicamentos con envíos seguros.",
  keywords: [
    "encargos mi angel",
    "boutique colombia",
    "compras por encargo",
    "ropa exclusiva",
    "calzado original",
    "accesorios boutique",
    "medicamentos colombia",
    "envios nacionales",
  ],
  openGraph: {
    title: "Encargos Mi Ángel | Enlaces Oficiales & Catálogo",
    description: "Boutique Exclusiva • Compras por Encargo • Atención Inmediata",
    images: ["/logo.jpg"],
    type: "website",
    url: "https://encargosmiangel.lat",
    siteName: "Encargos Mi Ángel",
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#FEF9C3",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen bg-boutique-50 text-surface-dark selection:bg-gold-200 selection:text-surface-dark font-body">
        {children}
      </body>
    </html>
  );
}
