const Router = require('koa-router');

const User = require('../models/User');

const router = new Router().prefix('/users');

router.get('/:_id', async (ctx: any) => {
    const user = await User.findById(ctx.params._id);
    if (user) {
        ctx.body = user;
    } else {
        ctx.throw(404);
    }
});

module.exports = router.routes();

export {};
