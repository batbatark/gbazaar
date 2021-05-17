const path = require("path");
const webpackDevServer = require("webpack-dev-server");

const postCSSPlugins = [
  require("postcss-import"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("autoprefixer"),
  require("postcss-preset-env"),
];
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "dist"),
  },
  //devServer: {
  //before: function (app, server) {
  //server._watch("./src/**/*.html");
  //},
  //contentBase: path.join(__dirname, "dist"),
  //hot: true,
  //port: 3000,
  //},

  mode: "development",
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env"]],
              },
            },
          },
        ],
      },
    ],
  },
};
