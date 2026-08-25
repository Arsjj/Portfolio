/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: ['10.10.7.48'],
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',
            pathname: '/**',
          },
        ],
      },

}

module.exports = nextConfig
