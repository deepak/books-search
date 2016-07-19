const path = require('path'),
      webpack = require('webpack'),
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
  devServer: {
    contentBase: PATHS.build,
    // Enable history API fallback
    // so HTML5 History API based routing works
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    // Display only errors to reduce the amount of output.
    stats: 'errors-only',
    // 0.0.0.0 is available to all network devices
    // unlike default localhost
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || '8080'
  },
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
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
