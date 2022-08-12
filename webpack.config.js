const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  target: "web",
  mode: "development",
  entry: {
    home: './src/pages/home/index.js',
    about: './src/pages/about/index.js',
    contact: './src/pages/contact/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.njk$/,
        use: {
          loader: "simple-nunjucks-loader",
          options: {},
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif,svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      {
        test: /\.(mp3|ogg|mp4|webm|vtt)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'media/[name][ext]'
        }
      },
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
        }
      }
    },
    {
      test: /\.(ts|tsx)?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/home/view.njk',
      filename: 'index.html',
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/about/view.njk',
      filename: 'about.html',
      chunks: ['about']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/contact/view.njk',
      filename: 'contact.html',
      chunks: ['contact']
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets/fonts', to: 'fonts', noErrorOnMissing: true },
        { from: 'src/assets/images', to: 'images', noErrorOnMissing: true },
        { from: 'src/assets/media', to: 'media', noErrorOnMissing: true }
      ]
    }),
    new BrowserSyncPlugin({
      host: '0.0.0.0',
      port: 3000,
      open: true,
      notify: false,
      server: {
        baseDir: ['dist']
      }
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      Scripts: path.resolve(__dirname, "src/scripts/"),
      Layouts: path.resolve(__dirname, "src/layouts/"),
      Pages: path.resolve(__dirname, "src/pages/"),
      Styles: path.resolve(__dirname, "src/styles/"),
      Partials: path.resolve(__dirname, "src/partials/"),
      Vendors: path.resolve(__dirname, "src/vendors/"),
      Assets: path.resolve(__dirname, "src/assets/"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimization: {
    splitChunks: {
      chunks: "initial",
      minSize: 0,
      cacheGroups: {
        vendor: {
          // Những thư viện đến từ thư mục /node_modules/ hoặc /vendors/ sẽ được gom thành vendor.js
          test: /[\\/]node_modules[\\/]|[\\/]vendors[\\/]/,
          name: "vendor",
          minChunks: 1,
          priority: -10,
          reuseExistingChunk: true,
        },
        common: {
          name: "common",
          minChunks: 2, // Những file được nhúng và sử dụng ở ít nhất 2 nơi thì sẽ gom thành common.js
          priority: -20,
          reuseExistingChunk: true,
        }
      }
    }
  },
};
