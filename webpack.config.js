// http://webpack.github.io/docs/configuration.html
// http://webpack.github.io/docs/webpack-dev-server.html
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    name: 'main',
    entry: ['babel-polyfill', __dirname + '/src/app/index.js'],
    output: {
      path: __dirname + '/public/js',
      publicPath: 'js/',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['react-hot-loader', 'babel-loader'],
          exclude: /node_modules/
        },
        {
          // https://github.com/jtangelder/sass-loader
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader'],
          include: /flexboxgrid/,
          exclude: /\.c\.scss$/
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader'],
          include: /flexboxgrid/,
          exclude: /\.c\.scss$/
        },
        {
          test: /\.c\.scss$/,
          loaders: [
            'style-loader?singleton',
            {
              loader: 'css-loader',
              query: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            'sass-loader'
          ],
          exclude: /(node_modules)/
        }
      ]
    },
    devServer: {
      contentBase: __dirname + '/public'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.BROWSER': JSON.stringify(true),
        API_BASE_URL: JSON.stringify('')
      }),
      new CleanWebpackPlugin(['css/main.css', 'js/bundle.js'], {
        root: __dirname + '/public',
        verbose: true,
        dry: false // true for simulation
      })
    ]
  },
  {
    name: 'tracks',
    entry: ['babel-polyfill', __dirname + '/src/app/standalones/Tracks/index.js'],
    output: {
      path: __dirname + '/public/js',
      publicPath: 'js/',
      filename: 'tracks.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['react-hot-loader', 'babel-loader'],
          exclude: /node_modules/
        },
        {
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
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader'],
          include: /flexboxgrid/,
          exclude: /\.c\.scss$/
        },
        {
          test: /\.c\.scss$/,
          loaders: [
            'style-loader?singleton',
            {
              loader: 'css-loader',
              query: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            'sass-loader'
          ],
          exclude: /(node_modules)/
        }
      ]
    },
    devServer: {
      contentBase: __dirname + '/public'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.BROWSER': JSON.stringify(true),
        API_BASE_URL: JSON.stringify('https://2018.hackjunction.com')
      }),
      new CleanWebpackPlugin(['css/main.css', 'js/tracks.js'], {
        root: __dirname + '/public',
        verbose: true,
        dry: false // true for simulation
      })
    ]
  },
  {
    name: 'partners',
    entry: ['babel-polyfill', __dirname + '/src/app/standalones/Partners/index.js'],
    output: {
      path: __dirname + '/public/js',
      publicPath: 'js/',
      filename: 'partners.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['react-hot-loader', 'babel-loader'],
          exclude: /node_modules/
        },
        {
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
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader'],
          include: /flexboxgrid/,
          exclude: /\.c\.scss$/
        },
        {
          test: /\.c\.scss$/,
          loaders: [
            'style-loader?singleton',
            {
              loader: 'css-loader',
              query: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            'sass-loader'
          ],
          exclude: /(node_modules)/
        }
      ]
    },
    devServer: {
      contentBase: __dirname + '/public'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.BROWSER': JSON.stringify(true),
        API_BASE_URL: JSON.stringify('https://2018.hackjunction.com')
      }),
      new CleanWebpackPlugin(['css/main.css', 'js/partners.js'], {
        root: __dirname + '/public',
        verbose: true,
        dry: false // true for simulation
      })
    ]
  }
];
