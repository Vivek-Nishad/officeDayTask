module.exports = function (model) {
	let module = {};
	module.web = require("./web")(model);
	return module;
};
