var path = require('path');
module.exports = {
  stories: ['../src/stories/**/*.stories.js', '../src/stories/**/*.stories.(tsx|jsx)'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    // do mutation to the config
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [
          ['react-app', {
            flow: false,
            typescript: true
          }]
        ],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');

    // Add style loaders
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};