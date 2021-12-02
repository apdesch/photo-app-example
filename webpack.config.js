import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const template = {
  template: resolve(__dirname, 'src/index.html'),
  title: 'Photo App',
  favicon: resolve(__dirname, 'src/favicon.ico'),
};

export default {
  mode: 'development',
  entry: "./src/index.jsx",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: '[name]-[hash:5].js',
    path: resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: "./dist",
    },
  },
  plugins: [
    new HtmlWebpackPlugin(template),
  ],
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ],
  },
};
