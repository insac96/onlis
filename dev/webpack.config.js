const path = require("path");
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',

  entry: {
    app: path.resolve(__dirname, './main.ts'),
  },

  output: {
    filename: '[name].js',
  },

  devServer: {
    static: path.join(__dirname, './static'),
    compress: true,
    port: 3000
  },

  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ],

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
        options: { 
          configFile: './tsconfig.json',
          appendTsSuffixTo: [/\.vue$/] 
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", 
          "sass-loader"
        ],
      }
    ],
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
    extensions: [".tsx", ".ts", ".js", ".sass"],
  }
}
