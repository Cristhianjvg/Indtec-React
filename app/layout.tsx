import type React from "react";
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Chatbot from "@/components/chatbot";

export const metadata: Metadata = {
  title: "INDTEC - Congreso Internacional",
  description:
    "Congreso Internacional de Investigación y Desarrollo Tecnológico",
  generator: "v0.app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
