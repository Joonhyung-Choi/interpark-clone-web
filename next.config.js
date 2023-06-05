/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.interpark.com", "openimage.interpark.com"],
  },
};

module.exports = nextConfig;
