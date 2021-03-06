const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}


module.exports = {
  //默认路径配置
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'api': '@/api',
        'store': '@/store',
      }
    }
  },
  chainWebpack(config) {
    const svgRule = config.module.rule('svg');
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear();
    svgRule
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, './src/assets/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      });
    const fileRule = config.module.rule('file');
    fileRule.uses.clear();
    fileRule
      .test(/\.svg$/)
      .exclude.add(path.resolve(__dirname, './src/assets/icons/svg'))
      .end()
      .use('file-loader')
      .loader('file-loader');
  }
}