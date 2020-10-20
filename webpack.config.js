var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/MonitorScollBar.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'MonitorScollBar.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: path.join(__dirname, '/node_modules/'),
        loader: 'babel-loader',
      }, {
        test: /\.*css$/,
        use : ExtractTextPlugin.extract({
            fallback : 'style-loader',
            use : [
                'css-loader',
                'sass-loader'
            ]
        })
       },
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter'
    }
};