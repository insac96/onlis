const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "production",

  entry: {
    'onlis': './src/index.ts',
    'onlis.min': './src/index.ts',
  },

  externals: {
    vue: {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: 'Vue'
    }
  },

  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: '[name].js',
    publicPath: '/dist/',
    library: 'onlis',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'onlis.min.css',
    })
  ],

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"]
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                indentedSyntax: true
              },
            },
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".sass"]
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        include: /(min|index)\.js$/,
      })
    ]
  }
};