const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), // Melhor usar para evitar o problema de barras ('/', '\') que divergem entre Win e Linux
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
