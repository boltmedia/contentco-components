// .storybook/preview.js

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-backgrounds',
    '@storybook/addon-actions'
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    });

    config.module.rules.push({
      test: /\.inline.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false
              }
            }
          }
        }
      ]
    });

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|svg)$/i,
      exclude: /\.inline\./,
      use: [
        {
          loader: 'file-loader'
        }
      ]
    });

    config.module.rules.push({
      test: /\.(js|jsx)$/,
      loader: require.resolve('babel-loader'),
      exclude: /(node_modules|dist)/, // exclude any commonjs files

      options: {
        presets: [['@babel/preset-react', { flow: false }]]
      }
    });
    config.resolve.extensions.push('.js', '.jsx');

    return config;
  }
};
