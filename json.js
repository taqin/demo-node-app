const fs = require('fs');

var originalNote = {
  title: 'Tango',
  body: 'This is the note body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

// var personString = '{"name": "Tangof", "Age": 35}';
// var person = JSON.parse(personString);

// console.log(typeof stringObj);
// console.log(stringObj);

console.log(typeof note);
console.log(note.body);
