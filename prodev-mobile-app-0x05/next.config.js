/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com', // The primary domain for Pinterest images
        port: '',
        pathname: '/**', // Allows all paths under the domain
      },
    ],
  },
}

module.exports = nextConfig