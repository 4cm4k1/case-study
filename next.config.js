// next.config.js is not transformed by Babel. So you can only use javascript features supported by your version of Node.js.
const withCss = require('@zeit/next-css');

module.exports = withCss({
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config
    // Important: return the modified config
    return config;
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
  publicRuntimeConfig: {
    hostname: process.env.NOW
      ? 'https://case-study.anthony.codes'
      : 'http://localhost:4242',
  },
});
