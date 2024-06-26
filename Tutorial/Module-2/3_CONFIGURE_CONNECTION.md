_NOTE: For a better understanding of the code change to the branch_ `git checkout module-2/part-2`

### Adding Our Connection to the Project

First, we add a `.env` file at the root of the project to include our environment variables. While these are not sensitive data since it is a local environment, it is good practice to do so.

#### .env

```plaintext
PORT=3000
DB_USER=
DB_PASS=
DB_HOST=0.0.0.0:27017
DB_NAME=dictionary_db
```

### Configuration File

Next, we create the `config/index.js` file to load these variables into our project:

```javascript
const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
};

module.exports = { config };
```

### Note: Install the `dotenv` package to load environment variables from the `.env` file into `process.env`

```bash
npm install dotenv
```

### Adding Our Database Connection File

#### connectMongo.js

```javascript
/* This is a database connection function */
const mongoose = require('mongoose');
const { config } = require('../config/index'); // Import configuration variables
const { fError, fLog } = require('./console/console'); // Import custom logging functions

const connection = { isConnected: 0 }; // Keep track of the connection state
const USER = encodeURIComponent(config.dbUser); // Encode database username
const PASSWORD = encodeURIComponent(config.dbPass); // Encode database password
const DB_NAME = encodeURIComponent(config.dbName); // Encode database name
const DB_HOST = encodeURIComponent(config.dbHost); // Encode database host
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`; // Construct MongoDB connection URI

// Asynchronous function to connect to MongoDB
const connectMongo = async () => {
  try {
    if (connection.isConnected) {
      return connection.isConnected; // Return if already connected
    }

    mongoose.set('strictQuery', true); // Set Mongoose configuration
    const conn = await mongoose.connect(MONGO_URI); // Connect to MongoDB
    connection.isConnected = conn.connections[0].readyState; // Update connection state
    const res = `db is connected ${conn.connections[0].name}`; // Log connection success
    
    console.log(res); // Log to console
    fLog(res); // Log using custom logging function
    return res;
  } catch (err) {
    fError('error db', err); // Log connection error
    throw new Error('Error connecting to db', err); // Throw error if connection fails
  }
};

// Function to disconnect from MongoDB
const disconnectMongo = (done) => {
  mongoose.disconnect(done); // Disconnect from MongoDB
};

module.exports = {
  mongoose,
  connect: connectMongo, // Export the connect function
  disconnect: disconnectMongo, // Export the disconnect function
};
```

### Modify `index.js` and `app.js` to Add the Database Connection When the Application Starts

See the code to see the full implementation

### References

- https://blog.appsignal.com/2023/08/09/how-to-use-mongodb-and-mongoose-for-nodejs.html