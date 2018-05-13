const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const theme_overrides = require('./src/styles/theme-overrides.js');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], config);
  config = rewireLess.withLoaderOptions(theme_overrides.theme_overrides)(config, env);
  return config;
};
