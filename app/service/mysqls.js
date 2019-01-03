'use strict';

const Service = require('egg').Service;

class MysqlService extends Service {
  async create(postMsg) {
    const { ctx } = this;
    const result = await ctx.app.mysql.insert('posts', { title: postMsg.title, place: postMsg.place });
    return result;
  }

  async index(params) {
    const { ctx } = this;
    const result = await ctx.app.mysql.select('posts', {
      where: {
        place: params.place,
      },
    });
    return result;
  }

  async getAll() {
    const { ctx } = this;
    const result = await ctx.app.mysql.select('posts');
    return result;
  }

}

module.exports = MysqlService;
