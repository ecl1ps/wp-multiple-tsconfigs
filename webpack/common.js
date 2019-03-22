const createTsLoaderUse = (tsconfig) => ({
    loader: "ts-loader",
    options: {
        logLevel: "info",
        configFile: tsconfig,
        //transpileOnly: true,
        onlyCompileBundledFiles: true,
    }
});

module.exports = {
    createTsLoaderUse
}