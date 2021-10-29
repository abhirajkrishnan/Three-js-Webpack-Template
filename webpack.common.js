import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const common= {
  entry: "./Simple/script.js",
  plugins: [new HtmlWebpackPlugin({
      template:'./template.html',
  })],
   devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:
        [
            'babel-loader'
        ]
    },
    {
      test: /\.css$/,
      use:
      [
          'style-loader',
          'css-loader'
      ]
   },
    ],
  },
};

export default common;