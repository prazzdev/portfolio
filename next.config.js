/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "t3.ftcdn.net",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
