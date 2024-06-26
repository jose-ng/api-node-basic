/* This is a database connection function */
const mongoose = require('mongoose');
const { config } = require('../config/index'); // Import configuration variables

const connection = { isConnected: 0 }; // Keep track of the connection state
const USER = encodeURIComponent(config.dbUser); // Encode database username
const PASSWORD = encodeURIComponent(config.dbPass); // Encode database password
const DB_NAME = encodeURIComponent(config.dbName); // Encode database name
const DB_HOST = encodeURIComponent(config.dbHost); // Encode database host

const MONGO_URI = config.dev ? `mongodb://${config.dbHost}/${DB_NAME}` : `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`; // Construct MongoDB connection URI

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
    return res;
  } catch (err) {
    throw new Error('Error connection with db', err); // Throw error if connection fails
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