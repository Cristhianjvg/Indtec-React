import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",

  images: { unoptimized: true },
  // si lo pondrás en una SUBCARPETA (p. ej. tudominio.com/indtec):
  basePath: "/indtec",
  // opcional: genera rutas con barra final (útil en estático)
  // trailingSlash: true,
};

export default nextConfig;
