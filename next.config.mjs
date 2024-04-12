/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack5: true,
  webpack: (config) => {
    // config.cache = false
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.danawa.com',
        pathname: '**',
      },
    ],
  },
}

export default nextConfig
