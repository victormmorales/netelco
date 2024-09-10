// const withImages = require('next-images');

// /** @type {import('next').NextConfig} */
// const nextConfig = withImages({
//   reactStrictMode: true,
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack'],
//     });

//     return config;
//   },
// });

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    // disableStaticImages: true,
  },
}

module.exports = nextConfig
