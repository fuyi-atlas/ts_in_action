// 公共环境配置
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'app': './src/index.ts'
    },
    output: {
        filename: '[name].[chunkhash:8].js'
        // filename: app.js
    },
    resolve: {
        // extensions: ['.js', '.jsx']
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                // test: /\.jsx?$/,
                test: /\.tsx?$/,
                use: [{
                    // loader: 'babel-loader'
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
