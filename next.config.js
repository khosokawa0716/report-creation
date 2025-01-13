/** @type {import('next').NextConfig} */
const path = require('path')
let prefix = process.env.NODE_ENV === 'development' ? '/' : '/report-creation'
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  assetPrefix: prefix,
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname)
    config.resolve.alias['@styles'] = path.resolve(__dirname, 'src/styles');
    config.resolve.alias['@components'] = path.resolve(__dirname, 'src/components');
    return config
  }
}

module.exports = nextConfig
