// const obj = {
//     name: 'Max'
// };
//
// const stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);


const fs = require('fs');

const noteObj = {
    title: "Bla title",
    body: "bla body"
};

const stringNoteObj = JSON.stringify(noteObj);

fs.writeFileSync('test.json', stringNoteObj);

const fileText = fs.readFileSync('test.json');

const note = JSON.parse(fileText);
console.log('Note title:', note.title);
console.log('Note type:', typeof note);
