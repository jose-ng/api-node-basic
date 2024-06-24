// Import the express module
const express = require('express');
   
// Create an instance of an Express application
const app = express();

// Define a basic route that responds with "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Set the port the server will listen on
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});