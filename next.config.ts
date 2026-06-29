import type { NextConfig } from "next";

/**
 * Static export configured for GitHub Pages at:
 *   https://rikki-007.github.io/aspect-plumbing-heating/
 *
 * `basePath` MUST match the repository name so the CSS/JS/font files
 * load from the correct sub-path (otherwise the page renders unstyled).
 */
const repo = "aspect-plumbing-heating";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repo}`,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
