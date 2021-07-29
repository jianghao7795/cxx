const {merge} = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // 用来缩小（压缩优化）js文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 插件是用于在下一次打包时清除之前打包的文件
const common = require('./webpack.config.js');
module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true,
        }),
        new CleanWebpackPlugin(),
    ],
});
