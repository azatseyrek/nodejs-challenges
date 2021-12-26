const fs = require("fs");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicate = notes.filter((note) => {
    return note.title === title;
  });

  if(duplicate.length === 0) {
      notes.push({
          title,
          body
      })
      saveNote()
      console.log(notes);
  } else {
      console.log("title is exist");
  }
};

const saveNote = () => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};
