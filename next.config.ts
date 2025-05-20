import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Use the correct username and repository name
  basePath: '/Venice-Pizzeria',
  assetPrefix: '/Venice-Pizzeria',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig