import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Cssminimizer from 'css-minimizer-webpack-plugin';
import { Configuration } from 'webpack';
const BaseConfig: Configuration = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[name].[contenthash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(sc|c)ss$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          'MiniCssExtractPlugin.loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, '../src/style')]
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: 'static/img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10240,
              name: 'static/font/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.mp3(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'static/media/[name].[hash:8].[ext]' }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[id].[contenthash:8].css'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new Cssminimizer()]
  }
};

export default BaseConfig;
