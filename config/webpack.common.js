/*global module */
/*global require */

const {merge} = require('webpack-merge');
const common = require('/home/mats/Projects/game_editor_here/thing-editor/scripts/webpack.global.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				'index.html'
			]
		})
	]
});