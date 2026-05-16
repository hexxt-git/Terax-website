/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 92],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
    ],
  },
}

export default nextConfig
