// Import the dotenv library to load environment variables from a .env file into process.env
const dotenv = require('dotenv');

// Load the environment variables from the .env file
dotenv.config();

// Define the configuration object
const config = {
  // Set the 'dev' property to true if the NODE_ENV environment variable is not 'production'
  dev: process.env.NODE_ENV !== 'production',
};

module.exports = { config };
