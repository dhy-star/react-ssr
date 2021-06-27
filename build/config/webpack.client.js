const path = require('path')
const root = path.join(__dirname, '../../')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode: 'development',
    entry: { index: path.join(root, 'src/main.js') },
    output: {
        path: path.join(root, 'dist'),
        filename: 'client/js/[name].js',
    },
    devtool:"source-map",
    // devServer:{
    //     port:9000
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10,
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(root, 'public/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css'
        })
    ]
}