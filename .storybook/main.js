const custom = require('../config-overrides');

module.exports = {
  stories: ['../**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'sass-loader',
            options: {
              // use sass-loader@7.x.x cause newest sass-loader doesn't have importer option.
              importer: require('node-sass-glob-importer')(),
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('react-docgen-typescript-loader'),
          },
        ],
      },
      {
        test: /\.(story|stories)\.tsx?$/,
        loaders: [
          {
            loader: require.resolve('@storybook/source-loader'),
            options: { parser: 'typescript' },
          },
        ],
        enforce: 'pre',
      },
    );

    // Return the altered config
    return config;
  },
};
