import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // DiceBear avatars are SVG. Allowed here for scaffold mock data only.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "api.dicebear.com" },
    ],
  },
};

export default nextConfig;
