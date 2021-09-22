const listContacts = require("./contacts");
const getContactById = require("./contacts");
const addContact = require("./contacts");
const removeContact = require("./contacts");
const updateContacts = require("./contacts");

const yargs = require("yargs");
const argv = require("yargs").argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = listContacts();
      console.table(contacts);
      break;

    case "get":
      const contact = getContactById(id);
      if (!contact) {
        console.log(`Товар с id=${id} не найден`);
      } else {
        console.log(contact);
      }
      break;

    case "add":
      const add = addContact(name, email, phone);
      console.log(add);
      break;

    case "remove":
      const remove = removeContact(id);
      console.log(remove);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
