// @flow

const path = require('path');
const webpack = require('webpack');

const developmentPlugins = [
  new webpack.HotModuleReplacementPlugin(),
];

const productionPlugins = [];

const developmentEntries = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:8000',
  'webpack/hot/only-dev-server',
];

module.exports = {
  devtool: process.env.WEBPACK_MODE !== 'production' ? 'source-map' : false,
  mode: process.env.WEBPACK_MODE === 'production' ? 'production' : 'development',
  entry: [
    ...(process.env.WEBPACK_MODE !== 'production' ? developmentEntries : []),
    path.resolve(__dirname, 'entry.jsx'),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      API_HOST: `'${process.env.API_HOST || 'http://www.fesp-course.ml'}'`,
      __DEV__: process.env.WEBPACK_MODE !== 'production',
    }),
    ...(process.env.WEBPACK_MODE !== 'production' ? developmentPlugins : productionPlugins),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    hot: true,
    contentBase: [
      path.resolve(__dirname, 'dist'),
      path.resolve(__dirname, 'static'),
    ],
    publicPath: '/',
    compress: true,
    port: 8000,
    filename: 'bundle.js',
    historyApiFallback: true,
    host: '0.0.0.0',
  },
  resolve: {
    extensions: [
      '.jsx',
      '.js',
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        include: [
          __dirname,
          path.resolve(__dirname, '../node_modules'),
        ],
      }, {
        test: /\.css?$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      }, {
        test: /\.woff2$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        }],
        include: /fonts/,
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            hash: 'sha512',
            digest: 'hex',
            name: '[hash].[ext]',
          },
        }],
        include: /static/,
      },
    ],
  },
};
