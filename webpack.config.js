const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      PATHS = {
        app: path.join(__dirname, 'app'),
        build: path.join(__dirname, 'build')
      };

module.exports = {
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Books Search',
      inject: true,
      template: path.join(PATHS.app, 'index.html')
    })
  ]
};
