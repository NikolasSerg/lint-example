const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: '[name].bundle.js'
    },
    devServer: {
        port: 3000,
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        hot: true,
        historyApiFallback: true
    },
    resolve: { extensions: ['.ts', '.tsx', '.js'] },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new MiniCssExtractPlugin()
    ],
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: '/node_modules/',
                use: 'ts-loader'
            },
            {
                test: /\.m\.(css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        oprions: {
                            module: {
                                localIdentName: '[local]__[hash:base64:5]'
                            }
                        }
                    }
                ]
            },
            {
                test: /^((?!\.m).)*css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    }
}
