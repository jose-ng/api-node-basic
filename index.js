// Import the express module
const express = require('express');
const routerApi = require('./routes');
const { errorHandler } = require('./middlewares/error.handler');

// Create an instance of an Express application
const app = express();

// for parsing application/json
app.use(express.json()); 

// API's
routerApi(app);

// middlewares
app.use(errorHandler);

// Set the port the server will listen on
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});