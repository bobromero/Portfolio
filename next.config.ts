import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/Portfolio",
  output: "export",
  images: {
    unoptimized: true, // Required for GitHub Pages
  }
};

export default nextConfig;
