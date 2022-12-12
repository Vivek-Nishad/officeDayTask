const express = require("express");
const app = express();

global.config = require("./config/constants.js");
const port = config.port || 5001;

const Sequelize = require("sequelize");
global.Sequelize = Sequelize;
const sequelizeDB = require("./config/database.js")(Sequelize);
global.sequelize = sequelizeDB;
(async () => await sequelizeDB.sync())();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const model = require("./app/models/index.js")(Sequelize, sequelizeDB);

let controllers = require("./app/controllers/index.js")(model);
require("./routes/index.js")(app, model, controllers);
global.helper = require("./app/helpers/helpers.js");

app.listen(port, () => {
	console.log(`Server running at ${config.baseUrl}`);
});
