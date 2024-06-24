const wordRouter = require('./word.router');
const userRouter = require('./user.router');

function routerApi(app) {
 app.use('/api/word', wordRouter);
app.use('/api/user', userRouter);
}

module.exports = routerApi;
