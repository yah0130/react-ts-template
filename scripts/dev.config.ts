import { merge } from 'webpack-merge';
import * as path from 'path';
import BaseConfig from './base.config';
import { Configuration, DefinePlugin } from 'webpack';
import envConfig from './env';

const devConfig: Configuration = {
  mode: 'development',
  devServer: {
    port: 9000,
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    open: true
  },
  plugins: [new DefinePlugin(envConfig.dev)]
};

module.exports = merge(BaseConfig, devConfig);
