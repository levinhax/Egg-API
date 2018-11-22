'use strict';

const Controller = require('egg').Controller;

class MysqlController extends Controller {
  // 插入新的数据
  async create() {
    const { ctx } = this;
    const postMsg = ctx.request.body;
    const result = await ctx.service.mysqls.create(postMsg);
    ctx.body = result;
  }
  // 查看符合地址的所有的数据
  async index() {
    const { ctx } = this;
    const queryMsg = {
      place: ctx.query.place || '',
    };
    const result = await ctx.service.mysqls.index(queryMsg);
    ctx.body = result;
  }
}

module.exports = MysqlController;
