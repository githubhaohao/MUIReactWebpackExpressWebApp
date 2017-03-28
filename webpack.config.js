var path = require('path');

module.exports = {
	entry: {
		index: './client/src/js/Home.js',
		about: './client/src/js/About.js',
		page: './client/src/js/Page.js'
	},
	output: {
		path: path.join(__dirname, '/client/output'),
		filename: '[name].bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{test: /\.jsx?$/, loaders: ['babel']},
			{test: /\.css$/, loader: 'style!css'}
		]
	}
}