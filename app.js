const express = require('express');
const app = express();
const cors = require('cors');
const server = require('http').Server(app);
const routerApi = require('./routes');
const { connect } = require('./utils/connectMongo');
const { errorHandler } = require('./middlewares/error.handler');
const useGraphQL = require('./graphQL');

// start server
async function startServer() {
  try {
    app.use(express.json());

    // cors
    const whitelist = [
      'http://localhost:3000'
    ];
    const corsOptions = {
      origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
    };
    app.use(cors(corsOptions));

     // GraphQL
     await useGraphQL(app);

    // API's
    routerApi(app);

    // middlewares
    app.use(errorHandler);

    // server
    app.disable('x-powered-by');

    // Connect MongoDB
    await connect();
    return app;
  } catch (err) {
    console.log(err);
    throw new Error('Internal server error', err);
  }
}

module.exports = { server, startServer };
