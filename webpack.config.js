// import minimist from 'minimist';
// import webpack from 'webpack';
var webpack = require('webpack');
var minimist = require('minimist');

const argv = minimist(process.argv.slice(2));
const DEBUG = !argv.release;

module.exports = {
  entry: {
    web: './www/static/src/main.jsx'
  },
  output: {
    path: `${__dirname}/www/static/dist`,
    publicPath: '/static/dist/',
    filename: 'js/[name].bundle.js'
  },
  externals: {
    "Masonry": "window.Masonry",
    "JQuery": "window.jQuery",
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
    }
  },
  resolveLoader: {
    alias: {
      'copy': 'file-loader?name=res/[name].[ext]'
    }
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './www/static/dist/',
    port: 8080
  // proxy: {
  //   '/api/*': {
  //     target: 'http://101.200.240.105:3010',
  //     secure: false
  //   }
  // }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: [/node_modules/],
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-2', 'react'],
        }
      }
    ]
  },
  devtool: DEBUG ? 'source-map' : false,
  plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
  cache: DEBUG
};

!DEBUG && config.plugins.push(new webpack.optimize.UglifyJsPlugin());

// export default config;
