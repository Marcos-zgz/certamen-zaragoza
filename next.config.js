/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // <--- ESTA LÍNEA ES OBLIGATORIA PARA CLOUDFLARE PAGES
  images: {
    unoptimized: true, // Evita fallos con la optimización de imágenes estáticas
  },
  // Mantengo tus reglas para ignorar errores en el build:
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
