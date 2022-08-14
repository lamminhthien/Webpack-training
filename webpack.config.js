const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  target: 'web',
  mode: 'development',
  entry: {
    home: './src/pages/home/index.js',
    about: './src/pages/about/index.js',
    contact: './src/pages/contact/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // Kết quả sẽ được xuất ra thư mục này.
    filename: 'scripts/[name].js' // Bạn hãy nhìn lên entry. Dòng code này sẽ tạo ra các file js tương ứng theo tên cho từng trang.
  },
  module: {
    rules: [
      {
        test: /\.njk$/,
        use: {
          loader: 'simple-nunjucks-loader',
          options: {}
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(m?jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/home/view.njk',
      filename: 'index.html',
      chunks: ['home'] // Bạn hãy nhìn lên entry. Dòng code này có nghĩa là nó sẽ nhúng chỉ chèn script của home vào trang home. Trang about, contact hoạt động tương tự.
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
      filename: 'styles/[name].css', // Dòng code này sẽ tạo ra các file css tương ứng cho từng trang.
      chunkFilename: 'styles/[id].css',
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
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      Pages: path.resolve(__dirname, 'src/pages/'),
      Partials: path.resolve(__dirname, 'src/partials/'),
      Vendors: path.resolve(__dirname, 'src/vendors/'),
      Assets: path.resolve(__dirname, 'src/assets/'),
      '@': path.resolve(__dirname, 'src/')
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'initial',
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]|[\\/]vendors[\\/]/,
          name: 'vendor',
          minChunks: 1,
          priority: -10,
          reuseExistingChunk: true
        },
        common: {
          name: 'common',
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};
