import minimist from 'minimist';
import webpack from 'webpack';

const argv = minimist(process.argv.slice(2));
const DEBUG = !argv.release;

const config = {
  entry: {
    web: './www/static/src/main.jsx'
  },
  output: {
    path: `${__dirname}/www/static/dist/js`,
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
        loader: 'babel',
        exclude: /node_modules/,
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

export default config;
