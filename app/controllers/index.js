module.exports = function (model) {
	let module = {};

	module.web = require("./web.js")(model);
	return module;
};
