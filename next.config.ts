import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        // Serve app downloads with the Android package type so phones offer to install them.
        source: "/apps/:app/:file(.+\\.apk)",
        headers: [{ key: "Content-Type", value: "application/vnd.android.package-archive" }],
      },
    ];
  },
};

export default nextConfig;
