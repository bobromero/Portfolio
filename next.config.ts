import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/Portfolio",
  output:"export",
  eslint: {
    ignoreDuringBuilds: true,
    
},
};

export default nextConfig;
