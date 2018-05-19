const path = require('path');

module.exports = [
  {
    entry: "./index.js",
    output: {
      filename: "bundle.js"
    },
    devServer: {
      port: 9000,
      historyApiFallback: true
    },
    module: {
      rules: [{
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules'],
            }
          },
        ]
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        // exclude: /node_modules/,
        options: {
          babelrc: true
        }
      },]
    },
  },
];
