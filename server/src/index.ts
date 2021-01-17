const Koa = require('koa');

const config = require('./lib/config');

const app = new Koa();

app.listen(config.port, () =>
  console.log(`Server has been started on port ${config.port}`)
);

console.log('Hello world!');
