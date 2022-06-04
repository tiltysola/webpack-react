const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = (...args) => path.join(__dirname, '../', ...args);

const webpackCommon = {
  entry: resolve('src/main.tsx'),
  module: {
    rules: [
      {
        test: /\.jsx?|tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: resolve('dist'),
  },
  resolve: {
    symlinks: false,
    modules: [resolve('node_modules')],
    extensions: [
      '.tsx',
      '.jsx',
      '.ts',
      '.js',
      '.less',
      '.css',
    ],
    alias: {
      '@': resolve('./src'),
      '@typings': resolve('./typings'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('public/index.html'),
    }),
  ],
};

module.exports = webpackCommon;
