# Express.js

## Introduction

**Express.js** is a web application framework for Node.js designed to build web applications and APIs. It is fast, minimalist, and flexible, providing a robust set of features for web and mobile applications. Its minimalist approach allows developers to extend its capabilities using middleware and additional modules as needed.

### Installing Express.js

   Run the following command to install Express.js as a dependency of your project:
   ```bash
   npm install express
   ```

### Basic Usage Rules

Here is a basic example of how to set up and use Express.js:

1. **Create a Basic Server**:

Create a file called `index.js` and add the following code:

```javascript
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
```

2. **Run the Server**:
In the terminal, run:
```bash
node index.js
```
Open your browser and go to `http://localhost:3000` to see the "Hello World!" message.

Express.js is powerful and extensible, suitable for both small and large applications, providing a solid foundation for backend development.

## References
https://expressjs.com/