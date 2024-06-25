/**
 * This is the index routing file for the Node.js API.
 * It sets up the main routes for the application by linking
 * specific endpoints to their respective routers.
 */
const wordRouter = require('./word.router');
const userRouter = require('./user.router');

/**
 * Function to configure the API routes.
 * @param {object} app - The Express application instance
 */
function routerApi(app) {
  app.use('/api/word', wordRouter);
  app.use('/api/user', userRouter);
}

module.exports = routerApi;
