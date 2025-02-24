import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.myanimelist.net",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
      },
      {
        protocol: "https",
        hostname: "img1.ak.crunchyroll.com",
      },
      {
        protocol: "https",
        hostname: "shadcnblocks.com",
      },
      {
        protocol: "https",
        hostname: "anima-dusky.vercel.app",
      },
    ],
  },
};

export default nextConfig;
