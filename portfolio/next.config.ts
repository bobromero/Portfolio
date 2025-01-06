import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output:"export",
  basePath: "/Portfolio",
  eslint: {
    ignoreDuringBuilds: true,
    
},
};

export default nextConfig;
