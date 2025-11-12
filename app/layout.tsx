// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Chatbot from "@/components/chatbot";

export const metadata: Metadata = {
  title: "INDTEC - Congreso Internacional",
  description:
    "Congreso Internacional de Investigación y Desarrollo Tecnológico",
  generator: "v0.app",
  applicationName: "INDTEC - Congreso Internacional",
  authors: [{ name: "InDTec", url: "https://tecnologicosudamericano.edu.ec/" }],
  keywords: [
    "Indtec",
    "Congreso",
    "Investigación",
    "Desarrollo",
    "Tecnología",
    "Congreso Internacional de Investigación y Desarrollo Tecnológico",
  ],
  icons: {
    icon: "/favicon.ico?v=3",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
