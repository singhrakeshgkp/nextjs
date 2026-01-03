/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Add any other Next.js config options here
  images: {
    domains: ['localhost'], // Example: allow images from localhost
  },
  experimental: {
    appDir: true, // If using Next.js 13+ app directory
  },
};

export default nextConfig;