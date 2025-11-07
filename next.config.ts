import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // genera versión estática (SPA)
  images: { unoptimized: true }, // evita uso de Image Optimization (solo SSR)
  trailingSlash: true,
  // trailingSlash: true, // asegura que las rutas funcionen en hosting compartido
  // reactStrictMode: true,
};

export default nextConfig;
