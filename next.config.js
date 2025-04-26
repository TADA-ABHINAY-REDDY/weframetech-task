/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the output: 'export' since Vercel handles SSR
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    domains: ['i.pravatar.cc'],
    unoptimized: true 
  },
};

module.exports = nextConfig;