// const listContacts = require("./contacts");
// const getContactById = require("./contacts");
// const addContact = require("./contacts");
// const removeContact = require("./contacts");
// const updateContacts = require("./contacts");

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
// console.log(argv);

// async function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       const contacts = await listContacts();
//       console.log(contacts);
//       break;

//     case "get":
//       const contact = getContactById(id);
//       if (!contact) {
//         console.log(`Товар с id=${id} не найден`);
//       } else {
//         console.log(contact);
//       }
//       break;

//     case "add":
//       const add = addContact(name, email, phone);
//       console.log(add);
//       break;

//     case "remove":
//       const remove = removeContact(id);
//       break;

//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// }

// invokeAction(argv);
