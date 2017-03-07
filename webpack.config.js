var loaders = ['babel']
module.exports = {
  devtool: 'eval',
  entry: __dirname + '/dev/react' + '/app-client.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: loaders,
      exclude: /node_modules/
    }]
  }
};