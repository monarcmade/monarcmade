import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** Hostnames (no protocol) allowed to load /_next dev assets when not using localhost. */
function allowedDevOriginsFromEnv(): string[] {
  const raw = process.env.NEXT_ALLOWED_DEV_ORIGINS;
  if (!raw) return [];
  return raw
    .split(/[,;\s]+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/work/jump-consulting-bella-vasta",
        destination: "/projects/jump-consulting",
        permanent: true,
      },
      {
        source: "/work/shaemarcus-consulting-delivery",
        destination: "/projects",
        permanent: true,
      },
      { source: "/work", destination: "/projects", permanent: true },
      { source: "/work/:path*", destination: "/projects/:path*", permanent: true },
    ];
  },
  /* Next 16 blocks LAN / alternate hostnames from fetching dev bundles unless listed here. */
  allowedDevOrigins: allowedDevOriginsFromEnv(),
};

export default withMDX(nextConfig);
