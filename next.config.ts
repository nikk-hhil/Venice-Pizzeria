import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Set the base path to your repository name
  basePath: '/Venice-Pizzeria', // Replace with your exact repository name
  // Set the asset prefix for proper asset loading
  assetPrefix: '/Venice-Pizzeria/', // Replace with your exact repository name
  trailingSlash: true,
}

export default nextConfig