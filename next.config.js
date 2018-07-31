const withCss = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    return config;
  },
  webpackDevMiddleware: config => {
    return config;
  },
  publicRuntimeConfig: {
    hostname: process.env.NOW
      ? 'https://case-study.anthony.codes'
      : 'http://localhost:4242',
  },
};

module.exports = withPlugins([withCss], nextConfig);
