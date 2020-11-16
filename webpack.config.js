const path = require('path');
// Not used if rollup is used
// If used add to package.json
/* {
  "main": "dist/contentco-components.js",
  "module": "src/index.js",
}
*/

// See https://webpack.js.org/guides/author-libraries/
module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'contentco-components.js',
    library: 'contentcoComponents'
  },
  externals: {
    // Add each external node_module, will be treated as peerDep
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.inline.svg$/,
        include: /src/,
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
      },
      {
        test: /\.(sa|sc)ss$/,
        include: /src/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: /src/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    descriptionFiles: ['package.json'],
    modules: ['node_modules']
  }
};
