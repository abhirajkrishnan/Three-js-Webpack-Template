import path from 'path';
import {common} from './webpack.common.js';
import {merge } from 'webpack-merge';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import {
  fileURLToPath
} from 'url';
import {
  dirname
} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const prod =merge(common, {
  mode: "production",
  entry: "./Simple/script.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "/build/main.[contenthash].js",
  },
 plugins:[new CleanWebpackPlugin()]

});

export default prod;