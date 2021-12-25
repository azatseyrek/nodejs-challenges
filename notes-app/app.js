const chalk = require("chalk");
const getNotes = require("./notes.js");
const yargs = require("yargs");

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
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note!');
    }
})



//create remove command (yargs)

yargs.command({
    command: 'remove',
    describe: 'Remove note',
    handler: function() {
        console.log('Removing note!');
    }
})

//create list command (yargs)

yargs.command({
    command: 'list',
    describe: 'list note',
    handler: function() {
        console.log('list note!');
    }
})

//create read command (yargs)

yargs.command({
    command: 'read',
    describe: 'read note',
    handler: function() {
        console.log('read the note!');
    }
})


 console.log(yargs.argv);