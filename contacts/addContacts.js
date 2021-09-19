// const { v4 } = require("uuid");
const updateContact = require("./updateContacts");
const listContacts = require("./getContacts");

const addContact = async (data) => {
  const contacts = await listContacts();
  const newContacts = { ...data, id: 11 };
  contacts.push(newContacts);
  await updateContact(contacts);
  return newContacts;
};

module.exports = addContact;
