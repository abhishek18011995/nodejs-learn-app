const fs = require('fs');
const chalk = require('chalk');

const filePath = './notes.json';

function getNotes() {
   let result;
   try {
      const data = fs.readFileSync(filePath);
      result = data;
   } catch (err) {
      result = []
   }

   return JSON.parse(result.toString());
}

function saveNotes(notes) {
   const data = JSON.stringify(notes);
   fs.writeFileSync(filePath, data);
}

function addNote(title, body) {
   debugger;
   const allNotes = getNotes();
   const isNoteExists = allNotes.some(val => val.title === title);
   if (isNoteExists) {
      console.log(chalk.yellow('Note title already taken'));
      return null;
   }

   let newNote = { title, body };
   allNotes.push(newNote)
   try {
      saveNotes(allNotes)
   } catch (err) {
      console.log(chalk.red(`Failed to add new note: ${err.message}`));
      newNote = null;
   }

   return newNote;
}

function removeNote(title) {
   const allNotes = getNotes();
   const updatedNotes = allNotes.filter(item => item.title !== title);
   if (updatedNotes.length === allNotes.length) {
      console.log(chalk.yellow(`No note found with title '${title}'`));
      return null;
   }

   try {
      saveNotes(updatedNotes);
   } catch (err) {
      console.log(chalk.red(`Failed to remove note: ${err.message}`));
   }

   return updatedNotes;
}

module.exports = {
   getNotes: getNotes,
   addNote: addNote,
   removeNote
};










// fs.readFile('./data/1.json', (err, data) => {
//    if (err) throw err;
//    changeFileData(data);
// });

// function changeFileData(data) {
//    const fileData = JSON.parse(data.toString());
//    console.log(`Previous name: ${fileData.name}, Previous age: ${fileData.age}`);
//    const updatedValue = { ...fileData, name: 'Abhi', age: 26 };
//    updateFileData(updatedValue);
// }

// function updateFileData(updatedFileData) {
//    const updatedData = JSON.stringify(updatedFileData);
//    fs.writeFile('./data/1.json', updatedData, (err, data) => {
//       if (err) throw err;
//       console.log(`New name: ${updatedFileData.name}, New age: ${updatedFileData.age}`);
//    });
// }