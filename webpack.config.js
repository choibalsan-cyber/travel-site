const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const postCSSPlugin = [
  require("autoprefixer"),
  require("postcss-nested"),
  require("postcss-simple-vars"),
];

module.exports = {
  mode: "development",
  watch: true,
  entry: "./src/js/index.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "docs"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: postCSSPlugin,
              },
            },
          },
        ],
      },
    ],
  },
};
