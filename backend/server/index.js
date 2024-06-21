const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
app.use(express.json());
const url = 'mongodb://localhost:27017';
const dbName = 'quiz';
// Enable All CORS Requests
app.use(cors());


app.get('/api/quiz', async (req, res) => {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(dbName);
  const data = await db.collection('quiz').find({}).toArray();
  client.close();

  res.json(data);
});

app.post('/api/quiz', async (req, res) => {
  const client = new MongoClient(url);
  const db = client.db(dbName);
  const data = await db.collection('quiz').insertOne(req.body);
  client.close();
  res.json(data);
});

app.put('/api/quiz/:id', async (req, res) => {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(dbName);
  const id = req.params.id;
  const data = await db.collection('quiz').updateOne({ _id: new ObjectId(id) }, { $set: req.body });
  client.close();
  res.json(data);
});

app.delete('/api/quiz/:id', async (req, res) => {
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(dbName);
  const id = req.params.id;
  const data = await db.collection('quiz').deleteOne({ _id: new ObjectId(id) });
  client.close();
  res.json(data);
});




app.listen(5000, () => console.log('Server is running on port 5000'));