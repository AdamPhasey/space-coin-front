/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['s.gravatar.com', 'https://avatars.githubusercontent.com/u/92696504?v=4', 'avatars.githubusercontent.com']
  }
}

module.exports = nextConfig
