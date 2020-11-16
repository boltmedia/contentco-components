const exec = require('child_process').exec;

module.exports = {
  entry: './src/index.jsx',
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
  plugins: [
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
          exec('npm run build', (err, stdout, stderr) => {
            if (stdout) process.stdout.write(stdout);
            if (stderr) process.stderr.write(stderr);
          });
        });
      }
    }
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    descriptionFiles: ['package.json'],
    modules: ['node_modules'],
    // alias: {
    //   // assets: path.resolve(__dirname, 'src/assets'),
    //   // 'react-toggle': path.resolve(__dirname, 'node_modules/react-toggle')
    //   // 'react-quill': path.resolve(__dirname, 'node_modules/react-quill')
    // },
  }
};
