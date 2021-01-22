const staticT = require('koa-static');

module.exports = process.env.NODE_ENV === 'production' ?
    staticT('client/build') : (ctx: any, next: any) => next();

export {};