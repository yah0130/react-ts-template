import { merge } from 'webpack-merge';
import * as path from 'path';
import BaseConfig from './base.config';
import webpack from 'webpack';
import { Configuration, DefinePlugin } from 'webpack';
import envConfig from './env';
import CompressionPlugin from 'compression-webpack-plugin';
import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';

const config: Configuration = {
  mode: 'production',
  plugins: [
    new DefinePlugin(envConfig.pro),
    new CompressionPlugin(),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dll/vendor.manifest.json')
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, '../dll/**/*.js'),
      publicPath: ''
    })
  ]
};

const preConfig = merge(BaseConfig, config);

export default preConfig;
