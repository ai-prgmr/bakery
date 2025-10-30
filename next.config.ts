import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/bakery",
  assetPrefix: "/bakery/",
  images: { unoptimized: true },
};

export default nextConfig;
