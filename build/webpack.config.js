/**
 * ownCloud - Music app
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Pauli Järvinen <pauli.jarvinen@gmail.com>
 * @copyright 2020 Pauli Järvinen
 *
 */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: '../js/config/index.js',
    files_music_player: '../js/embedded/index.js'
  },
  output: {
    filename: 'webpack.[name].js',
    path: path.resolve(__dirname, '../js/public'),
  },
  resolve: {
    alias: {
      'angular': path.resolve(__dirname, '../js/vendor/angular'),
      'lodash': path.resolve(__dirname, '../js/vendor/lodash'),
    }
  },
  plugins: [
    new MiniCssExtractPlugin({filename: 'webpack.app.css'})
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img/'
            }
          }
        ],
      },
    ],
  },
};