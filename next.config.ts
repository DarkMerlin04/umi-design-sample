import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true }, // needed if you use next/image
  basePath: '/umi-design-sample', // needed so assets load correctly on github.io/repo-name
};

export default nextConfig;
