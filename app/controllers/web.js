module.exports = function (model) {
	let module = {};

	module.homepage = require("./web/homepage")(model);
	return module;
};
