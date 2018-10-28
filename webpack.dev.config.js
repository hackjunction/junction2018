var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = require('./webpack.config.js'); // inherit from the main config file

new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('development')
  }
});

// export css to a separate file
module.exports[0].module.loaders[1] = {
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader'
      },
      {
        loader: 'sass-loader'
      }
    ]
  }),
  exclude: /\.c\.scss$/
};
module.exports[0].plugins.push(new ExtractTextPlugin('../css/main.css'));
