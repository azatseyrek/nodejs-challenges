const fs = require('fs');
// const sumFunc = require('./utils')
const {addNote, createNote} = require('./utils');

// fs.writeFileSync('notes.txt', 'this is a text message')

// fs.unlink('notes.txt', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log("file is deleted");
// })

// fs.appendFileSync('notes.txt', ' attention pls this is test ')

// console.log(name);


// const sum = sumFunc(4, -2)

// console.log(sum);

createNote('this is my note')

getNotes= "this is a test message from app.js"

addNote(getNotes)

console.log(getNotes);