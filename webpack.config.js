var path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (_, argv) => {
  const isProduction = argv.mode === "production";

  const useOptimization = () => {
    if (isProduction) {
      return {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              format: {
                comments: false,
              },
            },
            extractComments: false,
          }),
          new OptimizeCSSAssetsPlugin({
            cssProcessorPluginOptions: {
              preset: [
                "default",
                {
                  discardComments: {
                    removeAll: true,
                  },
                },
              ],
            },
          }),
        ],
      };
    }
    return {};
  };

  const useCSSLoader = () => {
    if (isProduction) {
      return {
        test: /\.(sass|css|scss)$/,
        exclude: /\.module\.(sass|css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: {
                  plugins: [
                    require("autoprefixer")({
                      grid: "autoplace",
                    }),
                    require("css-mqpacker"),
                    require("cssnano")({
                      preset: [
                        "default",
                        {
                          discardComments: {
                            removeAll: true,
                          },
                        },
                      ],
                    }),
                  ],
                },
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      };
    }
    return {
      test: /\.(sass|css|scss)$/,
      exclude: /\.module\.(sass|css|scss)$/,
      use: [
        {
          loader: "vue-style-loader",
        },
        {
          loader: "css-loader",
        },
        {
          loader: "sass-loader",
        },
      ],
    };
  };

  const useCSSModuleLoader = () => {
    if (isProduction) {
      return {
        test: /\.module\.(sass|css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 2,
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: {
                  plugins: [
                    require("autoprefixer")({
                      grid: "autoplace",
                    }),
                    require("css-mqpacker"),
                  ],
                },
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      };
    }
    return {
      test: /\.module\.(sass|css|scss)$/,
      use: [
        {
          loader: "vue-style-loader",
        },
        {
          loader: "css-loader",
          options: {
            modules: true,
            importLoaders: 1,
            sourceMap: true,
            modules: {
              localIdentName: "[name]__[local]--[hash:base64:5]",
            },
          },
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true,
          },
        },
      ],
    };
  };

  const usePlugins = () => {
    if (isProduction) {
      return [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "index.html",
        }),
        new MiniCssExtractPlugin({
          filename: "styles.min.css",
        }),
      ];
    }
    return [new VueLoaderPlugin()];
  };

  return {
    mode: argv.mode,
    entry: "./src/main.js",
    output: {
      path: path.resolve(__dirname, "./dist"),
      publicPath: isProduction ? "./" : "/dist/",
      filename: "build.js",
    },
    resolve: {
      alias: {
        "@shared": path.resolve(__dirname, "./src/shared"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@widgets": path.resolve(__dirname, "./src/widgets"),
        "@app": path.resolve(__dirname, "./src/app"),
      },
    },
    devtool: isProduction ? "source-map" : "eval-source-map",
    devServer: {
      contentBase: path.join(__dirname, "src"),
    },
    optimization: useOptimization(),
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  [
                    "@babel/preset-env",
                    {
                      targets: "defaults",
                    },
                  ],
                ],
                plugins: [
                  "@babel/plugin-proposal-optional-chaining",
                ],
              },
            },
          ],
        },
        useCSSModuleLoader(),
        useCSSLoader(),
        {
          test: /\.svg$/,
          loader: "vue-svg-loader",
          options: {
            svgo: {
              plugins: [{ removeDoctype: true }, { removeComments: true }],
            },
          },
        },
        {
          test: /\.(png|jpg|gif|webp)$/,
          loader: "file-loader",
          options: {
            name: "[name].[ext]?[hash]",
            outputPath: "images/",
            publicPath: isProduction ? "./images" : "/dist/images",
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "fonts/",
                publicPath: isProduction ? "./fonts" : "/dist/fonts",
              },
            },
          ],
        },
      ],
    },
    plugins: usePlugins(),
  };
};
