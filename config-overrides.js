const { override, addLessLoader, addBabelPlugins } = require("customize-cra");
const { addTsLoader, addBabelPollyfillEntry } = require("./config-utils");

module.exports = override(
  addBabelPollyfillEntry(),
  addTsLoader(),
  addLessLoader({}),
  addBabelPlugins("@babel/plugin-transform-typescript", [
    "react-intl-auto",
    {
      removePrefix: "src.messages",
    },
  ]),
);
