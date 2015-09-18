var webpack = require('webpack');

module.exports =  {
  // Makes susre errors in console map tyo the correct file & line number
  devtool: 'source-map',
  context: __dirname,
  entry: [
    './js/app.js',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
  ],
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test:    /\.js$/,
        exclude: /node_modules/,
        loader: 'jscs-loader'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  jscs: {
    validateIndentation: 2,
    // set it to 'true' to display warnings as errors
    emitErrors: false,
    // JSCS errors do not interrupt the compilation.
    // Set `failOnHint` to `true` if you want any file with
    // JSCS errors to fail.
    failOnHint: false
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.less']
  },
  plugins: [
    // Avoid publishing files when compilation failed
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  stats: {
    colors: true
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './build',
    hot: true,
    inline: true,
    progress: true
  }
}
