const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
environment.loaders.prepend('typescript', typescript)
// Vueのstyleが適用されない問題の解消
// 参考 => https://qiita.com/tocomi/items/0e1522418d0a21a6b291
environment.loaders.get('vue').options.extractCSS = false
module.exports = environment
