const path = require('path');
const { merge } = require('webpack-merge');
const { InjectManifest } = require('workbox-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 70000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new InjectManifest({
      swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
      swDest: './sw.bundle.js',
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 40,
          },
        },
      ],
      overrideExtension: true,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
    }),
  ],
});
