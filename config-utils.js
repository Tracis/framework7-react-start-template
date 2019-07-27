const path = require("path");

const addTsLoader = (options) => (config) => {
  config.module.rules.unshift({
    test: /\.tsx?$/,
    include: path.resolve("src"),
    use: [
      {
        loader: require.resolve("babel-loader"),
      },
      {
        loader: require.resolve("ts-loader"),
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
          // IMPORTANT! use happyPackMode mode to speed-up compilation and reduce errors reported to webpack
          happyPackMode: true,
        },
      },
    ],
  });
  return config;
};

const addBabelPollyfillEntry = (options) => (config) => {
  config.entry.unshift(require.resolve("@babel/polyfill"));
  return config;
};

module.exports = {
  addTsLoader,
  addBabelPollyfillEntry,
};
