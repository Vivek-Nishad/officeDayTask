const env = process.env.NODE_ENV || "localhost";
let config = {
	development: {},
	localhost: {
		port: 5001,
		baseUrl: "http://localhost:5001",
		db: {
			database: "office_day_task",
			username: "root",
			password: "",
			port: "",
			host: "localhost",
		},
	},
};

module.exports = config[env];
