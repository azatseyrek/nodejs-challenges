const fs = require('fs');

// console.log("this is Utils folder");

// const name = "azat";

// const sumFunc = (a, b) => {
//   return a + b;
// };

// module.exports = sumFunc;



const createNote = (notes) => {
    fs.writeFileSync('myNotes.txt', `'${notes}'`)
}


const addNote = (newNote) => {
    fs.appendFileSync('myNotes.txt', `${newNote}`, (err) => {
        if(err) {
            console.log(err);
        }
        console.log("Your note is add to your notepad");
    })
}


module.exports = {addNote, createNote}