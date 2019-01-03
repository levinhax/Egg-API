'use strict';
const JWT = require('jsonwebtoken');

module.exports = options => {
  return async function(ctx, next) {
    const token = ctx.request.header.authorization;
    const method = ctx.method.toLowerCase();
    if (method === 'get') {
      await next();
    } else if (!token) {
      if (ctx.path === '/api/v1/signup' || ctx.path === '/api/v1/signin') {
        await next();
      } else {
        ctx.throw(401, '未登录, 请先登录!!!');
      }
    } else {
      let decode;
      try {
        console.log(token);
        decode = JWT.verify(token, options.secret);
        if (!decode || !decode.userName) {
          ctx.throw(401, '没有权限，请登录');
        }
        if (Date.now() - decode.expire > 0) {
          ctx.throw(401, 'Token已过期');
        }
        const user = await ctx.model.User.find({
          userName: decode.userName,
        });
        if (user) {
          await next();
        } else {
          ctx.throw('401', '用户信息验证失败');
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
};
