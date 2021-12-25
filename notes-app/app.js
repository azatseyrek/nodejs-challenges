const fs = require('fs');

fs.writeFileSync('notes.txt', 'this is a text message')

fs.unlink('notes.txt', (err) => {
    if(err) {
        console.log(err);
    }
    console.log("file is deleted");
})

fs.appendFileSync('notes.txt', ' attention pls this is test ')