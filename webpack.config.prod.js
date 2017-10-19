var path = require("path")
var webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin")

var PKG_VERSION = require("./package.json").version

// Assert this just to be safe.
// Development builds of React are slow and not intended for production.
if (process.env.NODE_ENV !== "production") {
  throw new Error("Production builds must have NODE_ENV=production.")
}

module.exports = {
  entry: ["./src/index"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  bail: true,
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      config: path.join(__dirname, "src", "config", "production"),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, "public", "index.html"),
      inlineSource: ".(js|css)$",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new HtmlWebpackInlineSourcePlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ["babel-loader"],
        include: path.join(__dirname, "src"),
      },
      {
        test: /\.css$/,
        include: [
          path.join(__dirname, "public"),
          path.join(__dirname, "node_modules"),
        ],
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|svg|ttf|woff|woff2)(\?.*)?$/,
        exclude: /\/favicon.ico$/,
        include: [
          path.join(__dirname, "src"),
          path.join(__dirname, "node_modules"),
        ],
        loader: "file-loader",
        query: {
          name: "/files/[name].[ext]",
        },
      },
      // A special case for favicon.ico to place it into build root directory.
      {
        test: /\/favicon.ico$/,
        include: [path.join(__dirname, "public")],
        loader: "file-loader",
        query: {
          name: "/favicon.ico",
        },
      },
      // "html" loader is used to process template page (index.html) to resolve
      // resources linked with <link href="./relative/path"> HTML tags.
      {
        test: /\.html$/,
        loader: "html-loader",
        query: {
          attrs: ["link:href"],
        },
      },
    ],
  },
}
