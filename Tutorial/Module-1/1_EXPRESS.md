_NOTE: For a better understanding of the code change the branch_ `git checkout module-1/part-1`

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

## Routing

In Express.js, routes are fundamental components that define how your application responds to client HTTP requests. A route in Express.js consists of a URL pattern and an HTTP method (GET, POST, PUT, DELETE, etc.). Routes handle incoming requests and send responses to the client in various formats, with JSON being one of the most common and useful formats for modern applications.

### How Routes Work

1. **Defining Routes**:
   Routes are defined using methods on the Express application object (`app`). Each method corresponds to an HTTP request method. For example, `app.get()` for GET requests, `app.post()` for POST requests, and so on.

2. **Basic Structure of a Route**:
   A typical route includes a specific URL pattern and a callback function that handles the request and response.

### Example of Routes Returning JSON

Here's how to define and use routes in Express.js to handle requests and respond with JSON.

- **GET Route**:
Define a route that handles a GET request and responds with a JSON object.

```javascript
...
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  res.json(users); // Send the response in JSON format
});
...
```

- **POST Route**:
Define a route that handles a POST request, receives data in JSON format, and responds withJSON object.

```javascript
...
app.post('/api/users', (req, res) => {
  const newUser = req.body; // Receive the new user from the request body
  // Logic to add the new user (e.g., save to a database)
  res.status(201).json({
    message: 'User created successfully',
    user: newUser
  }); // Respond with a message and the new user in JSON format
});
...
```

### Benefits of Using JSON

- **Interoperability**: JSON is a lightweight and easy-to-read format for data exchange between the server and the client. It is widely supported by many technologies and programming languages.
- **Clear Structure**: JSON allows you to structure data in a clear and nested way, making it easy to handle complex data.
- **Ease of Use**: In Express.js, working with JSON is straightforward thanks to methods like `res.json()` and middleware like `express.json()`.

## References
https://expressjs.com/