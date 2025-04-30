import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out', 
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/rebeccahongsf.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/rebeccahongsf.github.io/' : '',
  trailingSlash: true, 
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
};

export default nextConfig;