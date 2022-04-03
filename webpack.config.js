const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    headerfooter: "./src/headerfooter.js",
    lander: "./src/lander.js",
    menu: "./src/menu.js",
    contact: "./src/contact.js",
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [
          {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            use: [{loader: "file-loader",},],
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
      ],
  },
};