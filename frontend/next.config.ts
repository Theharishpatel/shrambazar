import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
    // Remove domains property if not needed
  },
  turbopack: {
    root: __dirname,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

const pwaConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
})(nextConfig);

export default pwaConfig;