/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    
  },
  images: {
    domains: ['flagcdn.com'],
  }
}

module.exports = nextConfig
