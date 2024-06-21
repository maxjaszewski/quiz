const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const url = 'mongodb://localhost:27017';
const dbName = 'quiz';

app.get('/api/quiz', async (req, res) => {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(dbName);
  const data = await db.collection('quiz').find({}).toArray();
  client.close();

  res.json(data);
});

app.put('/api/quiz/:id', async (req, res) => {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(dbName);
  const id = req.params.id;
  console.log(req.params);
  const data = await db.collection('quiz').updateOne({ _id: id }, { $set: req.body });
  client.close();
  res.json(data);
});

app.delete('/api/quiz/:id', async (req, res) => {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(dbName);
  const id = req.params.id;
  console.log(req.params);
  const data = await db.collection('quiz').deleteOne({ _id: parseInt(id) });
  client.close();
  res.json(data);
});




app.listen(5000, () => console.log('Server is running on port 5000'));