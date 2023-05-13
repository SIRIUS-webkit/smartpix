/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 60,
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
