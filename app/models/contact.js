module.exports = function (Sequelize, Schema) {
	var contact = Schema.define("contact", {
		contactNumber: {
			type: Sequelize.STRING,
			primaryKey: true,
			unique: true,
		},
		countryCode: {
			type: Sequelize.STRING,
		},
	});

	return contact;
};
