const path = require('path');

module.exports.default = () => ({
    //stats: "verbose",
    entry: {
        ["ui"]: "./src/ui/ui.ts",
        ["worker"]: "./src/worker/worker.ts",
        ["worker-bad"]: "./src/worker/workerbad.ts",

    },
    output: {
        pathinfo: false,
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.ts$/,
            //exclude: [/node_modules/, /worker/],
            use: createTsLoaderUse(path.resolve(__dirname, "./tsconfigs/ui.tsconfig.json"))
        }, {
            test: /\.ts$/,
            //exclude: [/node_modules/],
            use: createTsLoaderUse(path.resolve(__dirname, "./tsconfigs/worker.tsconfig.json"))
        }
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            src: path.resolve(__dirname, 'src'),
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
        compilerOptions: {
        }
    }
});