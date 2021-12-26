const chalk = require("chalk");
const { demandOption } = require("yargs");
const yargs = require("yargs");
const { getNotes, addNote, removeNote } = require("./notes.js");

// const msg = getNotes();
// console.log(msg);

// const greenMsg = chalk.green.inverse.bold("Success!");
// console.log(greenMsg);

// console.log(process.argv[2]);

// const command = process.argv[2];
// console.log(process.argv);

// if (command === "add") {
//   console.log(chalk.blue.inverse("adding note!"));
// } else if (command === "remove") {
//   console.log(chalk.inverse.red("Removing Note"));
// }

//create add command (yargs)

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true, //require(girilmesi zorunlu alan olarak belirtmek istedigimizde kullanilir)
      type: "string",
    },
    body: {
      describe: "This is desc",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    addNote(argv.title, argv.body);
  },
});

//create remove command (yargs)

yargs.command({
  command: "remove",
  describe: "Remove note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    removeNote(argv.title);
  },
});

//create list command (yargs)

yargs.command({
  command: "list",
  describe: "list note",
  handler: function () {
    console.log("list note!");
  },
});

//create read command (yargs)

yargs.command({
  command: "read",
  describe: "read note",
  handler: function () {
    console.log("read the note!");
  },
});

// console.log(yargs.argv); bunu yerine yargs.parse() kullanabiliriz.

yargs.parse();
