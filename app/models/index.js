module.exports = function (Sequelize, Schema) {
	let module = {};

	module.contact = require("./contact")(Sequelize, Schema);

	return module;
};
