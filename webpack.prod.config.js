var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = require('./webpack.config.js'); // inherit from the main config file

// production env
module.exports.forEach(function(module) {
  module.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  );
  module.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compressor: {
        warnings: false
      }
    })
  );
});

//FROM DEV
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
// compress the js file

/*
// export css to a separate file
module.exports.module.loaders[1] = {
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: [{
      loader: "css-loader"
    }, {
      loader: "sass-loader"
    }]
  })
};
*/

module.exports[0].plugins.push(new ExtractTextPlugin('../css/main.css'));
