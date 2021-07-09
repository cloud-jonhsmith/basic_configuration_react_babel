const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const rootPath = path.join(__dirname, "../../base_react_babel");

module.exports = {
    entry: {
        app: path.join(rootPath, "src/index.js"),
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.js', '.jsx'],
                }
            },
            {
                test: /\.(jpg|png|jpeg|svg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[contenthash].[ext]",
                            outputPath: "img/",
                            useRelativePath: true,
                        },
                    },
                ]
            }
        ]
    },
    plugins: [
		new HtmlWebpackPlugin({
            title: "Project name",
            description: "Write some description...",
            filename: path.join(rootPath, "docs/index.html"),
            template: path.join(rootPath, "public/index.html"),
        }),
        new CleanWebpackPlugin(),
    ],
}