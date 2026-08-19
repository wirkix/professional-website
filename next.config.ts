import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // Las imágenes las carga el administrador mediante una URL externa.
        // Limita este listado a dominios concretos si el catálogo se abre a más personas.
        // Por ahora permitimos todos los dominios.
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;