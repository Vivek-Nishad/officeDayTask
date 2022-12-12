module.exports = function (databaseType) {
	try {
		const { database, username, password, host, port } = config.db;
		console.log(database, username, password, host, port);

		const sequelize = new databaseType(database, username, password, {
			host: host,
			port: port,
			dialect: "mysql",
		});

		sequelize
			.authenticate()
			.then(() => {
				console.log("Database connection has been established successfully.");
			})
			.catch((err) => {
				console.error("Unable to connect to the database: ", err);
			});

		return sequelize;
	} catch (error) {
		console.error("error in config database--> ", error);
		return error;
	}
};
