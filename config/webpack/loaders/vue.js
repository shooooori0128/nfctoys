// Vueのstyleが適用されない問題の解消
// 参考 => https://qiita.com/tocomi/items/0e1522418d0a21a6b291
const extractCSS = !(inDevServer && (devServer && devServer.hmr)) || isProduction

module.exports = {
  test: /\.vue(\.erb)?$/,
  use: [{
    loader: 'vue-loader',
    options: { extractCSS }
  }]
}
