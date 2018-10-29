const HtmlWebPackPlugin = require("html-webpack-plugin");
const CssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
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
};
