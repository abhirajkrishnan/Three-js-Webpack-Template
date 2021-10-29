import path from 'path';
import common from './webpack.common.js';
import {merge } from 'webpack-merge';
import {
  fileURLToPath
} from 'url';
import {
  dirname
} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const dev =merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  devServer:{
    hot: true,
  },
});

export default dev;