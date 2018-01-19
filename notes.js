// console.log('Starting Notes.Js');
const fs = require('fs');

var fetchNotes = () => {
  try {
    // Read Existing json file
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    // Else return empty string
    return [];
  }
};

var saveNotes = notes => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  // Check for duplicates
  var duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    // Push changes to and write to file
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = title => {
  console.log('Getting note: ', title);
};

var removeNote = title => {
  // Fetch Notes
  var notes = fetchNotes();
  // Filter Notes
  var filteredNotes = notes.filter(note => note.title !== title);
  // Save Notes
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};
// Exporting functions
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
