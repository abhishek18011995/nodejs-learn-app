const { MongoClient, ObjectId } = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'task-manager';
const taskCollectionName = 'tasks';
const client = new MongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true });
// Use connect method to connect to the server
client.connect(function (err) {
   // assert.strictEqual(null, err);
   if (err) {
      return console.log(err);
   }

   console.log('Connected successfully to server');

   const db = client.db(dbName);

   /**
    * find one document with passed object id
    */
   db.collection(taskCollectionName).findOne({ "_id": new ObjectId('6097d7dafa31b94e7ccda194') }).then(resp => {
      console.log(resp)
   }).catch(err => {
      console.log(err);
   });

   /**
   * finds document that matched the passed filter
   */
   db.collection(taskCollectionName).find({ completed: true }).toArray((err, resp) => {
      if (err) {
         return console.log(err);
      }

      console.log(resp)
   });



   /**
    * Inserts document in tasks collection
    */
   // db.collection(taskCollectionName).insertMany([
   //    {
   //       description: 'Task 1',
   //       completed: true
   //    },
   //    {
   //       description: 'Task 2',
   //       completed: true
   //    },
   //    {
   //       description: 'Task 3',
   //       completed: false
   //    }
   // ]).then(resp => console.log(resp.ops)).catch(err => console.log(err));

   // client.close();
});