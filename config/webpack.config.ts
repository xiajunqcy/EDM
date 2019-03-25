delete process.env.TS_NODE_PROJECT;

import webpack, { DefinePlugin } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
// import { CheckerPlugin } from "awesome-typescript-loader";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { getProjectUrl } from "./until";

const devMode: boolean = process.env.NODE_ENV !== "production";

const config: webpack.Configuration = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"]
    // modules: [getProjectUrl("lib"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.tsx?$/,
        // loader: "awesome-typescript-loader",
        loader: "ts-loader",
        options: {
          // useCache: true,
          configFile: getProjectUrl(`tsconfig${devMode ? "" : ".prod"}.json`)
        }
      },
      {
        test: /\.tsx?$/,
        enforce: "pre",
        use: [{ loader: "tslint-loader" }]
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader"
      },
      // {
      //   test: /guui\.svg$/,
      //   loader: 'file-loader',
      // },
      // {
      //   test: /\.md$/,
      //   loader: 'text-loader',
      // },
      {
        test: /\.s([ac])ss$/,
        use: [
          devMode
            ? "style-loader"
            : ({
                loader: MiniCssExtractPlugin.loader,
                options: {
                  // publicPath: '../'
                }
              } as webpack.Loader),
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              includePaths: [getProjectUrl("stylesheets", "include")]
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new DefinePlugin({
      $PREFIX: JSON.stringify("edm")
    }),
    new ForkTsCheckerWebpackPlugin(),
    // new CheckerPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  resolveLoader: {
    modules: ["node_modules", getProjectUrl("loaders")]
  }
};
export default config;
