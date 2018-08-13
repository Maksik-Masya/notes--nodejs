console.log('Starting app.js ...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const command = process.argv[2];
const argv = yargs.argv;

console.log('Command', argv._[0]);
console.log('Yargs', argv);

if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log(`New note is added`);
        notes.logNote(note);
    } else {
        console.log('New note was not added!!');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    const note = notes.fetchNote(argv.title);

    if (note) {
        console.log(`Fetched note`);
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    const noteRemoved = notes.removeNote(argv.title);
    const message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command is not defined');
}
