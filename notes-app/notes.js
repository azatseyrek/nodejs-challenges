const fs = require("fs");

const getNotes = function () {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(notes);
  } else {
    console.log("Title is exist");
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    // console.log("Not added to NotePad");
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

//remove note

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });
  if (notes.length >notesToKeep.length ) {
      console.log("notes removed");
      saveNotes(notesToKeep);
    } else {
        console.log("No note found");
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
};
