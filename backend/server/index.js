const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const url = 'mongodb://localhost:27017';
const dbName = 'quiz';

app.get('/api/data', async (req, res) => {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(dbName);
  const data = await db.collection('quiz').find({}).toArray();
  client.close();

  res.json(data);
});

app.listen(5000, () => console.log('Server is running on port 5000'));