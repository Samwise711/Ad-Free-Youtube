var webpack = require('webpack');

var constants = {
  'webpack.constants.REACT_APP_YOUTUBE_KEY': process.env.REACT_APP_YOUTUBE_KEY
};

module.exports = {
  entry: ['./src/index.js'],
  plugins: [new webpack.DefinePlugin(constants)],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
