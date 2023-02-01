/** @type {import('next').NextConfig} */
const path = require('path')
const prefix = process.env.NODE_ENV === 'production' ? '/report-creation' : ''
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    assetPrefix: prefix,
  },
}

module.exports = nextConfig
