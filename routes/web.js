module.exports = function (app, model, controller) {
	// var middleware = require("../app/middleware/index")(model);
	// var validator = require("../app/validator/index")(model);

	app.get("/:contacts", controller.homepage.saveContacts);
};
