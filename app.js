const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB with Mongoose
mongoose.connect('mongodb://0.0.0.0:27017/dictionary_db');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a Mongoose schema and model
const Schema = mongoose.Schema;
const WordSchema = new Schema({
  text_es: String,
  test_en: String,
});

const wordModel = mongoose.model('word', WordSchema);

// Define a route in Express
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});