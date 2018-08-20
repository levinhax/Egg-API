'use strict';

const Controller = require('egg').Controller;
const projectRule = require('../validate/projects');

class ProjectController extends Controller {

  // 查看所有的项目
  async index() {
    const { ctx } = this;
    const queryMsg = {
      page: ctx.query.page || 0,
      limit: ctx.query.limit || 10,
      projectTag: ctx.query.projectTag || '',
    };
    ctx.validate(projectRule.index, queryMsg);
    const result = await ctx.service.projects.index(queryMsg);
    ctx.body = result;
    ctx.status = 200;
  }
  // 打开创建项目新页面
  async new() {
    const { ctx } = this;
    ctx.status = 200;
  }
  // 获取指定的项目
  async show() {
    const { ctx } = this;
    const projectMsg = {
      _id: ctx.params.id,
    };
    const result = await ctx.service.projects.show(projectMsg);
    ctx.body = result;
    ctx.status = 200;
  }
  // 编辑指定的项目
  async edit() {
    const { ctx } = this;
    ctx.status = 200;
  }

  // 创建新项目
  async create() {
    const { ctx } = this;
    const projectMsg = ctx.request.body;
    ctx.validate(projectRule.create, projectMsg);
    const result = await ctx.service.projects.create(projectMsg);
    ctx.body = result;
    ctx.status = 201;
  }
  // 更新项目
  async update() {
    const { ctx } = this;
    const projectMsg = {
      _id: ctx.params.id,
      projectLink: ctx.request.body.projectLink,
      projectImg: ctx.request.body.projectImg,
    };
    ctx.validate(projectRule.update, projectMsg);
    // const _id = ctx.params.id;
    // const projectMsg = ctx.request.body;
    const result = await ctx.service.projects.update(projectMsg);
    ctx.body = result;
    ctx.status = 204;
  }
  // 删除项目
  async destroy() {
    const { ctx } = this;
    const projectMsg = {
      _id: ctx.params.id,
    };
    ctx.validate(projectRule.delete, projectMsg);
    const result = await ctx.service.projects.destroy(projectMsg);
    ctx.body = result;
  }
}

module.exports = ProjectController;
