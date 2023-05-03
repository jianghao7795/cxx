```js
const {merge} = require('webpack-merge');
const common = require('./webpack.config.js.md');
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '/src',
        hot: true,
    }
});
```