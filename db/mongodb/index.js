const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useUnifiedTopology: true })

client.connect((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Connected to MongoDB server');
  }
});

module.exports = client;