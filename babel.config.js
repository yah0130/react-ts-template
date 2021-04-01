module.exports = {
  presets: [['@babel/preset-env', { targets: { ie: 11 } }], '@babel/preset-react'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }], // 支持装饰器模式
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-syntax-dynamic-import' // 动态导入
  ]
};
