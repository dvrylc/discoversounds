import HTMLWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import precss from 'precss';

export default {
  entry: './app/main.js',
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.scss$/, exclude: /node_modules/, loaders: ['style', 'css', 'sass', 'postcss']},
      {test: /\.png$/, exclude: /node_modules/, loader: 'url?15000'}
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: __dirname + '/app/index.html',
      favicon: 'app/favicon/favicon.png'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: () => {
    return [autoprefixer, precss]
  }
}
