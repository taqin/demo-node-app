// console.log('Starting app...');

const _ = require('lodash');
const fs = require('fs');
const http = require('http');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];

console.log(command);
console.log('Process', process.argv);
console.log('Yargs', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note Created');
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log('Note Title Taken');
  }
} else if (command === 'list') {
  console.log('Listing all notes');
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Unrecognized Keys');
}

// Create a server object:
http
  .createServer((req, res) => {
    res.write('Hello Worldly Beings!'); // write a response to the client
    res.end(); // end the response
  })
  .listen(5000); // the server object listens on port 8080
