const HtmlWebPackPlugin = require("html-webpack-plugin")
const CssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")

module.exports = {
	resolve: {
		alias: {
			modules: path.resolve(__dirname, "node_modules"),
			root: path.resolve(__dirname, "src"),
			// styles ? (Sass components)
			// prop-types ?
			// make a better arborescence ... ?
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
				test: /\.(css|scss)$/,
				use: [CssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: {
					loader: "file-loader",
					options: {
						outputPath: "./img",
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
			filename: "./index.html",
		}),
		new CssExtractPlugin({
			filename: "./stylesheets/index.css",
			chunkFilename: "./stylesheets/chunk.css",
		}),
	],
	devtool: "inline-source-map",
}
