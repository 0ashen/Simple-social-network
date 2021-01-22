const Router = require('koa-router');
const passport = require('koa-passport');

const Post = require('../models/Post');

const router = new Router().prefix('/posts');

router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    async (ctx: any) => {
        const { body } = ctx.request.body;
        const user = ctx.state.user._conditions._id;
        console.log(ctx.state.user._conditions._id);
        ctx.body = await new Post({ body, user }).save();
        ctx.status = 201;
    }
);

router.get('/', async (ctx: any) => {});

router.get('/:id', async (ctx: any) => {});

router.put(
    '/',
    passport.authenticate('jwt', { session: false }),
    async (ctx: any) => {}
);

router.delete(
    '/:_id',
    passport.authenticate('jwt', { session: false }),
    async (ctx: any) => {}
);

module.exports = router.routes();

export {};
