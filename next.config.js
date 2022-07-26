/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['unavatar.io'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/styleguides',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
