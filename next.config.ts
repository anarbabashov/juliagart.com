import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-e1f3891360c64489aeae04e051dff80e.r2.dev",
        port: "",
        pathname: "**",
      },
    ],
  },
  env: {
    CLOUDFLARE_R2_PUBLIC_URL: "https://pub-e1f3891360c64489aeae04e051dff80e.r2.dev",
  },
};

export default nextConfig;
