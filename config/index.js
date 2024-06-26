// Import the dotenv library to load environment variables from a .env file into process.env
const dotenv = require('dotenv');

// Load the environment variables from the .env file
dotenv.config();

// Define the configuration object
const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
};

module.exports = { config };
