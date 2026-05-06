import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compression Gzip/Brotli automatique
  compress: true,

  // React Compiler (optimisation des re-renders)
  reactCompiler: true,

  // Optimisation des images distantes (Unsplash utilisé dans Projects & page)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    // Formats modernes en priorité (AVIF > WebP > original)
    formats: ["image/avif", "image/webp"],
  },

  // Headers HTTP pour cacher les assets statiques longtemps
  // Note : Next.js n'accepte pas les groupes capturants dans source —
  // on utilise des patterns non-capturants distincts.
  async headers() {
    return [
      {
        source: "/:path*.js",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:path*.css",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:path*.:ext(woff2|woff|ttf)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:path*.:ext(svg|png|jpg|jpeg|webp|avif|ico)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  experimental: {
    // Optimise le bundle en limitant les imports côté serveur
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
