module.exports = function (app, model, controllers) {
	require("./web.js")(app, model, controllers.web);
};
