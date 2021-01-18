module.exports = async (ctx: any, next: any) => {
  try {
    await next();
  } catch (e) {
    ctx.status = e.status || 500;
    ctx.body = { error: e.message || 'Internal Server Error' };
  }
};
