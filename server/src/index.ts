require('dotenv').config();

const Koa = require('koa');

const config = require('./lib/config');
const handlers = require('./handlers');
const controllers = require('./controllers');
const mongooseConfig = require('./lib/mongoose-config');


const app = new Koa();

handlers.forEach((h: any) => app.use(h));

app.use(controllers.routes());
app.use(controllers.allowedMethods());
mongooseConfig();

app.listen(config.port, () =>
  console.log(`Server has been started on port ${config.port}`)
);

