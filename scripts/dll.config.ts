import * as path from 'path';
import {} from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import webpack from 'webpack';
const DllConfig = {
  mode: 'production',
  entry: {
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: '[name].dll.[hash:8].js',
    path: path.resolve(__dirname, '../dll'),
    // 链接库输出方式 默认'var'形式赋给变量
    libraryTarget: 'var',
    // 全局变量名称 导出库将被以var的形式赋给这个全局变量 通过这个变量获取到里面模块
    library: '_dll_[name]_[hash:8]'
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, '../dll')]
    }),
    new webpack.DllPlugin({
      // path 指定manifest文件的输出路径
      path: path.resolve(__dirname, '../dll/[name].manifest.json'),
      // 和library 一致，输出的manifest.json中的name值
      name: '_dll_[name]_[hash:8]'
    })
  ]
};
export default DllConfig;
