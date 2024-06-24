// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a basic route that responds with "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  res.json(users); // Send the response in JSON format
});

app.post('/api/users', (req, res) => {
  const newUser = req.body; // Receive the new user from the request body
  // Logic to add the new user (e.g., save to a database)
  res.status(201).json({
    message: 'User created successfully',
    user: newUser
  }); // Respond with a message and the new user in JSON format
});

// Set the port the server will listen on
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});