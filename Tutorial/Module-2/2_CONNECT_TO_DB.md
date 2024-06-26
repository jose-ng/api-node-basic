_NOTE: For a better understanding of the code change to the branch_ `git checkout module-2/part-1`

# Connect to data base

To use MongoDB in our project, we will utilize an Object Data Modeling (ODM) library called Mongoose. Mongoose simplifies the process of interacting with MongoDB by providing a straightforward, schema-based solution to model your application data.

### Steps to Set Up MongoDB and Mongoose

1. **Create the MongoDB Database**
   - First, we need to create our MongoDB database. We'll use MongoDB Compass, a graphical user interface for MongoDB, to accomplish this.
   - Open MongoDB Compass and connect to your local MongoDB server (usually running on `mongodb://localhost:27017`).
   - Once connected, create a new database named `dictionary_sb`.

2. **Install Mongoose in Your Project**
   - Navigate to your project directory and install Mongoose using npm (Node Package Manager):
     ```bash
     npm install mongoose
     ```

## Example Code

#### 1. `index.js`

```javascript
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB with Mongoose
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a Mongoose schema and model
const Schema = mongoose.Schema;
const MySchema = new Schema({
  name: String,
  age: Number,
});

const MyModel = mongoose.model('MyModel', MySchema);

// Define a route in Express
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

### Brief Explanation

1. **Connect to MongoDB using Mongoose**:
   ```javascript
   mongoose.connect('mongodb://0.0.0.0:27017/mydatabase', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   });

   const db = mongoose.connection;
   db.on('error', console.error.bind(console, 'Connection error:'));
   db.once('open', () => {
     console.log('Connected to MongoDB');
   });
   ```
   - `mongoose.connect` establishes a connection to the MongoDB database specified by the URI.
   - `db.on('error', ...)` and `db.once('open', ...)` set up event handlers for connection errors and successful connections.

2. **Define a Mongoose schema and model**:
   ```javascript
   const Schema = mongoose.Schema;
   const MySchema = new Schema({
     name: String,
     age: Number,
   });

   const MyModel = mongoose.model('MyModel', MySchema);

   - Define a schema for the MongoDB documents.
   - Create a model based on that schema.
   ```

This basic example demonstrates how to connect Mongoose to a MongoDB database and how to set up an Express application.

## Implementation

See the full implementation in the `app.js` file running it with `node app.js`.

## References

- https://mongoosejs.com/docs/