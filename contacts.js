const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

const id = 2;

const newData = {
  name: "Bob Jonson",
  email: "bobdjonson@mail.com",
  phone: "(578) 789-4561",
};

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

const updateContacts = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
};

const removeContact = async (id) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  contacts.splice(idx, 1);
  await updateContacts(contacts);
  return true;
};

const addContact = async (data) => {
  const contacts = await listContacts();
  const newContacts = { ...data, id: 11 };
  contacts.push(newContacts);
  await updateContacts(contacts);
  return newContacts;
};

(async () => {
  try {
    const contacts = await listContacts();
    console.log(contacts);

    const oneContacts = await getContactById(id);
    if (!oneContacts) {
      throw new Error(`Контакт с id=${id} не найден`);
    }
    console.log(oneContacts);

    const result = await removeContact(id);
    if (!result) {
      throw new Error(`Контакт с id=${id} не найден!`);
    }
    console.log("Удаление прошло успешно");

    const newContact = await addContact(newData);
    console.log(newContact);
  } catch (error) {
    console.log(error.message);
  }
})();

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   updateContacts,
//   addContact,
// };
