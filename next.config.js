/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "a1010350.xsph.ru",
        port: "",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
