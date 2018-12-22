const HtmlWebPackPlugin = require("html-webpack-plugin")
const CssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")

module.exports = {
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
				test: /\.(?:sass|scss)$/,
				use: [
					"style-loader",
					{
						loader: CssExtractPlugin.loader,
					},
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: {
					loader: "file-loader",
					options: {
						name: "media/[name].[ext]",
					},
				},
			},
			{
				test: /\.pdf$/,
				use: ["file-loader"],
			},
			{
				test: /\.(woff|woff2|eot|ttf)$/,
				use: [
					{
						loader: "url-loader?limit=100000",
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./public/index.html",
			filename: "index.html",
		}),
		new CssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css",
		}),
	],
	devtool: "inline-source-map",
}
