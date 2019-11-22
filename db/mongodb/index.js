// what is mongoClient?
// Difference between mongodb:// request and HTTP request
// Why do we need to close the connection?
// Difference between mongo and mongodb

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    if (err) {
      console.log("Inserted 3 documents into the collection");
    } else {
      callback(result);
    }
  });
}


client.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Connected successfully to mongodb');

    const dbName = 'badmovies';
    const db = client.db(dbName);


    insertDocuments(db, function() {
      client.close();
    })
  }
})






























// const mongoose = require('mongoose');
// if(process.env.MONGODB_URI){
//   mongoose.connect(process.env.MONGODB_URI)
// } else{
//   mongoose.connect('mongodb://localhost:27017/badmovies', { useNewUrlParser: true });
// }

// const db = mongoose.connection;

// mongoose.Promise = Promise;
// db.on('error', console.error.bind(console, 'Connection error:'));
// db.once('open', () => {
//   console.log('Connected to db...');
// })

// module.exports.db = db