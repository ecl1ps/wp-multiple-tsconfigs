const path = require('path');
const utils = require('./common');

module.exports = () => ({
    //stats: "verbose",
    entry: {
        ["ui"]: "./src/ui/ui.ts"
    },
    output: {
        pathinfo: false,
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: [/node_modules/],
            use: utils.createTsLoaderUse(path.resolve(__dirname, "../tsconfigs/ui.tsconfig.json"))
        }],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            src: path.resolve(__dirname, '../src'),
        },
    }
});

const createTsLoaderUse = (tsconfig) => ({
    loader: "ts-loader",
    options: {
        logLevel: "info",
        configFile: tsconfig,
        //transpileOnly: true,
        onlyCompileBundledFiles: true,
    }
});