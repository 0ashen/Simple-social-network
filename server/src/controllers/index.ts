const Router = require('koa-router');

const auth = require('./auth');
const posts = require('./posts');

const router = new Router().prefix('/api');

router.use(auth, posts);

module.exports = router;