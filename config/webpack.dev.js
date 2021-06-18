const common = require('./webpack.common');
const { HotModuleReplacementPlugin } = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');

/** @type {import('webpack').Configuration}*/
const devConfig = {
    mode: 'development',
    devServer: {
        port: 8000,
        contentBase: '../dist',
        open: 'brave',
        hot: true,
    },
    target: 'web',
    plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }, ],
    },
};

module.exports = merge(common, devConfig);