import { merge } from 'webpack-merge';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import proConfig from './pro.config';
import { Configuration } from 'webpack';

const config: Configuration = {
  plugins: [new BundleAnalyzerPlugin()]
};

const AnalyzerConfig = merge(proConfig, config);

export default AnalyzerConfig;
