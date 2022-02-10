/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const nextConfig = {
  reactStrictMode: true,
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    scope: "/app",
    sw: "service-worker.js",
    publicExcludes: ["!icons/android/*", "!icons/ios/*", "!icons/windows11/*"],
  },
};

module.exports = withPWA(nextConfig);
