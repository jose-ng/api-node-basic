// Import the express module
const express = require('express');
const routerApi = require('./routes');

// Create an instance of an Express application
const app = express();

// for parsing application/json
app.use(express.json()); 

routerApi(app);

// Set the port the server will listen on
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});