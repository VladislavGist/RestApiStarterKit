const path = require('path')
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: './index.js',
	externals: [nodeExternals()],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}
		]
	}
}