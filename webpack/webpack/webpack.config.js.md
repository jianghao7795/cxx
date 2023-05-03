```javascript
const path = require('path');
const utils = require('../src/tools/utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {
    postCssLoader,
    styleLoader,
    sassLoader,
    cssLoader,
} = utils.loadersConfig;

module.exports = {
    entry: {
        index: ['./src/index.jsx'],
    },
    output: {
        filename: '[name].[hash:5].js',
        path: path.resolve(__dirname, '../dist'),
    },
    devServer: {
        contentBase: '/src',
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack & react', // title
            template: './src/index.html',
            filename: './index.html',
            chunks: ['index'],
            inject: 'body',
            showErrors: true, //是否将错误信息输出到html页面中
            hash: false, //是否为所有注入的静态资源添加webpack每次编译产生的唯一hash值
            favicon: 'react.ico', //添加特定的 favicon 路径到输出的 HTML 文件中。
            minify: {
                //是否对大小写敏感，默认false
                caseSensitive: true,
                //是否简写boolean格式的属性如：disabled="disabled" 简写为disabled  默认false
                collapseBooleanAttributes: true,
                //是否去除空格，默认false
                collapseWhitespace: true,
                //是否压缩html里的css（使用clean-css进行的压缩） 默认值false；
                minifyCSS: true,
                //是否压缩html里的js（使用uglify-js进行的压缩）
                minifyJS: true,
                //Prevents the escaping of the values of attributes
                preventAttributesEscaping: true,
                //是否移除属性的引号 默认false
                removeAttributeQuotes: false,
                //是否移除注释 默认false
                removeComments: true,
                //从脚本和样式删除的注释 默认false
                removeCommentsFromCDATA: true,
                //是否删除空属性，默认false
                removeEmptyAttributes: true,
                //  若开启此项，生成的html中没有 body 和 head，html也未闭合
                removeOptionalTags: false,
                //删除多余的属性
                removeRedundantAttributes: true,
                //删除script的类型属性，在h5下面script的type默认值：text/javascript 默认值false
                removeScriptTypeAttributes: true,
                //删除style的类型属性， type="text/css" 同上
                removeStyleLinkTypeAttributes: true,
                //使用短的文档类型，默认false
                useShortDoctype: true,
            },
        })
    ],
    resolve: {
        modules: [
            'node_modules'
        ],
        extensions: [
            '.js',
            '.jsx',
            '.scss',
            '.less',
            '.css',
            '.json',
        ],
        // import导入时别名
        alias: {
            '@components': path.resolve(__dirname, '../src/components'),
            '@images': path.resolve(__dirname, '../src/images'),
            '@style': path.resolve(__dirname, '../src/style'),
            '@asset': path.resolve(__dirname,'../src/asset'),
            '@': path.resolve(__dirname, '../src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                // include: path.resolve(__dirname, '../src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        useBuiltIns: 'usage',
                                        corejs: 3,
                                        targets: {
                                            chrome: '58',
                                            ie: '11',
                                        },
                                    },
                                ],
                                '@babel/preset-react',
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [styleLoader, cssLoader, postCssLoader],
            },
            {
                test: /\.scss$/,
                include: [/pages/, /components/, /style/],
                use: [
                    styleLoader,
                    cssLoader,
                    postCssLoader,
                    sassLoader,
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[path][name].[ext]',
                            limit: 1024 * 15,
                            fallback: 'file-loader',
                        },
                    },
                ],
            },
        ]
    }
}
```