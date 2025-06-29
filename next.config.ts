import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
    remotePatterns: [
      {
        protocol: "http",
        hostname: "juliagart.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
