const yargs = require('yargs');

// Customize yargs version
yargs.version('1.1.0');

// const command = process.argv;
// console.log(command[2]);
// console.log(yargs);

// console.log(yargs.argv);
// console.log(yargs.argv._);
// console.log(yargs.argv.title);

yargs.command({
   command: 'add',
   describe: 'Add two numbers',
   builder: {
      title: {
         describe: 'Add title',
         demandOption: true,
         type: 'string'
      },
      text: {
         describe: 'Add some text',
         demandOption: true,
         type: 'string'
      }
   },
   handler: (param) => {
      console.log('Title', param.title);
      console.log('Text', param.text);
      console.log('added two numbers');
   }
})

yargs.command({
   command: 'remove',
   describe: 'Removes a new note',
   handler: function (argv) {
      console.log(argv);
      console.log('Removing a new note!')
   }
})

yargs.parse();


