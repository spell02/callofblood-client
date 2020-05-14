const Path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { StylableWebpackPlugin } = require("@stylable/webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
    },
    output: {
        filename: "bundle.js",
        path: Path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".mjs", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test:/^(?!.*\.st\.css$).*\.css/,
                use: [
                    "style-loader",
                    "css-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader",
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    "file-loader",
                ],
            },
        ],
    },
    plugins: [
        new StylableWebpackPlugin(),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
        }),
        new HtmlWebpackPlugin({
            title: "Call of Blood",
            template: "src/index.html",
        }),
    ],
};
