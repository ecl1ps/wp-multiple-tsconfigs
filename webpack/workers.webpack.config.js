const path = require('path');
const utils = require('./common');

module.exports = () => ({
    //stats: "verbose",
    entry: {
        ["worker"]: "./src/worker/worker.ts",
        ["worker-bad"]: "./src/worker/workerbad.ts",

    },
    output: {
        pathinfo: false,
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: [/node_modules/],
            use: utils.createTsLoaderUse(path.resolve(__dirname, "../tsconfigs/worker.tsconfig.json"))
        }],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            src: path.resolve(__dirname, '../src'),
        },
    }
});