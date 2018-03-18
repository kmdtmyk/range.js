'use strict'

const path =  require('path')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'range.js',
    library: 'Range',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
    extensions: ['.js'],
  },
}
