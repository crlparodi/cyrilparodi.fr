const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "/public/"),
		filename: "bundle.js",
		publicPath: "/",
	},
	resolve: {
		alias: {
			modules: path.resolve(__dirname, "node_modules"),
			root: path.resolve(__dirname, "src"),
			styles: path.resolve(__dirname, "styles"),
			img: path.resolve(__dirname, "img"),
			data: path.resolve(__dirname, "data"),
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.s(a|c)ss$/,
				exclude: /\.module.(s(a|c)ss)$/,
				loader: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(jpe?g|png|gif|pdf)$/i,
				use: {
					loader: "file-loader",
					options: {
						name: "media/[name].[ext]",
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./public/index.html",
			filename: "index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css",
		}),
	],
	devtool: "eval-source-map",
	devServer: {
		contentBase: path.join(__dirname, "/public/"),
		historyApiFallback: true,
	},
}
