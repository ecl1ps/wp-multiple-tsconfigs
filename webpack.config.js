let browserConfig = require("./webpack/browser.webpack.config");
let workerConfig = require("./webpack/workers.webpack.config");

module.exports = [
    browserConfig(),
    workerConfig()
];