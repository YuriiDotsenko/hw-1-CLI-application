const { v4 } = require("uuid");
const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async (id) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  return contacts[idx];
};

const removeContact = async (id) => {
  const contacts = await listContacts();
  const newContacts = contacts.filter((contact) => contact.id !== id);

  try {
    await fs.writeFile(contactsPath, JSON.stringify(newContacts));
    console.log("contact removed");
    return newContacts;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newId = v4();

  contacts.push({
    id: newId,
    name,
    email,
    phone,
  });

  try {
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    console.log("operation succeeded");
    console.table({
      id: newId,
      name,
      email,
      phone,
    });
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
