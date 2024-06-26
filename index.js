const { startServer, server } = require('./app');
const { config } = require('./config');

(async () => {
  try {
    await startServer();
    // Run Server
    await server.listen(config.port);
    console.log('Listening on port http://localhost:%d', server.address().port);
  } catch (err) {
    console.log(err);
    throw new Error('Internal server error', err);
  }
})();
