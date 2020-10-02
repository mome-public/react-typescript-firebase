const { override, adjustStyleLoaders, addBundleVisualizer } = require('customize-cra');

module.exports = override(
  // Webpack Bundle Analyzer
  addBundleVisualizer({}, true),

  // Sass Loader
  adjustStyleLoaders((rule) => {
    if (rule.test.toString().includes('scss')) {
      rule.use.push({
        loader: 'sass-loader',
        options: {
          // use sass-loader@7.x.x cause newest sass-loader doesn't have importer option.
          importer: require('node-sass-glob-importer')(),
        },
      });
    }
  }),
);
