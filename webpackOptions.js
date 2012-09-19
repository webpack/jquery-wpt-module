var path = require("path");
module.exports = function(options) {
	options.resolve.alias.jquery = path.join(__dirname, "index.js");
	options.parse.overwrites.$ = "jquery";
	options.parse.overwrites.jQuery = "jquery";
}