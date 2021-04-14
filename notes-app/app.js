const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes.module');

// console.log(notes.getNotes());
// notes.addNote('Bittu', 'Bittu is a good boy');

yargs.command({
   command: 'add',
   describe: 'Adds new note',
   builder: {
      title: {
         describe: 'Add note title',
         demandOption: true,
         type: 'string'
      },
      body: {
         describe: 'Add note body',
         demandOption: true,
         type: 'string'
      }
   },
   handler: (param) => {
      const result = notes.addNote(param.title, param.body);
      if (result) {
         console.log(chalk.green('Successfully added new note'));
      }
   }
})

yargs.command({
   command: 'remove',
   describe: 'Removes a note',
   builder: {
      title: {
         describe: 'Removes note for given title',
         demandOption: true,
         type: 'string'
      }
   },
   handler: function (argv) {
      const result = notes.removeNote(argv.title);
      if (result) {
         console.log(chalk.green(`Successfully removed note with title ${argv.title}`));
      }
   }
})


yargs.parse();

