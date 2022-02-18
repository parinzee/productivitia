const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rule: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        inlude: [path.resolve(__dirname, "src")],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
