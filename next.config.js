/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['coding-challenge-api.aerolab.co']
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
