import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // sin output: "export"
  images: { unoptimized: true },
  // si algún día lo pones en subcarpeta, activas basePath
};

export default nextConfig;
