const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import('webpack').Configuration}*/
const prodConfig = {
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }, ],
    },
};

module.exports = merge(common, prodConfig);