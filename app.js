const contactsOperations = require("./contacts");

const id = 2;

const newData = {
  name: "Bob Jonson",
  email: "bobdjonson@mail.com",
  phone: "(578) 789-4561",
};

(async () => {
  try {
    // const contacts = await contactsOperations.listContacts();
    // console.log(contacts);
    const oneContacts = await contactsOperations.getContactById(id);
    if (!oneContacts) {
      throw new Error(`Контакт с id=${id} не найден`);
    }
    console.log(oneContacts);
    // const addContact = await contactsOperations.add(newData);
    // console.log(addContact);
    const updateContact = await contactsOperations.update(id, {
      ...oneContacts,
      name: "John Bobert",
    });
    if (!oneContacts) {
      throw new Error(`Контакт с id=${id} не найден`);
    }
    console.log(updateContact);
  } catch (error) {
    console.log(error.message);
  }
})();
