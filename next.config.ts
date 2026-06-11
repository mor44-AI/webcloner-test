import type { NextConfig } from "next";

/**
 * Cloudflare Pages target — static export.
 * `next build` produces `out/` which `wrangler pages deploy out` can publish.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
