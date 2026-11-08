import type { NextConfig } from "next";
import vercel from "./vercel.json";

// marketing.senflix.app is retired: every URL 301s to www.senflix.app.
// Vercel applies vercel.json first; Next reuses the same table so that
// `next start` behaves the same locally (see scripts/check-redirects.mjs).
const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return vercel.redirects.map(({ source, destination, statusCode }) => ({
      source,
      destination,
      statusCode: statusCode as 301,
    }));
  },
};

export default nextConfig;
