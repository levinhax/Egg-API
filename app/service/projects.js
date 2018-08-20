'use strict';
const Service = require('egg').Service;

class ProjectService extends Service {

  async index(params) {
    const { ctx } = this;
    const queryLimit = Number(params.limit);
    const querySkip = (params.page - 1) * Number(params.limit);
    const result = await ctx.model.Projects.find({ projectTag: params.projectTag }).limit(queryLimit).skip(querySkip);
    return result;
  }

  async show(params) {
    const { ctx } = this;
    const result = await ctx.model.Projects.findOne(params);
    return result;
  }

  async create(projectMsg) {
    const { ctx } = this;
    const result = await ctx.model.Projects.create(projectMsg);
    return result;
  }

  async update(params) {
    const { ctx } = this;
    const result = await ctx.model.Projects.findByIdAndUpdate(params._id, params);
    return result;
  }

  async destroy(projectMsg) {
    const { ctx } = this;
    const result = await ctx.model.Projects.remove(projectMsg);
    return result;
  }

}

module.exports = ProjectService;
