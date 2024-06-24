const wordRouter = require('./word.router');
const userRouter = require('./user.router');

function routerApi(app) {
 app.use('/api/word', wordRouter);
//  app.use('/user', userRouter);
}

module.exports = routerApi;
