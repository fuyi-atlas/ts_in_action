// 所有配置文件的入口
const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const proConfig = require('./webpack.pro.config')

module.exports = (env, argv) => {
    // 确定环境
    let config = argv.mode === 'development' ? devConfig : proConfig;
    // 合并配置
    return merge(baseConfig, config);
};
