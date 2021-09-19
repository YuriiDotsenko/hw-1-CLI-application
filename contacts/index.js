const listContacts = require("./getContacts");
const getContactById = require("./getOneContacts");
const addContact = require("./addContacts");
const updateContact = require("./updateContactById");

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContact,
};
