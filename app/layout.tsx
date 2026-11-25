import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE = "https://Zenbots.Zenlinofc.com";
const TITLE = "ZenBot · Bot de WhatsApp para grupos y comunidades";
const DESCRIPTION =
  "ZenBot administra tus grupos de WhatsApp 24/7: bienvenidas con foto o video, antilink, avisos y horarios, listas con cupos, salas de Free Fire, descargas, stickers y juegos. Desde 4,99 USD al mes por grupo.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "ZenBot",
    locale: "es_LA",
    title: "ZenBot · Cumple tus necesidades en tus grupos de WA",
    description:
      "Bot de WhatsApp activo 24/7 para administrar grupos y comunidades. Bienvenidas, antilink, avisos, listas, Free Fire, descargas y juegos. Desde 4,99 USD al mes por grupo.",
    url: "/",
    images: [{ url: "/images/og-namibot.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/images/favicon.ico", sizes: "any" },
      { url: "/images/favicon-64.png", type: "image/png" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050706",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
