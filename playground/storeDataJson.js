const fs = require('fs');

fs.readFile('./data/1.json', (err, data) => {
   if (err) throw err;
   changeFileData(data);
});

function changeFileData(data) {
   const fileData = JSON.parse(data.toString());
   console.log(`Previous name: ${fileData.name}, Previous age: ${fileData.age}`);
   const updatedValue = { ...fileData, name: 'Abhi', age: 26 };
   updateFileData(updatedValue);
}

function updateFileData(updatedFileData) {
   const updatedData = JSON.stringify(updatedFileData);
   fs.writeFile('./data/1.json', updatedData, (err, data) => {
      if (err) throw err;
      console.log(`New name: ${updatedFileData.name}, New age: ${updatedFileData.age}`);
   });
}