// webpack.config.js

const webpack = require('webpack');
const path = require('path');
const libraryName = 'reduxer';
const outputFile = libraryName + '.js';

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: ['./actions.js', './reducers.js'],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${libraryName}.js`,
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: [
          {
            loader: 'babel-loader', options: {
              presets: [
                ['es2015', { modules: false }]
              ]
            }
          }
        ],
        exclude: /(node_modules)/
      },
    ],
  },
};

module.exports = config
