import minimist from 'minimist';
import webpack from 'webpack';

const argv = minimist(process.argv.slice(2));
const DEBUG = !argv.release;

const config = {
  entry: {
    web: './www/static/src/web/main.jsx'
  },
  output: {
    path: `${__dirname}/www/static/dist/`,
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel?stage=0',
        exclude: /node_modules/
      }
    ]
  },
  devtool: DEBUG ? 'source-map' : false,
  plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
  cache: DEBUG
};

!DEBUG && config.plugins.push(new webpack.optimize.UglifyJsPlugin());

export default config;
