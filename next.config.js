/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "https://productivitia.imgix.net/",
  },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    scope: "/app",
    sw: "service-worker.js",
    // Exclude files from precaching
    publicExcludes: [
      // Exclude the various icon sizes
      "!icons/android/*",
      "!icons/ios/*",
      "!icons/windows11/*",
      // Exclude legacy gif format for saving
      "!backgrounds/gifs/*",
    ],
  },
};

module.exports = withPWA(nextConfig);
