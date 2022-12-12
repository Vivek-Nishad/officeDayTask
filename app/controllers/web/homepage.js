module.exports = function (model) {
	let module = {};

	module.saveContacts = async function (req, res) {
		let contacts = JSON.parse(req.params.contacts);
		contacts = new Set(contacts);
		let newContactList = [];

		contacts.forEach((contactNo) => {
			let trimmedContact = contactNo.trim();
			if (trimmedContact.length == 10) {
				let contact = {
					contactNumber: trimmedContact,
					countryCode: null,
				};
				if (
					!newContactList.find((e) => e.contactNumber === contact.contactNumber)
				) {
					newContactList.push(contact);
				}
			} else if (trimmedContact.length == 13) {
				let contact = {
					countryCode: trimmedContact.substring(0, 3),
					contactNumber: trimmedContact.substring(3),
				};
				if (
					!newContactList.find((e) => e.contactNumber === contact.contactNumber)
				) {
					newContactList.push(contact);
				}
			} else if (trimmedContact.length == 14) {
				let [countryCode, contactNumber] = trimmedContact.split(" ");
				let contact = { contactNumber, countryCode };
				if (
					!newContactList.find((e) => e.contactNumber === contact.contactNumber)
				) {
					newContactList.push(contact);
				}
			}
		});

		await model.contact.bulkCreate(newContactList, { ignoreDuplicates: true });
		let allContacts = await model.contact.findAll({
			attributes: ["countryCode", "contactNumber"],
			raw: true,
		});

		res.send(allContacts);
	};
	return module;
};
