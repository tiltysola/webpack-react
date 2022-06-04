const webpackMerge = require('webpack-merge').merge;
const ESlintWebpackPlugin = require('eslint-webpack-plugin');

const webpackCommon = require('./webpack.common');

const webpackDev = webpackMerge(webpackCommon, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.less?$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css?$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new ESlintWebpackPlugin({
      extensions: [
        'js',
        'ts',
        'jsx',
        'tsx',
      ],
      fix: true,
    }),
  ],
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /\/node_modules\//,
          reuseExistingChunk: true,
        },
      },
    },
  },
  devServer: {
    watchFiles: ['src/**/*'],
    liveReload: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    open: false,
  },
  devtool: 'inline-source-map',
});

module.exports = webpackDev;
